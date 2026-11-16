import { LEVELS, buildLevel, BALL_R, CELL, WALL_T, BOOST_IMPULSE } from '../src/levels.js';
import { Marble } from '../src/physics.js';
import { Records } from '../src/records.js';
import { Sfx } from '../src/audio.js';
import { AIService, localDesign, localCoach, localNarrative, localReport, sanitizeLevelInput, validateLevelInput, extractJSON } from '../src/ai.js';
import { FixedClock, STEP, MAX_CATCHUP, MAX_STEPS } from '../src/clock.js';
import { decideQuality, QualityController } from '../src/quality.js';
import { minimapSize } from '../src/ui.js';
import { DIFFICULTIES, DIFFICULTY_ORDER, effectiveConfig, cycleDifficulty } from '../src/difficulty.js';
import { Game } from '../src/game.js';

let passed = 0;
let failed = 0;

function check(label, ok, detail = '') {
  if (ok) {
    passed += 1;
    console.log(`  PASS  ${label}${detail ? '  (' + detail + ')' : ''}`);
  } else {
    failed += 1;
    console.log(`  FAIL  ${label}${detail ? '  (' + detail + ')' : ''}`);
  }
}

function clearance(x, z, b) {
  const dx = Math.max(b.minX - x, 0, x - b.maxX);
  const dz = Math.max(b.minZ - z, 0, z - b.maxZ);
  return Math.hypot(dx, dz);
}

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

function autoPlay(lv, cfg, seconds = 150) {
  const m = new Marble(lv);
  const pts = lv.safePath.map((i) => lv.cellCenter(i % lv.cols, Math.floor(i / lv.cols)));
  let target = 1;
  for (let i = 0; i < seconds * 120; i++) {
    const t = pts[Math.min(target, pts.length - 1)];
    const dx = t.x - m.x;
    const dz = t.z - m.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.34 && target < pts.length - 1) target += 1;
    const speed = clamp(d * 1.7, 0, 4.0);
    const nx = d > 1e-6 ? dx / d : 0;
    const nz = d > 1e-6 ? dz / d : 0;
    const ax = clamp((nx * speed - m.vx) * 0.62, -1, 1);
    const az = clamp((nz * speed - m.vz) * 0.62, -1, 1);
    m.setAxis(ax, az, cfg.tiltMax);
    const ev = m.step(1 / 120, cfg);
    if (ev.fell >= 0 || ev.hazard >= 0) {
      return { ok: false, reason: `撞上陷阱 @ ${(i / 120).toFixed(1)}s, 路径点 ${target}/${pts.length}` };
    }
    if (ev.goal) return { ok: true, detail: `${(i / 120).toFixed(1)}s 抵达终点` };
  }
  return {
    ok: false,
    reason: `超时，路径点 ${target}/${pts.length}，位置 (${m.x.toFixed(2)}, ${m.z.toFixed(2)})`
  };
}

console.log('3D 弹珠迷宫 · 逻辑与物理验证\n');

for (const cfg of LEVELS) {
  const lv = buildLevel(cfg);
  const tag = `第 ${cfg.id} 关`;
  const last = lv.cols * lv.rows - 1;
  console.log(`${tag} · ${cfg.name} (${cfg.cols}x${cfg.rows})`);

  check(`${tag}：起点到终点存在安全路径`, lv.solvable && lv.safePath.length >= 2
    && lv.safePath[0] === 0 && lv.safePath[lv.safePath.length - 1] === last,
    `${lv.safePath.length} 个路径格`);
  check(`${tag}：陷阱与宝石按配置生成`,
    lv.holes.length === cfg.holes && lv.hazards.length === cfg.hazards && lv.gems.length === cfg.gems,
    `洞 ${lv.holes.length} / 熔岩 ${lv.hazards.length} / 宝石 ${lv.gems.length}`);
  check(`${tag}：墙体几何与碰撞体一一对应`, lv.walls.length === lv.segments.length,
    `${lv.walls.length} 段`);
  check(`${tag}：四周外边界封闭`,
    lv.segments.some((s) => s.dir === 'h' && Math.abs(s.z - (-lv.depth / 2)) < 1e-6)
    && lv.segments.some((s) => s.dir === 'h' && Math.abs(s.z - (lv.depth / 2)) < 1e-6)
    && lv.segments.some((s) => s.dir === 'v' && Math.abs(s.x - (-lv.width / 2)) < 1e-6)
    && lv.segments.some((s) => s.dir === 'v' && Math.abs(s.x - (lv.width / 2)) < 1e-6));
  check(`${tag}：通道净宽大于球径`, CELL - WALL_T > BALL_R * 2,
    `${(CELL - WALL_T).toFixed(2)} > ${(BALL_R * 2).toFixed(2)}`);

  let minPathClear = Infinity;
  for (let i = 0; i + 1 < lv.safePath.length; i++) {
    const a = lv.cellCenter(lv.safePath[i] % lv.cols, Math.floor(lv.safePath[i] / lv.cols));
    const b = lv.cellCenter(lv.safePath[i + 1] % lv.cols, Math.floor(lv.safePath[i + 1] / lv.cols));
    for (let t = 0; t <= 1; t += 0.02) {
      const x = a.x + (b.x - a.x) * t;
      const z = a.z + (b.z - a.z) * t;
      for (const w of lv.walls) minPathClear = Math.min(minPathClear, clearance(x, z, w));
    }
  }
  check(`${tag}：安全路径全程净空 >= 球半径`, minPathClear >= BALL_R - 0.02,
    `最小净空 ${minPathClear.toFixed(3)}`);

  const obstacles = [...lv.holes, ...lv.hazards];
  check(`${tag}：陷阱不压住起点与终点`, obstacles.every((h) =>
    Math.hypot(h.x - lv.start.x, h.z - lv.start.z) > CELL
    && Math.hypot(h.x - lv.goal.x, h.z - lv.goal.z) > CELL));

  // ---- P1：新机制的数据层校验 ----
  const dangerCells = new Set(obstacles.map((h) => h.cell));
  const gemCells = new Set(lv.gems.map((g) => g.cell));
  const pathCells = new Set(lv.safePath);
  const mechanismCells = [...lv.checkpoints, ...lv.boosts, ...lv.iceZones].map((z) => z.cell);

  check(`${tag}：检查点按配置生成且全部位于安全路径`,
    lv.checkpoints.length === (cfg.checkpoints || 0)
    && lv.checkpoints.every((c) => pathCells.has(c.cell) && c.cell !== 0 && c.cell !== last),
    `${lv.checkpoints.length} 个：格 ${lv.checkpoints.map((c) => c.cell).join(',') || '无'}`);
  check(`${tag}：加速带与冰面按配置生成且不占陷阱 / 主线`,
    lv.boosts.length === (cfg.boosts || 0)
    && lv.iceZones.length === (cfg.ice || 0)
    && lv.boosts.concat(lv.iceZones).every((z) =>
      !dangerCells.has(z.cell) && !gemCells.has(z.cell) && !pathCells.has(z.cell)
      && z.cell !== 0 && z.cell !== last),
    `加速 ${lv.boosts.length} / 冰面 ${lv.iceZones.length}`);
  check(`${tag}：所有机制格互不重叠且不压起点终点`,
    new Set(mechanismCells).size === mechanismCells.length
    && mechanismCells.every((c) => c !== 0 && c !== last && !dangerCells.has(c)));
  const wallBits = { '0,-1': 1, '1,0': 2, '0,1': 4, '-1,0': 8 };
  check(`${tag}：加速带方向指向无墙的相邻通道`,
    lv.boosts.every((b) => {
      const c = b.cell % lv.cols;
      const r = (b.cell / lv.cols) | 0;
      const nc = c + b.dirX;
      const nr = r + b.dirZ;
      if (nc < 0 || nc >= lv.cols || nr < 0 || nr >= lv.rows) return false;
      return (lv.cells[b.cell] & wallBits[`${b.dirX},${b.dirZ}`]) === 0;
    }),
    lv.boosts.map((b) => `(${b.dirX},${b.dirZ})`).join(' ') || '无加速带');

  if (lv.checkpoints.length) {
    const cp = lv.checkpoints[0];
    const mc = new Marble(lv);
    mc.x = cp.x; mc.z = cp.z;
    const ec = mc.step(1 / 120, cfg);
    mc.respawn(cp);
    check(`${tag}：经过检查点可激活，复活落在检查点且速度归零`,
      ec.checkpoint === 0 && cp.active === true
      && Math.abs(mc.x - cp.x) < 1e-9 && Math.abs(mc.z - cp.z) < 1e-9
      && mc.vx === 0 && mc.vz === 0);
    cp.active = false;
  }
  if (lv.boosts.length) {
    const b = lv.boosts[0];
    const mb = new Marble(lv);
    mb.x = b.x; mb.z = b.z;
    const eb = mb.step(1 / 120, cfg);
    const proj = mb.vx * b.dirX + mb.vz * b.dirZ;
    check(`${tag}：加速带给出沿通道的定向冲量`,
      eb.boost === 0 && proj > BOOST_IMPULSE * 0.8 && mb.boostCooldown > 0,
      `投影速度 ${proj.toFixed(2)} / 冲量 ${BOOST_IMPULSE}`);
  }
  if (lv.iceZones.length) {
    const z = lv.iceZones[0];
    const mi = new Marble(lv);
    mi.x = z.x; mi.z = z.z; mi.vx = 2; mi.vz = 0;
    const ei = mi.step(1 / 120, cfg);
    const mn = new Marble(lv);
    mn.vx = 2; mn.vz = 0;
    mn.step(1 / 120, cfg);
    check(`${tag}：冰面阻尼明显低于普通地面`,
      ei.ice === true && mi.onIce === true && mi.vx > mn.vx + 0.005,
      `冰面 vx ${mi.vx.toFixed(4)} > 普通 ${mn.vx.toFixed(4)}`);
  }

  const m = new Marble(lv);
  let minWall = Infinity;
  let maxAbs = 0;
  let notFinite = 0;
  for (let i = 0; i < 3600; i++) {
    const ax = Math.sin(i * 0.0121) * 0.95 + Math.sin(i * 0.0033) * 0.4;
    const az = Math.cos(i * 0.0167) * 0.95 + Math.cos(i * 0.0051) * 0.4;
    m.setAxis(ax, az, cfg.tiltMax);
    m.step(1 / 120, cfg);
    if (![m.x, m.z, m.vx, m.vz, m.tiltX, m.tiltZ].every(Number.isFinite)) notFinite += 1;
    for (const w of lv.walls) minWall = Math.min(minWall, clearance(m.x, m.z, w));
    maxAbs = Math.max(maxAbs, Math.abs(m.x), Math.abs(m.z));
  }
  check(`${tag}：30 秒连续随机操作无 NaN`, notFinite === 0);
  check(`${tag}：30 秒连续随机操作不穿墙`, minWall >= BALL_R - 0.035,
    `最小净空 ${minWall.toFixed(4)}`);
  check(`${tag}：弹珠始终在场景边界内`, maxAbs <= Math.max(lv.width, lv.depth) / 2 + 0.001,
    `最大坐标 ${maxAbs.toFixed(2)}`);

  const auto = autoPlay(lv, cfg);
  check(`${tag}：自动控制器可实际滚到终点`, auto.ok, auto.ok ? auto.detail : auto.reason);
  console.log('');
}

console.log('成绩记录模块');
let recordsOk = true;
try {
  const r = new Records();
  const first = r.submit(1, { time: 30, score: 900, stars: 2 });
  check('首次通关写入最佳成绩并标记首次记录',
    !first.previous && r.best(1).time === 30 && r.best(1).score === 900 && r.best(1).stars === 2);
  const second = r.submit(1, { time: 22, score: 800, stars: 3 });
  check('刷新成绩逐项取优，不互相覆盖',
    second.newTime && second.newStars && !second.newScore
    && r.best(1).time === 22 && r.best(1).score === 900 && r.best(1).stars === 3);
  r.unlock(2);
  r.unlock(1);
  check('解锁进度只增不减、累计星级正确', r.unlocked === 2 && r.totalStars === 3,
    `解锁 ${r.unlocked} / 星 ${r.totalStars}`);
  check('无 localStorage 环境下不抛异常', recordsOk, `persistent=${r.persistent}`);
} catch (e) {
  recordsOk = false;
  check('成绩记录模块可安全运行', false, e.message);
}
console.log('');

console.log('AI 设计师 / 教练 / 叙事');
{
  check('从围栏文本中稳定抽取 JSON',
    JSON.stringify(extractJSON('结果：```json\n{"a":1,"b":[2]}\n``` 谢谢')) === '{"a":1,"b":[2]}'
    && extractJSON('没有 JSON') === null);

  const bad = sanitizeLevelInput({ cols: 99, rows: -3, holes: 999, hazards: 999, tiltMax: 9, gems: 'x' });
  check('AI 关卡参数被钳制到安全区间',
    bad.cols === 13 && bad.rows === 7 && bad.holes <= Math.floor(13 * 7 * 0.16)
    && bad.tiltMax === 0.40 && bad.gems >= 1 && bad.aiGenerated === true);

  const easy = localDesign('简单的迷宫，要有宝石');
  const hard = localDesign('超难地狱难度，熔岩和冰面，多加加速带');
  check('本地设计师按难度语义生成不同规模关卡',
    easy.cols === 7 && hard.cols === 13
    && hard.hazards > easy.hazards && hard.ice > easy.ice,
    `简单 ${easy.cols}x${easy.cols} / 高难 ${hard.cols}x${hard.cols}`);
  check('生成的关卡全部通过可解性校验',
    [easy, hard, localDesign('带检查点和空洞的中等迷宫')]
      .every((c) => validateLevelInput(c).ok));

  const tips = localCoach({ hits: 30, parHits: 10, gems: 5, gemsTotal: 6, checkpoints: 0, elapsed: 30, par: 60 });
  check('本地教练按表现给出针对性建议',
    tips.length >= 2 && tips.some((t) => t.includes('Shift')) && tips.some((t) => t.includes('检查点')),
    tips.join(' / '));
  check('本地叙事按主题产出名称与提示',
    localNarrative('冰天雪地').name === '霜脉回廊'
    && localNarrative('熔岩深渊').name === '熔核之心');
  check('训练报告包含生涯统计与建议',
    (() => {
      const t = localReport({ clears: 3, playTime: 300, totalHits: 20, stars: 5 });
      return t.includes('累计通关 3 次') && t.includes('建议：');
    })());

  const local = new AIService({ fetch: null });
  const r1 = await local.design('简单迷宫');
  check('无网络时 AI 服务降级到本地引擎且关卡可玩',
    r1.mode === 'local' && r1.level && r1.level.solvable && r1.cfg.aiGenerated);

  const mocked = new AIService({ enabled: true, fetch: async () => ({ ok: true, json: async () => ({
    ok: true, text: JSON.stringify({ cols: 8, rows: 8, holes: 0, gems: 5, name: '云上迷宫' })
  }) }) });
  const r2 = await mocked.design('随便');
  check('接入 AI 接口时采用模型产出并标记 ai 模式',
    r2.mode === 'ai' && r2.cfg.name === '云上迷宫' && r2.cfg.cols === 8 && r2.level.solvable);

  const broken = new AIService({ enabled: true, fetch: async () => ({ ok: false }) });
  const r3 = await broken.coach({ hits: 0 });
  check('AI 接口失败时教练建议仍可用', r3.mode === 'local' && r3.tips.length >= 1);
}
console.log('');

console.log('生涯累计统计');
{
  globalThis.localStorage = {
    _v: '{}',
    getItem() { return this._v; },
    setItem(_k, v) { this._v = v; }
  };
  const r = new Records();
  check('累计字段初始为 0 且纳入版本化存档',
    r.clearCount === 0 && r.playTime === 0 && r.data.v === 1);
  r.addClear();
  r.addPlayTime(12.5);
  r.addPlayTime(-3);
  r.addPlayTime(NaN);
  r.flush();
  const saved = JSON.parse(globalThis.localStorage._v);
  check('通关次数即时落盘，时长由 flush 写入且忽略非法增量',
    r.clearCount === 1 && saved.stats.clears === 1
    && Math.abs(r.playTime - 12.5) < 1e-9
    && Math.abs(saved.stats.playTime - 12.5) < 1e-9);
  check('重建存档后累计字段保留',
    new Records().clearCount === 1 && Math.abs(new Records().playTime - 12.5) < 1e-9);

  globalThis.localStorage._v = JSON.stringify({ stats: { clears: -4, playTime: 'abc' } });
  const dirty = new Records();
  check('非法累计统计回退到 0', dirty.clearCount === 0 && dirty.playTime === 0);
  globalThis.localStorage._v = JSON.stringify({ stats: { clears: 1e12, playTime: -9 } });
  const clamped = new Records();
  check('越界累计统计被钳制到上下限',
    clamped.clearCount === 1e7 && clamped.playTime === 0);
  delete globalThis.localStorage;
}
console.log('');

console.log('程序化音效');
{
  const sfx = new Sfx();
  let quietOk = true;
  try { sfx.checkpoint(); sfx.boost(); sfx.ice(); } catch (_) { quietOk = false; }
  check('三种机制各有专属音效方法，且无 WebAudio 时静默降级不抛错',
    ['checkpoint', 'boost', 'ice'].every((k) => typeof sfx[k] === 'function') && quietOk
    && sfx.ctx === null);
}
console.log('');

console.log('小地图分辨率与一次性引导');
{
  const sizes = LEVELS.map((cfg) => minimapSize(buildLevel(cfg)));
  check('小地图逻辑分辨率随关卡尺寸递增，且有上限',
    sizes[0] === 220 && sizes[1] > sizes[0] && sizes[2] > sizes[1]
    && sizes[2] <= 320 && sizes.every((n) => Number.isInteger(n)),
    `L1/L2/L3 ${sizes.join(' / ')}px`);

  globalThis.localStorage = {
    _v: '{}',
    getItem() { return this._v; },
    setItem(_k, v) { this._v = v; }
  };
  const h = new Records();
  check('一次性引导首次返回 true，之后同 key 不再触发',
    h.markHint('tilt') === true && h.markHint('tilt') === false
    && h.hintSeen('tilt') && !h.hintSeen('boost'));
  check('提示状态写入存档并在重建后保留',
    new Records().hintSeen('tilt') === true);
  check('非法 hint key 不被接受也不落盘',
    h.markHint('__proto__') === false
    && !Object.keys(JSON.parse(globalThis.localStorage._v).hints).includes('__proto__'));
  delete globalThis.localStorage;
}
console.log('');

console.log('难度档位与成绩卡');
{
  const cfg = LEVELS[2];
  const std = effectiveConfig(cfg, 'standard');
  const relaxed = effectiveConfig(cfg, 'relaxed');
  const challenge = effectiveConfig(cfg, 'challenge');
  check('标准档配置与原关卡逐值一致（零回归）',
    std.gravity === cfg.gravity && std.tiltMax === cfg.tiltMax
    && std.timeLimit === cfg.timeLimit && std.par === cfg.par
    && DIFFICULTIES.standard.assist === false);
  check('轻松档更慢更宽容、挑战档更快更紧',
    relaxed.gravity < std.gravity && relaxed.timeLimit > std.timeLimit
    && relaxed.tiltMax < std.tiltMax && relaxed.par > std.par
    && challenge.gravity > std.gravity && challenge.timeLimit < std.timeLimit
    && challenge.tiltMax > std.tiltMax && challenge.par < std.par,
    `重力 ${relaxed.gravity.toFixed(2)}/${std.gravity}/${challenge.gravity.toFixed(2)}`);
  check('难度循环 standard→relaxed→challenge→standard',
    cycleDifficulty('standard') === 'relaxed'
    && cycleDifficulty('relaxed') === 'challenge'
    && cycleDifficulty('challenge') === 'standard'
    && DIFFICULTY_ORDER.length === 3);
  check('难度只改手感参数，不改迷宫种子与尺寸',
    std.seed === cfg.seed && relaxed.seed === cfg.seed
    && relaxed.cols === cfg.cols && relaxed.rows === cfg.rows);

  globalThis.localStorage = {
    _v: '{}',
    getItem() { return this._v; },
    setItem(_k, v) { this._v = v; }
  };
  const r = new Records();
  r.setDifficulty('relaxed');
  r.submit(1, { time: 40, score: 800, stars: 2, mode: 'relaxed' });
  r.submit(1, { time: 25, score: 950, stars: 3, mode: 'standard' });
  check('辅助档成绩按档位分键，互不覆盖',
    r.best(1, 'relaxed').time === 40 && r.best(1, 'standard').time === 25
    && r.data.best['1:relaxed'].score === 800 && r.data.best['1'].score === 950
    && r.totalStars === 3 && r.starsForMode('relaxed') === 2,
    `标准 ${r.data.best['1'].score} / 轻松 ${r.data.best['1:relaxed'].score}`);
  check('难度档位写入存档并在重建后保留',
    new Records().difficulty === 'relaxed');
  r.setDifficulty('challenge');
  check('setDifficulty 拒绝非法值且不改当前档',
    r.setDifficulty('godmode') === false && r.difficulty === 'challenge');
  delete globalThis.localStorage;

  globalThis.localStorage = {
    _v: JSON.stringify({ difficulty: 'godmode', best: { '1:godmode': { time: 1, score: 1, stars: 1 } } }),
    getItem() { return this._v; },
    setItem(_k, v) { this._v = v; }
  };
  const dirtyD = new Records();
  check('脏难度档回退标准，非法分键成绩被清洗',
    dirtyD.difficulty === 'standard' && Object.keys(dirtyD.data.best).length === 0);
  delete globalThis.localStorage;

  // 成绩卡称号与文本：用最小 stub 构造 Game，只读取纯逻辑输出。
  globalThis.localStorage = {
    _v: '{}', getItem() { return this._v; }, setItem(_k, v) { this._v = v; }
  };
  const noop = () => {};
  const stubView = {
    buildLevel: noop, setGemsVisible: noop, setCheckpointsActive: noop, burstGoal: noop
  };
  const stubUi = {
    showOverlay: noop, setStatus: noop, setTip: noop, setPauseLabel: noop,
    clearTrail: noop, flashLevel: noop, setStats: noop, toast: noop, setAICoach: noop
  };
  const stubSfx = { click: noop, win: noop, clearAll: noop };
  const g = new Game(stubView, stubUi, stubSfx);
  check('全通关称号按星级分档',
    g.clearTitle(9) === '迷宫大师' && g.clearTitle(7) === '弹珠专家'
    && g.clearTitle(5) === '熟练探险家' && g.clearTitle(1) === '初出茅庐');
  g.setDifficulty('relaxed');
  check('辅助档称号带档位标注', g.clearTitle(9).includes('轻松档') && g.assistMode === true);
  check('成绩卡文本含三关回顾与合计行',
    (() => {
      const card = g.scoreCardText();
      return card.includes('3D 弹珠迷宫 · 全通关')
        && card.includes('第1关') && card.includes('第2关') && card.includes('第3关')
        && card.includes('累计') && card.includes('轻松档');
    })());
  const clearsBefore = g.records.clearCount;
  g.state = 'playing';
  g.elapsed = 5;
  g.clearLevel();
  check('每通一关累计次数 +1，菜单数据带生涯统计',
    g.records.clearCount === clearsBefore + 1
    && g.menuData().clearCount === clearsBefore + 1
    && g.menuData().playTime === g.records.playTime);
  delete globalThis.localStorage;
}
console.log('');

console.log('固定步长时钟');
{
  const c60 = new FixedClock();
  for (let i = 0; i < 60; i++) c60.advance(1 / 60);
  check('60 fps 下 1 秒墙钟推进 1 秒游戏时间',
    Math.abs(c60.totalSim - 1) < STEP * 2 && Math.abs(c60.lag) < STEP * 2,
    `sim ${c60.totalSim.toFixed(4)}s / lag ${c60.lag.toFixed(4)}s`);

  const c5 = new FixedClock();
  for (let i = 0; i < 5; i++) c5.advance(0.2);
  check('5 fps 低帧率不再变慢动作（旧实现只有 0.5s）',
    Math.abs(c5.totalSim - 1) < STEP * 2,
    `sim ${c5.totalSim.toFixed(4)}s / wall ${c5.totalWall.toFixed(4)}s`);

  const cIdle = new FixedClock();
  const stepsIdle = cIdle.advance(2.0);
  check('从后台切回不补跑整段空档，单帧步数有上限',
    stepsIdle <= MAX_STEPS && cIdle.totalSim <= MAX_CATCHUP + STEP
    && cIdle.totalWall <= MAX_CATCHUP + 1e-9,
    `${stepsIdle} 步 / sim ${cIdle.totalSim.toFixed(4)}s`);

  const cIrregular = new FixedClock();
  const seq = [0.017, 0.033, 0.008, 0.041, 0.016, 0.029, 0.011, 0.037];
  const wallSum = seq.reduce((a, b) => a + b, 0);
  for (const d of seq) cIrregular.advance(d);
  check('不规则帧序列靠欠账保留，累计误差小于一个物理步',
    Math.abs(cIrregular.totalSim - wallSum) < STEP * 2,
    `sim ${cIrregular.totalSim.toFixed(4)}s / wall ${wallSum.toFixed(4)}s`);

  const cReset = new FixedClock();
  cReset.advance(0.09);
  const simBefore = cReset.totalSim;
  cReset.reset();
  check('reset 只清欠账、保留累计统计',
    cReset.acc === 0 && cReset.totalSim === simBefore && cReset.advance(1 / 120) === 1);
}
console.log('');

console.log('画质档位决策');
{
  check('极低帧率直接降到低档止损',
    decideQuality('high', 18) === 'low' && decideQuality('medium', 18) === 'low');
  check('中低帧率逐档下降',
    decideQuality('high', 35) === 'medium' && decideQuality('medium', 35) === 'low');
  check('42~55 fps 滞回区保持不变',
    decideQuality('high', 48) === 'high' && decideQuality('low', 48) === 'low');
  check('帧率恢复后逐档回升',
    decideQuality('low', 60) === 'medium' && decideQuality('medium', 60) === 'high');

  const applied = [];
  const qc = new QualityController({ setQuality: (q) => applied.push(q) });
  check('控制器启动为「自动 + 高画质」',
    qc.mode === 'auto' && qc.level === 'high' && applied[0] === 'high');
  check('自动模式按帧率降级',
    qc.probe(18, 10000) === true && qc.level === 'low' && applied.includes('low'));
  check('档位切换有冷却，避免频繁抖动',
    qc.probe(60, 10100) === false && qc.level === 'low');
  check('冷却结束后可回升',
    qc.probe(60, 14000) === true && qc.level === 'medium');

  const qc2 = new QualityController({ setQuality: () => {} });
  const labels = [qc2.cycle(), qc2.cycle(), qc2.cycle(), qc2.cycle(), qc2.cycle()];
  check('手动档位循环 auto→高→中→低→自动',
    labels.join('|') === '画质 高|画质 中|画质 低|画质 自动|画质 高',
    labels.join(' → '));
}
console.log('');

console.log('存档容错');
{
  const dirty = {
    v: 1,
    best: {
      '1': { time: 12.5, score: 900, stars: 3 },
      '2': { time: -5, score: 100, stars: 2 },
      '3': { time: 'abc', score: 10, stars: 9 },
      '4': { time: 30, score: -100, stars: 99 },
      '5': null,
      bad: { time: 10, score: 1, stars: 1 }
    },
    unlocked: 999,
    hints: { tilt: true, boost: 'yes', ice: 1, __proto__: true, evil: true }
  };
  globalThis.localStorage = {
    _v: JSON.stringify(dirty),
    getItem() { return this._v; },
    setItem(_k, v) { this._v = v; }
  };
  const r = new Records();
  const b = r.data.best;
  check('脏存档清洗：丢弃非法记录、钳制越界数值',
    Object.keys(b).sort().join(',') === '1,4'
    && b['1'].time === 12.5 && b['1'].stars === 3
    && b['4'].score === 0 && b['4'].stars === 3
    && r.unlocked === 99,
    `保留 ${Object.keys(b).sort().join(',')} / 解锁 ${r.unlocked}`);

  globalThis.localStorage._v = '{ broken json';
  const r2 = new Records();
  check('损坏的 JSON 存档安全回退且保持可写',
    r2.persistent === true && Object.keys(r2.data.best).length === 0
    && r2.unlocked === 1);
  r2.submit(1, { time: 10, score: 100, stars: 1 });
  const saved = JSON.parse(globalThis.localStorage._v);
  check('回退后仍可写入新成绩并带上存档版本',
    saved.v === 1 && saved.best['1'].time === 10);
  check('脏提示记录只保留白名单内的布尔值',
    r.hintSeen('tilt') && !r.hintSeen('boost') && !r.hintSeen('ice')
    && !r.hintSeen('evil') && Object.keys(r.data.hints).join(',') === 'tilt',
    `保留 ${Object.keys(r.data.hints).join(',')}`);
  delete globalThis.localStorage;
}
console.log('');

console.log(`结果: ${passed} 项通过, ${failed} 项失败`);
if (failed > 0) process.exit(1);
