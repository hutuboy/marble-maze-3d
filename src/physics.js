import {
  BALL_R, GOAL_R, CHECKPOINT_R, BOOST_R, ICE_R,
  BOOST_IMPULSE, BOOST_COOLDOWN, ICE_DRAG_FACTOR
} from './levels.js';

const MAX_SPEED = 19;
const ROLL_FACTOR = 0.72;
const DRAG = 1.02;
const RESTITUTION = 0.26;
const TILT_RESPONSE = 9.5;
const SUBSTEP = BALL_R * 0.25;
const HIT_THRESHOLD = 2.4;
const HIT_COOLDOWN = 0.11;

export class Marble {
  constructor(level) {
    this.level = level;
    this.reset();
  }

  reset(spawn = null) {
    const p = spawn || this.level.start;
    this.x = p.x;
    this.z = p.z;
    this.vx = 0;
    this.vz = 0;
    this.tiltX = 0;
    this.tiltZ = 0;
    this.targetX = 0;
    this.targetZ = 0;
    this.hitCooldown = 0;
    this.boostCooldown = 0;
    this.onIce = false;
    this.spinAxis = { x: 1, y: 0, z: 0 };
    this.spinAngle = 0;
  }

  respawn(spawn) { this.reset(spawn); }

  setAxis(ix, iz, maxTilt) {
    const len = Math.hypot(ix, iz);
    const k = len > 1 ? 1 / len : 1;
    const ax = ix * k;
    const az = iz * k;
    this.targetZ = -ax * maxTilt;
    this.targetX = az * maxTilt;
  }

  resolveWalls(ev) {
    const r = BALL_R;
    const walls = this.level.walls;
    for (let pass = 0; pass < 2; pass++) {
      let touched = false;
      for (let i = 0; i < walls.length; i++) {
        const b = walls[i];
        const cx = Math.max(b.minX, Math.min(this.x, b.maxX));
        const cz = Math.max(b.minZ, Math.min(this.z, b.maxZ));
        const dx = this.x - cx;
        const dz = this.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= r * r) continue;
        touched = true;

        let nx;
        let nz;
        let pen;
        if (d2 > 1e-10) {
          const d = Math.sqrt(d2);
          nx = dx / d;
          nz = dz / d;
          pen = r - d;
        } else {
          const dl = this.x - b.minX;
          const dr = b.maxX - this.x;
          const dt = this.z - b.minZ;
          const db = b.maxZ - this.z;
          const m = Math.min(dl, dr, dt, db);
          if (m === dl) { nx = -1; nz = 0; }
          else if (m === dr) { nx = 1; nz = 0; }
          else if (m === dt) { nx = 0; nz = -1; }
          else { nx = 0; nz = 1; }
          pen = r + m;
        }

        this.x += nx * pen;
        this.z += nz * pen;

        const vn = this.vx * nx + this.vz * nz;
        if (vn < 0) {
          const impact = -vn;
          this.vx -= (1 + RESTITUTION) * vn * nx;
          this.vz -= (1 + RESTITUTION) * vn * nz;
          this.vx *= 0.99;
          this.vz *= 0.99;
          if (impact > HIT_THRESHOLD && this.hitCooldown <= 0) {
            ev.hits += 1;
            ev.hitSpeed = Math.max(ev.hitSpeed, impact);
            this.hitCooldown = HIT_COOLDOWN;
          }
        }
      }
      if (!touched) break;
    }
  }

  step(dt, cfg) {
    const ev = {
      hits: 0, hitSpeed: 0, fell: -1, hazard: -1, gems: [], goal: false,
      checkpoint: -1, boost: -1, ice: false
    };
    const lv = this.level;

    const a = 1 - Math.exp(-TILT_RESPONSE * dt);
    this.tiltX += (this.targetX - this.tiltX) * a;
    this.tiltZ += (this.targetZ - this.tiltZ) * a;

    const g = cfg.gravity * ROLL_FACTOR;
    const ax = -g * Math.sin(this.tiltZ);
    const az = g * Math.cos(this.tiltZ) * Math.sin(this.tiltX);
    this.vx += ax * dt;
    this.vz += az * dt;

    // 冰面：只降低滚动阻尼，重力投影与倾斜响应保持不变。
    let onIce = false;
    for (let i = 0; i < lv.iceZones.length; i++) {
      const z = lv.iceZones[i];
      if (Math.hypot(this.x - z.x, this.z - z.z) < z.r) { onIce = true; break; }
    }
    this.onIce = onIce;
    ev.ice = onIce;

    const damp = Math.exp(-DRAG * (onIce ? ICE_DRAG_FACTOR : 1) * dt);
    this.vx *= damp;
    this.vz *= damp;
    if (!this.targetX && !this.targetZ && Math.hypot(this.vx, this.vz) < 0.035) {
      this.vx = 0;
      this.vz = 0;
    }

    let speed = Math.hypot(this.vx, this.vz);
    if (speed > MAX_SPEED) {
      const k = MAX_SPEED / speed;
      this.vx *= k;
      this.vz *= k;
      speed = MAX_SPEED;
    }

    if (this.hitCooldown > 0) this.hitCooldown -= dt;
    if (this.boostCooldown > 0) this.boostCooldown -= dt;

    const steps = Math.max(1, Math.ceil((speed * dt) / SUBSTEP));
    const sdt = dt / steps;
    for (let i = 0; i < steps; i++) {
      this.x += this.vx * sdt;
      this.z += this.vz * sdt;
      this.resolveWalls(ev);
    }

    const hw = this.level.width / 2 - BALL_R - 0.02;
    const hd = this.level.depth / 2 - BALL_R - 0.02;
    if (this.x < -hw) { this.x = -hw; if (this.vx < 0) this.vx = 0; }
    if (this.x > hw) { this.x = hw; if (this.vx > 0) this.vx = 0; }
    if (this.z < -hd) { this.z = -hd; if (this.vz < 0) this.vz = 0; }
    if (this.z > hd) { this.z = hd; if (this.vz > 0) this.vz = 0; }

    // 加速带：位置稳定后沿通道方向给一次定向冲量，带 1 秒全局冷却。
    for (let i = 0; i < lv.boosts.length; i++) {
      const b = lv.boosts[i];
      if (Math.hypot(this.x - b.x, this.z - b.z) >= b.r) continue;
      if (this.boostCooldown <= 0) {
        this.vx += b.dirX * BOOST_IMPULSE;
        this.vz += b.dirZ * BOOST_IMPULSE;
        const s = Math.hypot(this.vx, this.vz);
        if (s > MAX_SPEED) {
          this.vx *= MAX_SPEED / s;
          this.vz *= MAX_SPEED / s;
        }
        this.boostCooldown = BOOST_COOLDOWN;
        ev.boost = i;
      }
      break;
    }

    speed = Math.hypot(this.vx, this.vz);
    if (speed > 0.001) {
      this.spinAxis = { x: this.vz / speed, y: 0, z: -this.vx / speed };
      this.spinAngle = (speed * dt) / BALL_R;
    } else {
      this.spinAngle = 0;
    }

    for (let i = 0; i < lv.holes.length; i++) {
      const h = lv.holes[i];
      if (Math.hypot(this.x - h.x, this.z - h.z) < h.r * 0.72) {
        ev.fell = i;
        break;
      }
    }
    if (ev.fell < 0) {
      for (let i = 0; i < lv.hazards.length; i++) {
        const h = lv.hazards[i];
        if (Math.hypot(this.x - h.x, this.z - h.z) < h.r * 0.80) {
          ev.hazard = i;
          break;
        }
      }
    }
    if (ev.fell < 0 && ev.hazard < 0) {
      for (let i = 0; i < lv.gems.length; i++) {
        const gem = lv.gems[i];
        if (!gem.taken && Math.hypot(this.x - gem.x, this.z - gem.z) < gem.r + BALL_R * 0.55) {
          gem.taken = true;
          ev.gems.push(i);
        }
      }
      for (let i = 0; i < lv.checkpoints.length; i++) {
        const cp = lv.checkpoints[i];
        if (cp.active) continue;
        if (Math.hypot(this.x - cp.x, this.z - cp.z) < cp.r + BALL_R * 0.35) {
          cp.active = true;
          ev.checkpoint = i;
          break;
        }
      }
      if (Math.hypot(this.x - lv.goal.x, this.z - lv.goal.z) < GOAL_R * 0.80) {
        ev.goal = true;
      }
    }

    return ev;
  }
}
