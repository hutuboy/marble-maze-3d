// 难度只缩放「手感」相关参数：重力、最大倾角、时限、星级时间基准。
// 关卡拓扑（种子 / 陷阱 / 机制位置）完全不变，因此 safePath 与自动通关断言
// 在标准档下与历史行为逐位一致。
export const DIFFICULTIES = {
  standard: { id: 'standard', label: '标准', gravity: 1, tilt: 1, time: 1, par: 1, assist: false },
  relaxed: { id: 'relaxed', label: '轻松', gravity: 0.78, tilt: 0.85, time: 1.4, par: 1.25, assist: true },
  challenge: { id: 'challenge', label: '挑战', gravity: 1.18, tilt: 1.12, time: 0.85, par: 0.85, assist: false }
};

export const DIFFICULTY_ORDER = ['standard', 'relaxed', 'challenge'];

export function isDifficulty(id) {
  return Object.prototype.hasOwnProperty.call(DIFFICULTIES, id);
}

export function cycleDifficulty(id) {
  const i = DIFFICULTY_ORDER.indexOf(id);
  return DIFFICULTY_ORDER[(i + 1 + DIFFICULTY_ORDER.length) % DIFFICULTY_ORDER.length];
}

export function difficultyLabel(id) {
  return (DIFFICULTIES[id] || DIFFICULTIES.standard).label;
}

// 返回新的 cfg 副本，绝不修改 LEVELS 里的原对象。
export function effectiveConfig(cfg, mode) {
  const d = DIFFICULTIES[mode] || DIFFICULTIES.standard;
  return {
    ...cfg,
    gravity: cfg.gravity * d.gravity,
    tiltMax: cfg.tiltMax * d.tilt,
    timeLimit: cfg.timeLimit > 0 ? Math.round(cfg.timeLimit * d.time) : 0,
    par: cfg.par * d.par
  };
}
