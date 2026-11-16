// 固定步长时钟：把墙钟时间切成 1/120 s 的物理步。
//
// 旧实现把单帧 Δt 直接 clamp 到 0.1 s 且步数上限 12，
// 低帧率（如 5 fps，Δt=0.2 s）时每帧只推进 0.1 s，
// 真实 1 s 只跑出 0.5 s 游戏时间 —— 表现为「慢动作」。
// 现在允许单帧最多承认 MAX_CATCHUP 的墙钟时间并保留欠账，
// 同时用 MAX_STEPS 防止单帧无限追帧造成死亡螺旋。
export const STEP = 1 / 120;
export const MAX_CATCHUP = 0.25;
export const MAX_STEPS = 30; // 30 * (1/120) === 0.25

export class FixedClock {
  constructor(step = STEP) {
    this.step = step;
    this.acc = 0;
    this.totalWall = 0;
    this.totalSim = 0;
    this.lastSteps = 0;
  }

  // 只丢「欠账」，不丢累计统计；暂停 / 切后台时调用。
  reset() {
    this.acc = 0;
    this.lastSteps = 0;
  }

  // 返回本帧应执行的固定步数。
  advance(wallDt) {
    const wall = Math.max(0, Math.min(MAX_CATCHUP, wallDt));
    this.totalWall += wall;
    this.acc = Math.min(MAX_CATCHUP, this.acc + wall);
    let steps = 0;
    while (this.acc + 1e-12 >= this.step && steps < MAX_STEPS) {
      this.acc -= this.step;
      steps += 1;
    }
    this.lastSteps = steps;
    this.totalSim += steps * this.step;
    return steps;
  }

  // 供测试与诊断：当前累计模拟时间与承认的墙钟时间之差。
  get lag() { return this.totalWall - this.totalSim; }
}
