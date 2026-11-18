# 合成带解说演示视频：帧时间戳 + marks 实际段边界 + stalls 导航冻结区间 →
# 转场卡帧压缩到 ≤2.5s（不足配音时长时回补），其余按真实帧间隔；
# 配音按压缩后段时长补静音拼接，与视频段边界逐段对齐；mux 输出 docs/演示视频.mp4 并抽帧核验。仅开发期使用。
import json
import re
import subprocess
from pathlib import Path

import imageio_ffmpeg

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "out"
FRAMES = OUT / "frames"
AUDIO = OUT / "audio"
DOCS = ROOT.parent.parent / "docs"
FF = imageio_ffmpeg.get_ffmpeg_exe()

SPEC = json.loads((ROOT / "narration.json").read_text(encoding="utf-8"))
DUR = json.loads((OUT / "durations.json").read_text(encoding="utf-8"))
frames = json.loads((OUT / "frames.json").read_text(encoding="utf-8"))
marks = json.loads((OUT / "marks.json").read_text(encoding="utf-8"))
stalls = json.loads((OUT / "stalls.json").read_text(encoding="utf-8"))
MARK = {m["id"]: m for m in marks}
t0 = frames[0]["t"]
raw_total = marks[-1]["end"] - t0
rel = [f["t"] - t0 for f in frames]
S = [(s["a"] - t0, s["b"] - t0) for s in stalls]
BUMPER_HOLD = 2.5


def run(args):
    p = subprocess.run([FF, "-y", *args], capture_output=True, text=True, encoding="utf-8", errors="replace")
    if p.returncode != 0:
        raise RuntimeError(p.stderr[-2000:])
    return p


def stall_of(r):
    for k, (a, b) in enumerate(S):
        if a + 0.2 <= r <= b:  # +0.2s 避开 navigate 提交前旧页面的末帧
            return k
    return None


# ---- 帧筛选：冻结区间只留首帧（转场卡）持 BUMPER_HOLD，其余丢弃 ----
entries = []  # [frame_idx, duration, stall_idx or None]
i = 0
while i < len(frames):
    k = stall_of(rel[i])
    if k is not None:
        a, b = S[k]
        entries.append([i, min(BUMPER_HOLD, max(b - rel[i], 0.3)), k])
        i += 1
        while i < len(frames) and rel[i] <= b:
            i += 1
    else:
        nxt = rel[i + 1] if i + 1 < len(frames) else raw_total
        entries.append([i, max(nxt - rel[i], 0.02), None])
        i += 1


def layout():
    """压缩时间轴：每帧起点 R、段边界 B、段时长 slot。"""
    R, cum = [], 0.0
    for _, d, _ in entries:
        R.append(cum)
        cum += d
    B = {}
    for seg in SPEC["segments"]:
        start = MARK[seg["id"]]["start"] - t0
        j = next((n for n, (idx, _, _) in enumerate(entries) if rel[idx] >= start - 1e-6), 0)
        B[seg["id"]] = R[j]
    ids = [s["id"] for s in SPEC["segments"]]
    slot = {sid: (B[ids[n + 1]] if n + 1 < len(ids) else cum) - B[sid] for n, sid in enumerate(ids)}
    return R, B, slot, cum


R, B, slot, total = layout()

# ---- 配音保底：段时长不足 配音+0.6s 时，回补该段转场卡持有时长 ----
for seg in SPEC["segments"]:
    sid = seg["id"]
    need = DUR[sid]["audio"] + 0.6
    deficit = need - slot[sid]
    if deficit <= 0:
        continue
    start, end = MARK[sid]["start"] - t0, MARK[sid]["end"] - t0
    for e in entries:
        if deficit <= 0:
            break
        idx, d, k = e
        if k is None or not (start <= rel[idx] <= end):
            continue
        room = (S[k][1] - rel[idx]) - d
        add = min(deficit, max(room, 0))
        e[1] += add
        deficit -= add
R, B, slot, total = layout()

# ---- 视频：concat 变时长，统一 25fps ----
lines = []
for n, (idx, d, _) in enumerate(entries):
    lines.append(f"file '{FRAMES / frames[idx]['file']}'")
    lines.append(f"duration {d:.4f}")
lines.append(f"file '{FRAMES / frames[entries[-1][0]]['file']}'")
(OUT / "vlist.txt").write_text("\n".join(lines), encoding="utf-8")
run(["-f", "concat", "-safe", "0", "-i", str(OUT / "vlist.txt"),
     "-vf", "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=25,format=yuv420p", "-c:v", "libx264", "-crf", "23",
     "-preset", "medium", "-r", "25", str(OUT / "video.mp4")])

# ---- 音频：每段配音补静音到压缩后段时长，再顺序拼接 ----
aparts = []
for seg in SPEC["segments"]:
    d = round(slot[seg["id"]], 3)
    part = AUDIO / f"{seg['id']}.m4a"
    run(["-i", str(AUDIO / f"{seg['id']}.mp3"),
         "-af", f"apad=whole_dur={d}", "-c:a", "aac", "-b:a", "128k", str(part)])
    aparts.append(f"file '{part}'")
(OUT / "alist.txt").write_text("\n".join(aparts), encoding="utf-8")
lead = int(B[SPEC["segments"][0]["id"]] * 1000)
run(["-f", "concat", "-safe", "0", "-i", str(OUT / "alist.txt"),
     "-af", f"adelay={lead}|{lead}", "-c:a", "aac", "-b:a", "128k", str(OUT / "audio.m4a")])

# ---- mux ----
final = DOCS / "演示视频.mp4"
run(["-i", str(OUT / "video.mp4"), "-i", str(OUT / "audio.m4a"),
     "-c:v", "copy", "-c:a", "copy", "-t", f"{total:.3f}", str(final)])

p = subprocess.run([FF, "-i", str(final), "-f", "null", "-"], capture_output=True, text=True, encoding="utf-8", errors="replace")
m = re.search(r"Duration:\s*([\d:.]+)", p.stderr)
print("final duration", m.group(1), "size", round(final.stat().st_size / 1e6, 2), "MB")
print("slots", {sid: round(slot[sid], 1) for sid in slot})

# ---- 抽帧核验：每段压缩边界的中点 ----
ids = [s["id"] for s in SPEC["segments"]]
for n, sid in enumerate(ids):
    end = B[ids[n + 1]] if n + 1 < len(ids) else total
    mid = (B[sid] + end) / 2
    run(["-ss", f"{mid:.2f}", "-i", str(final), "-frames:v", "1",
         str(OUT / f"check-{sid}.png")])
print("check frames written")