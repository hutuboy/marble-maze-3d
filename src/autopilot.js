// AI 自动试玩 Agent：读取弹珠状态 → 沿 BFS 安全路径规划 → 每物理步输出归一化倾角。
// 纯逻辑模块，不依赖 DOM / 网络，Node 与浏览器共用同一份实现：
// - 游戏内「AI 演示」逐帧调用 nextAxis()，玩家随时可以接管；
// - Node 侧 run() 完整跑一局并记录动作序列，配合 seed 可逐帧复现，
//   作为「自动试玩与测试 Agent」的可复现验证（初始状态 + 种子 + 动作序列）。
import { Marble } from './physics.js';
import { STEP } from './clock.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export class Autopilot {
  constructor(level) {
    this.level = level;
    this.pts = level.safePath.map((i) => level.cellCenter(i % level.cols, Math.floor(i / level.cols)));
    this.target = 1;
    this.steps = 0;
    // 动作序列按需记录（演示模式不记，避免长局内存增长）。
    this.trace = null;
  }

  // 读取当前状态，输出下一步归一化倾角（与键盘输入同一套 -1..1 语义）。
  nextAxis(marble) {
    const t = this.pts[Math.min(this.target, this.pts.length - 1)];
    const dx = t.x - marble.x;
    const dz = t.z - marble.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.34 && this.target < this.pts.length - 1) this.target += 1;
    // 期望速度随距离收敛：远处巡航、近点减速，拐角前自然收倾角。
    const speed = clamp(d * 1.7, 0, 4.0);
    const nx = d > 1e-6 ? dx / d : 0;
    const nz = d > 1e-6 ? dz / d : 0;
    const ax = clamp((nx * speed - marble.vx) * 0.62, -1, 1);
    const az = clamp((nz * speed - marble.vz) * 0.62, -1, 1);
    this.steps += 1;
    // 必须记录全精度轴值：任何舍入都会在反馈控制中逐帧累积，复杂关卡回放会发散。
    if (this.trace) this.trace.push([ax, az]);
    return { x: ax, z: az };
  }

  get progress() {
    return this.pts.length > 1 ? (this.target - 1) / (this.pts.length - 1) : 1;
  }

  // 完整跑一局：固定 120 Hz 步长，与主循环同一物理口径。
  // record=true 时记录完整动作序列，供复现与测试断言。
  run(cfg, { seconds = 150, record = false } = {}) {
    if (record) this.trace = [];
    const m = new Marble(this.level);
    const initial = { x: m.x, z: m.z, seed: cfg.seed };
    let hits = 0;
    const maxSteps = Math.round(seconds / STEP);
    for (let i = 0; i < maxSteps; i++) {
      const a = this.nextAxis(m);
      m.setAxis(a.x, a.z, cfg.tiltMax);
      const ev = m.step(STEP, cfg);
      hits += ev.hits;
      if (ev.fell >= 0 || ev.hazard >= 0) {
        return {
          ok: false, initial, hits, steps: i + 1, trace: this.trace,
          reason: `撞上陷阱 @ ${(i * STEP).toFixed(1)}s, 路径点 ${this.target}/${this.pts.length}`
        };
      }
      if (ev.goal) {
        return { ok: true, initial, hits, steps: i + 1, time: (i + 1) * STEP, trace: this.trace };
      }
    }
    return {
      ok: false, initial, hits, steps: maxSteps, trace: this.trace,
      reason: `超时，路径点 ${this.target}/${this.pts.length}，位置 (${m.x.toFixed(2)}, ${m.z.toFixed(2)})`
    };
  }
}

// 复现器：给定 seed 重建关卡后，逐帧回放动作序列验证结果一致。
// 只依赖物理求解器的确定性，不依赖 Autopilot 的决策逻辑。
export function replayTrace(level, cfg, trace) {
  const m = new Marble(level);
  for (let i = 0; i < trace.length; i++) {
    m.setAxis(trace[i][0], trace[i][1], cfg.tiltMax);
    const ev = m.step(STEP, cfg);
    if (ev.fell >= 0 || ev.hazard >= 0) return { ok: false, reason: `回放第 ${i} 步撞上陷阱` };
    if (ev.goal) return { ok: true, steps: i + 1, time: (i + 1) * STEP };
  }
  return { ok: false, reason: '回放结束仍未抵达终点' };
}