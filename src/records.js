const KEY = 'marble-maze-3d.records.v1';
const SCHEMA = 1;
const HINT_KEYS = ['tilt', 'checkpoint', 'boost', 'ice', 'goal'];

// 一次性引导只认白名单里的 key，避免脏存档塞入任意字段。
function sanitizeHints(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out;
  for (const k of HINT_KEYS) if (raw[k] === true) out[k] = true;
  return out;
}

// 存档可能被手工改坏、被旧版本写入、或被同域其它页面污染。
// 这里只接受结构合法的记录：非法整条丢弃，越界数值钳制到合理区间。
function sanitizeBest(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out;
  for (const [k, v] of Object.entries(raw)) {
    if (!/^[0-9]+$/.test(k) || !v || typeof v !== 'object') continue;
    const time = Number(v.time);
    if (!Number.isFinite(time) || time < 0 || time > 86400) continue;
    const score = Number(v.score);
    const stars = Number(v.stars);
    out[k] = {
      time,
      score: Number.isFinite(score) ? Math.max(0, Math.min(1e9, score)) : 0,
      stars: Number.isFinite(stars) ? Math.max(0, Math.min(3, Math.floor(stars))) : 0
    };
  }
  return out;
}

// localStorage 在 file:// / 隐私模式 / 禁用 Cookie 时可能直接抛异常，
// 这里统一降级为进程内内存记录，保证游戏逻辑与界面不受影响。
export class Records {
  constructor() {
    this.persistent = true;
    this.data = { v: SCHEMA, best: {}, unlocked: 1, hints: {} };
    try {
      const store = globalThis.localStorage;
      const raw = store && store.getItem(KEY);
      if (raw) {
        let parsed = null;
        // 单独包住解析：坏 JSON 应该回退到空存档，而不是误判「存储不可用」。
        try { parsed = JSON.parse(raw); } catch (_) { parsed = null; }
        if (parsed && typeof parsed === 'object') {
          this.data.best = sanitizeBest(parsed.best);
          this.data.hints = sanitizeHints(parsed.hints);
          const u = Number(parsed.unlocked);
          if (Number.isFinite(u)) this.data.unlocked = Math.max(1, Math.min(99, Math.floor(u)));
        }
      }
    } catch (_) {
      this.persistent = false;
    }
  }

  save() {
    if (!this.persistent) return;
    try { globalThis.localStorage.setItem(KEY, JSON.stringify(this.data)); }
    catch (_) { this.persistent = false; }
  }

  best(id) {
    const b = this.data.best[id];
    return b && Number.isFinite(b.time) ? b : null;
  }

  get unlocked() { return this.data.unlocked; }

  get totalStars() {
    let sum = 0;
    for (const b of Object.values(this.data.best)) sum += Number(b.stars) || 0;
    return sum;
  }

  unlock(n) {
    if (n > this.data.unlocked) {
      this.data.unlocked = n;
      this.save();
    }
  }

  // 一次性引导：首次返回 true 并落盘，之后同 key 不再打扰玩家。
  markHint(key) {
    if (!HINT_KEYS.includes(key) || this.data.hints[key] === true) return false;
    this.data.hints[key] = true;
    this.save();
    return true;
  }

  hintSeen(key) { return this.data.hints[key] === true; }

  // 逐项取历史最优：最快用时、最高得分、最多星级，互不覆盖。
  submit(id, result) {
    const prev = this.best(id);
    const flags = {
      newTime: !prev || result.time < prev.time - 1e-6,
      newScore: !prev || result.score > prev.score,
      newStars: !prev || result.stars > prev.stars,
      previous: prev
    };
    this.data.best[id] = {
      time: prev ? Math.min(prev.time, result.time) : result.time,
      score: prev ? Math.max(prev.score, result.score) : result.score,
      stars: prev ? Math.max(prev.stars, result.stars) : result.stars
    };
    this.save();
    return flags;
  }
}
