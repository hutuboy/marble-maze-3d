// AI 能力层：设计 / 教练 / 叙事 / 训练报告。
// 纯逻辑模块，不依赖 DOM，可在 Node 测试里直接 import。
// 线上通过相对路径 /api/ai/* 调魔搭创空间后端代理（token 只在服务端 secret）；
// file:// 或网络失败时自动降级为本地规则引擎，保证游戏始终可玩。
import { buildLevel } from './levels.js';
import { effectiveConfig } from './difficulty.js';

const AI_BASE = '/api/ai';
const TIMEOUT_MS = 8000;

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const num = (v, fallback) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

// 从模型输出里抽取第一个 JSON 对象，容忍 ```json 围栏与前后文字。
export function extractJSON(text) {
  if (typeof text !== 'string') return null;
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const src = fenced ? fenced[1] : text;
  const start = src.indexOf('{');
  const end = src.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try { return JSON.parse(src.slice(start, end + 1)); } catch (_) { return null; }
}

// 把模型/本地产出的关卡参数清洗成 buildLevel 可安全消费的配置。
export function sanitizeLevelInput(raw = {}) {
  const cols = Math.round(clamp(num(raw.cols, 9), 7, 13));
  const rows = Math.round(clamp(num(raw.rows, 9), 7, 13));
  const holes = Math.round(clamp(num(raw.holes, 2), 0, 8));
  const hazards = Math.round(clamp(num(raw.hazards, 1), 0, 5));
  const gems = Math.round(clamp(num(raw.gems, 4), 1, 9));
  const checkpoints = Math.round(clamp(num(raw.checkpoints, 2), 0, 3));
  const boosts = Math.round(clamp(num(raw.boosts, 1), 0, 4));
  const ice = Math.round(clamp(num(raw.ice, 1), 0, 5));
  const size = cols * rows;
  // 陷阱总量不能超过可放置格子的合理比例，否则自动通关会变得脆弱。
  const dangerCap = Math.floor(size * 0.16);
  const cfg = {
    id: 9000 + Math.floor(Math.random() * 999),
    name: String(raw.name || 'AI 迷宫').slice(0, 16),
    subtitle: String(raw.subtitle || '智能生成关卡').slice(0, 24),
    cols, rows,
    seed: Math.floor(clamp(num(raw.seed, (Math.random() * 2 ** 31) | 0), 1, 2 ** 31 - 1)),
    loop: clamp(num(raw.loop, 0.12), 0.04, 0.30),
    holes: Math.min(holes, dangerCap),
    hazards: Math.min(hazards, Math.max(0, dangerCap - Math.min(holes, dangerCap))),
    gems: Math.min(gems, Math.max(1, size - 4)),
    checkpoints: Math.min(checkpoints, 3),
    boosts, ice,
    tiltMax: clamp(num(raw.tiltMax, 0.30), 0.22, 0.40),
    gravity: clamp(num(raw.gravity, 29), 20, 36),
    timeLimit: Math.round(clamp(num(raw.timeLimit, 150), 0, 300)),
    par: Math.round(clamp(num(raw.par, size * 4), 20, 140)),
    parHits: Math.round(clamp(num(raw.parHits, 14), 4, 40)),
    tip: String(raw.tip || 'AI 为你生成的迷宫，注意观察陷阱与加速带。').slice(0, 120),
    aiGenerated: true
  };
  return cfg;
}

// 校验配置：必须可解，且安全路径长度合理（避免 AI 生成死图）。
export function validateLevelInput(cfg) {
  if (!cfg || !cfg.aiGenerated) return { ok: false, reason: '配置来源不合法' };
  let level;
  try { level = buildLevel(cfg); } catch (e) { return { ok: false, reason: '关卡构建失败' }; }
  if (!level.solvable || level.safePath.length < 3) {
    return { ok: false, reason: '起点到终点不连通' };
  }
  return { ok: true, level };
}

// ---------- 本地规则引擎（无网络 / file:// 降级） ----------

const KW = {
  easy: ['简单', '入门', '新手', '轻松', '短', '小'],
  hard: ['难', '困难', '挑战', '地狱', '大', '复杂'],
  ice: ['冰', '滑', '打滑'],
  boost: ['加速', '快', '速度', '冲'],
  hazard: ['熔岩', '岩浆', '火', '陷阱', '危险'],
  hole: ['洞', '空洞', '掉落', '坑'],
  gem: ['宝石', '收集', '星星'],
  checkpoint: ['检查点', '复活', '存档']
};

export function localDesign(text = '') {
  const s = String(text);
  const has = (arr) => arr.some((k) => s.includes(k));
  const hard = has(KW.hard) && !has(KW.easy);
  const dim = hard ? 13 : (has(KW.easy) ? 7 : 10);
  const raw = {
    name: (s.match(/名为[「"']?([^」"'\s，。]{2,12})/) || [])[1]
      || (hard ? '深渊试炼' : '智能训练场'),
    subtitle: hard ? 'AI 高难挑战' : 'AI 定制迷宫',
    cols: dim, rows: dim,
    holes: has(KW.hole) ? (hard ? 6 : 3) : (hard ? 4 : 1),
    hazards: has(KW.hazard) ? (hard ? 4 : 2) : 0,
    gems: has(KW.gem) ? 8 : (hard ? 6 : 4),
    checkpoints: has(KW.checkpoint) || hard ? 3 : 2,
    boosts: has(KW.boost) ? 4 : (hard ? 2 : 1),
    ice: has(KW.ice) ? 5 : (hard ? 2 : 1),
    timeLimit: hard ? 210 : 180,
    tiltMax: hard ? 0.36 : 0.30,
    gravity: hard ? 33 : 29,
    tip: hard
      ? 'AI 判定你想要挑战：陷阱密集，善用检查点与加速带，Shift 精细档控速。'
      : 'AI 按你的描述生成的迷宫，先看清金色终点方向再动手。'
  };
  return sanitizeLevelInput(raw);
}

export function localCoach(t = {}) {
  const out = [];
  const hits = num(t.hits, 0);
  const parHits = num(t.parHits, 14);
  const gems = num(t.gems, 0);
  const gemsTotal = num(t.gemsTotal, 1);
  const cps = num(t.checkpoints, 0);
  const elapsed = num(t.elapsed, 0);
  const par = num(t.par, 60);
  if (hits > parHits) out.push('碰撞偏多：按住 Shift 用精细倾角，靠近墙体时提前回正。');
  if (elapsed > par * 1.4) out.push('用时偏长：先沿主路径推进，宝石和加速带放到第二趟再拿。');
  if (gems < gemsTotal * 0.5) out.push('宝石收集较少：它们多在分支路线上，值得绕路。');
  if (cps === 0) out.push('还没激活检查点：路过青色环时碰到它，失败就能就近复活。');
  if (!out.length) out.push('表现稳定：保持当前节奏，试试更短用时冲 3 星。');
  return out.slice(0, 3);
}

export function localNarrative(theme = '') {
  const s = String(theme);
  if (/冰|雪|寒/.test(s)) return { name: '霜脉回廊', subtitle: '低温滑行区', tip: '冰面几乎没有摩擦，收小倾角、提前减速。', praise: '你在霜脉上走得很稳。' };
  if (/火|熔岩|岩|焰/.test(s)) return { name: '熔核之心', subtitle: '高温禁区', tip: '红色熔岩触碰即失败，绕开它再加速。', praise: '熔核没能拦住你。' };
  if (/海|水|渊|深/.test(s)) return { name: '深蓝沉域', subtitle: '无光水域', tip: '黑色空洞会让你坠落，贴着墙走更保险。', praise: '深域也被你走通了。' };
  return { name: '智能试炼场', subtitle: 'AI 定制关卡', tip: '看清金色终点，善用检查点与加速带。', praise: '漂亮，AI 生成的路线被你拿下了。' };
}

export function localReport(t = {}) {
  const clears = Math.round(num(t.clears, 0));
  const playTime = num(t.playTime, 0);
  const totalHits = Math.round(num(t.totalHits, 0));
  const stars = Math.round(num(t.stars, 0));
  const level = t.level || {};
  const lines = [
    '【AI 训练报告 · 3D 弹珠迷宫】',
    `累计通关 ${clears} 次 · 生涯游玩 ${Math.floor(playTime / 60)} 分 ${Math.floor(playTime % 60)} 秒`,
    `累计碰撞 ${totalHits} 次 · 当前档星级 ${stars} / 9`,
    `最近关卡：${level.name || '—'} · 用时 ${Math.floor(num(level.elapsed, 0))}s · 碰撞 ${Math.round(num(level.hits, 0))} 次`,
    '',
    '建议：' + localCoach(t).join(' '),
    '本报告由本地引擎生成（未连接魔搭 AI 服务），数据仅存于本机。'
  ];
  return lines.join('\n');
}

// ---------- AI 服务 ----------

export class AIService {
  constructor(opts = {}) {
    // 只有创空间后端注入 __MARBLE_AI_ENABLED__ 才启用远程调用。
    // 本地 HTTP 静态服务与 file:// 双击保持纯本地引擎，避免 404 / CORS 噪音。
    const injected = typeof globalThis !== 'undefined' ? globalThis : {};
    this.enabled = opts.enabled !== undefined
      ? opts.enabled
      : !!(injected.__MARBLE_AI_ENABLED__);
    this.base = opts.base || injected.__MARBLE_AI_BASE__ || AI_BASE;
    this.fetchImpl = opts.fetch || (typeof globalThis.fetch === 'function'
      ? globalThis.fetch.bind(globalThis) : null);
    this.timeout = opts.timeout || TIMEOUT_MS;
    this.mode = 'local';
  }

  async call(path, payload) {
    if (!this.enabled || !this.fetchImpl) return null;
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = ctrl ? setTimeout(() => ctrl.abort(), this.timeout) : null;
    try {
      const res = await this.fetchImpl(`${this.base}/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload || {}),
        signal: ctrl ? ctrl.signal : undefined
      });
      if (!res || !res.ok) return null;
      const data = await res.json();
      if (!data || data.ok !== true) return null;
      this.mode = 'ai';
      return data;
    } catch (_) {
      return null;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  async design(text) {
    const data = await this.call('design', { prompt: String(text || '').slice(0, 300) });
    let cfg = data ? sanitizeLevelInput(extractJSON(data.text) || data.config || {}) : null;
    if (!cfg || !validateLevelInput(cfg).ok) {
      this.mode = 'local';
      cfg = localDesign(text);
    }
    const check = validateLevelInput(cfg);
    return { cfg, level: check.level, mode: this.mode, source: data ? 'ai' : 'local' };
  }

  async coach(telemetry) {
    const data = await this.call('coach', { telemetry });
    let tips = null;
    if (data) {
      const j = extractJSON(data.text);
      if (Array.isArray(j)) tips = j.map((x) => String(x).slice(0, 80));
      else if (Array.isArray(data.tips)) tips = data.tips.map((x) => String(x).slice(0, 80));
      else if (typeof data.text === 'string') tips = data.text.split('\n').filter(Boolean).slice(0, 3);
    }
    if (!tips || !tips.length) { this.mode = 'local'; tips = localCoach(telemetry); }
    return { tips, mode: this.mode };
  }

  async narrative(theme) {
    const data = await this.call('narrative', { theme: String(theme || '').slice(0, 120) });
    let story = null;
    if (data) {
      const j = extractJSON(data.text);
      if (j && j.name) story = {
        name: String(j.name).slice(0, 16),
        subtitle: String(j.subtitle || '').slice(0, 24),
        tip: String(j.tip || '').slice(0, 120),
        praise: String(j.praise || '').slice(0, 80)
      };
    }
    if (!story) { this.mode = 'local'; story = localNarrative(theme); }
    return { story, mode: this.mode };
  }

  async report(stats) {
    const data = await this.call('report', { stats });
    let text = data && typeof data.text === 'string' && data.text.length > 20 ? data.text : null;
    if (!text) { this.mode = 'local'; text = localReport(stats); }
    return { text, mode: this.mode };
  }
}

export { effectiveConfig };
