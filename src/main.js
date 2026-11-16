import { SceneView } from './scene.js';
import { UI } from './ui.js';
import { Sfx } from './audio.js';
import { Game } from './game.js';
import { LEVELS } from './levels.js';
import { FixedClock, STEP, MAX_CATCHUP } from './clock.js';
import { QualityController, QUALITY_LABELS } from './quality.js';

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
  const MOTION_DEAD = 28;

  let drag = null;
  let motion = null;
  let contextLost = false;

  function fineMode() {
    return keys.has('ShiftLeft') || keys.has('ShiftRight');
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
    const ma = dragging || kb.x || kb.z ? null : motionAxis();

    if (ma) {
      game.setAxis(ma.x * scale, ma.z * scale);
    } else if (dragging) {
      game.setAxis(
        Math.max(-1, Math.min(1, drag.dx / 105)) * scale,
        Math.max(-1, Math.min(1, drag.dy / 105)) * scale
      );
    } else {
      game.setAxis(kb.x * scale, kb.z * scale);
    }
    ui.setFineMode(fine);
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
    if (BLOCK_CODES.has(e.code)) e.preventDefault();
    sfx.ensure();
    if (MOVE_CODES.has(e.code) || FINE_CODES.has(e.code)) keys.add(e.code);
    if (e.repeat) return;
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
  document.getElementById('btnMute').addEventListener('click', () => ui.setMuteLabel(sfx.toggleMute()));
  document.getElementById('btnTilt').addEventListener('click', () => { sfx.ensure(); toggleMotion(); });
  document.getElementById('btnQuality').addEventListener('click', () => {
    sfx.ensure();
    const label = quality.cycle();
    ui.toast(label, 'info');
    sfx.click();
  });
  document.getElementById('mapToggle').addEventListener('click', () => ui.toggleMap());

  const ACTIONS = {
    start: () => game.start(),
    level: (ds) => game.startFrom(ds.level),
    resume: () => game.resume(),
    restart: () => game.restartLevel(),
    retry: () => game.retry(),
    next: () => game.nextLevel(),
    again: () => game.start(),
    menu: () => game.toMenu()
  };
  document.getElementById('overlay').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    sfx.ensure();
    const fn = ACTIONS[btn.dataset.action];
    if (fn) fn(btn.dataset);
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
    ui.drawTilt(game.marble.tiltX, game.marble.tiltZ, LEVELS[game.levelIndex].tiltMax, fineMode());
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
    isContextLost: () => contextLost
  };
  requestAnimationFrame(frame);
}

try {
  boot(new SceneView(canvas));
} catch (err) {
  // WebGL2 不可用、驱动异常、上下文创建失败时给出可读提示，而不是白屏。
  showUnsupported('图形初始化失败', String((err && err.message) || err || '未知错误'));
}
