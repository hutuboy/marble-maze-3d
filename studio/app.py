"""3D 弹珠迷宫 · AI 版 创空间后端。

职责：
1. 托管打包好的游戏静态文件（index.html / game.bundle.js / styles.css / favicon.svg）
2. 在 index.html 注入 AI / 云存档开关，前端据此启用远程能力（本地双击零请求）
3. 提供 AI 代理端点，token 只从 secret(MODELSCOPE_API_KEY) 读取，绝不进入前端
4. 提供免注册云存档 / 排行榜：匿名 Cookie 身份 + /mnt/workspace 持久化

参考了 hutuboy/sandeng-proxy 的成熟模式：模型链降级 + 配额闸门 + CORS + 静默回退。
"""
import json
import os
import re
import secrets
import sys
import threading
import time
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
API = os.environ.get("POLISH_API", "https://api-inference.modelscope.cn/v1/chat/completions").strip()
KEY = os.environ.get("MODELSCOPE_API_KEY", "").strip()
DEFAULT_CHAIN = "Qwen/Qwen3.8-Flash-Next,Qwen/Qwen3.5-27B,Qwen/Qwen3.5-122B-A10B"
CHAIN = [m.strip() for m in os.environ.get("AI_MODELS", DEFAULT_CHAIN).split(",") if m.strip()]
PER_MODEL_TIMEOUT = float(os.environ.get("PER_MODEL_TIMEOUT", "6.0"))
TOTAL_DEADLINE = float(os.environ.get("TOTAL_DEADLINE", "15.0"))
DAILY_LIMIT = int(os.environ.get("DAILY_LIMIT", "300"))
ALLOW = os.environ.get("ALLOW_ORIGINS", "*").strip()
PORT = int(os.environ.get("PORT", "7860"))

QUOTA_FILE = Path(os.environ.get("QUOTA_FILE", "/tmp/marble_ai_quota.json"))
_lock = threading.Lock()

# ---- 云存档 / 排行榜（免注册）----
# 默认落在创空间持久化目录 /mnt/workspace；本地跑测试可用 CLOUD_FILE 覆盖到临时路径。
CLOUD_FILE = Path(os.environ.get("CLOUD_FILE", "/mnt/workspace/marble-cloud/leaderboard.json"))
_cloud_lock = threading.Lock()
UID_RE = re.compile(r"^[A-Za-z0-9_-]{8,40}$")
COOKIE_NAME = "mm_uid"
USERNAME_ADJ = ["疾风", "静水", "赤焰", "苍林", "流星", "寒霜", "鸣雷", "逐浪",
                "孤星", "暖阳", "玄岩", "轻云", "暮色", "破晓", "碧影", "烈风"]
USERNAME_NOUN = ["刺猬", "游隼", "狐狸", "灵熊", "海豚", "苍鹭", "雪豹", "锦鲤",
                 "螳螂", "夜莺", "山猫", "水獭", "萤火", "白鲸", "青鸾", "摩羯"]


def _today():
    return time.strftime("%Y-%m-%d", time.gmtime())


def _quota():
    try:
        j = json.loads(QUOTA_FILE.read_text(encoding="utf-8"))
        if j.get("day") == _today() and isinstance(j.get("used"), int):
            return j
    except Exception:
        pass
    return {"day": _today(), "used": 0}


def _take():
    with _lock:
        q = _quota()
        if q["used"] >= DAILY_LIMIT:
            return False
        q["used"] += 1
        try:
            QUOTA_FILE.write_text(json.dumps(q), encoding="utf-8")
        except Exception:
            pass
        return True


def _quota_snapshot():
    q = _quota()
    return {"day": q["day"], "limit": DAILY_LIMIT, "used": q["used"],
            "remaining": max(0, DAILY_LIMIT - q["used"])}


# ---------- 云存档 / 排行榜 ----------

def _fnv1a(s: str) -> int:
    """稳定哈希：同一 uid 在任何机器上派生出同一个用户名，无需存储。"""
    h = 2166136261
    for ch in s:
        h ^= ord(ch)
        h = (h * 16777619) & 0xFFFFFFFF
    return h


def _username(uid: str) -> str:
    h = _fnv1a(uid)
    return USERNAME_ADJ[h % len(USERNAME_ADJ)] + USERNAME_NOUN[(h >> 8) % len(USERNAME_NOUN)] + str(h % 100).zfill(2)


def _cookie_uid(handler) -> str:
    """从 Cookie 读取匿名 uid；非法或缺失时返回空串，由调用方签发新 uid。"""
    raw = handler.headers.get("Cookie", "") or ""
    for part in raw.split(";"):
        k, sep, v = part.strip().partition("=")
        if sep and k == COOKIE_NAME:
            v = v.strip().strip('"')
            return v if UID_RE.match(v) else ""
    return ""


def _new_uid() -> str:
    return "u_" + secrets.token_hex(10)


def _set_uid_cookie(handler, uid: str):
    # HttpOnly：JS 读不到，降低篡改风险；SameSite=Lax + 一年有效期，仅本站发送。
    handler.send_header("Set-Cookie",
                        f"{COOKIE_NAME}={uid}; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly")


def _num(v, lo, hi, default=0):
    try:
        n = float(v)
    except (TypeError, ValueError):
        return default
    if n != n or n in (float("inf"), float("-inf")):
        return default
    return max(lo, min(hi, n))


def _clean_save(raw: dict) -> dict:
    """只接受白名单字段并钳制数值，杜绝脏数据撑爆存档或伪造高分。"""
    raw = raw if isinstance(raw, dict) else {}
    best_in = raw.get("best") if isinstance(raw.get("best"), dict) else {}
    best = {}
    for k, v in best_in.items():
        # 只接受主线三关的真实 id；8000(每日)/9000+(自定义/分享) 一律丢弃，
        # 避免一次性关卡 id 在榜单里堆垃圾，也挡住伪造的畸形 key。
        if str(k) not in ("1", "2", "3") or not isinstance(v, dict):
            continue
        best[str(k)] = {
            "time": _num(v.get("time"), 0, 86400),
            "score": _num(v.get("score"), 0, 1_000_000),
            "stars": int(_num(v.get("stars"), 0, 3))
        }
    return {
        "best": best,
        "clears": int(_num(raw.get("clears"), 0, 1_000_000)),
        "stars": int(_num(raw.get("stars"), 0, 99)),
        "playTime": round(_num(raw.get("playTime"), 0, 100_000_000), 1)
    }


def _read_cloud() -> dict:
    try:
        j = json.loads(CLOUD_FILE.read_text(encoding="utf-8"))
        if j.get("v") == 1 and isinstance(j.get("users"), dict):
            return j
    except Exception:
        pass
    return {"v": 1, "users": {}}


def _write_cloud(data: dict):
    """同目录写临时文件再原子替换，避免并发读到半截 JSON。"""
    CLOUD_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = CLOUD_FILE.with_suffix(".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    os.replace(str(tmp), str(CLOUD_FILE))


def _save_for(uid: str, raw: dict) -> dict:
    """写入一名玩家的存档。逐字段取历史最优，防止回退覆盖。"""
    incoming = _clean_save(raw)
    with _cloud_lock:
        data = _read_cloud()
        users = data["users"]
        prev = users.get(uid) or {}
        best = dict(prev.get("best") or {})
        for k, v in incoming["best"].items():
            old = best.get(k)
            if not old or v["score"] > old.get("score", 0):
                best[k] = v
        rec = {
            "name": _username(uid),
            "best": best,
            "clears": max(int(prev.get("clears", 0)), incoming["clears"]),
            "stars": max(int(prev.get("stars", 0)), incoming["stars"]),
            "playTime": max(float(prev.get("playTime", 0)), incoming["playTime"]),
            "updatedAt": int(time.time())
        }
        users[uid] = rec
        # 容量上限：超出后按最后更新时间淘汰最旧记录，防止存档无限增长。
        if len(users) > 5000:
            for old_uid in sorted(users, key=lambda u: users[u].get("updatedAt", 0))[:500]:
                users.pop(old_uid, None)
        _write_cloud(data)
    return rec


def _leaderboard(me_uid: str) -> dict:
    with _cloud_lock:
        users = _read_cloud()["users"]
    rows = []
    for uid, rec in users.items():
        best = rec.get("best") or {}
        score = sum(int(v.get("score", 0)) for v in best.values())
        clears = int(rec.get("clears", 0))
        stars = int(rec.get("stars", 0))
        rows.append({
            "uid": uid,
            "name": _username(uid),
            "score": score,
            "stars": stars,
            "clears": clears,
            "playTime": rec.get("playTime", 0),
            "me": uid == me_uid
        })
    rows.sort(key=lambda r: (-r["score"], -r["stars"], r["name"]))
    for i, r in enumerate(rows):
        r["rank"] = i + 1
    mine = next((r for r in rows if r["me"]), None)
    return {
        "ok": True,
        "rows": rows[:50],
        "me": mine,
        "total": len(rows),
        "online": True
    }


SYSTEMS = {
    "design": (
        "你是 3D 弹珠迷宫游戏的关卡配置生成器。只输出一个 JSON 对象，不要任何解释、不要 Markdown 围栏。"
        "字段与约束：name(2-12字中文关卡名)、cols(7-13整数)、rows(7-13整数)、"
        "holes(0-8)、hazards(0-5)、gems(1-9)、checkpoints(0-3)、boosts(0-4)、ice(0-5)、"
        "tiltMax(0.22-0.40)、gravity(20-36)、timeLimit(0或120-300)、"
        "tip(一句不超过60字的中文玩法提示)。根据玩家描述的难度与机制合理取值。"
    ),
    "coach": (
        "你是弹珠迷宫游戏教练。根据玩家表现数据，给出 2-3 条简短中文改进建议。"
        "只输出 JSON 字符串数组，例如 [\"建议一\",\"建议二\"]，不要解释、不要围栏。"
        "每条不超过40字，具体可执行（提到 Shift 精细档、检查点、提前减速、分支宝石等）。"
        "数据里 phase=fail 表示玩家刚刚失败、正在看失败弹窗，此时必须结合 zone（出局方位，"
        "如「右下角」）、hotZone/hotCount（碰撞最集中的方位与次数）、tiltLevel（0-1，"
        "整局平均倾角强度，越接近 1 越激进）说清「在哪、为什么、下一把怎么改」，"
        "第一条要点名出局方位，不要说「多加练习」这类空话；phase=clear 则按用时与碰撞做赛后复盘。"
        "若数据带 improvement（上局诊断后的改进事实：escapedZone 是否不再在原出局方位失手、"
        "hotImproved/prevHotCount/hotCount 热区碰撞是否下降、tiltImproved 倾角是否收敛），"
        "第一条必须先验证上次建议是否见效并引用具体数字（如「右下角碰撞从 5 降到 1」），"
        "见效就肯定、未见效就换一条更具体的策略，第二条再给面向下一步的建议。"
    ),
    "narrative": (
        "你是游戏关卡叙事文案。根据主题生成关卡名与提示。只输出 JSON 对象，不要解释、不要围栏。"
        "字段：name(2-10字中文)、subtitle(4-16字中文)、tip(一句不超过60字中文玩法提示)、"
        "praise(一句不超过30字中文通关赞语)。"
    ),
    "report": (
        "你是 3D 弹珠迷宫游戏的训练报告撰写者。数据是：累计通关次数、生涯游玩秒数、"
        "累计碰撞次数、累计星级、最近关卡与表现。写一段中文训练报告：先肯定表现，"
        "再给 2 条针对弹珠迷宫的具体建议（如控制倾角、利用检查点、收集宝石、"
        "走主路径提速），最后鼓励。术语必须是「弹珠/迷宫/倾角/碰撞/宝石/检查点」，"
        "绝不能出现「攻击/命中/连击/击杀/清图」等战斗用语。不超过 200 字，纯文本，不要 Markdown。"
    ),
}


def _messages(kind, payload):
    data = json.dumps(payload, ensure_ascii=False)
    return [
        {"role": "system", "content": SYSTEMS[kind]},
        {"role": "user", "content": data[:1500]},
    ]


def _call(model, kind, payload, timeout):
    body = {
        "model": model,
        "messages": _messages(kind, payload),
        "max_tokens": 380 if kind in ("design", "coach", "narrative") else 320,
        "temperature": 0.6,
    }
    if model.startswith("Qwen/"):
        body["chat_template_kwargs"] = {"enable_thinking": False}
    req = urllib.request.Request(
        API, data=json.dumps(body).encode("utf-8"), method="POST",
        headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            j = json.loads(r.read().decode("utf-8", "replace"))
        msg = (j.get("choices") or [{}])[0].get("message") or {}
        txt = (msg.get("content") or "").strip()
        # 去掉可能的围栏
        if txt.startswith("```"):
            txt = txt.split("```")[1]
            if txt.lower().startswith("json"):
                txt = txt[4:]
        return txt.strip() or None
    except Exception:
        return None


def generate(kind, payload):
    """返回 (text, model)；模型链全失败返回 (None, None)。"""
    if not KEY:
        return None, None
    t0 = time.monotonic()
    for m in CHAIN:
        left = TOTAL_DEADLINE - (time.monotonic() - t0)
        if left <= 0.2:
            break
        txt = _call(m, kind, payload, min(PER_MODEL_TIMEOUT, left))
        if txt:
            return txt, m
    return None, None


def inject_config(html: str) -> str:
    """在 head 结束前注入能力开关：AI 需 secret，云存档创空间恒开。

    本地静态服务（serve.mjs / file://）不会调用本函数，两个开关都缺省为 false，
    前端因此零远程请求，双击离线可玩的行为不变。
    """
    ai_flag = "true" if KEY else "false"
    tag = ("<script>window.__MARBLE_AI_ENABLED__=%s;window.__MARBLE_AI_BASE__='/api/ai';"
           "window.__MARBLE_CLOUD_ENABLED__=true;window.__MARBLE_CLOUD_BASE__='/api/cloud';</script>"
           % ai_flag).encode("utf-8")
    if b"</head>" in html:
        return html.replace(b"</head>", tag + b"</head>", 1)
    return tag + html

# 保留旧名以兼容任何外部调用。
inject_ai = inject_config


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", ALLOW if ALLOW else "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Max-Age", "86400")

    def _json(self, obj, code=200, extra_headers=None):
        b = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(b)))
        self._cors()
        for k, v in (extra_headers or []):
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(b)

    def _bytes(self, data, ctype, inject=False):
        if inject:
            data = inject_config(data)
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(data)

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path.startswith("/health"):
            return self._json({"ok": True, "key": bool(KEY), "chain": CHAIN,
                               "quota": _quota_snapshot(),
                               "cloud": {"enabled": True, "online": True}})
        if path == "/api/cloud/me":
            uid = _cookie_uid(self)
            if not uid:
                uid = _new_uid()
                return self._json({"ok": True, "uid": uid, "name": _username(uid), "new": True},
                                  extra_headers=[("Set-Cookie",
                                                  f"{COOKIE_NAME}={uid}; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly")])
            return self._json({"ok": True, "uid": uid, "name": _username(uid), "new": False})
        if path == "/api/cloud/leaderboard":
            uid = _cookie_uid(self)
            if not uid:
                uid = _new_uid()
                board = {"ok": True, "rows": [], "me": None, "total": 0, "online": True}
                return self._json(board,
                                  extra_headers=[("Set-Cookie",
                                                  f"{COOKIE_NAME}={uid}; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly")])
            return self._json(_leaderboard(uid))
        if path.startswith("/api/"):
            return self._json({"ok": False, "reason": "not_found"}, 404)
        if path in ("/", ""):
            path = "/index.html"
        target = ROOT / path.lstrip("/")
        # 防目录穿越
        try:
            target.resolve().relative_to(ROOT.resolve())
        except ValueError:
            return self._json({"ok": False, "reason": "forbidden"}, 403)
        if not target.is_file():
            return self._json({"ok": False, "reason": "not_found"}, 404)
        ctype = {".html": "text/html; charset=utf-8", ".js": "application/javascript; charset=utf-8",
                 ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml",
                 ".png": "image/png", ".ico": "image/x-icon"}.get(target.suffix, "application/octet-stream")
        self._bytes(target.read_bytes(), ctype, inject=(target.suffix == ".html"))

    def do_POST(self):
        path = self.path.split("?", 1)[0]

        if path == "/api/cloud/save":
            uid = _cookie_uid(self)
            new_uid = ""
            if not uid:
                uid = _new_uid()
                new_uid = uid
            try:
                n = int(self.headers.get("Content-Length", "0") or 0)
                body = json.loads(self.rfile.read(n).decode("utf-8", "replace")) if n else {}
            except Exception:
                return self._json({"ok": False, "reason": "bad_json"}, 400)
            rec = _save_for(uid, body.get("save") if isinstance(body, dict) else {})
            headers = []
            if new_uid:
                headers.append(("Set-Cookie",
                                f"{COOKIE_NAME}={new_uid}; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly"))
            return self._json({"ok": True, "saved": True, "name": rec["name"], "uid": uid},
                              extra_headers=headers)

        kind = path.replace("/api/ai/", "").strip("/")
        if not path.startswith("/api/ai/") or kind not in SYSTEMS:
            return self._json({"ok": False, "reason": "not_found"}, 404)
        if not KEY:
            return self._json({"ok": False, "reason": "no_key"}, 503)
        try:
            n = int(self.headers.get("Content-Length", "0") or 0)
            body = json.loads(self.rfile.read(n).decode("utf-8", "replace")) if n else {}
        except Exception:
            return self._json({"ok": False, "reason": "bad_json"}, 400)
        if not _take():
            # 额度耗尽：前端会静默降级本地引擎，不报错
            return self._json({"ok": False, "reason": "daily_limit", "quota": _quota_snapshot()})
        payload = body.get("telemetry") if kind == "coach" else (
            body.get("stats") if kind == "report" else body.get("prompt", body.get("theme", "")))
        txt, model = generate(kind, payload)
        if not txt:
            return self._json({"ok": False, "reason": "all_failed", "quota": _quota_snapshot()})
        return self._json({"ok": True, "text": txt, "model": model,
                           "quota": _quota_snapshot()})

    def log_message(self, *a):
        pass


class Server(ThreadingHTTPServer):
    daemon_threads = True

    def handle_error(self, request, client_address):
        # 浏览器切页、请求超时、前端 AbortController 到点都会让连接提前断开，
        # 这种写入失败属于常态，不必每次打印整段 traceback 刷屏。
        exc = sys.exc_info()[1]
        if isinstance(exc, (ConnectionResetError, BrokenPipeError, ConnectionAbortedError)):
            return
        super().handle_error(request, client_address)


def main():
    Server(("0.0.0.0", PORT), Handler).serve_forever()


if __name__ == "__main__":
    main()
