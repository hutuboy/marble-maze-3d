// 画质档位控制：低帧率时自动降低像素比与阴影成本，避免「追帧 → 更卡」的死亡螺旋。
// 决策函数是纯函数，便于在 Node 里单测滞回逻辑。
export const QUALITY_ORDER = ['high', 'medium', 'low'];
export const QUALITY_MODES = ['auto', 'high', 'medium', 'low'];
export const QUALITY_LABELS = {
  auto: '画质 自动', high: '画质 高', medium: '画质 中', low: '画质 低'
};

const SAMPLE_COUNT = 30;
const WINDOW_SIZE = 45;
const CHANGE_COOLDOWN_MS = 2500;

export function decideQuality(current, fps) {
  const i = Math.max(0, QUALITY_ORDER.indexOf(current));
  if (fps < 25) return 'low';                       // 极低帧率一步到位止损
  if (fps < 42) return QUALITY_ORDER[Math.min(2, i + 1)];
  if (fps > 55) return QUALITY_ORDER[Math.max(0, i - 1)];
  return current;                                  // 42~55 fps 保持，避免来回抖动
}

export class QualityController {
  constructor(view, onChange = () => {}) {
    this.view = view;
    this.onChange = onChange;
    this.mode = 'auto';
    this.level = 'high';
    this.samples = [];
    this.lastChange = -Infinity;
    this.changes = 0;
    this.view.setQuality('high');
    this.onChange(this.mode, this.level);
  }

  label() { return QUALITY_LABELS[this.mode]; }

  setMode(mode) {
    if (!QUALITY_MODES.includes(mode)) return this.label();
    this.mode = mode;
    this.samples = [];
    this.lastChange = -Infinity;
    if (mode !== 'auto') {
      this.level = mode;
      this.view.setQuality(mode);
    }
    this.onChange(this.mode, this.level);
    return this.label();
  }

  cycle() {
    const i = QUALITY_MODES.indexOf(this.mode);
    return this.setMode(QUALITY_MODES[(i + 1) % QUALITY_MODES.length]);
  }

  // 返回本帧是否发生档位变化。
  sample(wallDt, nowMs) {
    if (this.mode !== 'auto' || !(wallDt > 0)) return false;
    this.samples.push(wallDt);
    if (this.samples.length > WINDOW_SIZE) this.samples.shift();
    if (this.samples.length < SAMPLE_COUNT) return false;
    if (nowMs - this.lastChange < CHANGE_COOLDOWN_MS) return false;

    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    const fps = 1 / Math.max(avg, 1e-6);
    const next = decideQuality(this.level, fps);
    if (next === this.level) return false;

    this.level = next;
    this.view.setQuality(next);
    this.lastChange = nowMs;
    this.changes += 1;
    this.samples = [];
    this.onChange(this.mode, this.level);
    return true;
  }

  // 供验证脚本注入帧率：直接填满采样窗口，省去等待 30 帧。
  probe(fps, nowMs) {
    if (this.mode !== 'auto') return false;
    this.samples = new Array(SAMPLE_COUNT).fill(1 / Math.max(fps, 1e-6));
    return this.sample(1 / Math.max(fps, 1e-6), nowMs);
  }
}
