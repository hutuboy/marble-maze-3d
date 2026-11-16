export const CELL = 2.0;
export const WALL_T = 0.34;
export const WALL_H = 1.15;
export const BALL_R = 0.42;
export const HOLE_R = 0.62;
export const HAZARD_R = 0.68;
export const GEM_R = 0.46;
export const GOAL_R = 0.76;
export const CHECKPOINT_R = 0.54;
export const BOOST_R = 0.70;
export const ICE_R = 0.86;
export const BOOST_IMPULSE = 2.2;
export const BOOST_COOLDOWN = 1.0;
export const ICE_DRAG_FACTOR = 0.22;

const N = 1;
const E = 2;
const S = 4;
const W = 8;

export const LEVELS = [
  {
    id: 1,
    name: '校准场',
    subtitle: '熟悉倾斜手感',
    cols: 7, rows: 7, seed: 13371, loop: 0.20,
    holes: 0, hazards: 0, gems: 3,
    checkpoints: 1, boosts: 0, ice: 0,
    tiltMax: 0.26, gravity: 25, timeLimit: 0,
    par: 25, parHits: 6,
    tip: '用方向键 / WASD 或按住鼠标左键拖动来倾斜迷宫，把弹珠送进金色光柱标记的终点。路上的青色检查点激活后，失败可就地复活。'
  },
  {
    id: 2,
    name: '裂隙回廊',
    subtitle: '空洞 · 加速带 · 倒计时',
    cols: 10, rows: 10, seed: 24680, loop: 0.13,
    holes: 4, hazards: 0, gems: 5,
    checkpoints: 2, boosts: 3, ice: 0,
    tiltMax: 0.31, gravity: 29, timeLimit: 150,
    par: 55, parHits: 12,
    tip: '黑色空洞会让弹珠坠落，金色宝石可加分。绕路上橙色箭头加速带会被推着冲一段，倒计时开始生效。'
  },
  {
    id: 3,
    name: '熔核终局',
    subtitle: '熔岩 · 冰面 · 加速带',
    cols: 13, rows: 13, seed: 90210, loop: 0.08,
    holes: 7, hazards: 4, gems: 7,
    checkpoints: 2, boosts: 3, ice: 4,
    tiltMax: 0.36, gravity: 33, timeLimit: 180,
    par: 75, parHits: 20,
    tip: '红色熔岩触碰即失败；浅蓝冰面几乎没有摩擦，惯性会被放大。收着点倾角，提前减速。'
  }
];

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const cellIndex = (c, r, cols) => r * cols + c;

function carve(cells, cols, rows, rng, loopFactor) {
  const total = cols * rows;
  cells.fill(N | E | S | W);
  const visited = new Uint8Array(total);
  const stack = [0];
  visited[0] = 1;

  while (stack.length) {
    const cur = stack[stack.length - 1];
    const c = cur % cols;
    const r = (cur / cols) | 0;
    const options = [];
    if (r > 0 && !visited[cur - cols]) options.push([N, S, cur - cols]);
    if (c < cols - 1 && !visited[cur + 1]) options.push([E, W, cur + 1]);
    if (r < rows - 1 && !visited[cur + cols]) options.push([S, N, cur + cols]);
    if (c > 0 && !visited[cur - 1]) options.push([W, E, cur - 1]);

    if (!options.length) {
      stack.pop();
      continue;
    }
    const [bit, opposite, next] = options[(rng() * options.length) | 0];
    cells[cur] &= ~bit;
    cells[next] &= ~opposite;
    visited[next] = 1;
    stack.push(next);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cur = cellIndex(c, r, cols);
      if (c < cols - 1 && (cells[cur] & E) && rng() < loopFactor) {
        cells[cur] &= ~E;
        cells[cur + 1] &= ~W;
      }
      if (r < rows - 1 && (cells[cur] & S) && rng() < loopFactor) {
        cells[cur] &= ~S;
        cells[cur + cols] &= ~N;
      }
    }
  }
}

function flood(cells, cols, rows, blocked) {
  const total = cols * rows;
  const seen = new Uint8Array(total);
  const parent = new Int32Array(total).fill(-1);
  const queue = [0];
  seen[0] = 1;

  for (let h = 0; h < queue.length; h++) {
    const cur = queue[h];
    const c = cur % cols;
    const r = (cur / cols) | 0;
    const wall = cells[cur];
    const push = (bit, next) => {
      if (wall & bit) return;
      if (blocked.has(next) || seen[next]) return;
      seen[next] = 1;
      parent[next] = cur;
      queue.push(next);
    };
    if (r > 0) push(N, cur - cols);
    if (c < cols - 1) push(E, cur + 1);
    if (r < rows - 1) push(S, cur + cols);
    if (c > 0) push(W, cur - 1);
  }
  return { seen, parent, reachedGoal: seen[total - 1] === 1 };
}

function shortestPathCells(parent, cols, rows) {
  const set = new Set();
  let cur = cols * rows - 1;
  let guard = 0;
  while (cur >= 0 && guard++ < cols * rows + 5) {
    set.add(cur);
    cur = parent[cur];
  }
  return set;
}

function shuffle(arr, rng) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (rng() * (i + 1)) | 0;
    const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  return arr;
}

// 加速带只朝「无墙且尽量指向终点」的方向推，避免把弹珠直接顶进墙里。
function openDirection(cells, cols, rows, cell, goalX, goalZ, cx, cz) {
  const c = cell % cols;
  const r = (cell / cols) | 0;
  const wall = cells[cell];
  const tx = goalX - cx;
  const tz = goalZ - cz;
  const len = Math.hypot(tx, tz) || 1;
  const dirs = [
    [N, 0, -1], [E, 1, 0], [S, 0, 1], [W, -1, 0]
  ];
  let best = { x: 1, z: 0 };
  let bestDot = -Infinity;
  for (const [bit, dx, dz] of dirs) {
    if (wall & bit) continue;
    const nc = c + dx;
    const nr = r + dz;
    if (nc < 0 || nc >= cols || nr < 0 || nr >= rows) continue;
    const dot = (dx * tx + dz * tz) / len;
    if (dot > bestDot) { bestDot = dot; best = { x: dx, z: dz }; }
  }
  return best;
}

export function buildLevel(cfg) {
  const { cols, rows } = cfg;
  const width = cols * CELL;
  const depth = rows * CELL;
  const total = cols * rows;
  const goalCell = total - 1;
  const rng = mulberry32(cfg.seed);
  const cells = new Uint8Array(total);
  carve(cells, cols, rows, rng, cfg.loop);

  const center = (c, r) => ({
    x: -width / 2 + (c + 0.5) * CELL,
    z: -depth / 2 + (r + 0.5) * CELL
  });

  const segments = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const wall = cells[cellIndex(c, r, cols)];
      const ctr = center(c, r);
      if (wall & N) segments.push({ x: ctr.x, z: -depth / 2 + r * CELL, len: CELL + WALL_T, dir: 'h' });
      if (wall & W) segments.push({ x: -width / 2 + c * CELL, z: ctr.z, len: CELL + WALL_T, dir: 'v' });
      if (r === rows - 1) segments.push({ x: ctr.x, z: depth / 2, len: CELL + WALL_T, dir: 'h' });
      if (c === cols - 1) segments.push({ x: width / 2, z: ctr.z, len: CELL + WALL_T, dir: 'v' });
    }
  }

  const walls = segments.map((s) => (s.dir === 'h'
    ? { minX: s.x - s.len / 2, maxX: s.x + s.len / 2, minZ: s.z - WALL_T / 2, maxZ: s.z + WALL_T / 2 }
    : { minX: s.x - WALL_T / 2, maxX: s.x + WALL_T / 2, minZ: s.z - s.len / 2, maxZ: s.z + s.len / 2 }));

  const first = flood(cells, cols, rows, new Set());
  const pathSet = shortestPathCells(first.parent, cols, rows);
  const blocked = new Set();
  const reachableCells = [];
  for (let i = 0; i < total; i++) {
    if (first.seen[i] && i !== 0 && i !== goalCell) reachableCells.push(i);
  }

  const nearEnds = (i) => {
    const c = i % cols;
    const r = (i / cols) | 0;
    return (c + r) < 2 || ((cols - 1 - c) + (rows - 1 - r)) < 2;
  };

  const placeDanger = (count, radius) => {
    const result = [];
    const pool = shuffle(reachableCells.filter((i) => !pathSet.has(i) && !nearEnds(i) && !blocked.has(i)), rng);
    for (const i of pool) {
      if (result.length >= count) break;
      blocked.add(i);
      if (flood(cells, cols, rows, blocked).reachedGoal) {
        const c = i % cols;
        const r = (i / cols) | 0;
        const p = center(c, r);
        result.push({ x: p.x, z: p.z, r: radius, cell: i });
      } else {
        blocked.delete(i);
      }
    }
    return result;
  };

  const holes = placeDanger(cfg.holes, HOLE_R);
  const hazards = placeDanger(cfg.hazards, HAZARD_R);

  const gemPool = shuffle(
    reachableCells.filter((i) => !blocked.has(i)),
    rng
  );
  const gems = gemPool.slice(0, cfg.gems).map((i) => {
    const c = i % cols;
    const r = (i / cols) | 0;
    const p = center(c, r);
    return { x: p.x, z: p.z, r: GEM_R, cell: i };
  });

  const start = center(0, 0);
  const goal = center(cols - 1, rows - 1);

  const finalFlood = flood(cells, cols, rows, blocked);
  const safePath = [];
  if (finalFlood.reachedGoal) {
    let cur = goalCell;
    let guard = 0;
    while (cur >= 0 && guard++ < total + 5) {
      safePath.push(cur);
      cur = finalFlood.parent[cur];
    }
    safePath.reverse();
  }

  // 检查点：沿安全路径均匀取点，天然避开陷阱与起终点。
  const checkpoints = [];
  const cpCells = new Set();
  const cpCount = cfg.checkpoints || 0;
  if (cpCount > 0 && safePath.length > 4) {
    for (let k = 1; k <= cpCount; k++) {
      let idx = Math.round(((safePath.length - 1) * k) / (cpCount + 1));
      idx = Math.max(1, Math.min(safePath.length - 2, idx));
      while (idx < safePath.length - 2 && cpCells.has(safePath[idx])) idx += 1;
      const cell = safePath[idx];
      if (cpCells.has(cell) || cell === 0 || cell === goalCell) continue;
      cpCells.add(cell);
      const p = center(cell % cols, (cell / cols) | 0);
      checkpoints.push({ x: p.x, z: p.z, r: CHECKPOINT_R, cell, active: false, order: checkpoints.length });
    }
  }

  // 加速带与冰面：放在可达的分支格（优先紧邻主路径），
  // 让探索/追宝石时才会遇到，同时不干扰主线可解性与自动控制器。
  const usedCells = new Set([...blocked, ...cpCells, ...gems.map((g) => g.cell)]);
  const pathCells = new Set(safePath);
  const branchCells = [];
  for (let i = 1; i < total - 1; i++) {
    if (!finalFlood.seen[i] || pathCells.has(i) || usedCells.has(i)) continue;
    const c = i % cols;
    const r = (i / cols) | 0;
    let md = Infinity;
    for (const p of safePath) {
      md = Math.min(md, Math.abs((p % cols) - c) + Math.abs(((p / cols) | 0) - r));
    }
    branchCells.push({ cell: i, md });
  }
  branchCells.sort((a, b) => a.md - b.md || a.cell - b.cell);

  const takeBranch = (count) => {
    const out = [];
    for (const b of branchCells) {
      if (out.length >= count) break;
      if (usedCells.has(b.cell)) continue;
      usedCells.add(b.cell);
      out.push(b.cell);
    }
    return out;
  };

  const boosts = takeBranch(cfg.boosts || 0).map((cell) => {
    const p = center(cell % cols, (cell / cols) | 0);
    const dir = openDirection(cells, cols, rows, cell, goal.x, goal.z, p.x, p.z);
    return { x: p.x, z: p.z, r: BOOST_R, cell, dirX: dir.x, dirZ: dir.z };
  });

  const iceZones = takeBranch(cfg.ice || 0).map((cell) => {
    const p = center(cell % cols, (cell / cols) | 0);
    return { x: p.x, z: p.z, r: ICE_R, cell };
  });

  return {
    cfg, cells, cols, rows, width, depth,
    segments, walls, start, goal,
    holes, hazards, gems, safePath,
    checkpoints, boosts, iceZones,
    solvable: finalFlood.reachedGoal,
    cellCenter: center
  };
}
