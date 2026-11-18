import { LEVELS, buildLevel } from './levels.js';
import { Marble } from './physics.js';
import { Records } from './records.js';
import { DIFFICULTIES, effectiveConfig } from './difficulty.js';
import { AIService, localDesign, localCoach, localNarrative, localReport, sanitizeLevelInput, validateLevelInput } from './ai.js';
import { encodeShare, decodeShare, normalizeCode } from './share.js';
import { Autopilot } from './autopilot.js';
import { CloudService, usernameFor } from './cloud.js';

export const STATE = {
  MENU: 'menu', PLAYING: 'playing', PAUSED: 'paused', FAILING: 'failing',
  FAILED: 'failed', LEVELCLEAR: 'levelclear', GAMECLEAR: 'gameclear', GAMEOVER: 'gameover'
};

const fmtSeconds = (s) => {
  const t = Math.max(0, Math.floor(s));
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
};

// 每日挑战：以日期为种子生成当天唯一迷宫，全球同图；
// 手感固定为标准档，不随玩家难度选择变化，成绩按日期分键记录。
export function dailyConfig(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const key = `${y}-${m}-${d}`;
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const cfg = sanitizeLevelInput({
    name: `每日挑战 · ${m}/${d}`,
    subtitle: '每天一座新迷宫',
    cols: 10, rows: 10,
    seed: (h >>> 0) % 2147483646 + 1,
    loop: 0.14,
    holes: 4, hazards: 2, gems: 6,
    checkpoints: 2, boosts: 2, ice: 2,
    tiltMax: 0.31, gravity: 29, timeLimit: 150,
    par: 60, parHits: 14,
    tip: '每日挑战：今天所有人都面对同一座迷宫，冲一个更快用时，把成绩卡分享给朋友。'
  });
  cfg.id = 8000;
  cfg.daily = key;
  return cfg;
}

export class Game {
  constructor(view, ui, sfx) {
    this.view = view;
    this.ui = ui;
    this.sfx = sfx;
    this.records = new Records();
    this.difficulty = this.records.difficulty;
    // Node 纯逻辑测试没有 DOM / fetch，用空实现避免发起网络请求。
    this.ai = (typeof document !== 'undefined')
      ? new AIService()
      : {
          design: async (t) => {
            const cfg = localDesign(t);
            return { cfg, level: null, mode: 'local', source: 'local' };
          },
          coach: async (s) => ({ tips: localCoach(s), mode: 'local' }),
          narrative: async (t) => ({ story: localNarrative(t), mode: 'local' }),
          report: async (s) => ({ text: localReport(s), mode: 'local' }),
          mode: 'local'
        };
    // 云存档：浏览器用 CloudService（开关由后端注入），Node 测试用离线桩。
    this.cloud = (typeof document !== 'undefined')
      ? new CloudService()
      : {
          enabled: false, online: false, uid: '', name: '', mode: 'local',
          me: async () => null, save: async () => null,
          leaderboard: async () => ({ rows: [], me: null, total: 0, online: false })
        };
    this.cloudBoard = null;    // 最近一次拉取的榜单缓存
    this.aiLevel = null;       // 当前 AI 生成关卡的 cfg（非 null 时走定制关卡）
    this.aiStory = null;       // 当前关卡叙事
    this.aiCoach = [];         // 最近一次教练建议
    this.shareCode = '';       // 当前定制关卡的分享码（主线关卡为空）
    // 赛中教练：失败瞬间的即时诊断，本关最多 2 次、两次间隔 ≥ 8 秒。
    this.liveCoach = { used: 0, lastAt: 0 };
    this.coachFollowUp = null; // 上次赛中诊断的遥测快照，下一局用来验证建议是否见效
    this.demo = false;         // AI 演示模式：autopilot 代打，不计成绩与生涯统计
    this.autopilot = null;
    this.hitZones = [];        // 最近碰撞点所属方位，用于判断「总在哪刮墙」
    this.tiltSum = 0;          // 倾角强度累计（0..1），均值反映操作激进度
    this.tiltSamples = 0;
    this.now = () => Date.now();  // 可注入，便于测试节流逻辑
    this.state = STATE.MENU;
    this.levelIndex = 0;
    this.score = 0;
    this.lives = 3;
    this.totalTime = 0;
    this.totalHits = 0;
    this.elapsed = 0;
    this.hits = 0;
    this.gemsGot = 0;
    this.fallProgress = 0;
    this.lastLevelScore = 0;
    this.lastBreakdown = null;
    this.lastStars = 0;
    this.lastRecord = null;
    this.wasOnIce = false;
    this.warnAt = -1;
    this.playFlushAccum = 0;
    this.tiltHintDone = false;
    this.pendingReason = '';
    this.axis = { x: 0, z: 0 };
    this.loadLevel(0);
    this.ui.showOverlay('menu', this.menuData());
    this.ui.setStatus('准备开始', 'normal');
    this.ensureCloudIdentity();
  }

  get cfg() {
    return this.cfgOverride || effectiveConfig(LEVELS[this.levelIndex], this.difficulty);
  }

  get assistMode() { return !!(DIFFICULTIES[this.difficulty] || DIFFICULTIES.standard).assist; }

  setDifficulty(mode) {
    if (!DIFFICULTIES[mode] || this.state !== STATE.MENU) return false;
    if (!this.records.setDifficulty(mode)) return false;
    this.difficulty = mode;
    this.loadLevel(0);
    this.ui.showOverlay('menu', this.menuData());
    this.ui.setStatus('准备开始', 'normal');
    this.sfx.click();
    return true;
  }

  // ---- 云存档 / 排行榜（免注册，靠匿名 Cookie）----

  // 菜单用：本环境是否提供云能力、当前身份名。本地双击恒为不可用。
  cloudStatus() {
    return {
      enabled: !!this.cloud.enabled,
      online: !!this.cloud.online,
      name: this.cloud.name || (this.cloud.uid ? usernameFor(this.cloud.uid) : '')
    };
  }

  // 静默建立匿名身份（后端 Set-Cookie），拿到名字后只更新菜单入口文字。
  // 构造与返回菜单时各调用一次；幂等：已有 uid 直接跳过。
  ensureCloudIdentity() {
    if (!this.cloud.enabled || this.cloud.uid || typeof this.cloud.me !== 'function') return;
    this.cloud.me().then(() => {
      if (this.state === STATE.MENU && this.ui.overlayType === 'menu') {
        this.ui.setCloudStatus(this.cloudStatus());
      }
    }).catch(() => {});
  }

  // 建立一个匿名身份并拉取榜单。进入菜单 / 首次点排行榜时调用，失败静默。
  async refreshCloud() {
    if (!this.cloud.enabled) return false;
    if (!this.cloud.uid && typeof this.cloud.me === 'function') await this.cloud.me();
    if (typeof this.cloud.leaderboard === 'function') {
      this.cloudBoard = await this.cloud.leaderboard();
    }
    return !!this.cloud.uid;
  }

  // 打开排行榜弹窗：先确保有身份与榜单，再渲染；异步返回后可二次刷新。
  async showLeaderboard() {
    await this.refreshCloud();
    this.ui.showOverlay('leaderboard', this.leaderboardData());
    return this.cloudBoard;
  }

  leaderboardData() {
    const board = this.cloudBoard || { rows: [], me: null, total: 0, online: false };
    return { ...board, status: this.cloudStatus() };
  }

  // 通关后把主线成绩上传云端。演示 / 自定义 / 每日挑战不写云榜，
  // 与「自定义关卡不写主线成绩」的隔离口径一致；失败完全静默。
  syncCloud() {
    if (!this.cloud.enabled || this.cfgOverride || this.demo || this.cfg.daily) return;
    const best = {};
    for (const c of LEVELS) {
      const b = this.records.best(c.id, 'standard');
      if (b) best[String(c.id)] = { time: b.time, score: b.score, stars: b.stars };
    }
    const snapshot = {
      best,
      clears: this.records.clearCount,
      stars: this.records.totalStars,
      playTime: this.records.playTime
    };
    // 先确保身份落地再 save：否则首次通关时 save 可能抢在 me() 的 Set-Cookie
    // 之前发出，导致后端签发第二个 uid。me() 内部已去重，这里直接复用。
    (async () => {
      try {
        if (!this.cloud.uid && typeof this.cloud.me === 'function') await this.cloud.me();
        const r = await this.cloud.save(snapshot);
        if (r && r.name) this.cloud.name = r.name;
      } catch (_) { /* 云失败静默，不影响结算 */ }
    })();
  }

  menuData() {
    const d = DIFFICULTIES[this.difficulty] || DIFFICULTIES.standard;
    return {
      levels: LEVELS.map((c, i) => ({
        index: i,
        name: c.name,
        subtitle: c.subtitle,
        unlocked: i < this.records.unlocked,
        best: this.records.best(c.id, this.difficulty)
      })),
      totalStars: this.records.starsForMode(this.difficulty),
      maxStars: LEVELS.length * 3,
      difficulty: this.difficulty,
      difficultyLabel: d.label,
      assist: d.assist,
      persistent: this.records.persistent,
      clearCount: this.records.clearCount,
      playTime: this.records.playTime,
      daily: (() => {
        const dc = dailyConfig();
        return { date: dc.daily, name: dc.name, best: this.records.dailyBest(dc.daily) };
      })(),
      cloud: this.cloudStatus()
    };
  }

  // 全通关称号：按当前难度档的累计星级评定，辅助档在称号后标注以免混淆。
  clearTitle(stars) {
    const tiers = [
      [9, '迷宫大师'], [7, '弹珠专家'], [5, '熟练探险家'], [1, '初出茅庐']
    ];
    const base = (tiers.find(([min]) => stars >= min) || [0, '初出茅庐'])[1];
    return this.assistMode ? `${base} · 轻松档` : base;
  }

  // 成绩卡纯文本：可复制分享，file:// 下也能手选复制。
  scoreCardText() {
    const stars = this.records.starsForMode(this.difficulty);
    const d = DIFFICULTIES[this.difficulty] || DIFFICULTIES.standard;
    const rows = LEVELS.map((c, i) => {
      const b = this.records.best(c.id, this.difficulty);
      const starStr = b ? '★'.repeat(b.stars) + '☆'.repeat(3 - b.stars) : '☆☆☆';
      const timeStr = b ? fmtSeconds(b.time) : '--:--';
      return `第${i + 1}关 ${c.name}  ${starStr}  ${timeStr}`;
    });
    return [
      '3D 弹珠迷宫 · 全通关',
      `难度：${d.label}${this.assistMode ? '（辅助档）' : ''}　称号：${this.clearTitle(stars)}`,
      ...rows,
      `累计 ${stars} / ${LEVELS.length * 3} ★　总分 ${this.score}　总用时 ${fmtSeconds(this.totalTime)}　总碰撞 ${this.totalHits}`,
      (() => {
        const db = this.records.dailyBest(dailyConfig().daily);
        return db ? `每日挑战 ${dailyConfig().daily}　最佳 ${fmtSeconds(db.time)}　${db.score} 分` : '';
      })()
    ].filter(Boolean).join('\n');
  }

  starsFor(cfg, elapsed, hits) {
    if (elapsed <= cfg.par && hits <= cfg.parHits) return 3;
    if (elapsed <= cfg.par * 1.7 && hits <= cfg.parHits * 2) return 2;
    return 1;
  }

  // 一次性情境引导：首次触发时弹详细说明并落盘，之后同类机制不再打扰。
  hintOnce(key, text, tone = 'info') {
    if (!this.records.markHint(key)) return false;
    this.ui.toast(text, tone);
    return true;
  }

  // 累计时长节流落盘：游玩中每帧只改内存，语义节点与每 5 秒统一写一次。
  flushStats() {
    this.playFlushAccum = 0;
    this.records.flush();
  }

  activeCheckpoint() {
    let best = null;
    for (const cp of this.level.checkpoints) {
      if (cp.active && (!best || cp.order > best.order)) best = cp;
    }
    return best;
  }

  // ---------- AI 能力 ----------
  showAILab() {
    this.ui.showOverlay('ailab', { mode: this.ai.mode });
  }

  // AI 设计师：把自然语言需求变成经过可解性校验的定制关卡并立即开玩。
  async designLevel(prompt) {
    const r = await this.ai.design(prompt);
    if (!r || !r.cfg || !r.level) return { ok: false, reason: '生成失败，请换个描述重试' };
    this.aiLevel = r.cfg;
    this.aiStory = null;
    this.aiCoach = [];
    this.shareCode = encodeShare(r.cfg);
    this.score = 0;
    this.lives = 3;
    this.totalTime = 0;
    this.totalHits = 0;
    this.loadConfigured(r.cfg, r.level);
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setStatus('AI 定制关卡', 'good');
    this.ui.toast(`${r.cfg.name} · ${r.mode === 'ai' ? 'AI 生成' : '本地生成'}`, 'good');
    this.sfx.click();
    return { ok: true, cfg: r.cfg, mode: r.mode };
  }

  // 用外部（AI）配置与已构建的 level 载入，复用普通关卡的全部初始化流程。
  loadConfigured(cfg, level) {
    this.levelIndex = 0;
    this.cfgOverride = cfg;
    this.level = level;
    this.liveCoach = { used: 0, lastAt: 0 };
    this.coachFollowUp = null;
    this.demo = false;
    this.autopilot = null;
    this.hitZones = [];
    this.tiltSum = 0;
    this.tiltSamples = 0;
    for (const gem of this.level.gems) gem.taken = false;
    this.marble = new Marble(this.level);
    this.elapsed = 0;
    this.hits = 0;
    this.gemsGot = 0;
    this.fallProgress = 0;
    this.warnAt = -1;
    this.wasOnIce = false;
    this.playFlushAccum = 0;
    this.axis = { x: 0, z: 0 };
    this.view.buildLevel(this.level);
    this.view.setGemsVisible(this.level);
    this.view.setCheckpointsActive(this.level);
    this.ui.setTip(cfg.tip || level.cfg.tip || 'AI 定制迷宫');
    this.ui.setPauseLabel(false);
    this.ui.setDemoVisible(!!cfg.aiGenerated);
    this.ui.clearTrail();
    this.ui.flashLevel();
    this.updateHUD();
  }

  // AI 叙事：给定制关卡起名字、写提示与通关赞语。
  async narrate(theme) {
    const r = await this.ai.narrative(theme);
    if (!r || !r.story) return null;
    this.aiStory = r.story;
    if (this.state === STATE.MENU) this.ui.toast(`AI 主题：${r.story.name}`, 'info');
    return { story: r.story, mode: r.mode };
  }

  // AI 教练：把本关表现交给模型，给出针对性建议并写入结算弹窗占位。
  async askCoach() {
    const r = await this.ai.coach(this.buildTelemetry('clear'));
    this.aiCoach = r && r.tips ? r.tips : [];
    if (typeof this.ui.setAICoach === 'function') {
      this.ui.setAICoach(this.aiCoach, r ? r.mode : 'local');
    }
    return { tips: this.aiCoach, mode: r ? r.mode : 'local' };
  }

  // 把第 x/z 坐标折算成九宫格方位词，供教练描述「在哪出的问题」。
  zoneOf(x, z) {
    const lv = this.level;
    const nx = (x / lv.width) + 0.5;
    const nz = (z / lv.depth) + 0.5;
    const col = nx < 1 / 3 ? '左' : (nx < 2 / 3 ? '中' : '右');
    const row = nz < 1 / 3 ? '上' : (nz < 2 / 3 ? '中' : '下');
    if (col === '中' && row === '中') return '正中央';
    if (col === '中') return `${row}方`;
    if (row === '中') return `${col}侧`;
    return `${col}${row}角`;
  }

  // 碰撞最集中的方位：用于识别「总在同一个角落刮墙」。
  hotZone() {
    const map = new Map();
    for (const z of this.hitZones) map.set(z, (map.get(z) || 0) + 1);
    let best = { zone: '', count: 0 };
    for (const [zone, count] of map) if (count > best.count) best = { zone, count };
    return best;
  }

  noteHit() {
    if (!this.marble) return;
    this.hitZones.push(this.zoneOf(this.marble.x, this.marble.z));
    if (this.hitZones.length > 24) this.hitZones.shift();
  }

  // 教练遥测：赛后复盘与赛中诊断共用一套字段，phase 区分两种语境。
  // followUp 携带上次诊断的快照，让教练能验证「上次的建议这次见效没有」，
  // 只在下一局遥测里出现一次，避免反复引用陈旧数据。
  buildTelemetry(phase = 'clear', reason = '') {
    const hot = this.hotZone();
    const t = {
      elapsed: this.elapsed, hits: this.hits, gems: this.gemsGot,
      gemsTotal: this.level.gems.length,
      checkpoints: this.level.checkpoints.filter((c) => c.active).length,
      par: this.cfg.par, parHits: this.cfg.parHits,
      timeLimit: this.cfg.timeLimit, level: this.cfg.name,
      phase, reason,
      zone: phase === 'fail' && this.marble ? this.zoneOf(this.marble.x, this.marble.z) : '',
      hotZone: hot.zone, hotCount: hot.count,
      tiltLevel: this.tiltSamples ? this.tiltSum / this.tiltSamples : 0
    };
    if (this.coachFollowUp) {
      t.followUp = this.coachFollowUp;
      t.improvement = this.improvementOf(this.coachFollowUp, t);
      this.coachFollowUp = null;
    }
    return t;
  }

  // 对比上次诊断与本次表现，产出可量化的改进事实，供教练「先验证再建议」。
  improvementOf(prev, cur) {
    if (!prev) return null;
    const imp = {};
    if (prev.zone) {
      imp.escapedZone = cur.phase !== 'fail' || cur.zone !== prev.zone;
      imp.prevZone = prev.zone;
    }
    if (prev.hotZone) {
      const nowCount = cur.hotZone === prev.hotZone ? cur.hotCount : 0;
      imp.prevHotZone = prev.hotZone;
      imp.prevHotCount = prev.hotCount;
      imp.hotCount = nowCount;
      imp.hotImproved = nowCount < prev.hotCount;
    }
    if (prev.tiltLevel > 0.6 && cur.tiltLevel < prev.tiltLevel - 0.1) {
      imp.tiltImproved = true;
    }
    return imp;
  }

  canLiveCoach() {
    if (this.liveCoach.used >= 2) return false;
    if (this.liveCoach.used > 0 && this.now() - this.liveCoach.lastAt < 8000) return false;
    return true;
  }

  // 赛中教练：失败瞬间给一次即时诊断，写进失败弹窗。次数与频率都受限，
  // 避免每掉一次球就多打一次模型；降级时本地规则引擎给出同样具体的建议。
  async askLiveCoach(reason) {
    if (!this.canLiveCoach()) return null;
    this.liveCoach.used += 1;
    this.liveCoach.lastAt = this.now();
    const tele = this.buildTelemetry('fail', reason);
    // 记下本次诊断上下文：下一局结束时对比，形成「建议→执行→验证→再反馈」闭环。
    this.coachFollowUp = {
      zone: tele.zone, hotZone: tele.hotZone, hotCount: tele.hotCount,
      tiltLevel: tele.tiltLevel, reason
    };
    const r = await this.ai.coach(tele);
    this.aiCoach = r && r.tips ? r.tips : [];
    if (typeof this.ui.setLiveCoach === 'function') {
      this.ui.setLiveCoach(this.aiCoach, r ? r.mode : 'local');
    }
    return { tips: this.aiCoach, mode: r ? r.mode : 'local' };
  }

  // ---------- AI 演示（自动试玩 Agent） ----------
  // 从起点重开当前关卡并由 autopilot 代打；不计成绩、不记生涯统计，
  // 玩家任意输入即可接管。只供定制关卡（AI / 分享 / 每日）使用。
  startDemo() {
    if (this.state !== STATE.PLAYING || !this.cfgOverride) return false;
    this.marble.reset();
    for (const gem of this.level.gems) gem.taken = false;
    for (const cp of this.level.checkpoints) cp.active = false;
    this.elapsed = 0;
    this.hits = 0;
    this.gemsGot = 0;
    this.fallProgress = 0;
    this.warnAt = -1;
    this.wasOnIce = false;
    this.axis = { x: 0, z: 0 };
    this.hitZones = [];
    this.tiltSum = 0;
    this.tiltSamples = 0;
    this.autopilot = new Autopilot(this.level);
    this.demo = true;
    this.view.setGemsVisible(this.level);
    this.view.setCheckpointsActive(this.level);
    this.ui.clearTrail();
    this.ui.setStatus('AI 演示中', 'good');
    this.ui.toast('AI 演示开始 · 任意操作即可接管', 'info');
    this.updateHUD();
    return true;
  }

  stopDemo(takeover = false) {
    if (!this.demo) return;
    this.demo = false;
    this.autopilot = null;
    this.axis = { x: 0, z: 0 };
    this.ui.setStatus('游戏中', 'normal');
    if (takeover) this.ui.toast('已接管 · 接下来看你的', 'info');
  }

  // 演示抵达终点：展示 Agent 成绩后回到起点，不走 clearLevel（不结算、不计数）。
  finishDemo() {
    const steps = this.autopilot ? this.autopilot.steps : 0;
    const t = this.elapsed;
    this.demo = false;
    this.autopilot = null;
    this.marble.reset();
    for (const gem of this.level.gems) gem.taken = false;
    for (const cp of this.level.checkpoints) cp.active = false;
    this.elapsed = 0;
    this.hits = 0;
    this.gemsGot = 0;
    this.fallProgress = 0;
    this.warnAt = -1;
    this.wasOnIce = false;
    this.axis = { x: 0, z: 0 };
    this.view.setGemsVisible(this.level);
    this.view.setCheckpointsActive(this.level);
    this.ui.clearTrail();
    this.ui.setStatus('游戏中', 'normal');
    this.ui.toast(`AI 演示通关 · ${t.toFixed(1)}s · ${steps} 步决策 · 轮到你了`, 'good');
    this.sfx.win();
    this.updateHUD();
  }

  // 每日挑战：日期种子全球同图，走定制关卡路径（不写主线成绩、不解锁）。
  startDaily() {
    const cfg = dailyConfig();
    const check = validateLevelInput(cfg);
    if (!check.ok) {
      this.ui.toast('今日迷宫生成失败，请重试', 'warn');
      return false;
    }
    this.aiLevel = cfg;
    this.aiStory = null;
    this.aiCoach = [];
    this.shareCode = encodeShare(cfg);
    this.score = 0;
    this.lives = 3;
    this.totalTime = 0;
    this.totalHits = 0;
    this.loadConfigured(cfg, check.level);
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setStatus('每日挑战', 'good');
    this.ui.toast(`每日挑战 · ${cfg.daily} · 全球同图`, 'good');
    this.sfx.click();
    return true;
  }

  // 载入分享码关卡：level 已由 decodeShare 校验过，这里只负责开局。
  loadShare(cfg, level, code = '') {
    if (!cfg || !level) return false;
    this.aiLevel = cfg;
    this.aiStory = null;
    this.aiCoach = [];
    this.shareCode = code || encodeShare(cfg);
    this.score = 0;
    this.lives = 3;
    this.totalTime = 0;
    this.totalHits = 0;
    this.loadConfigured(cfg, level);
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setStatus('分享关卡', 'good');
    this.ui.toast(`分享关卡 · ${cfg.name}`, 'good');
    this.sfx.click();
    return true;
  }

  // 启动与 hash 变化时尝试从地址栏载入分享码；坏码只提示，不影响开局。
  loadShareFromHash(hash) {
    const code = normalizeCode(hash);
    if (!code || code === this.shareCode) return false;
    const r = decodeShare(code);
    if (!r.ok) {
      if (this.state === STATE.MENU) this.ui.toast(`分享码无效：${r.reason}`, 'warn');
      return false;
    }
    return this.loadShare(r.cfg, r.level, code);
  }

  async aiReport() {
    const r = await this.ai.report({
      clears: this.records.clearCount, playTime: this.records.playTime,
      totalHits: this.totalHits, stars: this.records.starsForMode(this.difficulty),
      level: { name: this.cfg.name, elapsed: this.elapsed, hits: this.hits }
    });
    return r;
  }

  rewardBreakdown() {
    const cfg = this.cfg;
    const timeCost = Math.round(this.elapsed * 4);
    const hitCost = this.hits * 5;
    const gemBonus = this.gemsGot * 150;
    const timeBonus = cfg.timeLimit > 0
      ? Math.max(0, Math.floor((cfg.timeLimit - this.elapsed) * 2))
      : 0;
    const total = Math.max(120, Math.round(1000 - timeCost - hitCost + gemBonus + timeBonus));
    return { timeCost, hitCost, gemBonus, timeBonus, total };
  }

  levelReward() { return this.rewardBreakdown().total; }

  rewardDisplay() {
    if (this.state === STATE.MENU || this.state === STATE.GAMEOVER) {
      return { text: '本关 +0', settled: false };
    }
    if (this.state === STATE.LEVELCLEAR || this.state === STATE.GAMECLEAR) {
      return { text: `已结算 +${this.lastLevelScore}`, settled: true };
    }
    return { text: `本关 +${this.levelReward()}`, settled: false };
  }

  loadLevel(i) {
    this.levelIndex = i;
    this.cfgOverride = null;
    this.aiLevel = null;
    this.aiStory = null;
    this.aiCoach = [];
    this.shareCode = '';
    this.liveCoach = { used: 0, lastAt: 0 };
    this.coachFollowUp = null;
    this.demo = false;
    this.autopilot = null;
    this.hitZones = [];
    this.tiltSum = 0;
    this.tiltSamples = 0;
    this.level = buildLevel(this.cfg);
    if (!this.level.solvable) console.warn('关卡连通性校验未通过，请检查种子配置');
    for (const gem of this.level.gems) gem.taken = false;
    this.marble = new Marble(this.level);
    this.elapsed = 0;
    this.hits = 0;
    this.gemsGot = 0;
    this.fallProgress = 0;
    this.warnAt = -1;
    this.wasOnIce = false;
    this.axis = { x: 0, z: 0 };
    this.view.buildLevel(this.level);
    this.view.setGemsVisible(this.level);
    this.view.setCheckpointsActive(this.level);
    this.ui.setTip(LEVELS[i].tip);
    this.ui.setPauseLabel(false);
    this.ui.setDemoVisible(false);
    this.ui.clearTrail();
    this.ui.flashLevel();
    this.updateHUD();
  }

  updateHUD() {
    const reward = this.rewardDisplay();
    this.ui.setStats({
      levelIndex: this.levelIndex,
      totalLevels: LEVELS.length,
      name: this.cfg.name,
      subtitle: this.cfg.subtitle,
      elapsed: this.elapsed,
      timeLimit: this.cfg.timeLimit,
      score: this.score,
      rewardText: reward.text,
      rewardSettled: reward.settled,
      hits: this.hits,
      gemsGot: this.gemsGot,
      gemsTotal: this.level.gems.length,
      lives: this.lives,
      checkpoints: this.level.checkpoints.filter((c) => c.active).length,
      checkpointsTotal: this.level.checkpoints.length,
      demo: this.demo
    });
  }

  setAxis(x, z, human = false) {
    this.axis.x = x;
    this.axis.z = z;
    // 演示模式下玩家一旦给出有效输入即接管，AI 退场。
    if (human && this.demo && Math.abs(x) + Math.abs(z) > 0.05) this.stopDemo(true);
    if (this.state === STATE.PLAYING && !this.tiltHintDone
      && (Math.abs(x) + Math.abs(z) > 0.12) && this.records.markHint('tilt')) {
      this.tiltHintDone = true;
      this.ui.toast('松手后倾角会自动回正 · 按住 Shift 可精细微调', 'info');
    }
  }

  start(index = 0) {
    this.score = 0;
    this.lives = 3;
    this.totalTime = 0;
    this.totalHits = 0;
    this.lastLevelScore = 0;
    this.lastBreakdown = null;
    this.lastStars = 0;
    this.lastRecord = null;
    this.loadLevel(index);
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setStatus('游戏中', 'normal');
    this.ui.toast(`第 ${index + 1} 关 · ${this.cfg.name}`, 'info');
    this.sfx.click();
  }

  startFrom(index) {
    const i = Number(index);
    if (!Number.isInteger(i) || i < 0 || i >= LEVELS.length) return;
    if (i >= this.records.unlocked) {
      this.ui.toast('该关卡尚未解锁', 'warn');
      return;
    }
    this.start(i);
  }

  restartLevel() {
    if (this.state === STATE.MENU || this.state === STATE.GAMECLEAR || this.state === STATE.GAMEOVER) return;
    this.loadLevel(this.levelIndex);
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setStatus('游戏中', 'normal');
    this.ui.toast('本关已重开 · 回到起点', 'info');
    this.sfx.click();
  }

  // 失败后复活：保留本关用时 / 宝石 / 碰撞计数，只把球放回最近激活的检查点。
  // 主动 R 重开走 restartLevel()，会重建关卡并清空检查点。
  retry() {
    const cp = this.activeCheckpoint();
    if (cp) {
      this.marble.respawn(cp);
      this.fallProgress = 0;
      this.warnAt = -1;
      this.wasOnIce = false;
      this.axis = { x: 0, z: 0 };
      this.ui.clearTrail();
      this.ui.toast('从检查点复活', 'info');
    } else {
      this.loadLevel(this.levelIndex);
      this.ui.toast('再试一次', 'info');
    }
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setStatus('游戏中', 'normal');
    this.sfx.click();
    this.updateHUD();
  }

  nextLevel() {
    this.loadLevel(this.levelIndex + 1);
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setStatus('游戏中', 'normal');
    this.ui.toast(`第 ${this.levelIndex + 1} 关 · ${this.cfg.name}`, 'info');
    this.sfx.click();
  }

  togglePause() {
    if (this.state === STATE.PLAYING) {
      this.state = STATE.PAUSED;
      this.flushStats();
      this.ui.setPauseLabel(true);
      this.ui.setStatus('已暂停', 'warn');
      this.ui.showOverlay('paused', {
        levelIndex: this.levelIndex, name: this.cfg.name,
        elapsed: this.elapsed, score: this.score, reward: this.levelReward(),
        hits: this.hits, gemsGot: this.gemsGot,
        gemsTotal: this.level.gems.length, lives: this.lives
      });
      this.sfx.click();
    } else if (this.state === STATE.PAUSED) {
      this.resume();
    }
  }

  resume() {
    if (this.state !== STATE.PAUSED) return;
    this.state = STATE.PLAYING;
    this.ui.hideOverlay();
    this.ui.setPauseLabel(false);
    this.ui.setStatus('游戏中', 'normal');
    this.sfx.click();
  }

  advance() {
    // 菜单里还开着 AI 实验室这类二级弹窗时，回车/空格不该直接开局。
    if (this.state === STATE.MENU && this.ui.overlayType === 'ailab') return;
    switch (this.state) {
      case STATE.MENU: this.start(); break;
      case STATE.PAUSED: this.resume(); break;
      case STATE.LEVELCLEAR: this.nextLevel(); break;
      case STATE.FAILED: this.retry(); break;
      case STATE.GAMECLEAR:
      case STATE.GAMEOVER: this.start(); break;
      default: break;
    }
  }

  toMenu() {
    this.flushStats();
    this.score = 0;
    this.lives = 3;
    this.totalTime = 0;
    this.totalHits = 0;
    this.lastLevelScore = 0;
    this.lastBreakdown = null;
    this.state = STATE.MENU;
    this.loadLevel(0);
    this.ui.showOverlay('menu', this.menuData());
    this.ui.setStatus('准备开始', 'normal');
    this.sfx.click();
    this.ensureCloudIdentity();
  }

  beginFall(reason) {
    if (this.state !== STATE.PLAYING) return;
    this.pendingReason = reason;
    this.state = STATE.FAILING;
    this.fallProgress = 0;
    this.axis = { x: 0, z: 0 };
    this.marble.setAxis(0, 0, this.cfg.tiltMax);
    this.ui.setStatus('弹珠坠落', 'danger');
    this.sfx.fall();
  }

  fail(reason) {
    if (this.state === STATE.FAILED || this.state === STATE.GAMEOVER) return;
    this.lives -= 1;
    this.flushStats();
    this.sfx.fail();
    this.ui.setStatus('失败', 'danger');
    const cp = this.activeCheckpoint();
    if (this.lives <= 0) {
      this.state = STATE.GAMEOVER;
      this.ui.showOverlay('gameover', {
        levelIndex: this.levelIndex, name: this.cfg.name,
        score: this.score, totalTime: this.totalTime, totalHits: this.totalHits
      });
    } else {
      this.state = STATE.FAILED;
      // 还有复活机会时才值得诊断：开局就给出「下一把怎么走」。
      const coach = this.canLiveCoach();
      this.ui.showOverlay('failed', {
        reason, lives: this.lives, elapsed: this.elapsed,
        score: this.score, reward: this.levelReward(),
        hasCheckpoint: !!cp,
        checkpointName: cp ? `检查点 ${cp.order + 1}` : '',
        coach
      });
      if (coach) this.askLiveCoach(reason);
    }
    this.updateHUD();
  }

  clearLevel() {
    this.lastBreakdown = this.rewardBreakdown();
    this.lastLevelScore = this.lastBreakdown.total;
    this.score += this.lastLevelScore;
    this.ui.setStatus('通关', 'good');

    const stars = this.starsFor(this.cfg, this.elapsed, this.hits);
    // 自定义（AI 生成 / 分享码）关卡的 id 每次都是随机的，写进主线成绩表只会堆垃圾记录，
    // 还会白送一次关卡解锁；这里只计入生涯通关次数，不碰成绩与解锁。
    const custom = !!this.cfgOverride;
    this.records.addClear();
    const rec = custom ? null : this.records.submit(this.cfg.id, {
      time: this.elapsed, score: this.lastLevelScore, stars, mode: this.difficulty
    });
    if (!custom) this.records.unlock(Math.min(LEVELS.length, this.levelIndex + 2));
    // 每日挑战成绩按日期分键：只与同一天的自己比，不碰主线榜单。
    const dailyKey = this.cfg.daily || '';
    const dailyRec = dailyKey ? this.records.submitDaily(dailyKey, {
      time: this.elapsed, score: this.lastLevelScore, stars
    }) : null;
    this.flushStats();
    // 主线通关后异步上传云存档（失败静默，不阻塞结算弹窗）。
    this.syncCloud();
    this.lastStars = stars;
    this.lastRecord = rec;
    this.view.burstGoal();

    const common = {
      levelIndex: this.levelIndex, name: this.cfg.name,
      elapsed: this.elapsed, hits: this.hits,
      gemsGot: this.gemsGot, gemsTotal: this.level.gems.length,
      levelScore: this.lastLevelScore, score: this.score,
      b: this.lastBreakdown, stars, rec,
      best: custom ? null : this.records.best(this.cfg.id, this.difficulty),
      totalStars: this.records.starsForMode(this.difficulty),
      maxStars: LEVELS.length * 3,
      difficulty: this.difficulty,
      difficultyLabel: DIFFICULTIES[this.difficulty].label,
      assist: this.assistMode,
      isAI: !!this.aiLevel,
      custom,
      daily: dailyKey,
      dailyRec,
      dailyBest: dailyKey ? this.records.dailyBest(dailyKey) : null,
      shareCode: this.shareCode,
      aiPraise: this.aiStory ? this.aiStory.praise : '',
      levels: LEVELS.map((c, i) => ({
        index: i, name: c.name,
        best: this.records.best(c.id, this.difficulty)
      }))
    };

    const isLast = this.levelIndex + 1 >= LEVELS.length;
    this.state = isLast ? STATE.GAMECLEAR : STATE.LEVELCLEAR;
    // AI 教练异步返回后注入占位区，不阻塞结算弹窗出现。
    this.askCoach();
    if (isLast) {
      this.sfx.clearAll();
      this.ui.showOverlay('gameclear', {
        ...common,
        totalTime: this.totalTime, totalHits: this.totalHits, lives: this.lives,
        title: this.clearTitle(common.totalStars),
        cardText: this.scoreCardText()
      });
    } else {
      this.sfx.win();
      this.ui.showOverlay('levelclear', common);
    }
    this.updateHUD();
  }

  handleEvents(ev) {
    if (ev.hits > 0) {
      this.hits += ev.hits;
      this.totalHits += ev.hits;
      this.noteHit();
      this.sfx.bump(ev.hitSpeed);
      this.ui.shake(ev.hitSpeed);
    }
    if (ev.gems.length) {
      this.gemsGot += ev.gems.length;
      this.sfx.pickup();
      this.view.setGemsVisible(this.level);
    }
    if (ev.checkpoint >= 0) {
      this.sfx.checkpoint();
      this.view.setCheckpointsActive(this.level);
      this.hintOnce('checkpoint', '检查点已激活 · 失败后可从这里复活，进度会保留', 'good');
    }
    if (ev.boost >= 0) {
      this.sfx.boost();
      this.hintOnce('boost', '加速带 · 沿橙色箭头方向给弹珠一次推力，注意提前回正', 'info');
    }
    if (ev.ice && !this.wasOnIce) {
      this.sfx.ice();
      this.hintOnce('ice', '冰面 · 摩擦大幅降低，惯性会被放大，收小倾角提前减速', 'info');
    }
    this.wasOnIce = ev.ice;

    if (ev.fell >= 0) { this.beginFall('掉进了空洞'); return; }
    if (ev.hazard >= 0) { this.beginFall('触碰熔岩区'); return; }

    // 宝石提示每次都弹（是即时收益反馈，不是机制讲解）。
    if (ev.gems.length) this.ui.toast(`宝石 +${ev.gems.length * 150}`, 'good');

    if (ev.goal) {
      if (this.demo) { this.finishDemo(); return; }
      this.clearLevel();
    }
  }

  update(dt) {
    if (this.state === STATE.PLAYING) {
      this.elapsed += dt;
      this.totalTime += dt;
      // 演示是 AI 在玩：不累积玩家生涯时长，也不参与教练遥测采样。
      if (!this.demo) {
        this.records.addPlayTime(dt);
        this.playFlushAccum += dt;
        if (this.playFlushAccum >= 5) this.flushStats();
      }
      const limit = this.cfg.timeLimit;
      if (limit > 0) {
        const left = limit - this.elapsed;
        if (left <= 0) {
          // 演示超时不扣玩家生命：直接交还控制权。
          if (this.demo) { this.stopDemo(); this.ui.toast('AI 演示超时，已交还控制权', 'warn'); return; }
          this.fail('时间耗尽'); return;
        }
        const sec = Math.ceil(left);
        if (sec <= 10 && sec !== this.warnAt) {
          this.warnAt = sec;
          this.sfx.warn();
        }
      }

      if (this.demo && this.autopilot) {
        // Agent 逐物理步读状态、出动作；超过 150 秒仍未通关则交还玩家。
        const a = this.autopilot.nextAxis(this.marble);
        this.axis.x = a.x;
        this.axis.z = a.z;
        if (this.autopilot.steps > 150 * 120) this.stopDemo();
      }
      this.marble.setAxis(this.axis.x, this.axis.z, this.cfg.tiltMax);
      // 采样输入倾角强度：教练据此判断「是不是整局都顶着满倾角」。
      if (!this.demo) {
        this.tiltSum += Math.min(1, Math.hypot(this.axis.x, this.axis.z));
        this.tiltSamples += 1;
      }
      const ev = this.marble.step(dt, this.cfg);
      this.handleEvents(ev);
      if (this.state === STATE.PLAYING || this.state === STATE.FAILING) this.updateHUD();
    } else if (this.state === STATE.FAILING) {
      this.fallProgress = Math.min(1, this.fallProgress + dt * 1.5);
      if (this.fallProgress >= 1) this.fail(this.pendingReason);
    }
  }
}
