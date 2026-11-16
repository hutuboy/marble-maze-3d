import { LEVELS, buildLevel } from './levels.js';
import { Marble } from './physics.js';
import { Records } from './records.js';
import { DIFFICULTIES, effectiveConfig } from './difficulty.js';

export const STATE = {
  MENU: 'menu', PLAYING: 'playing', PAUSED: 'paused', FAILING: 'failing',
  FAILED: 'failed', LEVELCLEAR: 'levelclear', GAMECLEAR: 'gameclear', GAMEOVER: 'gameover'
};

const fmtSeconds = (s) => {
  const t = Math.max(0, Math.floor(s));
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
};

export class Game {
  constructor(view, ui, sfx) {
    this.view = view;
    this.ui = ui;
    this.sfx = sfx;
    this.records = new Records();
    this.difficulty = this.records.difficulty;
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
  }

  get cfg() { return effectiveConfig(LEVELS[this.levelIndex], this.difficulty); }

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
      playTime: this.records.playTime
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
      `累计 ${stars} / ${LEVELS.length * 3} ★　总分 ${this.score}　总用时 ${fmtSeconds(this.totalTime)}　总碰撞 ${this.totalHits}`
    ].join('\n');
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
      checkpointsTotal: this.level.checkpoints.length
    });
  }

  setAxis(x, z) {
    this.axis.x = x;
    this.axis.z = z;
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
      this.ui.showOverlay('failed', {
        reason, lives: this.lives, elapsed: this.elapsed,
        score: this.score, reward: this.levelReward(),
        hasCheckpoint: !!cp,
        checkpointName: cp ? `检查点 ${cp.order + 1}` : ''
      });
    }
    this.updateHUD();
  }

  clearLevel() {
    this.lastBreakdown = this.rewardBreakdown();
    this.lastLevelScore = this.lastBreakdown.total;
    this.score += this.lastLevelScore;
    this.ui.setStatus('通关', 'good');

    const stars = this.starsFor(this.cfg, this.elapsed, this.hits);
    this.records.addClear();
    const rec = this.records.submit(this.cfg.id, {
      time: this.elapsed, score: this.lastLevelScore, stars, mode: this.difficulty
    });
    this.records.unlock(Math.min(LEVELS.length, this.levelIndex + 2));
    this.flushStats();
    this.lastStars = stars;
    this.lastRecord = rec;
    this.view.burstGoal();

    const common = {
      levelIndex: this.levelIndex, name: this.cfg.name,
      elapsed: this.elapsed, hits: this.hits,
      gemsGot: this.gemsGot, gemsTotal: this.level.gems.length,
      levelScore: this.lastLevelScore, score: this.score,
      b: this.lastBreakdown, stars, rec,
      best: this.records.best(this.cfg.id, this.difficulty),
      totalStars: this.records.starsForMode(this.difficulty),
      maxStars: LEVELS.length * 3,
      difficulty: this.difficulty,
      difficultyLabel: DIFFICULTIES[this.difficulty].label,
      assist: this.assistMode,
      levels: LEVELS.map((c, i) => ({
        index: i, name: c.name,
        best: this.records.best(c.id, this.difficulty)
      }))
    };

    const isLast = this.levelIndex + 1 >= LEVELS.length;
    this.state = isLast ? STATE.GAMECLEAR : STATE.LEVELCLEAR;
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

    if (ev.goal) { this.clearLevel(); }
  }

  update(dt) {
    if (this.state === STATE.PLAYING) {
      this.elapsed += dt;
      this.totalTime += dt;
      this.records.addPlayTime(dt);
      this.playFlushAccum += dt;
      if (this.playFlushAccum >= 5) this.flushStats();
      const limit = this.cfg.timeLimit;
      if (limit > 0) {
        const left = limit - this.elapsed;
        if (left <= 0) { this.fail('时间耗尽'); return; }
        const sec = Math.ceil(left);
        if (sec <= 10 && sec !== this.warnAt) {
          this.warnAt = sec;
          this.sfx.warn();
        }
      }

      this.marble.setAxis(this.axis.x, this.axis.z, this.cfg.tiltMax);
      const ev = this.marble.step(dt, this.cfg);
      this.handleEvents(ev);
      if (this.state === STATE.PLAYING || this.state === STATE.FAILING) this.updateHUD();
    } else if (this.state === STATE.FAILING) {
      this.fallProgress = Math.min(1, this.fallProgress + dt * 1.5);
      if (this.fallProgress >= 1) this.fail(this.pendingReason);
    }
  }
}
