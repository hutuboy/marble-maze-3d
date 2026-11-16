export class Sfx {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
  }

  ensure() {
    if (this.muted) return false;
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return true;
  }

  tone(freq, dur, opts = {}) {
    if (!this.ensure()) return;
    const t0 = this.ctx.currentTime + (opts.delay || 0);
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = opts.type || 'sine';
    osc.frequency.setValueAtTime(Math.max(20, freq), t0);
    if (opts.to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.to), t0 + dur);
    const peak = Math.max(0.001, opts.vol ?? 0.12);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(peak, t0 + Math.min(0.015, dur * 0.2));
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }

  bump(speed) {
    const v = Math.min(0.16, 0.035 + speed * 0.012);
    this.tone(130, 0.13, { type: 'triangle', to: 72, vol: v });
  }

  pickup() {
    this.tone(660, 0.11, { type: 'sine', vol: 0.12 });
    this.tone(990, 0.16, { type: 'sine', vol: 0.11, delay: 0.08 });
  }

  fall() {
    this.tone(420, 0.65, { type: 'sawtooth', to: 70, vol: 0.10 });
    this.tone(210, 0.7, { type: 'sine', to: 55, vol: 0.08, delay: 0.04 });
  }

  fail() {
    this.tone(240, 0.28, { type: 'square', to: 150, vol: 0.07 });
    this.tone(170, 0.42, { type: 'triangle', to: 90, vol: 0.09, delay: 0.18 });
  }

  win() {
    [523, 659, 784, 1046].forEach((f, i) => {
      this.tone(f, 0.30, { type: 'sine', vol: 0.11, delay: i * 0.10 });
    });
  }

  clearAll() {
    [523, 659, 784, 1046, 1318].forEach((f, i) => {
      this.tone(f, 0.42, { type: 'triangle', vol: 0.10, delay: i * 0.13 });
    });
  }

  click() {
    this.tone(520, 0.07, { type: 'sine', vol: 0.07 });
  }

  warn() {
    this.tone(880, 0.09, { type: 'square', vol: 0.045 });
  }

  toggleMute() {
    this.muted = !this.muted;
    if (!this.muted) this.ensure();
    return this.muted;
  }
}
