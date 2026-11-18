import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EDGE = process.env.EDGE_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PORT = 5199;
const CDP = 9333;
const profile = path.join(os.tmpdir(), 'marble-maze-cdp-profile');

const server = spawn(process.execPath, ['serve.mjs'], {
  cwd: root,
  env: { ...process.env, PORT: String(PORT) },
  stdio: 'ignore'
});

let edge = null;
let ws = null;
const errors = [];
let passed = 0;
let failed = 0;

const check = (label, ok, detail = '') => {
  if (ok) { passed += 1; console.log(`  PASS  ${label}${detail ? '  (' + detail + ')' : ''}`); }
  else { failed += 1; console.log(`  FAIL  ${label}${detail ? '  (' + detail + ')' : ''}`); }
};

async function main() {
  await sleep(500);
  edge = spawn(EDGE, [
    '--headless=new', '--no-first-run', '--no-default-browser-check',
    '--disable-gpu-sandbox', '--use-gl=angle', '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--hide-scrollbars',
    `--remote-debugging-port=${CDP}`, `--user-data-dir=${profile}`,
    '--window-size=1440,900', `http://127.0.0.1:${PORT}/`
  ], { stdio: 'ignore' });

  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${CDP}/json/list`)).json();
      target = list.find((t) => t.type === 'page' && t.url.includes(String(PORT)));
    } catch { /* 尚未就绪 */ }
    if (!target) await sleep(250);
  }
  if (!target) throw new Error('无法连接浏览器调试端口');

  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let seq = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) p.reject(new Error(JSON.stringify(msg.error)));
      else p.resolve(msg.result);
    } else if (msg.method === 'Runtime.exceptionThrown') {
      const d = msg.params.exceptionDetails;
      errors.push(`异常: ${d.text} ${d.exception?.description || ''}`);
    } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
      errors.push(`控制台: ${msg.params.args.map((a) => a.value ?? a.description ?? '').join(' ')}`);
    } else if (msg.method === 'Network.responseReceived' && msg.params.response.status >= 400) {
      errors.push(`HTTP ${msg.params.response.status}: ${msg.params.response.url}`);
    } else if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
      errors.push(`日志: ${msg.params.entry.text}`);
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

  const evalJS = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' ' + (r.exceptionDetails.exception?.description || ''));
    return r.result.value;
  };
  const keyDown = (code, key, vk) => send('Input.dispatchKeyEvent', {
    type: 'keyDown', key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk
  });
  const keyUp = (code, key, vk) => send('Input.dispatchKeyEvent', {
    type: 'keyUp', key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk
  });
  const tap = async (code, key, vk) => { await keyDown(code, key, vk); await keyUp(code, key, vk); };
  const shot = async (name) => {
    const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    writeFileSync(path.join(root, 'tests', name), Buffer.from(r.data, 'base64'));
  };
  const ensurePlaying = async () => {
    const st = await evalJS('window.__marbleMaze.game.state');
    if (st === 'paused') {
      await evalJS('window.__marbleMaze.game.resume()');
      await sleep(120);
    }
    return await evalJS('window.__marbleMaze.game.state');
  };
  const waitFor = async (expression, timeoutMs = 4000, autoResume = true) => {
    const t0 = Date.now();
    while (Date.now() - t0 < timeoutMs) {
      if (autoResume) {
        const st = await evalJS('window.__marbleMaze.game.state');
        if (st === 'paused') await evalJS('window.__marbleMaze.game.resume()');
      }
      if (await evalJS(expression)) return true;
      await sleep(120);
    }
    return Boolean(await evalJS(expression));
  };

  await send('Runtime.enable');
  await send('Log.enable');
  await send('Network.enable');
  await send('Page.enable');
  // 每次导航前清掉上一轮残留的成绩，保证选关/解锁断言可复现。
  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: `try { localStorage.removeItem('marble-maze-3d.records.v1'); } catch (_) {}`
  });
  await send('Page.reload', { ignoreCache: true });
  // 慢速 swiftshader 下 2.6 秒偶尔不够，轮询到 hook 就绪再开始断言。
  let bootReady = false;
  for (let i = 0; i < 40 && !bootReady; i++) {
    try {
      const probe = await send('Runtime.evaluate', {
        expression: '!!(window.__marbleMaze && window.__marbleMaze.game)',
        returnByValue: true
      });
      bootReady = probe.result.value === true;
    } catch (_) { /* 等待就绪 */ }
    if (!bootReady) await sleep(250);
  }
  if (!bootReady) throw new Error('页面脚本未就绪，无法验证');
  await sleep(400);

  console.log('3D 弹珠迷宫 · 浏览器运行验证\n');

  const init = await evalJS(`(() => {
    const c = document.getElementById('scene');
    const g = window.__marbleMaze && window.__marbleMaze.game;
    return {
      hook: !!window.__marbleMaze,
      state: g && g.state,
      level: g && g.levelIndex,
      walls: g && g.level.walls.length,
      canvasW: c.width, canvasH: c.height,
      cssW: c.clientWidth, cssH: c.clientHeight,
      webgl2: !!c.getContext('webgl2'),
      modal: document.getElementById('modal').innerText.slice(0, 40),
      hudLevel: document.getElementById('statLevel').innerText,
      hudLives: document.getElementById('statLives').innerText,
      hudScore: document.getElementById('statScore').innerText,
      hudReward: document.getElementById('statReward').innerText,
      hudTimeLabel: document.getElementById('statTimeLabel').innerText,
      ballShell: !!(window.__marbleMaze && window.__marbleMaze.view.ballShell),
      ballMarker: !!(window.__marbleMaze && window.__marbleMaze.view.ballMarker),
      levelCards: document.querySelectorAll('#modal [data-action="level"]').length,
      unlockedCards: document.querySelectorAll('#modal [data-action="level"]:not(:disabled)').length,
      hudCheckpoints: document.getElementById('statCheckpoints').textContent,
      motionBtn: document.getElementById('btnTilt').textContent,
      hasMapToggle: !!document.getElementById('mapToggle'),
      hasFlash: !!document.getElementById('levelFlash'),
      persistent: window.__marbleMaze.game.records.persistent,
      qualityBtn: document.getElementById('btnQuality').textContent,
      qualityMode: window.__marbleMaze.quality.mode,
      qualityLevel: window.__marbleMaze.quality.level,
      qualityStats: window.__marbleMaze.view.stats(),
      staticDraws: window.__marbleMaze.ui.staticDraws,
      difficulty: window.__marbleMaze.game.difficulty,
      difficultyBtn: document.getElementById('btnDifficulty').textContent,
      difficultyChips: document.querySelectorAll('#modal [data-action="difficulty"]').length,
      joystick: !!document.getElementById('joystick'),
      mmSize: document.getElementById('minimap').width,
      goalBeam: !!(window.__marbleMaze && window.__marbleMaze.view.goalBeam),
      goalBeacon: !!(window.__marbleMaze && window.__marbleMaze.view.goalBeacon),
      goalToneMapped: window.__marbleMaze && window.__marbleMaze.view.mat.goalBeam.toneMapped,
      helpFoldOpen: (() => { const d = document.querySelector('#modal .help-fold'); return d ? d.open : null; })(),
      helpFoldText: (() => { const d = document.querySelector('#modal .help-fold'); return d ? d.textContent : ''; })(),
      startBtn: (() => { const b = document.querySelector('#modal [data-action="start"]'); return b ? b.className : ''; })(),
      modalScroll: document.getElementById('modal').scrollHeight,
      modalClient: document.getElementById('modal').clientHeight,
      startBtnVisible: (() => {
        const b = document.querySelector('#modal [data-action="start"]');
        const m = document.getElementById('modal');
        return !!b && b.getBoundingClientRect().bottom <= m.getBoundingClientRect().bottom + 1;
      })()
    };
  })()`);

  check('页面脚本完成初始化', init.hook === true, `状态 ${init.state}`);
  check('WebGL 上下文创建成功', init.webgl2 === true);
  check('画布按窗口尺寸自适应', init.canvasW > 800 && init.canvasH > 500,
    `${init.canvasW}x${init.canvasH} / CSS ${init.cssW}x${init.cssH}`);
  check('初始为菜单状态且关卡 1 已构建', init.state === 'menu' && init.level === 0 && init.walls > 0,
    `${init.walls} 段墙`);
  check('开始界面有内容', init.modal.includes('3D 弹珠迷宫'), init.modal.trim());
  check('HUD 初始值正确', init.hudLevel === '1 / 3' && init.hudLives.includes('♥'), `${init.hudLevel} / ${init.hudLives}`);
  check('开局总分为 0，预估奖励独立显示', init.hudScore === '0' && init.hudReward.includes('本关'),
    `总分 ${init.hudScore} / ${init.hudReward}`);
  check('无限时关标签为「计时」', init.hudTimeLabel === '计时', init.hudTimeLabel);
  check('弹珠轮廓壳与落点环已启用', init.ballShell && init.ballMarker);
  check('终点金色光柱与信标就位且不被色调映射压灰',
    init.goalBeam && init.goalBeacon && init.goalToneMapped === false,
    `光柱 ${init.goalBeam} / 信标 ${init.goalBeacon} / toneMapped ${init.goalToneMapped}`);
  check('第 1 关小地图逻辑分辨率为 220px', init.mmSize === 220, `${init.mmSize}px`);
  check('难度按钮与菜单三档选择器就位',
    init.difficulty === 'standard' && init.difficultyBtn.includes('标准')
    && init.difficultyChips === 3 && init.joystick,
    `${init.difficultyBtn} / ${init.difficultyChips} 档 / 摇杆 ${init.joystick}`);
  check('菜单提供 3 个选关卡片且初始仅第 1 关解锁',
    init.levelCards === 3 && init.unlockedCards === 1,
    `${init.levelCards} 张卡 / ${init.unlockedCards} 张可选`);
  check('HUD 增加检查点统计', /^0 \/ \d+$/.test(init.hudCheckpoints.trim()), init.hudCheckpoints);
  check('体感按钮、窄屏地图开关与切关过渡层就位',
    init.motionBtn === '体感 关' && init.hasMapToggle && init.hasFlash);
  check('HTTP 模式下成绩存储可持久化', init.persistent === true);
  check('画质按钮与视图档位接口就位',
    init.qualityBtn === '画质 自动' && init.qualityMode === 'auto'
    && ['high', 'medium', 'low'].includes(init.qualityLevel)
    && init.qualityStats.pixelRatioCap > 0,
    `${init.qualityBtn} / ${init.qualityLevel} / cap ${init.qualityStats.pixelRatioCap}`);
  check('菜单内容完整可见，开始按钮无需滚动',
    init.modalScroll <= init.modalClient + 2 && init.startBtnVisible,
    `内容 ${init.modalScroll}px / 可视 ${init.modalClient}px / 按钮可见 ${init.startBtnVisible}`);
  check('玩法与操作收进默认折叠的二级入口，主按钮样式醒目',
    init.helpFoldOpen === false && init.helpFoldText.includes('玩法与操作说明')
    && init.helpFoldText.includes('怎么玩') && init.helpFoldText.includes('操作')
    && init.startBtn.includes('btn-start'),
    `折叠态 ${init.helpFoldOpen} / 主按钮 ${init.startBtn}`);
  const foldToggle = await evalJS(`(() => {
    const d = document.querySelector('#modal .help-fold');
    d.open = true;
    const openOk = d.open && d.textContent.includes('W A S D / 方向键');
    d.open = false;
    return { openOk, closed: !d.open };
  })()`);
  check('折叠入口可展开查看操作说明并可再次收起',
    foldToggle.openOk && foldToggle.closed);
  // 无头 swiftshader 帧率偏低会触发自动降级，固定高档保证取证截图一致。
  await evalJS(`window.__marbleMaze.quality.setMode('high')`);
  await shot('shot-menu.png');

  const cacheProbe = await evalJS(`(() => {
    const h = window.__marbleMaze;
    const before = h.ui.staticDraws;
    for (let i = 0; i < 20; i++) h.ui.drawMinimap(h.game.level, h.game.marble, h.game.elapsed);
    const steady = h.ui.staticDraws;
    const sizeL1 = h.ui.mmBase.width;
    h.game.loadLevel(1);
    h.ui.drawMinimap(h.game.level, h.game.marble, h.game.elapsed);
    const sizeL2 = h.ui.mmBase.width;
    h.game.loadLevel(2);
    h.ui.drawMinimap(h.game.level, h.game.marble, h.game.elapsed);
    const sizeL3 = h.ui.mmBase.width;
    h.game.loadLevel(0);
    h.ui.drawMinimap(h.game.level, h.game.marble, h.game.elapsed);
    return {
      before, steady, afterSwitch: h.ui.staticDraws,
      base: !!h.ui.mmBase, walls: !!h.ui.mmWalls,
      sizeL1, sizeL2, sizeL3
    };
  })()`);
  check('小地图静态层只烘焙一次，连续 20 帧不重绘墙体',
    cacheProbe.base && cacheProbe.walls && cacheProbe.steady === cacheProbe.before,
    `烘焙 ${cacheProbe.before} → ${cacheProbe.steady} 次`);
  check('小地图逻辑分辨率随关卡尺寸递增',
    cacheProbe.sizeL1 === 220 && cacheProbe.sizeL2 > cacheProbe.sizeL1
    && cacheProbe.sizeL3 > cacheProbe.sizeL2 && cacheProbe.sizeL3 <= 320,
    `L1/L2/L3 ${cacheProbe.sizeL1} / ${cacheProbe.sizeL2} / ${cacheProbe.sizeL3}px`);
  check('切关时静态层按 level 引用与尺寸失效并重建',
    cacheProbe.afterSwitch === cacheProbe.steady + 3,
    `${cacheProbe.steady} → ${cacheProbe.afterSwitch}`);

  const diffProbe = await evalJS(`(async () => {
    const h = window.__marbleMaze;
    const g = h.game;
    const std = { gravity: g.cfg.gravity, tilt: g.cfg.tiltMax };
    document.querySelector('#modal [data-action="difficulty"][data-mode="relaxed"]').click();
    await new Promise((r) => setTimeout(r, 200));
    const relaxed = { gravity: g.cfg.gravity, tilt: g.cfg.tiltMax, mode: g.difficulty,
      label: document.getElementById('btnDifficulty').textContent,
      assist: !!document.querySelector('#modal .difficulty-row em') };
    const stored = JSON.parse(localStorage.getItem('marble-maze-3d.records.v1') || '{}').difficulty;
    document.querySelector('#modal [data-action="difficulty"][data-mode="standard"]').click();
    await new Promise((r) => setTimeout(r, 200));
    const back = { mode: g.difficulty, gravity: g.cfg.gravity, tilt: g.cfg.tiltMax };
    return { std, relaxed, stored, back };
  })()`);
  check('菜单切难度立即改变有效物理参数并持久化',
    diffProbe.relaxed.mode === 'relaxed'
    && diffProbe.relaxed.gravity < diffProbe.std.gravity
    && diffProbe.relaxed.tilt < diffProbe.std.tilt
    && diffProbe.relaxed.assist && diffProbe.stored === 'relaxed'
    && diffProbe.relaxed.label.includes('轻松'),
    `重力 ${diffProbe.std.gravity} → ${diffProbe.relaxed.gravity} / 存档 ${diffProbe.stored}`);
  check('切回标准档参数完全复原（后续断言零污染）',
    diffProbe.back.mode === 'standard'
    && diffProbe.back.gravity === diffProbe.std.gravity
    && diffProbe.back.tilt === diffProbe.std.tilt);
  const playLock = await evalJS(`(async () => {
    const h = window.__marbleMaze;
    h.game.start();
    const btn = document.getElementById('btnDifficulty');
    for (let i = 0; i < 30 && !btn.disabled; i++) {
      await new Promise((r) => setTimeout(r, 60));
    }
    const before = h.game.difficulty;
    const changed = h.game.setDifficulty('challenge');
    const disabled = document.getElementById('btnDifficulty').disabled;
    h.game.toMenu();
    return { before, changed, after: h.game.difficulty, disabledInPlay: disabled };
  })()`);
  check('难度只能在菜单切换，游玩中拒绝并显示禁用态',
    playLock.changed === false && playLock.after === 'standard'
    && playLock.disabledInPlay === true,
    JSON.stringify(playLock));

  await ensurePlaying();
  if ((await evalJS('window.__marbleMaze.game.state')) === 'menu') await tap('Enter', 'Enter', 13);
  await waitFor(`window.__marbleMaze.game.state === 'playing'`, 2500);
  const started = await evalJS(`({state: window.__marbleMaze.game.state, overlay: document.getElementById('overlay').className, x: window.__marbleMaze.game.marble.x})`);
  check('Enter 开始游戏', started.state === 'playing' && !started.overlay.includes('visible'));

  await ensurePlaying();
  const x0 = await evalJS('window.__marbleMaze.game.marble.x');
  await keyDown('ArrowRight', 'ArrowRight', 39);
  const rolled = await waitFor(`(window.__marbleMaze.game.marble.x > ${x0} + 0.08 && window.__marbleMaze.game.marble.vx > 0)`, 4000);
  const moved = await evalJS(`({x: window.__marbleMaze.game.marble.x, z: window.__marbleMaze.game.marble.z, vx: window.__marbleMaze.game.marble.vx, time: window.__marbleMaze.game.elapsed, status: document.getElementById('statusPill').innerText})`);
  await keyUp('ArrowRight', 'ArrowRight', 39);
  check('方向键驱动弹珠滚动', rolled && moved.x > x0 + 0.08 && moved.vx > 0,
    `x ${x0.toFixed(2)} -> ${moved.x.toFixed(2)}, vx ${moved.vx.toFixed(2)}`);
  const tiltGuide = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const first = g.records.hintSeen('tilt');
    const text = document.getElementById('toast').textContent;
    const again = g.hintOnce('tilt', '不应再弹');
    return { first, text, again };
  })()`);
  check('首次倾斜提示松手回正且只弹一次',
    tiltGuide.first && tiltGuide.text.includes('回正') && tiltGuide.again === false,
    `已记录 ${tiltGuide.first} / 提示「${tiltGuide.text}」/ 二次 ${tiltGuide.again}`);
  check('计时器在推进', moved.time > 0.2, `${moved.time.toFixed(2)}s`);
  check('状态提示同步', moved.status === '游戏中', moved.status);
  const scoreDuring = await evalJS(`document.getElementById('statScore').innerText`);
  check('游玩中总分不被预估奖励污染', scoreDuring === '0', `总分 ${scoreDuring}`);
  const fx = await evalJS(`(() => {
    const h = window.__marbleMaze;
    h.ui.shake();
    return {
      trail: h.ui.trail.length,
      shake: document.getElementById('app').classList.contains('shake'),
      flash: document.getElementById('levelFlash').classList.contains('play')
    };
  })()`);
  check('小地图轨迹缓冲已启用', fx.trail >= 1, `${fx.trail} 个采样点`);
  check('撞墙屏幕微震与切关淡入可触发', fx.shake && fx.flash,
    `shake=${fx.shake} / flash=${fx.flash}`);
  await shot('shot-playing.png');

  await ensurePlaying();
  await tap('KeyR', 'r', 82);
  await keyDown('ArrowRight', 'ArrowRight', 39);
  const fullOk = await waitFor(`(window.__marbleMaze.game.marble.targetZ < -0.20)`, 2500);
  const fullTilt = await evalJS('Math.abs(window.__marbleMaze.game.marble.targetZ)');
  await keyUp('ArrowRight', 'ArrowRight', 39);
  await keyDown('ShiftLeft', 'Shift', 16);
  await keyDown('ArrowRight', 'ArrowRight', 39);
  const fineOk = await waitFor(`(Math.abs(window.__marbleMaze.game.marble.targetZ) < 0.13 && Math.abs(window.__marbleMaze.game.marble.targetZ) > 0.05)`, 2500);
  const fineTilt = await evalJS('Math.abs(window.__marbleMaze.game.marble.targetZ)');
  const fineHint = await evalJS(`document.getElementById('tiltHint').innerText`);
  await keyUp('ArrowRight', 'ArrowRight', 39);
  await keyUp('ShiftLeft', 'Shift', 16);
  check('Shift 精细档把倾角减至 42%', fullOk && fineOk && fineTilt < fullTilt * 0.55,
    `${fullTilt.toFixed(3)} -> ${fineTilt.toFixed(3)}`);
  check('精细档有可见界面提示', fineHint.includes('精细模式'), fineHint);

  await tap('KeyP', 'p', 80);
  const pausedOk = await waitFor(`window.__marbleMaze.game.state === 'paused'`, 2000, false);
  const paused = await evalJS(`({state: window.__marbleMaze.game.state, modal: document.getElementById('modal').innerText.slice(0, 20)})`);
  check('P 键暂停并弹出提示', pausedOk && paused.state === 'paused' && paused.modal.includes('已暂停'), paused.modal.trim());
  await tap('KeyP', 'p', 80);
  const resumed = await waitFor(`window.__marbleMaze.game.state === 'playing'`, 2000, false);
  check('P 键恢复', resumed);

  await ensurePlaying();
  await tap('KeyR', 'r', 82);
  await sleep(250);
  const restarted = await evalJS(`({x: window.__marbleMaze.game.marble.x, z: window.__marbleMaze.game.marble.z, time: window.__marbleMaze.game.elapsed, startX: window.__marbleMaze.game.level.start.x, startZ: window.__marbleMaze.game.level.start.z})`);
  check('R 键重开本关并复位弹珠',
    Math.abs(restarted.x - restarted.startX) < 0.2 && Math.abs(restarted.z - restarted.startZ) < 0.2 && restarted.time < 1.0,
    `(${restarted.x.toFixed(2)}, ${restarted.z.toFixed(2)})`);

  await ensurePlaying();
  const clear = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.marble.x = g.level.goal.x;
    g.marble.z = g.level.goal.z;
    g.marble.vx = 0; g.marble.vz = 0;
    return true;
  })()`);
  const clearedOk = await waitFor(`window.__marbleMaze.game.state === 'levelclear'`, 3500);
  const cleared = await evalJS(`({
    state: window.__marbleMaze.game.state,
    modal: document.getElementById('modal').innerText.slice(0, 30),
    score: window.__marbleMaze.game.score,
    hudScore: document.getElementById('statScore').innerText,
    hudReward: document.getElementById('statReward').innerText,
    breakdown: document.querySelector('#modal .breakdown') ? document.querySelector('#modal .breakdown').innerText : '',
    starBlocks: document.querySelectorAll('#modal .stars').length,
    badge: document.querySelector('#modal .record-flag') ? document.querySelector('#modal .record-flag').innerText : '',
    lastStars: window.__marbleMaze.game.lastStars,
    unlocked: window.__marbleMaze.game.records.unlocked,
    bestTime: window.__marbleMaze.game.records.best(1) ? window.__marbleMaze.game.records.best(1).time : -1,
    stored: (() => { try { return !!localStorage.getItem('marble-maze-3d.records.v1'); } catch (_) { return false; } })()
  })`);
  check('抵达终点触发通关结算', clear && clearedOk && cleared.state === 'levelclear' && cleared.score > 0,
    `${cleared.modal.trim()} / 得分 ${cleared.score}`);
  check('通关后总分只累加一次', cleared.hudScore === String(cleared.score) && cleared.hudReward.includes('已结算'),
    `总分 ${cleared.hudScore} / ${cleared.hudReward}`);
  check('结算弹窗给出逐项分数明细',
    ['基础分', '用时扣除', '碰撞扣除', '宝石奖励', '时间奖励'].every((k) => cleared.breakdown.includes(k)));
  check('通关结算显示星级与首次通关记录',
    cleared.starBlocks >= 1 && cleared.lastStars >= 1 && cleared.lastStars <= 3
    && cleared.badge.includes('首次通关'),
    `${cleared.lastStars} 星 / ${cleared.badge.trim()}`);
  check('最佳成绩写入本地存储并解锁下一关',
    cleared.stored && cleared.unlocked === 2 && cleared.bestTime > 0,
    `解锁 ${cleared.unlocked} / 最佳 ${cleared.bestTime.toFixed(2)}s`);
  await shot('shot-levelclear.png');

  await tap('Enter', 'Enter', 13);
  const nextOk = await waitFor(`(window.__marbleMaze.game.levelIndex === 1 && window.__marbleMaze.game.state === 'playing')`, 3500);
  const next = await evalJS(`({
    state: window.__marbleMaze.game.state,
    level: window.__marbleMaze.game.levelIndex,
    cols: window.__marbleMaze.game.level.cols,
    holes: window.__marbleMaze.game.level.holes.length,
    timeLabel: document.getElementById('statTimeLabel').innerText,
    hudScore: document.getElementById('statScore').innerText
  })`);
  check('进入第 2 关且难度递增', nextOk && next.level === 1 && next.cols === 10 && next.holes === 4,
    `${next.cols}x${next.cols}, ${next.holes} 个空洞`);
  check('限时关标签改为「剩余」且总分延续', next.timeLabel === '剩余' && next.hudScore === String(cleared.score),
    `${next.timeLabel} / 总分 ${next.hudScore}`);

  await ensurePlaying();
  const cpInfo = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const cp = g.level.checkpoints[0];
    g.marble.x = cp.x; g.marble.z = cp.z;
    g.marble.vx = 0; g.marble.vz = 0;
    g.elapsed = 12.5; g.hits = 3; g.gemsGot = 1;
    return { x: cp.x, z: cp.z, total: g.level.checkpoints.length };
  })()`);
  const cpOk = await waitFor(`window.__marbleMaze.game.level.checkpoints[0].active === true`, 2500);
  const cpView = await evalJS(`({
    active: window.__marbleMaze.game.level.checkpoints[0].active,
    pillar: window.__marbleMaze.view.checkpointMeshes[0].pillar.visible,
    hud: document.getElementById('statCheckpoints').innerText,
    meshes: window.__marbleMaze.view.checkpointMeshes.length
  })`);
  check('经过检查点激活并同步 3D 光柱与 HUD',
    cpOk && cpView.active && cpView.pillar && cpView.meshes === cpInfo.total
    && cpView.hud.trim().startsWith('1'),
    `${cpView.hud.trim()} / ${cpView.meshes} 个检查点`);
  const cpGuide = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    return { seen: g.records.hintSeen('checkpoint'), again: g.hintOnce('checkpoint', '不该弹') };
  })()`);
  check('检查点机制讲解只弹一次', cpGuide.seen && cpGuide.again === false);

  const fall = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const h = g.level.holes[0];
    if (!h) return false;
    g.marble.x = h.x; g.marble.z = h.z; g.marble.vx = 0; g.marble.vz = 0;
    return true;
  })()`);
  const failedOk = await waitFor(`(window.__marbleMaze.game.state === 'failed' || window.__marbleMaze.game.state === 'gameover')`, 5500);
  const failedState = await evalJS(`({state: window.__marbleMaze.game.state, lives: window.__marbleMaze.game.lives, modal: document.getElementById('modal').innerText.slice(0, 30)})`);
  check('掉入空洞触发失败与扣生命', fall && failedOk && failedState.lives === 2,
    `${failedState.modal.trim()} / 剩余 ${failedState.lives}`);

  const failedUi = await evalJS(`({
    actions: Array.from(document.querySelectorAll('#modal [data-action]')).map(b => b.dataset.action).join(','),
    hudScore: document.getElementById('statScore').innerText,
    hudReward: document.getElementById('statReward').innerText
  })`);
  check('失败弹窗按钮语义去重（重试 / 返回主菜单）', failedUi.actions === 'retry,menu', failedUi.actions);
  check('失败不结算本关奖励、总分不跳变',
    failedUi.hudScore === String(cleared.score) && failedUi.hudReward.includes('本关 +'),
    `总分 ${failedUi.hudScore} / ${failedUi.hudReward}`);
  const failedText = await evalJS(`document.getElementById('modal').innerText`);
  check('已激活检查点时失败弹窗提示就地复活',
    failedText.includes('从检查点复活') && failedText.includes('保留本关用时'));

  await evalJS(`document.querySelector('#modal [data-action="retry"]').click()`);
  const respOk = await waitFor(`window.__marbleMaze.game.state === 'playing'`, 2500, false);
  const resp = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    return {
      x: g.marble.x, z: g.marble.z, elapsed: g.elapsed, hits: g.hits,
      gemsGot: g.gemsGot, lives: g.lives, cpActive: g.level.checkpoints[0].active
    };
  })()`);
  check('失败后从检查点复活且保留本关用时 / 碰撞 / 宝石',
    respOk && resp.cpActive && resp.lives === 2
    && Math.abs(resp.x - cpInfo.x) < 0.35 && Math.abs(resp.z - cpInfo.z) < 0.35
    && resp.elapsed >= 12.5 && resp.hits === 3 && resp.gemsGot === 1,
    `位置 (${resp.x.toFixed(2)}, ${resp.z.toFixed(2)}) / 用时 ${resp.elapsed.toFixed(1)}s / 碰撞 ${resp.hits}`);

  await tap('KeyR', 'r', 82);
  await sleep(260);
  const hardRestart = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    return {
      cpActive: g.level.checkpoints[0].active,
      x: g.marble.x, z: g.marble.z,
      startX: g.level.start.x, startZ: g.level.start.z, elapsed: g.elapsed
    };
  })()`);
  check('主动 R 重开回到起点并清空检查点',
    !hardRestart.cpActive && hardRestart.elapsed < 1.0
    && Math.abs(hardRestart.x - hardRestart.startX) < 0.2
    && Math.abs(hardRestart.z - hardRestart.startZ) < 0.2,
    `检查点 ${hardRestart.cpActive} / 用时 ${hardRestart.elapsed.toFixed(2)}s`);

  await ensurePlaying();
  await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const h = g.level.holes[0];
    g.marble.x = h.x; g.marble.z = h.z; g.marble.vx = 0; g.marble.vz = 0;
    return true;
  })()`);
  const failedTwice = await waitFor(
    `(window.__marbleMaze.game.state === 'failed' || window.__marbleMaze.game.state === 'gameover')`, 5500);
  check('二次失败仍进入失败流程', failedTwice);

  await evalJS(`document.querySelector('#modal [data-action="menu"]').click()`);
  const menuOk = await waitFor(`window.__marbleMaze.game.state === 'menu'`, 2500, false);
  const backToMenu = await evalJS(`({state: window.__marbleMaze.game.state, level: window.__marbleMaze.game.levelIndex, score: window.__marbleMaze.game.score})`);
  check('返回主菜单重置整局进度', menuOk && backToMenu.level === 0 && backToMenu.score === 0,
    `第 ${backToMenu.level + 1} 关 / 总分 ${backToMenu.score}`);

  const menuRec = await evalJS(`({
    cards: document.querySelectorAll('#modal [data-action="level"]').length,
    enabled: document.querySelectorAll('#modal [data-action="level"]:not(:disabled)').length,
    best: document.querySelector('#modal .lc-best') ? document.querySelector('#modal .lc-best').innerText : '',
    section: document.querySelector('#modal .modal-section-title') ? document.querySelector('#modal .modal-section-title').innerText : ''
  })`);
  check('通关后菜单显示最佳成绩与累计星级、解锁第 2 关',
    menuRec.cards === 3 && menuRec.enabled === 2
    && menuRec.best.includes('最佳') && menuRec.section.includes('累计'),
    `${menuRec.enabled} 关可选 / ${menuRec.best.trim()} / ${menuRec.section.trim()}`);
  await evalJS(`document.querySelector('#modal [data-action="level"][data-level="1"]').click()`);
  const picked = await waitFor(
    `(window.__marbleMaze.game.levelIndex === 1 && window.__marbleMaze.game.state === 'playing')`, 2500, false);
  const pickedState = await evalJS(`({
    level: window.__marbleMaze.game.levelIndex,
    score: window.__marbleMaze.game.score,
    state: window.__marbleMaze.game.state
  })`);
  check('选关可直接进入已解锁关卡并按新一局计分',
    picked && pickedState.level === 1 && pickedState.score === 0,
    `第 ${pickedState.level + 1} 关 / 总分 ${pickedState.score}`);

  // AI 实验室：输入框里打字归文本编辑，不能被游戏快捷键抢走
  // （回归用例：空格被 preventDefault 吞掉、回车触发 advance() 把弹窗关掉并直接开局）
  await evalJS(`window.__marbleMaze.game.toMenu()`);
  await sleep(150);
  await evalJS(`document.querySelector('#modal [data-action="ai-lab"]').click()`);
  const labOpen = await waitFor(`window.__marbleMaze.ui.overlayType === 'ailab'`, 2500, false);
  await evalJS(`(() => { const el = document.getElementById('aiPrompt'); el.focus(); return document.activeElement.id; })()`);
  const typeChar = async (ch) => {
    const code = ch === ' ' ? 'Space' : `Key${ch.toUpperCase()}`;
    const vk = ch === ' ' ? 32 : ch.toUpperCase().charCodeAt(0);
    await send('Input.dispatchKeyEvent', {
      type: 'keyDown', key: ch, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk,
      text: ch, unmodifiedText: ch
    });
    await send('Input.dispatchKeyEvent', {
      type: 'keyUp', key: ch, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk
    });
  };
  for (const ch of ['n', 'a', ' ', 'd']) await typeChar(ch);
  const typed = await evalJS(`({
    state: window.__marbleMaze.game.state,
    overlay: window.__marbleMaze.ui.overlayType,
    visible: document.getElementById('overlay').classList.contains('visible'),
    value: document.getElementById('aiPrompt').value
  })`);
  check('AI 输入框内空格不被吞、弹窗不关闭、状态不跳转',
    labOpen && typed.state === 'menu' && typed.overlay === 'ailab' && typed.visible && typed.value === 'na d',
    `输入值「${typed.value}」/ ${typed.state} / 弹窗 ${typed.visible}`);

  await send('Input.dispatchKeyEvent', {
    type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13, text: '\r'
  });
  await send('Input.dispatchKeyEvent', {
    type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13
  });
  await sleep(150);
  const afterEnter = await evalJS(`({
    state: window.__marbleMaze.game.state,
    overlay: window.__marbleMaze.ui.overlayType,
    lines: document.getElementById('aiPrompt').value.split('\\n').length
  })`);
  check('AI 输入框内回车只换行，不触发开局',
    afterEnter.state === 'menu' && afterEnter.overlay === 'ailab' && afterEnter.lines === 2,
    `${afterEnter.state} / ${afterEnter.lines} 行`);

  await send('Input.dispatchKeyEvent', {
    type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13,
    modifiers: 2, text: '\r'
  });
  await send('Input.dispatchKeyEvent', {
    type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13, modifiers: 2
  });
  const designed = await waitFor(`window.__marbleMaze.game.state === 'playing'`, 6000, false);
  const lab = await evalJS(`({
    state: window.__marbleMaze.game.state,
    name: window.__marbleMaze.game.aiLevel ? window.__marbleMaze.game.aiLevel.name : '',
    overlay: document.getElementById('overlay').className
  })`);
  check('Ctrl + Enter 一键生成并开玩定制关卡',
    designed && lab.state === 'playing' && !!lab.name && !lab.overlay.includes('visible'),
    `${lab.name} / ${lab.state}`);
  await evalJS(`window.__marbleMaze.game.toMenu()`);
  await sleep(200);

  // 赛中教练：失败瞬间在失败弹窗里给出针对本局的具体诊断
  // 第 1 关没有空洞，这里用第 2 关（4 个空洞）触发真实坠落。
  const fellForCoach = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.start(1);
    const h = g.level.holes[0];
    if (!h) return false;
    g.marble.x = h.x; g.marble.z = h.z; g.marble.vx = 0; g.marble.vz = 0;
    return true;
  })()`);
  const coachShown = await waitFor(
    `(window.__marbleMaze.game.state === 'failed'
      && !!document.getElementById('aiCoachLive')
      && document.getElementById('aiCoachLive').querySelectorAll('.ai-coach-row').length > 0)`,
    7000, false);
  const coachBox = await evalJS(`(() => {
    const box = document.getElementById('aiCoachLive');
    return {
      rows: box ? box.querySelectorAll('.ai-coach-row').length : 0,
      text: box ? box.innerText.replace(/\\n/g, ' / ') : '',
      zone: window.__marbleMaze.game.buildTelemetry('fail').zone,
      overlay: window.__marbleMaze.ui.overlayType
    };
  })()`);
  check('失败弹窗内出现赛中 AI 教练诊断并点名方位',
    fellForCoach && coachShown && coachBox.rows >= 1 && coachBox.overlay === 'failed'
    && coachBox.zone.length >= 2,
    `${coachBox.zone} · ${coachBox.text.slice(0, 52)}`);

  // 分享码：AI 生成 → 短码可复现 → 地址栏直接开局同一座迷宫
  await evalJS(`window.__marbleMaze.game.toMenu()`);
  const shared = await evalJS(`(async () => {
    const g = window.__marbleMaze.game;
    await g.designLevel('简单一点，多放宝石');
    return {
      code: g.shareCode,
      link: window.__marbleMaze.shareLink(),
      seed: g.cfg.seed,
      walls: g.level.walls.length,
      name: g.cfg.name
    };
  })()`);
  check('AI 生成关卡自动产出可分享短码',
    shared.code.length > 20 && shared.link.startsWith('http')
    && shared.link.includes('#l=' + shared.code),
    `${shared.code.length} 字符 · ${shared.code.slice(0, 10)}…`);

  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/?from=share#l=${shared.code}` });
  await send('Page.bringToFront');
  const shareReady = await waitFor(`!!(window.__marbleMaze && window.__marbleMaze.game)`, 12000, false);
  const replayed = await waitFor(`window.__marbleMaze.game.state === 'playing'`, 8000, false);
  const replay = await evalJS(`({
    seed: window.__marbleMaze.game.cfg.seed,
    walls: window.__marbleMaze.game.level.walls.length,
    name: window.__marbleMaze.game.cfg.name,
    overlay: document.getElementById('overlay').className
  })`);
  check('打开分享链接直接复现同一座迷宫',
    shareReady && replayed && replay.seed === shared.seed
    && replay.walls === shared.walls && !replay.overlay.includes('visible'),
    `${replay.name} · ${replay.walls} 段墙`);

  // ---- v1.4：AI 演示模式（自动试玩 Agent 代打，玩家随时接管） ----
  const demoProbe = await evalJS(`(async () => {
    const g = window.__marbleMaze.game;
    const btn = document.getElementById('btnDemo');
    const entryVisible = !btn.hidden;
    // 模拟已见过倾斜引导的老玩家：避免首次倾斜提示覆盖接管 toast。
    g.records.markHint('tilt');
    g.tiltHintDone = true;
    const timeBefore = g.records.playTime;
    const clearsBefore = g.records.clearCount;
    const started = g.startDemo();
    const demoOn = g.demo && !!g.autopilot;
    const x0 = g.marble.x, z0 = g.marble.z;
    const t0 = Date.now();
    while (Date.now() - t0 < 5000) {
      if (g.autopilot && g.autopilot.steps > 60
        && Math.hypot(g.marble.x - x0, g.marble.z - z0) > 0.4) break;
      await new Promise((r) => setTimeout(r, 80));
    }
    return {
      entryVisible, started, demoOn,
      moved: Math.hypot(g.marble.x - x0, g.marble.z - z0),
      steps: g.autopilot ? g.autopilot.steps : 0,
      label: btn.textContent,
      timeBefore, timeDuring: g.records.playTime, clearsBefore,
      pill: document.getElementById('statusPill').innerText
    };
  })()`);
  check('定制关卡显示 AI 演示入口，启动后 Agent 实际驱动弹珠',
    demoProbe.entryVisible && demoProbe.started && demoProbe.demoOn
    && demoProbe.moved > 0.4 && demoProbe.steps > 60
    && demoProbe.label === '停止演示' && demoProbe.pill === 'AI 演示中',
    `位移 ${demoProbe.moved.toFixed(2)} / ${demoProbe.steps} 步 / ${demoProbe.label}`);
  check('演示模式不记录生涯游玩时长',
    demoProbe.timeDuring === demoProbe.timeBefore,
    `${demoProbe.timeBefore.toFixed(2)}s -> ${demoProbe.timeDuring.toFixed(2)}s`);

  await keyDown('ArrowRight', 'ArrowRight', 39);
  const takeoverReady = await waitFor(
    `window.__marbleMaze.game.demo === false && document.getElementById('toast').textContent.includes('已接管')`,
    2000, false);
  const takeover = await evalJS(`({demo: window.__marbleMaze.game.demo, toast: document.getElementById('toast').textContent})`);
  await keyUp('ArrowRight', 'ArrowRight', 39);
  check('玩家键盘输入立即接管演示，AI 退场',
    takeoverReady && takeover.demo === false && takeover.toast.includes('已接管'), takeover.toast);

  const demoFinish = await evalJS(`(async () => {
    const g = window.__marbleMaze.game;
    g.startDemo();
    g.marble.x = g.level.goal.x; g.marble.z = g.level.goal.z;
    g.marble.vx = 0; g.marble.vz = 0;
    const t0 = Date.now();
    while (Date.now() - t0 < 3000 && g.demo) await new Promise((r) => setTimeout(r, 60));
    return {
      demo: g.demo, state: g.state,
      toast: document.getElementById('toast').textContent,
      clears: g.records.clearCount,
      atStart: Math.hypot(g.marble.x - g.level.start.x, g.marble.z - g.level.start.z) < 0.3
    };
  })()`);
  check('演示抵达终点展示 Agent 成绩并回起点，不结算不计数',
    !demoFinish.demo && demoFinish.state === 'playing'
    && demoFinish.toast.includes('AI 演示通关') && demoFinish.toast.includes('步决策')
    && demoFinish.clears === demoProbe.clearsBefore && demoFinish.atStart,
    demoFinish.toast);

  const mainReject = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.toMenu(); g.start(0);
    const rejected = g.startDemo() === false && !g.demo;
    const btnHidden = document.getElementById('btnDemo').hidden;
    g.toMenu();
    return { rejected, btnHidden };
  })()`);
  check('主线关卡不暴露 AI 演示入口且拒绝启动',
    mainReject.rejected && mainReject.btnHidden);

  // ---- v1.4：每日挑战（日期种子全球同图，成绩与主线隔离） ----
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const dailyMenu = await evalJS(`(() => {
    const b = document.querySelector('#modal [data-action="daily"]');
    const m = document.getElementById('modal');
    return {
      exists: !!b,
      text: b ? b.innerText.replace(/\\n/g, ' ') : '',
      scroll: m.scrollHeight, client: m.clientHeight,
      unlocked: window.__marbleMaze.game.records.unlocked
    };
  })()`);
  check('菜单展示每日挑战入口（含今日日期）且不破坏高度预算',
    dailyMenu.exists && dailyMenu.text.includes(todayKey)
    && dailyMenu.scroll <= dailyMenu.client + 2,
    `${dailyMenu.text.slice(0, 40)} / 内容 ${dailyMenu.scroll}px / 可视 ${dailyMenu.client}px`);

  await evalJS(`document.querySelector('#modal [data-action="daily"]').click()`);
  const dailyStarted = await waitFor(
    `(window.__marbleMaze.game.state === 'playing' && !!window.__marbleMaze.game.cfg.daily)`, 3000, false);
  const dailyCfg = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    return { daily: g.cfg.daily, id: g.cfg.id, cols: g.level.cols,
      demoBtn: !document.getElementById('btnDemo').hidden };
  })()`);
  check('每日挑战以日期种子开局且提供 AI 演示入口',
    dailyStarted && dailyCfg.daily === todayKey && dailyCfg.id === 8000
    && dailyCfg.cols === 10 && dailyCfg.demoBtn,
    `${dailyCfg.daily} / ${dailyCfg.cols}x${dailyCfg.cols}`);

  await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.marble.x = g.level.goal.x; g.marble.z = g.level.goal.z;
    g.marble.vx = 0; g.marble.vz = 0;
    return true;
  })()`);
  const dailyClearOk = await waitFor(`window.__marbleMaze.game.state === 'levelclear'`, 3500);
  const dailyClear = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const m = document.getElementById('modal');
    const btns = m.querySelectorAll('.modal-btns button');
    const last = btns[btns.length - 1];
    const raw = JSON.parse(localStorage.getItem('marble-maze-3d.records.v1') || '{}');
    return {
      title: m.querySelector('h1') ? m.querySelector('h1').innerText : '',
      flag: m.querySelector('.record-flag') ? m.querySelector('.record-flag').innerText : '',
      dailyBest: g.records.dailyBest(g.cfg.daily),
      mainBest: g.records.best(8000),
      unlocked: g.records.unlocked,
      dailyKeys: raw.daily ? Object.keys(raw.daily) : [],
      hasDemoBtn: !!m.querySelector('[data-action="demo"]'),
      btnBottom: last ? last.getBoundingClientRect().bottom : 0,
      modalBottom: m.getBoundingClientRect().bottom,
      card: g.scoreCardText()
    };
  })()`);
  check('每日通关写当日成绩，不写主线榜单也不解锁',
    dailyClearOk && dailyClear.title === '每日挑战完成'
    && dailyClear.flag.includes('今日首次完成') && !!dailyClear.dailyBest
    && dailyClear.mainBest === null && dailyClear.unlocked === dailyMenu.unlocked
    && dailyClear.dailyKeys.join(',') === todayKey,
    `${dailyClear.title} / ${dailyClear.flag} / 解锁 ${dailyClear.unlocked}`);
  check('每日结算页提供「看 AI 演示」且按钮完整可见',
    dailyClear.hasDemoBtn && dailyClear.btnBottom <= dailyClear.modalBottom + 2,
    `按钮底 ${dailyClear.btnBottom.toFixed(0)} / 弹窗底 ${dailyClear.modalBottom.toFixed(0)}`);
  check('成绩卡附每日最佳成绩行',
    dailyClear.card.includes('每日挑战 ' + todayKey),
    dailyClear.card.split('\n').find((s) => s.includes('每日挑战')) || '');

  await evalJS(`document.querySelector('#modal [data-action="demo"]').click()`);
  const demoFromClear = await waitFor(
    `(window.__marbleMaze.game.demo === true && window.__marbleMaze.game.state === 'playing')`, 2500, false);
  check('结算页「看 AI 演示」可直接启动 Agent 重放', demoFromClear);
  await evalJS(`window.__marbleMaze.game.stopDemo()`);

  // 无障碍与降级：弹窗语义、状态播报、减少动态效果
  const aria = await evalJS(`({
    dialog: document.getElementById('overlay').getAttribute('role'),
    modal: document.getElementById('overlay').getAttribute('aria-modal'),
    live: document.getElementById('statusPill').getAttribute('aria-live'),
    toastLive: document.getElementById('toast').getAttribute('aria-live'),
    map: document.getElementById('minimap').getAttribute('role')
  })`);
  check('弹窗与状态区具备无障碍语义',
    aria.dialog === 'dialog' && aria.modal === 'true'
    && aria.live === 'polite' && aria.toastLive === 'polite' && aria.map === 'img',
    `role=${aria.dialog} / aria-live=${aria.live}`);

  await send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-motion', value: 'reduce' }]
  });
  await sleep(120);
  const reducedMotion = await evalJS(
    `getComputedStyle(document.getElementById('levelFlash')).display`);
  await send('Emulation.setEmulatedMedia', { features: [] });
  check('系统要求减少动态效果时关闭切场闪白', reducedMotion === 'none', reducedMotion);

  await sleep(200);
  const httpErrors = errors.length;
  check('HTTP 模式下控制台无错误', httpErrors === 0, errors.slice(0, 2).join(' | ') || '无');

  const fileUrl = 'file:///' + encodeURI(path.join(root, 'index.html').replace(/\\/g, '/'));
  await send('Page.navigate', { url: fileUrl });
  await sleep(2600);
  const fileInit = await evalJS(`(() => {
    const c = document.getElementById('scene');
    const g = window.__marbleMaze && window.__marbleMaze.game;
    return {
      hook: !!window.__marbleMaze, state: g && g.state,
      webgl2: !!c.getContext('webgl2'), walls: g && g.level.walls.length,
      modal: document.getElementById('modal').innerText.slice(0, 20)
    };
  })()`);
  check('file:// 双击打开即可运行（无需服务器）',
    fileInit.hook === true && fileInit.state === 'menu' && fileInit.webgl2 === true && fileInit.walls > 0,
    `${fileInit.state} / ${fileInit.walls} 段墙 / ${fileInit.modal.trim()}`);
  const fileErrors = errors.length - httpErrors;
  check('file:// 模式下控制台无错误', fileErrors === 0, errors.slice(httpErrors, httpErrors + 2).join(' | ') || '无');

  await evalJS(`window.__marbleMaze.game.start(); window.__marbleMaze.game.nextLevel()`);
  await sleep(700);
  const l2Mech = await evalJS(`({
    level: window.__marbleMaze.game.levelIndex,
    boosts: window.__marbleMaze.game.level.boosts.length,
    meshes: window.__marbleMaze.view.boostMeshes.length,
    ice: window.__marbleMaze.game.level.iceZones.length
  })`);
  check('第 2 关生成 3 条加速带并同步 3D 箭头',
    l2Mech.level === 1 && l2Mech.boosts === 3 && l2Mech.meshes === 3 && l2Mech.ice === 0,
    `${l2Mech.boosts} 条加速带 / ${l2Mech.meshes} 个箭头`);
  const boostHit = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const b = g.level.boosts[0];
    g.marble.respawn(b);
    const ev = g.marble.step(1 / 120, g.cfg);
    return { evBoost: ev.boost, proj: g.marble.vx * b.dirX + g.marble.vz * b.dirZ };
  })()`);
  check('加速带在浏览器内实际给出定向冲量',
    boostHit.evBoost === 0 && boostHit.proj > 1.5,
    `投影速度 ${boostHit.proj.toFixed(2)}`);
  const boostGuide = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.handleEvents({ hits: 0, fell: -1, hazard: -1, gems: [], goal: false, boost: 0, checkpoint: -1, ice: false });
    const seen = g.records.hintSeen('boost');
    const text = document.getElementById('toast').textContent;
    const again = g.hintOnce('boost', '不该弹');
    return { seen, text, again };
  })()`);
  check('加速带机制讲解只弹一次',
    boostGuide.seen && boostGuide.text.includes('加速带') && boostGuide.again === false,
    `提示「${boostGuide.text}」/ 二次 ${boostGuide.again}`);

  await evalJS(`window.__marbleMaze.game.nextLevel()`);
  await sleep(1600);
  const l3Mech = await evalJS(`({
    level: window.__marbleMaze.game.levelIndex,
    ice: window.__marbleMaze.game.level.iceZones.length,
    iceMeshes: window.__marbleMaze.view.iceMeshes.length,
    boosts: window.__marbleMaze.game.level.boosts.length,
    checkpoints: window.__marbleMaze.game.level.checkpoints.length,
    cpMeshes: window.__marbleMaze.view.checkpointMeshes.length
  })`);
  check('第 3 关生成冰面 / 加速带 / 检查点且 3D 对象齐备',
    l3Mech.level === 2 && l3Mech.ice === 4 && l3Mech.iceMeshes === 4
    && l3Mech.boosts === 3 && l3Mech.checkpoints === 2 && l3Mech.cpMeshes === 2,
    `冰面 ${l3Mech.ice} / 加速 ${l3Mech.boosts} / 检查点 ${l3Mech.checkpoints}`);
  const iceHit = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const z = g.level.iceZones[0];
    g.marble.respawn(z);
    const ev = g.marble.step(1 / 120, g.cfg);
    return { evIce: ev.ice, flag: g.marble.onIce };
  })()`);
  check('冰面在浏览器内生效（低摩擦标记）', iceHit.evIce === true && iceHit.flag === true);
  const iceGuide = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.handleEvents({ hits: 0, fell: -1, hazard: -1, gems: [], goal: false, boost: -1, checkpoint: -1, ice: true });
    const seen = g.records.hintSeen('ice');
    const text = document.getElementById('toast').textContent;
    return { seen, text, again: g.hintOnce('ice', '不该弹') };
  })()`);
  check('冰面机制讲解只弹一次',
    iceGuide.seen && iceGuide.text.includes('冰面') && iceGuide.again === false,
    `提示「${iceGuide.text}」/ 二次 ${iceGuide.again}`);
  // 用当前源自包含的写入→读回验证持久化：HTTP 与 file:// 是不同源，
  // 前面积累的 tilt/checkpoint 在另一源里，不能跨源断言。
  const persistedHints = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const before = g.records.hintSeen('goal');
    const first = g.records.markHint('goal');
    const raw = JSON.parse(localStorage.getItem('marble-maze-3d.records.v1') || '{}');
    const inStore = !!(raw.hints && raw.hints.goal === true);
    return { before, first, inStore, keys: raw.hints ? Object.keys(raw.hints).sort().join(',') : '' };
  })()`);
  check('一次性引导状态立即写入存档并可回读',
    persistedHints.before === false && persistedHints.first === true
    && persistedHints.inStore === true,
    persistedHints.keys);
  const particles = await evalJS(`(() => {
    const v = window.__marbleMaze.view;
    v.burstGoal();
    return { has: !!v.goalParticles, n: v.particleVel.length, life: v.particleLife };
  })()`);
  check('通关终点粒子可触发', particles.has && particles.n > 20 && particles.life > 0,
    `${particles.n} 个粒子`);

  const clearPage = await evalJS(`(() => {
    const h = window.__marbleMaze;
    const g = h.game;
    // 直接触发最后一关结算，检查全通关页结构。
    g.marble.x = g.level.goal.x; g.marble.z = g.level.goal.z;
    g.clearLevel();
    const modal = document.getElementById('modal');
    return {
      state: g.state,
      title: modal.querySelector('.clear-title') ? modal.querySelector('.clear-title').innerText : '',
      rows: modal.querySelectorAll('.review-row').length,
      cardLen: modal.querySelector('#scoreCard') ? modal.querySelector('#scoreCard').value.length : 0,
      hasCopy: !!modal.querySelector('[data-action="copy-card"]')
    };
  })()`);
  check('全通关页显示称号、三关回顾与成绩卡',
    clearPage.state === 'gameclear' && clearPage.title.length > 0
    && clearPage.rows === 3 && clearPage.cardLen > 40 && clearPage.hasCopy,
    `称号「${clearPage.title}」/ ${clearPage.rows} 关回顾 / 卡片 ${clearPage.cardLen} 字`);
  const clearVisible = await evalJS(`(() => {
    const m = document.getElementById('modal');
    const btns = m.querySelectorAll('.modal-btns button');
    const last = btns[btns.length - 1];
    return {
      scroll: m.scrollHeight, client: m.clientHeight,
      btnBottom: last ? last.getBoundingClientRect().bottom : 0,
      modalBottom: m.getBoundingClientRect().bottom
    };
  })()`);
  check('全通关页按钮在弹窗内完整可见，无需滚动',
    clearVisible.btnBottom <= clearVisible.modalBottom + 2,
    `按钮底 ${clearVisible.btnBottom.toFixed(0)} / 弹窗底 ${clearVisible.modalBottom.toFixed(0)}`
    + ` / 内容 ${clearVisible.scroll}px`);
  const copied = await evalJS(`(async () => {
    const h = window.__marbleMaze;
    let captured = '';
    if (navigator.clipboard) {
      try {
        const orig = navigator.clipboard.writeText;
        navigator.clipboard.writeText = (t) => { captured = t; return Promise.resolve(); };
        await h.copyScoreCard();
        navigator.clipboard.writeText = orig;
      } catch (_) { /* 用回退路径 */ }
    }
    return { captured, toast: document.getElementById('toast').textContent };
  })()`);
  check('复制成绩卡可写出文本并给出反馈',
    copied.captured.includes('3D 弹珠迷宫') && copied.toast.includes('复制'),
    `捕获 ${copied.captured.length} 字 / 提示「${copied.toast}」`);

  const camL3 = await evalJS(`({
    d: window.__marbleMaze.view.camera.position.length(),
    span: window.__marbleMaze.view.span,
    level: window.__marbleMaze.game.levelIndex
  })`);
  const camBase = camL3.span * 1.15 + 5.5;
  check('大关卡相机自动拉远以避让 HUD', camL3.level === 2 && camL3.d > camBase * 1.10,
    `dist ${camL3.d.toFixed(1)} > 基线 ${camBase.toFixed(1)} × 1.10`);
  // 全通关弹窗把状态留在 gameclear，后续上下文丢失断言要求 playing。
  await evalJS(`window.__marbleMaze.game.state = 'playing'`);

  const qProbe = await evalJS(`(() => {
    const h = window.__marbleMaze;
    h.quality.setMode('high');   const hi = h.view.stats();
    h.quality.setMode('medium'); const md = h.view.stats();
    h.quality.setMode('low');    const lo = h.view.stats();
    h.quality.setMode('high');
    h.quality.setMode('auto');
    const label = document.getElementById('btnQuality').textContent;
    const before = h.quality.level;
    const changed = h.quality.probe(18, performance.now() + 100000);
    const after = h.quality.level;
    h.quality.setMode('high');
    return { hi, md, lo, label, before, changed, after };
  })()`);
  check('手动画质档位真正改变像素比上限、阴影贴图与阴影开关',
    qProbe.hi.pixelRatioCap > qProbe.md.pixelRatioCap
    && qProbe.md.pixelRatioCap > qProbe.lo.pixelRatioCap
    && qProbe.hi.shadowSize === 1024 && qProbe.md.shadowSize === 512
    && qProbe.hi.shadows === true && qProbe.lo.shadows === false,
    `cap ${qProbe.hi.pixelRatioCap}/${qProbe.md.pixelRatioCap}/${qProbe.lo.pixelRatioCap}`
    + ` · shadow ${qProbe.hi.shadows}/${qProbe.lo.shadows}`);
  check('自动模式按帧率降级且按钮文案同步',
    qProbe.label === '画质 自动' && qProbe.before === 'high'
    && qProbe.changed === true && qProbe.after === 'low',
    `${qProbe.before} -> ${qProbe.after}`);

  // 必须以同一关卡作前后对比：13×13 的几何体本来就比 7×7 多。
  // 每次切关后强制渲染一帧，确保所有 geometry 真的上传过 GPU，
  // 这样 clearBoard() 若漏掉 dispose，info.memory 就会持续累积。
  await evalJS(`(() => {
    const h = window.__marbleMaze;
    h.quality.setMode('high');
    h.game.loadLevel(2);
    h.view.update(0.016, h.game.marble, { fall: 0 });
    return true;
  })()`);
  await sleep(300);
  const leakBefore = await evalJS(`window.__marbleMaze.view.stats()`);
  await evalJS(`(() => {
    const h = window.__marbleMaze;
    for (let i = 0; i < 12; i++) {
      h.game.loadLevel(i % 3);
      h.view.update(0.016, h.game.marble, { fall: 0 });
    }
    h.game.loadLevel(2);
    h.view.update(0.016, h.game.marble, { fall: 0 });
    return true;
  })()`);
  await sleep(300);
  const leakAfter = await evalJS(`window.__marbleMaze.view.stats()`);
  check('反复切关 12 次后 GPU 几何体 / 纹理数量不持续增长',
    leakAfter.geometries <= leakBefore.geometries + 6
    && leakAfter.textures <= leakBefore.textures + 1,
    `几何体 ${leakBefore.geometries} -> ${leakAfter.geometries}`
    + ` / 纹理 ${leakBefore.textures} -> ${leakAfter.textures}`);

  const glSafety = await evalJS(`(() => {
    const h = window.__marbleMaze;
    // 上下文丢失的暂停逻辑只在 playing/failing 生效；前面的全通关用例会
    // 把状态留在 gameclear，这里显式开局，避免依赖用例执行顺序。
    if (h.game.state !== 'playing' && h.game.state !== 'failing') h.game.start(0);
    const stateBefore = h.game.state;
    h.handleContextLost({ preventDefault() {} });
    const lost = {
      flag: h.isContextLost(), state: h.game.state,
      pill: document.getElementById('statusPill').innerText
    };
    h.handleContextRestored();
    const restored = {
      flag: h.isContextLost(), env: !!h.view.envRT.texture,
      pill: document.getElementById('statusPill').innerText
    };
    if (h.game.state === 'paused') h.game.resume();
    return { stateBefore, lost, restored };
  })()`);
  check('WebGL 上下文丢失时自动暂停并给出状态提示',
    glSafety.lost.flag === true && glSafety.lost.state === 'paused'
    && glSafety.lost.pill.includes('丢失'),
    `${glSafety.stateBefore} -> ${glSafety.lost.state} / ${glSafety.lost.pill}`);
  check('上下文恢复后重建环境贴图并清除丢失标记',
    glSafety.restored.flag === false && glSafety.restored.env === true
    && glSafety.restored.pill === '已恢复',
    `env=${glSafety.restored.env} / ${glSafety.restored.pill}`);

  const touchOrbit = await evalJS(`(() => {
    const h = window.__marbleMaze;
    const c = document.getElementById('scene');
    const mk = (type, id, x, y) => new PointerEvent(type, {
      pointerId: id, pointerType: 'touch', clientX: x, clientY: y, bubbles: true
    });
    const yaw0 = h.view.cam.tYaw;
    c.dispatchEvent(mk('pointerdown', 11, 100, 100));
    c.dispatchEvent(mk('pointerdown', 12, 200, 100));
    c.dispatchEvent(mk('pointermove', 12, 260, 100));
    const yaw1 = h.view.cam.tYaw;
    c.dispatchEvent(mk('pointerup', 11, 100, 100));
    c.dispatchEvent(mk('pointerup', 12, 260, 100));
    return { yaw0, yaw1, delta: yaw1 - yaw0 };
  })()`);
  check('触屏双指拖动可旋转观察视角',
    Math.abs(touchOrbit.delta - 0.3) < 0.02,
    `yaw ${touchOrbit.yaw0.toFixed(2)} -> ${touchOrbit.yaw1.toFixed(2)}`);

  const joyProbe = await evalJS(`(() => {
    const h = window.__marbleMaze;
    h.game.setAxis(0, 0);
    h.setJoystick(1, -0.5);
    const injected = h.joystickAxis();
    // 软件渲染下一帧可能超过 220ms，轮询等主循环真正接管 axis，
    // 避免固定 sleep 在慢速 swiftshader 上偶发读到 0。
    const t0 = Date.now();
    return new Promise((resolve) => {
      const poll = () => {
        const axis = { x: h.game.axis.x, z: h.game.axis.z };
        const ready = Math.hypot(axis.x - injected.x, axis.z - injected.z) < 0.02
          || Date.now() - t0 > 2000;
        if (!ready) { setTimeout(poll, 50); return; }
        const knob = document.getElementById('joystickKnob').style.transform;
        const active = document.getElementById('joystick').classList.contains('active');
        h.clearJoystick();
        resolve({ injected, axis, knob, active, cleared: h.joystickAxis() });
      };
      setTimeout(poll, 40);
    });
  })()`);
  // setJoystick(1,-0.5) 会被限制在单位圆内：长度 1/√1.25≈0.894，方向不变。
  const jl = Math.hypot(1, 0.5);
  const jx = 1 / jl;
  const jz = -0.5 / jl;
  check('虚拟摇杆接管倾斜轴并同步旋钮位置',
    Math.abs(joyProbe.injected.x - jx) < 0.02 && Math.abs(joyProbe.injected.z - jz) < 0.02
    && Math.abs(joyProbe.axis.x - jx) < 0.05 && Math.abs(joyProbe.axis.z - jz) < 0.05
    && joyProbe.knob.includes('translate') && joyProbe.active === true
    && joyProbe.cleared === null,
    `axis (${joyProbe.axis.x.toFixed(2)}, ${joyProbe.axis.z.toFixed(2)}) / 旋钮 ${joyProbe.knob}`);

  const motionProbe = await evalJS(`(async () => {
    const h = window.__marbleMaze;
    const label = () => document.getElementById('btnTilt').textContent;
    if (!window.DeviceOrientationEvent) return { supported: false, label: label() };
    await h.toggleMotion();
    const e = new Event('deviceorientation');
    Object.defineProperty(e, 'beta', { value: 58 });
    Object.defineProperty(e, 'gamma', { value: 28 });
    window.dispatchEvent(e);
    const axis = h.motionAxis();
    await h.toggleMotion();
    return { supported: true, axis, label: label() };
  })()`);
  check('陀螺仪输入映射正确，关闭后回到键鼠状态',
    (!motionProbe.supported && motionProbe.label === '体感 关')
    || (motionProbe.supported && motionProbe.axis
      && Math.abs(motionProbe.axis.x - 1) < 0.02
      && Math.abs(motionProbe.axis.z - 1) < 0.02
      && motionProbe.label === '体感 关'),
    JSON.stringify(motionProbe));

  await send('Emulation.setDeviceMetricsOverride', {
    width: 600, height: 900, deviceScaleFactor: 1, mobile: true
  });
  await sleep(450);
  const narrow = await evalJS(`(() => {
    const t = document.getElementById('mapToggle');
    const p = document.getElementById('sidePanel');
    const toggleDisplay = getComputedStyle(t).display;
    const before = getComputedStyle(p).display;
    t.click();
    const after = getComputedStyle(p).display;
    return { toggleDisplay, before, after, label: t.innerText };
  })()`);
  check('窄屏下小地图改为可展开浮层而非直接隐藏',
    narrow.toggleDisplay !== 'none' && narrow.before === 'none'
    && narrow.after !== 'none' && narrow.label.includes('收起'),
    `按钮 ${narrow.toggleDisplay} / 面板 ${narrow.before} -> ${narrow.after}`);
  await send('Emulation.clearDeviceMetricsOverride');
  await sleep(300);

  // 时长增长不能靠固定 sleep：无头 swiftshader 偶尔一帧要几百毫秒，改成轮询等增长。
  const careerBase = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.toMenu();
    return {
      clears: g.records.clearCount,
      time: g.records.playTime,
      menuBefore: document.getElementById('modal').innerText
    };
  })()`);
  await evalJS(`window.__marbleMaze.game.start(0)`);
  const grew = await waitFor(
    `window.__marbleMaze.game.records.playTime > ${careerBase.time} + 0.1`, 6000, false);
  const careerMid = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.togglePause();
    const stored = JSON.parse(localStorage.getItem('marble-maze-3d.records.v1'));
    return {
      time: g.records.playTime,
      storedTime: stored.stats.playTime,
      storedClears: stored.stats.clears
    };
  })()`);
  const careerAfter = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.start(0);
    g.clearLevel();
    const afterClear = g.records.clearCount;
    g.toMenu();
    return { afterClear, menuAfter: document.getElementById('modal').innerText };
  })()`);
  check('游玩时长持续增长且暂停时落盘',
    grew && careerMid.time > careerBase.time + 0.1
    && Math.abs(careerMid.storedTime - careerMid.time) < 0.2,
    `${careerBase.time.toFixed(2)}s -> ${careerMid.time.toFixed(2)}s / 存档 ${careerMid.storedTime.toFixed(2)}s`);
  check('通关次数跨关累计并在菜单展示生涯统计',
    careerAfter.afterClear === careerBase.clears + 1
    && careerMid.storedClears === careerBase.clears
    && careerBase.menuBefore.includes('生涯通关')
    && careerBase.menuBefore.includes('游玩')
    && careerAfter.menuAfter.includes('生涯通关 ' + careerAfter.afterClear + ' 次'),
    `通关 ${careerBase.clears} -> ${careerAfter.afterClear} / ${careerAfter.menuAfter.split('\n').find((s) => s.includes('生涯通关')) || ''}`);

  const sfxProbe = await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    const sfx = g.sfx;
    const names = ['checkpoint', 'boost', 'ice', 'bump', 'pickup'];
    const calls = [];
    const orig = {};
    for (const n of names) {
      if (typeof sfx[n] !== 'function') { calls.push('missing:' + n); continue; }
      orig[n] = sfx[n];
      sfx[n] = function (...args) { calls.push(n); return orig[n].apply(this, args); };
    }
    const base = { hits: 0, gems: [], checkpoint: -1, boost: -1,
      ice: false, fell: -1, hazard: -1, goal: false };
    g.wasOnIce = false;
    g.handleEvents({ ...base, checkpoint: 0 });
    g.handleEvents({ ...base, boost: 0 });
    g.handleEvents({ ...base, ice: true });
    g.handleEvents({ ...base, ice: true });
    for (const n of Object.keys(orig)) sfx[n] = orig[n];
    return calls;
  })()`);
  check('检查点/加速带/冰面改用专属音效且冰面持续滑行不重复播放',
    sfxProbe.filter((n) => n === 'checkpoint').length === 1
    && sfxProbe.filter((n) => n === 'boost').length === 1
    && sfxProbe.filter((n) => n === 'ice').length === 1
    && !sfxProbe.some((n) => n === 'bump' || n === 'pickup' || n.startsWith('missing:')),
    sfxProbe.join(','));

  const fallback = await evalJS(`(() => {
    window.__marbleMaze.showUnsupported('图形初始化失败', '测试注入的降级路径');
    return {
      text: document.getElementById('modal').innerText,
      visible: document.getElementById('overlay').classList.contains('visible'),
      pill: document.getElementById('statusPill').innerText
    };
  })()`);
  check('WebGL 不可用时显示明确提示而非白屏',
    fallback.visible && fallback.text.includes('图形初始化失败')
    && fallback.text.includes('WebGL2') && fallback.pill === '图形不可用',
    fallback.text.slice(0, 40).replace(/\n/g, ' '));
  await evalJS(`window.__marbleMaze.game.toMenu()`);

  // 云存档 / 排行榜：本地静态服务不注入开关，前端必须零云请求、静默降级。
  const cloudLocal = await evalJS(`({
    flag: !!window.__MARBLE_CLOUD_ENABLED__,
    enabled: window.__marbleMaze.game.cloud.enabled,
    online: window.__marbleMaze.game.cloud.online,
    status: window.__marbleMaze.cloudStatus(),
    entry: !!document.getElementById('cloudEntry')
  })`);
  check('本地模式云开关未注入、零云请求、菜单无云入口',
    cloudLocal.flag === false && cloudLocal.enabled === false
    && cloudLocal.online === false && cloudLocal.status.enabled === false
    && cloudLocal.entry === false,
    `flag=${cloudLocal.flag} enabled=${cloudLocal.enabled} entry=${cloudLocal.entry}`);

  // 即使离线，排行榜弹窗也能打开并给出明确提示、不溢出、按钮可见。
  await evalJS(`window.__marbleMaze.showLeaderboard()`);
  await waitFor(`window.__marbleMaze.ui.overlayType === 'leaderboard'`, 2000, false);
  const boardUI = await evalJS(`(() => {
    const m = document.getElementById('modal');
    const back = m.querySelector('[data-action="menu"]');
    return {
      title: m.innerText.slice(0, 30),
      offline: m.innerText.includes('离线模式') || m.innerText.includes('未连接云端'),
      scroll: m.scrollHeight, client: m.clientHeight,
      btnVisible: !!back && back.getBoundingClientRect().bottom <= m.getBoundingClientRect().bottom + 1
    };
  })()`);
  check('离线排行榜弹窗给出明确提示且按钮完整可见',
    boardUI.title.includes('云排行榜') && boardUI.offline
    && boardUI.scroll <= boardUI.client + 2 && boardUI.btnVisible,
    `内容 ${boardUI.scroll}/可视 ${boardUI.client} 离线提示 ${boardUI.offline}`);
  await evalJS(`window.__marbleMaze.game.toMenu()`);

  check('P2 全流程无控制台错误（含本地零云请求）', errors.length === 0,
    errors.slice(0, 2).join(' | ') || '无');

  if (errors.length) errors.slice(0, 8).forEach((e) => console.log('    ' + e));
}

try {
  await main();
} catch (e) {
  failed += 1;
  console.log('  FAIL  验证脚本异常: ' + (e.stack || e.message));
} finally {
  if (ws) ws.close();
  if (edge) edge.kill();
  server.kill();
  console.log(`\n结果: ${passed} 项通过, ${failed} 项失败`);
  if (failed > 0) process.exit(1);
}
