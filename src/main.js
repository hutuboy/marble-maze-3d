import { SceneView } from './scene.js';
import { UI } from './ui.js';
import { Sfx } from './audio.js';
import { Game } from './game.js';
import { FixedClock, STEP, MAX_CATCHUP } from './clock.js';
import { QualityController, QUALITY_LABELS } from './quality.js';
import { cycleDifficulty, difficultyLabel, DIFFICULTIES } from './difficulty.js';

const canvas = document.getElementById('scene');

function showUnsupported(title, detail) {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  if (modal) {
    modal.innerHTML = `<div class="modal-tag danger">GRAPHICS</div>
      <h1>${title}</h1>
      <p class="modal-lead">${detail}</p>
      <p class="modal-foot">本游戏需要支持 WebGL2 的浏览器；请更新浏览器或开启硬件加速后重试。</p>`;
  }
  if (overlay) overlay.classList.add('visible');
  const pill = document.getElementById('statusPill');
  if (pill) { pill.textContent = '图形不可用'; pill.dataset.tone = 'danger'; }
}

function boot(view) {
  const ui = new UI();
  const sfx = new Sfx();
  const game = new Game(view, ui, sfx);
  const quality = new QualityController(view, (mode) => ui.setQualityLabel(QUALITY_LABELS[mode]));

  const keys = new Set();
  const touches = new Set();
  const MOVE_CODES = new Set([
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'
  ]);
  const BLOCK_CODES = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space']);
  const FINE_CODES = new Set(['ShiftLeft', 'ShiftRight']);
  const NATIVE_CODES = new Set(['Space', 'Enter']);
  const MOTION_DEAD = 28;

  let drag = null;
  let motion = null;
  let contextLost = false;
  let joy = null; // { id, dx, dz } 由虚拟摇杆驱动
  const JOY_R = 44; // 归一化半径（像素）

  function fineMode() {
    return keys.has('ShiftLeft') || keys.has('ShiftRight');
  }

  // 焦点在输入类元素上时，空格/方向键/回车都属于文本编辑，不能被游戏快捷键抢走。
  function isTypingTarget(el) {
    if (!el || typeof el.tagName !== 'string') return false;
    const tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'OPTION') return true;
    return el.isContentEditable === true;
  }

  // 按钮/链接被聚焦时，空格与回车交给浏览器原生激活，避免和 advance() 撞成两次动作。
  function isActivatable(el) {
    if (!el || typeof el.tagName !== 'string') return false;
    const tag = el.tagName;
    return tag === 'BUTTON' || tag === 'A' || tag === 'SUMMARY';
  }

  function keyboardAxis() {
    let x = 0;
    let z = 0;
    if (keys.has('ArrowLeft') || keys.has('KeyA')) x -= 1;
    if (keys.has('ArrowRight') || keys.has('KeyD')) x += 1;
    if (keys.has('ArrowUp') || keys.has('KeyW')) z -= 1;
    if (keys.has('ArrowDown') || keys.has('KeyS')) z += 1;
    return { x, z };
  }

  const clampAxis = (v) => Math.max(-1, Math.min(1, v / MOTION_DEAD));

  function motionAxis() {
    if (!motion || !motion.active) return null;
    let gx = motion.gamma || 0;
    let gz = (motion.beta || 0) - 30;
    const angle = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
    let x = gx;
    let z = gz;
    if (angle === 90) { x = gz; z = -gx; }
    else if (angle === -90 || angle === 270) { x = -gz; z = gx; }
    else if (angle === 180) { x = -gx; z = -gz; }
    return { x: clampAxis(x), z: clampAxis(z) };
  }

  async function toggleMotion() {
    if (motion) {
      window.removeEventListener('deviceorientation', motion.handler);
      clearTimeout(motion.timer);
      motion = null;
      ui.setMotionLabel('off');
      ui.toast('体感倾斜已关闭', 'info');
      return;
    }
    const DOE = window.DeviceOrientationEvent;
    if (!DOE) {
      ui.setMotionLabel('off');
      ui.toast('此设备不支持陀螺仪，已保持键鼠操作', 'warn');
      return;
    }
    try {
      if (typeof DOE.requestPermission === 'function') {
        const res = await DOE.requestPermission();
        if (res !== 'granted') { ui.toast('体感权限未授予', 'warn'); return; }
      }
    } catch (_) {
      ui.toast('体感权限请求失败，已保持键鼠操作', 'warn');
      return;
    }
    const state = { beta: 0, gamma: 0, active: false, handler: null, timer: 0 };
    state.handler = (e) => {
      if (e.beta == null && e.gamma == null) return;
      state.beta = e.beta || 0;
      state.gamma = e.gamma || 0;
      state.active = true;
      clearTimeout(state.timer);
    };
    window.addEventListener('deviceorientation', state.handler);
    state.timer = setTimeout(() => {
      if (!state.active) {
        window.removeEventListener('deviceorientation', state.handler);
        motion = null;
        ui.setMotionLabel('off');
        ui.toast('未检测到陀螺仪数据，已自动关闭体感', 'warn');
      }
    }, 2000);
    motion = state;
    ui.setMotionLabel('on');
    ui.toast('体感倾斜已开启 · 倾斜设备控制迷宫', 'info');
  }

  function applyInput() {
    const fine = fineMode();
    const scale = fine ? 0.42 : 1;
    const kb = keyboardAxis();
    const dragging = !!(drag && drag.mode === 'tilt');
    const joyActive = !!joy && (joy.dx || joy.dz);
    const ma = joyActive || dragging || kb.x || kb.z ? null : motionAxis();

    if (joyActive) {
      game.setAxis(joy.dx * scale, joy.dz * scale, true);
    } else if (ma) {
      game.setAxis(ma.x * scale, ma.z * scale, true);
    } else if (dragging) {
      game.setAxis(
        Math.max(-1, Math.min(1, drag.dx / 105)) * scale,
        Math.max(-1, Math.min(1, drag.dy / 105)) * scale,
        true
      );
    } else {
      game.setAxis(kb.x * scale, kb.z * scale, true);
    }
    ui.setFineMode(fine);
    ui.setDifficultyLabel(`难度 ${difficultyLabel(game.difficulty)}`, game.state !== 'menu');
  }

  // WebGL 上下文丢失：暂停游戏、跳过渲染、给出明确状态；恢复时重建程序化资源。
  function handleContextLost(e) {
    if (e && e.preventDefault) e.preventDefault();
    contextLost = true;
    if (game.state === 'playing' || game.state === 'failing') game.togglePause();
    ui.setStatus('图形上下文丢失', 'danger');
    ui.toast('图形上下文丢失，等待恢复…', 'warn');
  }

  function handleContextRestored() {
    contextLost = false;
    view.onContextRestored();
    view.resize();
    ui.setStatus('已恢复', 'good');
    ui.toast('图形上下文已恢复', 'good');
  }

  canvas.addEventListener('webglcontextlost', handleContextLost, false);
  canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

  window.addEventListener('keydown', (e) => {
    // 在 AI 提示词等输入框里打字时直接放行：既不 preventDefault（否则空格被吞），
    // 也不响应 P/R/M/空格/回车等快捷键（否则回车会触发 advance() 把弹窗关掉并直接开局）。
    if (isTypingTarget(e.target)) {
      if (keys.size) keys.clear();
      sfx.ensure();
      return;
    }
    const nativeActivate = NATIVE_CODES.has(e.code) && isActivatable(e.target);
    if (!nativeActivate && BLOCK_CODES.has(e.code)) e.preventDefault();
    sfx.ensure();
    if (MOVE_CODES.has(e.code) || FINE_CODES.has(e.code)) keys.add(e.code);
    if (e.repeat || nativeActivate) return;
    switch (e.code) {
      case 'KeyP':
      case 'Escape': game.togglePause(); break;
      case 'KeyR': game.restartLevel(); break;
      case 'KeyM': ui.setMuteLabel(sfx.toggleMute()); break;
      case 'Space':
      case 'Enter': game.advance(); break;
      default: break;
    }
  });
  window.addEventListener('keyup', (e) => keys.delete(e.code));

  canvas.addEventListener('pointerdown', (e) => {
    sfx.ensure();
    if (e.pointerType === 'touch') touches.add(e.pointerId);
    // 触屏没有右键：第二根手指按下即切到旋转视角。
    const orbit = e.button === 2 || (e.pointerType === 'touch' && touches.size >= 2);
    drag = {
      mode: orbit ? 'orbit' : 'tilt',
      sx: e.clientX, sy: e.clientY,
      lx: e.clientX, ly: e.clientY,
      dx: 0, dy: 0
    };
    try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* 合成事件/不支持时忽略 */ }
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!drag) return;
    if (drag.mode === 'orbit') {
      view.orbit(e.clientX - drag.lx, e.clientY - drag.ly);
    } else {
      drag.dx = e.clientX - drag.sx;
      drag.dy = e.clientY - drag.sy;
    }
    drag.lx = e.clientX;
    drag.ly = e.clientY;
  });

  const endDrag = (e) => {
    if (e && e.pointerType === 'touch') touches.delete(e.pointerId);
    drag = null;
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('lostpointercapture', endDrag);
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    view.zoomBy(Math.sign(e.deltaY) * 0.09);
  }, { passive: false });

  const stick = document.getElementById('joystick');
  const updateJoy = (e) => {
    if (!joy) return;
    const r = stick.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / JOY_R;
    const dz = (e.clientY - (r.top + r.height / 2)) / JOY_R;
    const len = Math.hypot(dx, dz);
    const k = len > 1 ? 1 / len : 1;
    joy.dx = dx * k;
    joy.dz = dz * k;
    ui.setJoystick(joy.dx, joy.dz);
  };
  const endJoy = (e) => {
    if (!joy || (e && joy.id !== e.pointerId)) return;
    joy = null;
    ui.setJoystick(0, 0);
  };
  stick.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    sfx.ensure();
    joy = { id: e.pointerId, dx: 0, dz: 0 };
    try { stick.setPointerCapture(e.pointerId); } catch (_) { /* 忽略 */ }
    updateJoy(e);
  });
  stick.addEventListener('pointermove', (e) => { if (joy && joy.id === e.pointerId) updateJoy(e); });
  stick.addEventListener('pointerup', endJoy);
  stick.addEventListener('pointercancel', endJoy);
  stick.addEventListener('lostpointercapture', endJoy);

  window.addEventListener('blur', () => {
    keys.clear();
    touches.clear();
    drag = null;
    if (game.state === 'playing') game.togglePause();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && game.state === 'playing') game.togglePause();
  });
  window.addEventListener('resize', () => view.resize());

  document.getElementById('btnPause').addEventListener('click', () => game.togglePause());
  document.getElementById('btnRestart').addEventListener('click', () => game.restartLevel());
  document.getElementById('btnDemo').addEventListener('click', () => {
    sfx.ensure();
    if (game.demo) game.stopDemo(true);
    else game.startDemo();
  });
  document.getElementById('btnMute').addEventListener('click', () => ui.setMuteLabel(sfx.toggleMute()));
  document.getElementById('btnTilt').addEventListener('click', () => { sfx.ensure(); toggleMotion(); });
  document.getElementById('btnQuality').addEventListener('click', () => {
    sfx.ensure();
    const label = quality.cycle();
    ui.toast(label, 'info');
    sfx.click();
  });
  document.getElementById('btnDifficulty').addEventListener('click', () => {
    sfx.ensure();
    const from = game.difficulty;
    const to = cycleDifficulty(from);
    if (game.setDifficulty(to)) ui.toast(`难度 · ${difficultyLabel(to)}`, 'info');
    else ui.toast('难度只能在主菜单切换', 'warn');
  });
  document.getElementById('mapToggle').addEventListener('click', () => ui.toggleMap());

  async function copyScoreCard() {
    const ta = document.getElementById('scoreCard');
    const text = ta ? ta.value : game.scoreCardText();
    let ok = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch (_) { /* file:// 或非安全上下文会拒绝，走手动复制 */ }
    if (!ok && ta) {
      try { ta.select(); ok = document.execCommand('copy'); } catch (_) { ok = false; }
    }
    ui.toast(ok ? '成绩卡已复制' : '请手动选择成绩卡文本复制', ok ? 'good' : 'warn');
    return ok;
  }

  async function runAIDesign() {
    const input = document.getElementById('aiPrompt');
    const status = document.getElementById('aiStatus');
    const prompt = input ? input.value.trim() : '';
    if (!prompt) { if (status) status.textContent = '请先描述你想要的迷宫。'; return; }
    if (status) status.textContent = 'AI 正在生成并校验迷宫…';
    const r = await game.designLevel(prompt);
    if (!r.ok && status) status.textContent = r.reason;
  }

  async function runAINarrative() {
    const input = document.getElementById('aiTheme');
    const box = document.getElementById('aiStory');
    const theme = input ? input.value.trim() : '';
    if (!theme) { if (box) box.textContent = '请先输入一个主题。'; return; }
    if (box) box.textContent = '生成中…';
    const r = await game.narrate(theme);
    if (box && r) box.innerHTML = `${r.story.name} · ${r.story.subtitle}<br>${r.story.tip}`
      + `<br><small>${r.mode === 'ai' ? '魔搭 AI' : '本地引擎'}</small>`;
  }

  async function runAIReport() {
    const box = document.getElementById('aiReport');
    if (box) box.value = '生成中…';
    const r = await game.aiReport();
    if (box) box.value = r.text;
  }

  // 分享链接：把当前定制关卡的短码拼到地址尾部，别人打开就是同一座迷宫。
  function shareLink() {
    if (!game.shareCode) return '';
    return `${location.href.split('#')[0]}#l=${game.shareCode}`;
  }

  async function copyShareLink() {
    const url = shareLink();
    if (!url) {
      ui.toast('当前关卡没有分享码', 'warn');
      return false;
    }
    let ok = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        ok = true;
      }
    } catch (_) { /* file:// 或非安全上下文会拒绝，走手动复制 */ }
    ui.toast(ok ? '分享链接已复制' : '复制被拒绝，请手动复制地址栏 #l= 后的短码', ok ? 'good' : 'warn');
    return ok;
  }

  const ACTIONS = {
    start: () => game.start(),
    'ai-lab': () => game.showAILab(),
    'ai-design': () => runAIDesign(),
    'ai-narrative': () => runAINarrative(),
    'ai-report': () => runAIReport(),
    level: (ds) => game.startFrom(ds.level),
    daily: () => game.startDaily(),
    // 结算页的「看 AI 演示」：先回到游玩态再启动 Agent，从起点重走一遍。
    demo: () => {
      if (game.state === 'levelclear' || game.state === 'gameclear') {
        game.state = 'playing';
        game.ui.hideOverlay();
      }
      game.startDemo();
    },
    difficulty: (ds) => {
      if (game.setDifficulty(ds.mode)) ui.toast(`难度 · ${difficultyLabel(ds.mode)}`, 'info');
    },
    resume: () => game.resume(),
    restart: () => game.restartLevel(),
    retry: () => game.retry(),
    next: () => game.nextLevel(),
    again: () => game.start(),
    'copy-card': () => copyScoreCard(),
    'copy-share': () => copyShareLink(),
    leaderboard: () => game.showLeaderboard(),
    'refresh-board': () => game.showLeaderboard(),
    menu: () => game.toMenu()
  };
  document.getElementById('overlay').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    sfx.ensure();
    const fn = ACTIONS[btn.dataset.action];
    if (fn) fn(btn.dataset);
  });

  // AI 输入框里普通回车只换行，Ctrl/Cmd + Enter 才提交，避免误触直接开局。
  document.getElementById('overlay').addEventListener('keydown', (e) => {
    if (!isTypingTarget(e.target)) return;
    if (e.code !== 'Enter' || !(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    if (e.target.id === 'aiPrompt') runAIDesign();
    else if (e.target.id === 'aiTheme') runAINarrative();
  });

  const clock = new FixedClock();
  let last = performance.now();
  let frameNo = 0;

  function frame(now) {
    const wallDt = Math.max(0, (now - last) / 1000);
    last = now;
    const raw = Math.min(MAX_CATCHUP, wallDt);
    applyInput();
    quality.sample(wallDt, now);

    const active = game.state === 'playing' || game.state === 'failing';
    if (!active) clock.reset();
    const steps = active ? clock.advance(wallDt) : 0;
    for (let i = 0; i < steps; i++) game.update(STEP);

    if (game.state === 'playing') ui.pushTrail(game.marble.x, game.marble.z);
    if (!contextLost) view.update(raw, game.marble, { fall: game.fallProgress });
    ui.drawTilt(game.marble.tiltX, game.marble.tiltZ, game.cfg.tiltMax, fineMode());
    if (frameNo % 2 === 0) ui.drawMinimap(game.level, game.marble, game.elapsed);
    frameNo += 1;
    requestAnimationFrame(frame);
  }

  ui.setMuteLabel(false);
  ui.setMotionLabel('off');
  view.resize();
  window.__marbleMaze = {
    game, view, ui, clock, quality, motionAxis, toggleMotion,
    handleContextLost, handleContextRestored, showUnsupported,
    cycleDifficulty, copyScoreCard, copyShareLink, shareLink,
    showLeaderboard: () => game.showLeaderboard(),
    cloudStatus: () => game.cloudStatus(),
    cloudBoard: () => game.cloudBoard,
    startDemo: () => game.startDemo(),
    stopDemo: () => game.stopDemo(true),
    setJoystick: (dx, dz) => {
      const len = Math.hypot(dx, dz);
      const k = len > 1 ? 1 / len : 1;
      joy = { id: -1, dx: dx * k, dz: dz * k };
      ui.setJoystick(joy.dx, joy.dz);
    },
    clearJoystick: () => { joy = null; ui.setJoystick(0, 0); },
    joystickAxis: () => joy ? { x: joy.dx, z: joy.dz } : null,
    isContextLost: () => contextLost
  };
  // 地址栏带 #l=xxx 时直接进分享关卡；坏码只提示，不影响正常开局。
  if (location.hash) game.loadShareFromHash(location.hash);
  window.addEventListener('hashchange', () => {
    // 只在不打断对局时响应地址变化（游玩中粘贴链接不劫持当前局）。
    if (game.state === 'menu') game.loadShareFromHash(location.hash);
  });
  requestAnimationFrame(frame);
}

try {
  boot(new SceneView(canvas));
} catch (err) {
  // WebGL2 不可用、驱动异常、上下文创建失败时给出可读提示，而不是白屏。
  showUnsupported('图形初始化失败', String((err && err.message) || err || '未知错误'));
}
