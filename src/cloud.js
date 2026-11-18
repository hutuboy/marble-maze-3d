// 云存档 / 排行榜服务（免注册）：靠后端签发的匿名 Cookie 识别身份。
// 与 ai.js 同构：只有创空间后端注入 __MARBLE_CLOUD_ENABLED__ 才发请求；
// file:// 与本地 HTTP 静态服务不注入，前端零请求，双击离线可玩不变。
// 纯逻辑（用户名派生 / 字段清洗 / 榜单排序）不依赖 DOM，可在 Node 测试里直接验证。

const CLOUD_BASE = '/api/cloud';
const TIMEOUT_MS = 6000;
const MAIN_IDS = ['1', '2', '3'];

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const num = (v, lo, hi, fallback = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? clamp(n, lo, hi) : fallback;
};

// FNV-1a：与 app.py 的 _fnv1a 逐位一致，同一 uid 两端派生同一个名字。
export function fnHash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

const ADJ = ['疾风', '静水', '赤焰', '苍林', '流星', '寒霜', '鸣雷', '逐浪',
  '孤星', '暖阳', '玄岩', '轻云', '暮色', '破晓', '碧影', '烈风'];
const NOUN = ['刺猬', '游隼', '狐狸', '灵熊', '海豚', '苍鹭', '雪豹', '锦鲤',
  '螳螂', '夜莺', '山猫', '水獭', '萤火', '白鲸', '青鸾', '摩羯'];

export function usernameFor(uid) {
  const h = fnHash(String(uid || ''));
  return ADJ[h % ADJ.length] + NOUN[(h >>> 8) % NOUN.length] + String(h % 100).padStart(2, '0');
}

// 上传前的本地清洗：与后端 _clean_save 同口径，只留主线三关、数值钳制。
export function cleanSave(raw = {}) {
  const input = raw && typeof raw === 'object' ? raw : {};
  const bestIn = input.best && typeof input.best === 'object' ? input.best : {};
  const best = {};
  for (const k of MAIN_IDS) {
    const v = bestIn[k];
    if (!v || typeof v !== 'object') continue;
    best[k] = {
      time: num(v.time, 0, 86400),
      score: num(v.score, 0, 1_000_000),
      stars: Math.floor(num(v.stars, 0, 3))
    };
  }
  return {
    best,
    clears: Math.floor(num(input.clears, 0, 1_000_000)),
    stars: Math.floor(num(input.stars, 0, 99)),
    playTime: num(input.playTime, 0, 100_000_000)
  };
}

// 榜单二次防御：即使后端返回异常数据，也不让界面渲染出 NaN / 负分。
export function cleanBoard(data) {
  if (!data || typeof data !== 'object') return { rows: [], me: null, total: 0, online: false };
  const rows = Array.isArray(data.rows) ? data.rows : [];
  const clean = (r) => ({
    uid: String(r && r.uid || ''),
    name: String(r && r.name || '').slice(0, 24),
    score: Math.floor(num(r && r.score, 0, 1e9)),
    stars: Math.floor(num(r && r.stars, 0, 99)),
    clears: Math.floor(num(r && r.clears, 0, 1e7)),
    rank: Math.floor(num(r && r.rank, 0, 100000)),
    me: !!(r && r.me)
  });
  return {
    rows: rows.filter((r) => r && typeof r === 'object' && r.uid).slice(0, 50).map(clean),
    me: data.me && typeof data.me === 'object' ? clean(data.me) : null,
    total: Math.floor(num(data.total, 0, 1e7)),
    online: data.online === true
  };
}

export class CloudService {
  constructor(opts = {}) {
    const injected = typeof globalThis !== 'undefined' ? globalThis : {};
    this.enabled = opts.enabled !== undefined ? opts.enabled : !!(injected.__MARBLE_CLOUD_ENABLED__);
    this.base = opts.base || injected.__MARBLE_CLOUD_BASE__ || CLOUD_BASE;
    this.fetchImpl = opts.fetch || (typeof globalThis.fetch === 'function'
      ? globalThis.fetch.bind(globalThis) : null);
    this.timeout = opts.timeout || TIMEOUT_MS;
    // 身份只在首次 me() / 首次请求时由后端 Cookie 建立；这里缓存名字供界面展示。
    this.uid = '';
    this.name = '';
    this.online = false;
    this.mode = 'local';
    // 身份请求去重：构造与开榜单可能几乎同时触发 me()，若并发发出，
    // 后端会在 Cookie 落地前签发两个不同 uid，后到的 Set-Cookie 覆盖前者，
    // 导致前端缓存 uid 与浏览器实际 Cookie 不一致。共享同一个 Promise 即可根治。
    this._mePromise = null;
  }

  async request(path, options = {}) {
    if (!this.enabled || !this.fetchImpl) return null;
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = ctrl ? setTimeout(() => ctrl.abort(), this.timeout) : null;
    try {
      // credentials: 'same-origin'：让浏览器带上后端签发的 HttpOnly Cookie。
      const res = await this.fetchImpl(`${this.base}/${path}`, {
        method: options.method || 'GET',
        headers: options.body ? { 'Content-Type': 'application/json' } : undefined,
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: 'same-origin',
        signal: ctrl ? ctrl.signal : undefined
      });
      if (!res || !res.ok) return null;
      const data = await res.json();
      if (!data || data.ok !== true) return null;
      this.mode = 'cloud';
      this.online = true;
      return data;
    } catch (_) {
      return null;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  // 建立 / 恢复匿名身份。后端通过 Set-Cookie 落 uid，无需注册。
  // 用 _mePromise 去重：首次调用真正发请求，并发调用共享同一结果。
  me() {
    if (this._mePromise) return this._mePromise;
    this._mePromise = this.request('me').then((data) => {
      if (data && data.uid) {
        this.uid = String(data.uid);
        this.name = String(data.name || usernameFor(this.uid));
      }
      return data;
    }).catch((e) => {
      this._mePromise = null; // 失败允许重试
      throw e;
    });
    return this._mePromise;
  }

  // 上传成绩快照；字段名与 records 对齐，后端会再次清洗。
  async save(snapshot) {
    const data = await this.request('save', {
      method: 'POST',
      body: { save: cleanSave(snapshot) }
    });
    if (data && data.uid) this.uid = String(data.uid);
    if (data && data.name) this.name = String(data.name);
    return data;
  }

  async leaderboard() {
    const data = await this.request('leaderboard');
    return cleanBoard(data);
  }
}
