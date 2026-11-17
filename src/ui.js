import { CELL, GOAL_R } from './levels.js';

const $ = (id) => document.getElementById(id);
const fmtTime = (s) => {
  const t = Math.max(0, Math.floor(s));
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
};

// 生涯累计时长：超过 1 小时改用「X小时YY分」，避免六位数秒数挤爆菜单。
const fmtCareer = (s) => {
  const t = Math.max(0, Math.floor(Number(s) || 0));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  return h > 0
    ? `${h}小时${String(m).padStart(2, '0')}分`
    : `${m}分${String(t % 60).padStart(2, '0')}秒`;
};

const KEY_ROWS = [
  ['W A S D / 方向键', '倾斜迷宫'],
  ['Shift + 方向 / 拖动', '精细微调倾角'],
  ['左键 / 右键拖动', '倾斜 / 旋转视角'],
  ['滚轮', '缩放视角'],
  ['顶部「体感」', '陀螺仪倾斜（需授权）'],
  ['P / R / M', '暂停 / 重开 / 音效'],
  ['空格 / Enter', '确认 / 继续']
];

function miniTransform(level, S, H) {
  const pad = 14;
  const scale = Math.min((S - pad * 2) / level.width, (H - pad * 2) / level.depth);
  return {
    scale,
    mx: (x) => S / 2 + x * scale,
    my: (z) => H / 2 + z * scale
  };
}

// 小地图逻辑分辨率随关卡尺寸增长：13×13 若沿用 220px，每格只有约 15px，
// 墙线会糊成一片。上限 320 避免画质档位 low / 窄屏下过度绘制。
// 展示尺寸仍由 CSS 控制，这里只改 canvas 的 backing store。
export function minimapSize(level) {
  const dim = Math.max(level.cols, level.rows);
  return Math.max(220, Math.min(320, 220 + (dim - 7) * 22));
}

export class UI {
  constructor() {
    this.el = {
      app: $('app'),
      levelName: $('levelName'), statLevel: $('statLevel'), statTime: $('statTime'),
      statTimeLabel: $('statTimeLabel'), statScore: $('statScore'), statReward: $('statReward'),
      statHits: $('statHits'), statGems: $('statGems'), statCheckpoints: $('statCheckpoints'),
      statLives: $('statLives'),
      tips: $('tips'), statusPill: $('statusPill'), tiltHint: $('tiltHint'),
      overlay: $('overlay'), modal: $('modal'), toast: $('toast'),
      btnPause: $('btnPause'), btnRestart: $('btnRestart'), btnMute: $('btnMute'),
      btnTilt: $('btnTilt'), btnQuality: $('btnQuality'), btnDifficulty: $('btnDifficulty'),
      minimap: $('minimap'), tilt: $('tilt'),
      sidePanel: $('sidePanel'), mapToggle: $('mapToggle'), levelFlash: $('levelFlash'),
      joystick: $('joystick'), joystickKnob: $('joystickKnob')
    };
    this.mmCtx = this.el.minimap.getContext('2d');
    this.tiltCtx = this.el.tilt.getContext('2d');
    this.toastTimer = 0;
    this.shakeTimer = 0;
    this.overlayType = '';
    this.trail = [];
    // 小地图静态层缓存：按 level 对象引用 + backing store 尺寸失效，
    // 避免每帧重绘上百段墙，也避免尺寸变化后沿用旧分辨率的烘焙结果。
    this.mmBase = null;
    this.mmWalls = null;
    this.mmLevel = null;
    this.mmSize = 0;
    this.staticDraws = 0;
  }

  setStats(d) {
    this.el.levelName.textContent = `第 ${d.levelIndex + 1} 关 · ${d.name} — ${d.subtitle}`;
    this.el.statLevel.textContent = `${d.levelIndex + 1} / ${d.totalLevels}`;
    this.el.statScore.textContent = String(d.score);
    this.el.statReward.textContent = d.rewardText;
    this.el.statReward.classList.toggle('settled', !!d.rewardSettled);
    if (this.lastHits !== undefined && d.hits > this.lastHits) {
      const h = this.el.statHits;
      h.classList.remove('bump');
      void h.offsetWidth;
      h.classList.add('bump');
    }
    this.lastHits = d.hits;
    this.el.statHits.textContent = String(d.hits);
    this.el.statGems.textContent = `${d.gemsGot} / ${d.gemsTotal}`;
    this.el.statCheckpoints.textContent = `${d.checkpoints} / ${d.checkpointsTotal}`;
    this.el.statCheckpoints.style.color = d.checkpoints > 0 ? '#49ffe0' : '';
    this.el.statLives.textContent = '♥'.repeat(d.lives) + '♡'.repeat(Math.max(0, 3 - d.lives));
    this.el.statLives.style.color = d.lives <= 1 ? '#ff6b6b' : '#ffb4a2';

    this.el.statTimeLabel.textContent = d.timeLimit > 0 ? '剩余' : '计时';
    if (d.timeLimit > 0) {
      const left = d.timeLimit - d.elapsed;
      this.el.statTime.textContent = fmtTime(left);
      this.el.statTime.classList.toggle('urgent', left <= 15);
    } else {
      this.el.statTime.textContent = fmtTime(d.elapsed);
      this.el.statTime.classList.remove('urgent');
    }
  }

  setTip(text) { this.el.tips.textContent = text; }

  setFineMode(fine) {
    if (this.fineMode === fine) return;
    this.fineMode = fine;
    this.el.tiltHint.innerHTML = fine
      ? '精细模式 · 倾角减半'
      : '方向键 / WASD<br>或按住左键拖动';
  }

  setMotionLabel(mode) {
    const labels = { on: '体感 开', off: '体感 关', unavailable: '体感不可用' };
    this.el.btnTilt.textContent = labels[mode] || '体感 关';
    this.el.btnTilt.disabled = mode === 'unavailable';
  }

  setStatus(text, tone = 'normal') {
    this.el.statusPill.textContent = text;
    this.el.statusPill.dataset.tone = tone;
  }

  setPauseLabel(paused) { this.el.btnPause.textContent = paused ? '继续' : '暂停'; }
  setMuteLabel(muted) { this.el.btnMute.textContent = muted ? '音效 关' : '音效 开'; }
  setQualityLabel(text) { this.el.btnQuality.textContent = text; }
  setDifficultyLabel(text, disabled = false) {
    if (this.el.btnDifficulty.textContent === text
      && this.el.btnDifficulty.disabled === disabled) return;
    this.el.btnDifficulty.textContent = text;
    this.el.btnDifficulty.disabled = disabled;
  }

  // 摇杆旋钮位置：dx/dz 为 -1..1 的归一化输入。
  setJoystick(dx, dz) {
    if (!this.el.joystickKnob) return;
    const r = 34;
    this.el.joystickKnob.style.transform = `translate(${dx * r}px, ${dz * r}px)`;
    this.el.joystick.classList.toggle('active', Math.abs(dx) + Math.abs(dz) > 0.02);
  }

  toggleMap() {
    const open = this.el.sidePanel.classList.toggle('open');
    this.el.mapToggle.classList.toggle('active', open);
    this.el.mapToggle.textContent = open ? '收起地图' : '地图';
    return open;
  }

  shake() {
    const app = this.el.app;
    app.classList.remove('shake');
    void app.offsetWidth;
    app.classList.add('shake');
    clearTimeout(this.shakeTimer);
    this.shakeTimer = setTimeout(() => app.classList.remove('shake'), 230);
  }

  flashLevel() {
    const f = this.el.levelFlash;
    f.classList.remove('play');
    void f.offsetWidth;
    f.classList.add('play');
  }

  clearTrail() { this.trail = []; }

  pushTrail(x, z) {
    const t = this.trail;
    if (t.length) {
      const p = t[t.length - 1];
      if (Math.hypot(x - p.x, z - p.z) < 0.16) return;
    }
    t.push({ x, z });
    if (t.length > 320) t.shift();
  }

  toast(text, tone = 'info') {
    const el = this.el.toast;
    el.textContent = text;
    el.dataset.tone = tone;
    el.classList.add('visible');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.classList.remove('visible'), 1400);
  }

  // AI 教练建议异步到达时注入结算弹窗占位区；弹窗可能已切换，故先判存在。
  setAICoach(tips, mode = 'local') {
    const box = document.getElementById('aiCoach');
    if (!box || !Array.isArray(tips) || !tips.length) return;
    const tag = mode === 'ai' ? '魔搭 AI 教练建议' : '本地教练建议';
    box.innerHTML = `<div class="ai-coach-title">${tag}</div>`
      + tips.map((t) => `<div class="ai-coach-row">· ${t}</div>`).join('');
  }

  // 赛中诊断：失败弹窗里的即时建议，与结算页的赛后复盘区分标题。
  setLiveCoach(tips, mode = 'local') {
    const box = document.getElementById('aiCoachLive');
    if (!box || !Array.isArray(tips) || !tips.length) return;
    const tag = mode === 'ai' ? 'AI 教练 · 本局诊断' : '本地教练 · 本局诊断';
    box.innerHTML = `<div class="ai-coach-title">${tag}</div>`
      + tips.map((t) => `<div class="ai-coach-row">· ${t}</div>`).join('');
  }

  hideOverlay() {
    this.overlayType = '';
    this.el.overlay.classList.remove('visible');
  }

  showOverlay(type, data = {}) {
    this.overlayType = type;
    const m = this.el.modal;
    m.innerHTML = OVERLAY_HTML[type](data);
    m.style.animation = 'none';
    void m.offsetWidth;
    m.style.animation = '';
    this.el.overlay.classList.add('visible');
  }

  drawTilt(tiltX, tiltZ, maxTilt, fine = false) {
    const ctx = this.tiltCtx;
    const S = 120;
    const c = S / 2;
    const R = 46;
    ctx.clearRect(0, 0, S, S);
    ctx.fillStyle = 'rgba(255,255,255,0.025)';
    ctx.strokeStyle = 'rgba(160,190,220,0.30)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(c, c, R, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(c, c, R * 0.5, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(160,190,220,0.16)';
    ctx.beginPath();
    ctx.moveTo(c - R, c); ctx.lineTo(c + R, c);
    ctx.moveTo(c, c - R); ctx.lineTo(c, c + R);
    ctx.stroke();

    if (fine) {
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = 'rgba(255,196,92,0.85)';
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(c, c, (R - 8) * 0.42, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
    }

    const px = c + (-tiltZ / maxTilt) * (R - 8);
    const py = c + (tiltX / maxTilt) * (R - 8);
    ctx.strokeStyle = fine ? 'rgba(255,196,92,0.7)' : 'rgba(90,200,255,0.65)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(c, c); ctx.lineTo(px, py); ctx.stroke();
    ctx.fillStyle = fine ? '#ffce6a' : '#6fd3ff';
    ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.beginPath(); ctx.arc(c, c, 2.5, 0, Math.PI * 2); ctx.fill();
  }

  // 静态内容拆成「底图」和「墙层」两张离屏画布：
  // 底图（背景/网格/冰面/加速带）→ 轨迹 → 墙层（墙/洞/熔岩/起点）→ 动态标记，
  // 保持原有图层顺序，同时把每帧 186 段墙的重绘降为两次 drawImage。
  ensureStaticLayer(level) {
    const S = minimapSize(level);
    const H = S;
    if (this.mmLevel === level && this.mmSize === S && this.mmBase && this.mmWalls) return;
    // 改尺寸会清空画布内容，必须让后续 drawMinimap 重新烘焙静态层。
    if (this.el.minimap.width !== S || this.el.minimap.height !== H) {
      this.el.minimap.width = S;
      this.el.minimap.height = H;
    }
    const { scale, mx, my } = miniTransform(level, S, H);
    const base = document.createElement('canvas');
    base.width = S; base.height = H;
    const b = base.getContext('2d');
    const walls = document.createElement('canvas');
    walls.width = S; walls.height = H;
    const w = walls.getContext('2d');

    b.fillStyle = 'rgba(10,18,28,0.75)';
    b.fillRect(0, 0, S, H);
    b.fillStyle = 'rgba(70,105,140,0.18)';
    b.fillRect(mx(-level.width / 2), my(-level.depth / 2), level.width * scale, level.depth * scale);
    b.strokeStyle = 'rgba(120,160,200,0.10)';
    b.lineWidth = 1;
    for (let c = 0; c <= level.cols; c++) {
      const x = mx(-level.width / 2 + c * CELL);
      b.beginPath(); b.moveTo(x, my(-level.depth / 2)); b.lineTo(x, my(level.depth / 2)); b.stroke();
    }
    for (let r = 0; r <= level.rows; r++) {
      const y = my(-level.depth / 2 + r * CELL);
      b.beginPath(); b.moveTo(mx(-level.width / 2), y); b.lineTo(mx(level.width / 2), y); b.stroke();
    }
    for (const z of level.iceZones) {
      b.fillStyle = 'rgba(98,200,255,0.32)';
      b.beginPath(); b.arc(mx(z.x), my(z.z), z.r * scale, 0, Math.PI * 2); b.fill();
      b.strokeStyle = 'rgba(203,241,255,0.92)';
      b.lineWidth = 1.2;
      b.stroke();
    }
    for (const boost of level.boosts) {
      const px = mx(boost.x);
      const py = my(boost.z);
      b.fillStyle = 'rgba(255,162,58,0.30)';
      b.beginPath(); b.arc(px, py, boost.r * scale, 0, Math.PI * 2); b.fill();
      const tx = px + boost.dirX * 5.5;
      const ty = py + boost.dirZ * 5.5;
      const ox = -boost.dirZ * 3.4;
      const oy = boost.dirX * 3.4;
      b.fillStyle = '#ffb347';
      b.beginPath();
      b.moveTo(tx, ty);
      b.lineTo(px + ox, py + oy);
      b.lineTo(px - ox, py - oy);
      b.closePath();
      b.fill();
    }

    const k = S / 220;
    w.strokeStyle = '#9dc4e8';
    w.lineWidth = 2.1 * k;
    w.lineCap = 'round';
    w.beginPath();
    for (const s of level.segments) {
      if (s.dir === 'h') {
        w.moveTo(mx(s.x - s.len / 2), my(s.z));
        w.lineTo(mx(s.x + s.len / 2), my(s.z));
      } else {
        w.moveTo(mx(s.x), my(s.z - s.len / 2));
        w.lineTo(mx(s.x), my(s.z + s.len / 2));
      }
    }
    w.stroke();
    for (const h of level.holes) {
      w.fillStyle = '#02060b';
      w.beginPath(); w.arc(mx(h.x), my(h.z), h.r * scale, 0, Math.PI * 2); w.fill();
      w.strokeStyle = 'rgba(120,150,180,0.55)';
      w.lineWidth = 1;
      w.stroke();
    }
    for (const h of level.hazards) {
      w.fillStyle = 'rgba(230,70,60,0.75)';
      w.beginPath(); w.arc(mx(h.x), my(h.z), h.r * scale, 0, Math.PI * 2); w.fill();
    }
    w.fillStyle = '#4aa8ff';
    w.beginPath(); w.arc(mx(level.start.x), my(level.start.z), 4 * k, 0, Math.PI * 2); w.fill();

    this.mmBase = base;
    this.mmWalls = walls;
    this.mmLevel = level;
    this.mmSize = S;
    this.staticDraws += 1;
  }

  drawMinimap(level, marble, elapsed) {
    this.ensureStaticLayer(level);
    const ctx = this.mmCtx;
    const S = this.el.minimap.width;
    const H = this.el.minimap.height;
    const { scale, mx, my } = miniTransform(level, S, H);

    ctx.clearRect(0, 0, S, H);
    ctx.drawImage(this.mmBase, 0, 0);

    if (this.trail.length > 1) {
      ctx.strokeStyle = 'rgba(110,205,255,0.40)';
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (let i = 0; i < this.trail.length; i++) {
        const p = this.trail[i];
        if (i === 0) ctx.moveTo(mx(p.x), my(p.z));
        else ctx.lineTo(mx(p.x), my(p.z));
      }
      ctx.stroke();
    }
    ctx.drawImage(this.mmWalls, 0, 0);

    const k = S / 220;
    for (const g of level.gems) {
      if (g.taken) continue;
      ctx.fillStyle = '#ffd166';
      ctx.beginPath(); ctx.arc(mx(g.x), my(g.z), 3.2 * k, 0, Math.PI * 2); ctx.fill();
    }
    for (const cp of level.checkpoints) {
      ctx.strokeStyle = cp.active ? '#49ffe0' : '#6fd4e3';
      ctx.lineWidth = (cp.active ? 2.2 : 1.3) * k;
      ctx.beginPath();
      ctx.arc(mx(cp.x), my(cp.z), Math.max(3.4, cp.r * scale), 0, Math.PI * 2);
      ctx.stroke();
    }

    // 终点与小地图上的青色检查点容易混淆：改为金色准心 + 十字，
    // 与检查点的青色圆环形成明确区分（与 3D 光柱同一色系）。
    const gx = mx(level.goal.x);
    const gy = my(level.goal.z);
    const pulse = 1 + Math.sin(elapsed * 4) * 0.12;
    const gr = Math.max(5.6, GOAL_R * scale) * pulse;
    ctx.fillStyle = '#ffd45e';
    ctx.beginPath(); ctx.arc(gx, gy, gr * 0.62, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#ffe6a3';
    ctx.lineWidth = 2 * k;
    ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(gx - gr * 1.5, gy); ctx.lineTo(gx - gr * 1.08, gy);
    ctx.moveTo(gx + gr * 1.08, gy); ctx.lineTo(gx + gr * 1.5, gy);
    ctx.moveTo(gx, gy - gr * 1.5); ctx.lineTo(gx, gy - gr * 1.08);
    ctx.moveTo(gx, gy + gr * 1.08); ctx.lineTo(gx, gy + gr * 1.5);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(mx(marble.x), my(marble.z), 4.6 * k, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(30,60,90,0.9)';
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }
}

const keyTable = () => `<div class="key-table">${KEY_ROWS
  .map(([k, v]) => `<div class="key-row"><kbd>${k}</kbd><span>${v}</span></div>`)
  .join('')}</div>`;

function statGrid(items) {
  return `<div class="result-grid">${items
    .map(([k, v]) => `<div class="result-cell"><span>${k}</span><b>${v}</b></div>`)
    .join('')}</div>`;
}

function breakdown(d) {
  const rows = [
    ['基础分', '1000'],
    ['用时扣除', `-${d.b.timeCost}`],
    ['碰撞扣除', `-${d.b.hitCost}`],
    ['宝石奖励', `+${d.b.gemBonus}`],
    ['时间奖励', `+${d.b.timeBonus}`]
  ];
  return `<div class="breakdown">${rows
    .map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`)
    .join('')}</div>`;
}

const starsHTML = (n) => {
  const k = Math.max(0, Math.min(3, n || 0));
  return `<div class="stars">${'★'.repeat(k)}<span class="off">${'★'.repeat(3 - k)}</span></div>`;
};

function recordBadge(rec) {
  if (!rec) return '';
  if (!rec.previous) return '<div class="record-flag">首次通关 · 成绩已记录</div>';
  const tags = [];
  if (rec.newTime) tags.push('最快用时');
  if (rec.newScore) tags.push('最高得分');
  if (rec.newStars) tags.push('星级提升');
  return tags.length ? `<div class="record-flag">新纪录 · ${tags.join(' / ')}</div>` : '';
}

// 全通关逐关回顾：展示当前难度档下每关星级与最佳用时。
const clearReview = (d) => (d.levels || []).map((l) => {
  const stars = l.best ? Math.max(0, Math.min(3, Number(l.best.stars) || 0)) : 0;
  const starStr = '★'.repeat(stars) + '<span class="off">' + '★'.repeat(3 - stars) + '</span>';
  const time = l.best ? fmtTime(l.best.time) : '--:--';
  return `<div class="review-row"><span>第 ${l.index + 1} 关 · ${l.name}</span>`
    + `<span class="review-stars">${starStr}</span><b>${time}</b></div>`;
}).join('');

const levelCards = (d) => (d.levels || []).map((l) => {
  const stars = l.best ? Math.max(0, Math.min(3, Number(l.best.stars) || 0)) : 0;
  const best = l.best ? `最佳 ${fmtTime(l.best.time)} · ${l.best.score} 分` : '尚无记录';
  const starText = '★'.repeat(stars) + '<span class="off">' + '★'.repeat(3 - stars) + '</span>';
  return `<button class="level-card" data-action="level" data-level="${l.index}" ${l.unlocked ? '' : 'disabled'}>
    <span class="lc-num">LEVEL 0${l.index + 1}</span>
    <span class="lc-name">${l.name}</span>
    <span class="lc-sub">${l.subtitle}</span>
    <span class="stars" style="font-size:13px">${starText}</span>
    <span class="lc-best">${best}</span>
    ${l.unlocked ? '' : '<span class="lc-lock">未解锁</span>'}
  </button>`;
}).join('');

const OVERLAY_HTML = {
  menu: (d) => `
    <div class="modal-tag">MARBLE MAZE · 3D</div>
    <h1>3D 弹珠迷宫</h1>
    <p class="modal-lead">倾斜整座迷宫，让弹珠靠着重力与惯性滚过墙体、绕开陷阱，抵达金色光柱标记的终点。</p>
    <div class="difficulty-row">
      <span>难度</span>
      <button type="button" data-action="difficulty" data-mode="relaxed" class="diff-chip${d.difficulty === 'relaxed' ? ' active' : ''}">轻松</button>
      <button type="button" data-action="difficulty" data-mode="standard" class="diff-chip${d.difficulty === 'standard' ? ' active' : ''}">标准</button>
      <button type="button" data-action="difficulty" data-mode="challenge" class="diff-chip${d.difficulty === 'challenge' ? ' active' : ''}">挑战</button>
      ${d.assist ? '<em>辅助档 · 成绩单独记录</em>' : ''}
    </div>
    <div class="modal-cols">
      <div>
        <h3>怎么玩</h3>
        <ul class="modal-list">
          <li>键盘、鼠标或手机体感控制倾斜，松手自动回正</li>
          <li>弹珠有惯性与滚动摩擦，撞墙会反弹减速</li>
          <li>青色检查点激活后，失败可就地复活</li>
          <li>橙色箭头加速带助推、浅蓝冰面打滑</li>
          <li>黑色空洞会坠落，红色熔岩触碰即失败</li>
        </ul>
      </div>
      <div><h3>操作</h3>${keyTable()}</div>
    </div>
    <div class="modal-section-title">选择关卡 · 累计 ${d.totalStars || 0} / ${d.maxStars || 9} ★ · 生涯通关 ${d.clearCount || 0} 次 · 游玩 ${fmtCareer(d.playTime)}</div>
    <div class="level-picker">${levelCards(d)}</div>
    <div class="modal-btns">
      <button class="primary-btn" data-action="start">从第 1 关开始 <span>↵</span></button>
      <button class="ghost-btn" data-action="ai-lab">AI 实验室</button>
    </div>
    <p class="modal-foot">纯前端运行 · AI 功能由魔搭提供（离线自动降级）${d.persistent === false ? ' · 本机存储不可用，成绩仅本次有效' : ''}</p>`,

  ailab: (d) => `
    <div class="modal-tag">AI LAB · MODELSCOPE</div>
    <h1>AI 实验室</h1>
    <p class="modal-lead">用一句话描述你想要的迷宫，AI 会生成并校验可解性；教练会根据你的表现给出建议。</p>
    <div class="ai-panel">
      <label class="ai-label" for="aiPrompt">关卡设计师 · 描述难度与机制</label>
      <textarea class="ai-input" id="aiPrompt" rows="3" placeholder="例如：难一点，有熔岩和冰面，多加加速带和检查点">${d.prompt || ''}</textarea>
      <button class="primary-btn ai-run" data-action="ai-design" id="aiDesignBtn">生成并开玩</button>
      <div class="ai-status" id="aiStatus">${d.status || 'Ctrl / ⌘ + Enter 可直接生成；离线时使用本地规则引擎，同样可玩。'}</div>
      <label class="ai-label" for="aiTheme">叙事主题 · 给关卡起个名字</label>
      <input class="ai-input" id="aiTheme" type="text" placeholder="例如：冰天雪地 / 熔岩深渊" value="${d.theme || ''}">
      <button class="ghost-btn ai-run" data-action="ai-narrative">生成主题</button>
      <div class="ai-story" id="aiStory">${d.story ? `${d.story.name} · ${d.story.subtitle}<br>${d.story.tip}` : ''}</div>
      <button class="ghost-btn ai-run" data-action="ai-report">生成训练报告</button>
      <textarea class="ai-report" id="aiReport" rows="6" readonly>${d.report || ''}</textarea>
    </div>
    <div class="modal-btns"><button class="ghost-btn" data-action="menu">返回主菜单</button></div>`,

  paused: (d) => `
    <div class="modal-tag">PAUSED</div>
    <h1>已暂停</h1>
    <p class="modal-lead">第 ${d.levelIndex + 1} 关 · ${d.name}　|　用时 ${fmtTime(d.elapsed)}　|　当前总分 ${d.score}</p>
    ${statGrid([
      ['总分', d.score],
      ['本关预估', `+${d.reward}`],
      ['碰撞', d.hits],
      ['宝石', `${d.gemsGot} / ${d.gemsTotal}`],
      ['剩余生命', d.lives]
    ])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="resume">继续游戏 <span>P</span></button>
      <button class="ghost-btn" data-action="restart">重开本关 <span>R</span></button>
    </div>`,

  levelclear: (d) => `
    <div class="modal-tag success">LEVEL CLEAR</div>
    <h1>第 ${d.levelIndex + 1} 关通过</h1>
    <p class="modal-lead">${d.name}　·　用时 ${fmtTime(d.elapsed)}${d.custom ? '　·　自定义关卡，不计入主线成绩' : ''}</p>
    ${starsHTML(d.stars)}
    ${recordBadge(d.rec)}
    <div class="stars-row">累计星级 <b>${d.totalStars}</b> / ${d.maxStars}</div>
    ${breakdown(d)}
    ${statGrid([
      ['用时', fmtTime(d.elapsed)],
      ['碰撞', d.hits],
      ['宝石', `${d.gemsGot} / ${d.gemsTotal}`],
      ['本关结算', `+${d.levelScore}`],
      ['累计总分', d.score],
      ['最佳用时', d.best ? fmtTime(d.best.time) : '—']
    ])}
    ${d.aiPraise ? `<div class="ai-praise">${d.aiPraise}</div>` : ''}
    <div class="ai-coach" id="aiCoach"></div>
    ${d.custom
      ? `<div class="modal-btns">
          <button class="primary-btn" data-action="menu">返回主菜单 <span>↵</span></button>
          ${d.shareCode ? '<button class="ghost-btn" data-action="copy-share">复制分享链接</button>' : ''}
        </div>`
      : `<button class="primary-btn" data-action="next">进入第 ${d.levelIndex + 2} 关 <span>↵</span></button>`}
    ${d.shareCode
      ? `<details class="share-line"><summary>分享码 · 手动复制</summary><b>${d.shareCode}</b></details>`
      : ''}`,

  gameclear: (d) => `
    <div class="modal-tag success">ALL CLEAR</div>
    <h1>全部通关</h1>
    <p class="modal-lead">三座迷宫全部走完，弹珠稳稳落地。</p>
    <div class="clear-title">${d.title || '弹珠专家'}</div>
    ${starsHTML(d.stars)}
    ${recordBadge(d.rec)}
    <div class="stars-row">累计星级 <b>${d.totalStars}</b> / ${d.maxStars} · ${d.difficultyLabel || '标准'}${d.assist ? '（辅助档）' : ''}</div>
    <div class="clear-review">${clearReview(d)}</div>
    ${statGrid([
      ['最终总分', d.score],
      ['总用时', fmtTime(d.totalTime)],
      ['总碰撞', d.totalHits],
      ['剩余生命', d.lives]
    ])}
    <textarea class="score-card" id="scoreCard" readonly>${d.cardText || ''}</textarea>
    <div class="modal-btns">
      <button class="primary-btn" data-action="again">再玩一次 <span>↵</span></button>
      <button class="ghost-btn" data-action="copy-card">复制成绩卡</button>
      <button class="ghost-btn" data-action="menu">返回主菜单</button>
    </div>`,

  failed: (d) => `
    <div class="modal-tag danger">FAILED</div>
    <h1>${d.reason}</h1>
    <p class="modal-lead">${d.hasCheckpoint
      ? `${d.checkpointName} 已激活，复活后保留本关用时、宝石与碰撞记录；按 R 可从起点彻底重开。`
      : '别急，收小倾角、提前减速会好走很多；按住 Shift 可精细微调。'}剩余生命 ${d.lives}。</p>
    ${d.coach ? `<div class="ai-coach-live" id="aiCoachLive" aria-live="polite">
      <div class="ai-coach-title">AI 教练 · 本局诊断</div>
      <div class="ai-coach-row ai-coach-wait">正在回看这一局的轨迹…</div>
    </div>` : ''}
    ${statGrid([
      ['本关用时', fmtTime(d.elapsed)],
      ['已结算总分', d.score],
      ['本关未结算', `+${d.reward}`],
      ['剩余生命', d.lives]
    ])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="retry">${d.hasCheckpoint ? '从检查点复活' : '重试本关'} <span>↵</span></button>
      <button class="ghost-btn" data-action="menu">返回主菜单</button>
    </div>`,

  gameover: (d) => `
    <div class="modal-tag danger">GAME OVER</div>
    <h1>生命用尽</h1>
    <p class="modal-lead">这次停在了第 ${d.levelIndex + 1} 关 · ${d.name}。</p>
    ${statGrid([['最终总分', d.score], ['总用时', fmtTime(d.totalTime)], ['总碰撞', d.totalHits]])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="again">重新开始 <span>↵</span></button>
      <button class="ghost-btn" data-action="menu">返回主菜单</button>
    </div>`
};
