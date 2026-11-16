const KEY = 'marble-maze-3d.records.v1';
const SCHEMA = 1;
const HINT_KEYS = ['tilt', 'checkpoint', 'boost', 'ice', 'goal'];
const DIFFICULTY_KEYS = ['standard', 'relaxed', 'challenge'];
// 标准档沿用纯数字 key 以兼容旧存档；辅助档用 id:mode 分键，
// 避免轻松档成绩污染标准档星级榜。
const BEST_KEY_RE = /^([0-9]+)(?::(relaxed|challenge))?$/;

function bestKey(id, mode) {
  return mode && mode !== 'standard' ? `${id}:${mode}` : String(id);
}

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
    if (!BEST_KEY_RE.test(k) || !v || typeof v !== 'object') continue;
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
    this.data = { v: SCHEMA, best: {}, unlocked: 1, hints: {}, difficulty: 'standard' };
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
          if (DIFFICULTY_KEYS.includes(parsed.difficulty)) this.data.difficulty = parsed.difficulty;
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

  best(id, mode = 'standard') {
    const b = this.data.best[bestKey(id, mode)];
    return b && Number.isFinite(b.time) ? b : null;
  }

  get unlocked() { return this.data.unlocked; }

  get difficulty() { return this.data.difficulty; }

  setDifficulty(mode) {
    if (!DIFFICULTY_KEYS.includes(mode) || this.data.difficulty === mode) return false;
    this.data.difficulty = mode;
    this.save();
    return true;
  }

  get totalStars() { return this.starsForMode('standard'); }

  starsForMode(mode) {
    let sum = 0;
    for (const [k, b] of Object.entries(this.data.best)) {
      const keyMode = k.includes(':') ? k.split(':')[1] : 'standard';
      if (keyMode === mode) sum += Number(b.stars) || 0;
    }
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
    const mode = DIFFICULTY_KEYS.includes(result.mode) ? result.mode : 'standard';
    const key = bestKey(id, mode);
    const prev = this.best(id, mode);
    const flags = {
      newTime: !prev || result.time < prev.time - 1e-6,
      newScore: !prev || result.score > prev.score,
      newStars: !prev || result.stars > prev.stars,
      previous: prev,
      mode
    };
    this.data.best[key] = {
      time: prev ? Math.min(prev.time, result.time) : result.time,
      score: prev ? Math.max(prev.score, result.score) : result.score,
      stars: prev ? Math.max(prev.stars, result.stars) : result.stars,
      mode
    };
    this.save();
    return flags;
  }
}
