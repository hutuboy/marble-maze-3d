import * as THREE from 'three';
import {
  WALL_T, WALL_H, BALL_R, GOAL_R, CHECKPOINT_R, BOOST_R, ICE_R
} from './levels.js';

function canvasTexture(w, h, draw, srgb = true) {
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const tex = new THREE.CanvasTexture(cv);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function makeEnvironment(renderer) {
  const tex = canvasTexture(512, 256, (ctx, w, h) => {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#dce9ff');
    sky.addColorStop(0.42, '#8fa9c8');
    sky.addColorStop(0.52, '#43566b');
    sky.addColorStop(1, '#101821');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);
    const glow = ctx.createRadialGradient(150, 58, 4, 150, 58, 96);
    glow.addColorStop(0, 'rgba(255,255,255,0.95)');
    glow.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.30)';
    ctx.beginPath(); ctx.ellipse(390, 44, 62, 22, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(120,200,255,0.18)';
    ctx.fillRect(0, h * 0.62, w, 8);
  });
  tex.mapping = THREE.EquirectangularReflectionMapping;
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const rt = pmrem.fromEquirectangular(tex);
  tex.dispose();
  pmrem.dispose();
  return rt;
}

function makeFloorTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#28394b';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(150,190,225,0.20)';
    ctx.lineWidth = 3;
    ctx.strokeRect(2, 2, w - 4, h - 4);
    ctx.strokeStyle = 'rgba(150,190,225,0.085)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const p = (w / 4) * i;
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(w, p); ctx.stroke();
    }
    for (let i = 0; i < 900; i++) {
      const a = Math.random() * 0.05;
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    }
  });
}

function makeBallTexture() {
  return canvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#e9f3ff';
    ctx.fillRect(0, 0, w, h);
    const bands = [0.04, 0.26, 0.51, 0.76];
    for (const b of bands) {
      ctx.fillStyle = 'rgba(22,92,186,0.95)';
      ctx.fillRect(b * w, 0, w * 0.085, h);
      ctx.fillStyle = 'rgba(255,178,48,0.95)';
      ctx.fillRect(b * w + w * 0.092, 0, w * 0.028, h);
    }
    ctx.strokeStyle = 'rgba(60,90,130,0.30)';
    ctx.lineWidth = 3;
    for (const y of [h * 0.25, h * 0.5, h * 0.75]) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    for (const [x, y] of [[0.14, 0.38], [0.64, 0.62]]) {
      ctx.beginPath(); ctx.arc(x * w, y * h, 16, 0, Math.PI * 2); ctx.fill();
    }
  });
}

function makeHazardTexture() {
  return canvasTexture(128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#3a1113';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#ff5347';
    ctx.lineWidth = 14;
    for (let i = -h; i < w + h; i += 32) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + h, h); ctx.stroke();
    }
  });
}

// 箭头画在 XY 平面指向 +Y，旋转到水平面后指向 -Z，
// 再靠 mesh.rotation.y 转到加速带配置的通道方向。
function makeArrowGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.65);
  s.lineTo(0.42, -0.075);
  s.lineTo(0.16, -0.075);
  s.lineTo(0.16, -0.65);
  s.lineTo(-0.16, -0.65);
  s.lineTo(-0.16, -0.075);
  s.lineTo(-0.42, -0.075);
  s.closePath();
  const g = new THREE.ShapeGeometry(s);
  g.rotateX(-Math.PI / 2);
  return g;
}

export class SceneView {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b121b);
    this.scene.fog = new THREE.Fog(0x0b121b, 55, 165);
    this.envRT = makeEnvironment(this.renderer);
    this.scene.environment = this.envRT.texture;

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 400);
    this.cam = { yaw: 0, pitch: 0.98, zoom: 1, tYaw: 0, tPitch: 0.98, tZoom: 1 };
    this.span = 20;
    this.time = 0;
    this.quality = 'high';
    this.pixelRatioCap = 1.75;

    this.tiltRoot = new THREE.Group();
    this.board = new THREE.Group();
    this.tiltRoot.add(this.board);
    this.scene.add(this.tiltRoot);

    this.buildLights();
    this.buildMaterials();
    this.arrowGeometry = makeArrowGeometry();

    this.ball = null;
    this.ballShadow = null;
    this.gemMeshes = [];
    this.checkpointMeshes = [];
    this.boostMeshes = [];
    this.iceMeshes = [];
    this.goalParticles = null;
    this.particleVel = [];
    this.particleLife = 0;
    this.goalRing = null;
    this.goalLight = null;
    this.goalBeam = null;
    this.goalBeacon = null;
    this.level = null;
    this.spinQuat = new THREE.Quaternion();
    this.spinVec = new THREE.Vector3();
    this.resize();
  }

  buildLights() {
    this.scene.add(new THREE.AmbientLight(0x8fa8c4, 0.55));
    this.scene.add(new THREE.HemisphereLight(0xbcd6ff, 0x14202c, 0.75));

    this.sun = new THREE.DirectionalLight(0xffffff, 2.35);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.bias = -0.00045;
    this.sun.shadow.normalBias = 0.02;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    const fill = new THREE.DirectionalLight(0x6fa8ff, 0.55);
    fill.position.set(-16, 12, -14);
    this.scene.add(fill);
  }

  buildMaterials() {
    const floorTex = makeFloorTexture();
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    this.floorTex = floorTex;

    this.mat = {
      floor: new THREE.MeshStandardMaterial({ color: 0xffffff, map: floorTex, roughness: 0.86, metalness: 0.08 }),
      base: new THREE.MeshStandardMaterial({ color: 0x14222f, roughness: 0.62, metalness: 0.35 }),
      rim: new THREE.MeshStandardMaterial({ color: 0x2e6f9e, emissive: 0x123f66, emissiveIntensity: 0.9, roughness: 0.4, metalness: 0.6 }),
      wall: new THREE.MeshStandardMaterial({ color: 0x4c779c, roughness: 0.42, metalness: 0.48, envMapIntensity: 1.1 }),
      cap: new THREE.MeshStandardMaterial({ color: 0x7699b8, emissive: 0x163953, emissiveIntensity: 0.22, roughness: 0.38, metalness: 0.5 }),
      ball: new THREE.MeshStandardMaterial({ color: 0xffffff, map: makeBallTexture(), roughness: 0.14, metalness: 0.62, envMapIntensity: 1.6 }),
      ballShell: new THREE.MeshBasicMaterial({ color: 0x9fe4ff, side: THREE.BackSide }),
      marker: new THREE.MeshBasicMaterial({ color: 0x7fe3ff, transparent: true, opacity: 0.78, side: THREE.DoubleSide, depthWrite: false }),
      shadow: new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.38, depthWrite: false }),
      hole: new THREE.MeshBasicMaterial({ color: 0x01050a }),
      holeRing: new THREE.MeshStandardMaterial({ color: 0x243746, roughness: 0.7, metalness: 0.4 }),
      hazard: new THREE.MeshStandardMaterial({ map: makeHazardTexture(), emissive: 0xff2a18, emissiveIntensity: 0.55, roughness: 0.55 }),
      hazardRing: new THREE.MeshStandardMaterial({ color: 0xff6a4a, emissive: 0xff3018, emissiveIntensity: 1.1, roughness: 0.4 }),
      goal: new THREE.MeshStandardMaterial({ color: 0xb57a16, emissive: 0xffb52e, emissiveIntensity: 1.5, roughness: 0.3, metalness: 0.35 }),
      goalRing: new THREE.MeshBasicMaterial({ color: 0xffe6a3, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
      // 终点光柱和信标：金色，和检查点的青色光柱明确区分，隔很远也能锁定出口。
      goalBeam: new THREE.MeshBasicMaterial({ color: 0xffcf5c, transparent: true, opacity: 0.26, depthWrite: false, toneMapped: false }),
      goalBeacon: new THREE.MeshBasicMaterial({ color: 0xffe9ad, transparent: true, opacity: 0.95, depthWrite: false, toneMapped: false }),
      start: new THREE.MeshBasicMaterial({ color: 0x4aa8ff, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }),
      gem: new THREE.MeshStandardMaterial({ color: 0xffc94a, emissive: 0xff9c18, emissiveIntensity: 0.95, roughness: 0.22, metalness: 0.75, flatShading: true }),
      // 这些是「界面型」标记色，关掉 toneMapped 避免被 ACES 压成灰白。
      cpIdle: new THREE.MeshBasicMaterial({ color: 0x6fd4e3, transparent: true, opacity: 0.92, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
      cpActive: new THREE.MeshBasicMaterial({ color: 0x49ffe0, transparent: true, opacity: 0.98, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
      boostBase: new THREE.MeshBasicMaterial({ color: 0xc46a18, transparent: true, opacity: 0.62, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
      boost: new THREE.MeshBasicMaterial({ color: 0xffb347, transparent: true, opacity: 0.98, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
      ice: new THREE.MeshBasicMaterial({ color: 0x3fb4ff, transparent: true, opacity: 0.50, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
      iceEdge: new THREE.MeshBasicMaterial({ color: 0x9ee8ff, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
      particle: new THREE.PointsMaterial({
        color: 0xffdc8c, size: 0.17, transparent: true, opacity: 0.95,
        depthWrite: false, blending: THREE.AdditiveBlending
      })
    };
  }

  clearBoard() {
    for (const child of [...this.board.children]) {
      this.board.remove(child);
      // arrowGeometry 在多个加速带之间共享，不能随关卡一起释放。
      if (child.geometry && child.geometry !== this.arrowGeometry) child.geometry.dispose();
    }
    this.gemMeshes = [];
    this.checkpointMeshes = [];
    this.boostMeshes = [];
    this.iceMeshes = [];
    this.goalParticles = null;
    this.particleVel = [];
    this.particleLife = 0;
    this.goalRing = null;
    this.goalLight = null;
    this.goalBeam = null;
    this.goalBeacon = null;
    this.ball = null;
    this.ballShell = null;
    this.ballMarker = null;
    this.ballShadow = null;
  }

  add(mesh, x = 0, y = 0, z = 0) {
    mesh.position.set(x, y, z);
    this.board.add(mesh);
    return mesh;
  }

  flat(mesh) {
    mesh.rotation.x = -Math.PI / 2;
    return mesh;
  }

  buildLevel(level) {
    this.clearBoard();
    this.level = level;
    const { width, depth, cols, rows } = level;
    this.span = Math.max(width, depth);
    this.floorTex.repeat.set(cols, rows);
    this.floorTex.needsUpdate = true;

    const s = this.span * 0.82;
    this.sun.position.set(this.span * 0.48, this.span * 0.95, this.span * 0.38);
    this.sun.target.position.set(0, 0, 0);
    this.sun.shadow.camera.left = -s;
    this.sun.shadow.camera.right = s;
    this.sun.shadow.camera.top = s;
    this.sun.shadow.camera.bottom = -s;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = this.span * 3 + 40;
    this.sun.shadow.camera.updateProjectionMatrix();

    const base = new THREE.Mesh(new THREE.BoxGeometry(width + 0.9, 0.55, depth + 0.9), this.mat.base);
    base.position.y = -0.285;
    base.receiveShadow = true;
    base.castShadow = true;
    this.board.add(base);

    const rimW = width + 0.9;
    const rimD = depth + 0.9;
    const rimPieces = [
      [rimW, 0.1, 0.14, 0, -depth / 2 - 0.38],
      [rimW, 0.1, 0.14, 0, depth / 2 + 0.38],
      [0.14, 0.1, rimD, -width / 2 - 0.38, 0],
      [0.14, 0.1, rimD, width / 2 + 0.38, 0]
    ];
    for (const [w, h, d, x, z] of rimPieces) {
      const rim = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.mat.rim);
      rim.position.set(x, 0.015, z);
      this.board.add(rim);
    }

    const floor = this.flat(new THREE.Mesh(new THREE.PlaneGeometry(width, depth), this.mat.floor));
    floor.position.y = 0.002;
    floor.receiveShadow = true;
    this.board.add(floor);

    const segs = level.segments;
    const unit = new THREE.BoxGeometry(1, 1, 1);
    const walls = new THREE.InstancedMesh(unit, this.mat.wall, segs.length);
    const caps = new THREE.InstancedMesh(unit.clone(), this.mat.cap, segs.length);
    walls.castShadow = true;
    walls.receiveShadow = true;
    caps.castShadow = false;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const p = new THREE.Vector3();
    const sc = new THREE.Vector3();
    for (let i = 0; i < segs.length; i++) {
      const sg = segs[i];
      const isH = sg.dir === 'h';
      p.set(sg.x, WALL_H / 2, sg.z);
      sc.set(isH ? sg.len : WALL_T, WALL_H, isH ? WALL_T : sg.len);
      m.compose(p, q, sc);
      walls.setMatrixAt(i, m);
      p.set(sg.x, WALL_H + 0.03, sg.z);
      sc.set(isH ? sg.len : WALL_T + 0.02, 0.06, isH ? WALL_T + 0.02 : sg.len);
      m.compose(p, q, sc);
      caps.setMatrixAt(i, m);
    }
    walls.instanceMatrix.needsUpdate = true;
    caps.instanceMatrix.needsUpdate = true;
    this.board.add(walls);
    this.board.add(caps);

    const startRing = this.flat(new THREE.Mesh(new THREE.RingGeometry(0.62, 0.74, 40), this.mat.start));
    this.add(startRing, level.start.x, 0.012, level.start.z);

    for (const h of level.holes) {
      const disc = this.flat(new THREE.Mesh(new THREE.CircleGeometry(h.r, 40), this.mat.hole));
      this.add(disc, h.x, 0.014, h.z);
      const ring = this.flat(new THREE.Mesh(new THREE.RingGeometry(h.r, h.r + 0.11, 40), this.mat.holeRing));
      this.add(ring, h.x, 0.016, h.z);
    }

    for (const h of level.hazards) {
      const disc = this.flat(new THREE.Mesh(new THREE.CircleGeometry(h.r, 40), this.mat.hazard));
      this.add(disc, h.x, 0.015, h.z);
      const ring = this.flat(new THREE.Mesh(new THREE.RingGeometry(h.r, h.r + 0.10, 40), this.mat.hazardRing));
      this.add(ring, h.x, 0.017, h.z);
    }

    for (const z of level.iceZones) {
      const disc = this.flat(new THREE.Mesh(new THREE.CircleGeometry(z.r, 40), this.mat.ice));
      this.add(disc, z.x, 0.009, z.z);
      const edge = this.flat(new THREE.Mesh(new THREE.RingGeometry(z.r - 0.09, z.r, 40), this.mat.iceEdge));
      this.add(edge, z.x, 0.011, z.z);
      this.iceMeshes.push(disc);
    }

    for (const b of level.boosts) {
      const plate = this.flat(new THREE.Mesh(new THREE.CircleGeometry(b.r, 32), this.mat.boostBase));
      this.add(plate, b.x, 0.010, b.z);
      const arrow = new THREE.Mesh(this.arrowGeometry, this.mat.boost);
      arrow.rotation.y = Math.atan2(-b.dirX, -b.dirZ);
      this.add(arrow, b.x, 0.014, b.z);
      this.boostMeshes.push(arrow);
    }

    for (const cp of level.checkpoints) {
      const ring = this.flat(new THREE.Mesh(
        new THREE.RingGeometry(cp.r * 0.62, cp.r, 40), this.mat.cpIdle
      ));
      this.add(ring, cp.x, 0.013, cp.z);
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.055, 0.85, 10), this.mat.cpActive
      );
      pillar.position.set(cp.x, 0.44, cp.z);
      pillar.visible = false;
      this.board.add(pillar);
      this.checkpointMeshes.push({ ring, pillar });
    }

    const goalDisc = this.flat(new THREE.Mesh(new THREE.CircleGeometry(GOAL_R, 48), this.mat.goal));
    this.add(goalDisc, level.goal.x, 0.018, level.goal.z);
    const ring = this.flat(new THREE.Mesh(new THREE.RingGeometry(GOAL_R + 0.10, GOAL_R + 0.24, 48), this.mat.goalRing));
    this.add(ring, level.goal.x, 0.022, level.goal.z);
    this.goalRing = ring;

    const beamHeight = 2.4;
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.34, beamHeight, 16, 1, true), this.mat.goalBeam
    );
    beam.position.set(level.goal.x, beamHeight / 2 + 0.04, level.goal.z);
    this.board.add(beam);
    this.goalBeam = beam;

    const beacon = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), this.mat.goalBeacon);
    beacon.position.set(level.goal.x, beamHeight + 0.20, level.goal.z);
    this.board.add(beacon);
    this.goalBeacon = beacon;

    this.goalLight = new THREE.PointLight(0xffc45c, 2.4, 8, 2);
    this.goalLight.position.set(level.goal.x, 1.7, level.goal.z);
    this.board.add(this.goalLight);

    for (const gem of level.gems) {
      const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.30, 0), this.mat.gem);
      mesh.castShadow = true;
      mesh.position.set(gem.x, 0.45, gem.z);
      this.board.add(mesh);
      this.gemMeshes.push(mesh);
    }

    const ball = new THREE.Mesh(new THREE.SphereGeometry(BALL_R, 40, 28), this.mat.ball);
    ball.castShadow = true;
    ball.receiveShadow = true;
    ball.position.set(level.start.x, BALL_R, level.start.z);
    this.board.add(ball);
    this.ball = ball;

    const shell = new THREE.Mesh(new THREE.SphereGeometry(BALL_R * 1.15, 24, 16), this.mat.ballShell);
    shell.position.set(level.start.x, BALL_R, level.start.z);
    this.board.add(shell);
    this.ballShell = shell;

    this.mat.marker.opacity = 0.78;
    const marker = this.flat(new THREE.Mesh(
      new THREE.RingGeometry(BALL_R * 0.80, BALL_R * 0.98, 32),
      this.mat.marker
    ));
    this.add(marker, level.start.x, 0.012, level.start.z);
    this.ballMarker = marker;

    this.mat.shadow.opacity = 0.38;
    const shadow = this.flat(new THREE.Mesh(new THREE.CircleGeometry(BALL_R * 1.12, 28), this.mat.shadow));
    this.add(shadow, level.start.x, 0.010, level.start.z);
    this.ballShadow = shadow;

    this.cam.tYaw = 0;
    this.cam.tPitch = 0.98;
    this.cam.tZoom = 1;
  }

  setGemsVisible(level) {
    for (let i = 0; i < this.gemMeshes.length; i++) {
      this.gemMeshes[i].visible = !level.gems[i].taken;
    }
  }

  setCheckpointsActive(level) {
    for (let i = 0; i < this.checkpointMeshes.length; i++) {
      const cp = level.checkpoints[i];
      if (!cp) continue;
      const m = this.checkpointMeshes[i];
      m.ring.material = cp.active ? this.mat.cpActive : this.mat.cpIdle;
      m.pillar.visible = cp.active;
    }
  }

  burstGoal() {
    if (!this.level) return;
    if (this.goalParticles) {
      this.board.remove(this.goalParticles);
      this.goalParticles.geometry.dispose();
    }
    const N = 42;
    const pos = new Float32Array(N * 3);
    const vel = [];
    const gx = this.level.goal.x;
    const gz = this.level.goal.z;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 + Math.random() * 0.5;
      const sp = 1.3 + Math.random() * 2.8;
      pos[i * 3] = gx + Math.cos(a) * 0.12;
      pos[i * 3 + 1] = 0.22;
      pos[i * 3 + 2] = gz + Math.sin(a) * 0.12;
      vel.push({ x: Math.cos(a) * sp, y: 2.3 + Math.random() * 2.6, z: Math.sin(a) * sp });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.mat.particle.opacity = 0.95;
    this.goalParticles = new THREE.Points(geo, this.mat.particle);
    this.goalParticles.frustumCulled = false;
    this.board.add(this.goalParticles);
    this.particleVel = vel;
    this.particleLife = 1.3;
  }

  // 上下文恢复后 Three.js 会重建内部 GL 状态，但程序化生成的
  // CanvasTexture / PMREM 环境贴图属于我们自己的资源，需要显式重建或标记上传。
  onContextRestored() {
    try {
      if (this.floorTex) this.floorTex.needsUpdate = true;
      for (const m of Object.values(this.mat)) {
        if (m && m.isMaterial) m.needsUpdate = true;
      }
      if (this.envRT) this.envRT.dispose();
      this.envRT = makeEnvironment(this.renderer);
      this.scene.environment = this.envRT.texture;
    } catch (_) {
      if (this.floorTex) this.floorTex.needsUpdate = true;
    }
  }

  setQuality(level) {
    if (!['high', 'medium', 'low'].includes(level)) return;
    this.quality = level;
    const cap = level === 'high' ? 1.75 : level === 'medium' ? 1.25 : 1.0;
    this.pixelRatioCap = cap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));

    // 阴影开关会改变 shader 变体，必须让材质重新编译。
    const shadows = level !== 'low';
    if (this.renderer.shadowMap.enabled !== shadows) {
      this.renderer.shadowMap.enabled = shadows;
      this.sun.castShadow = shadows;
      for (const m of Object.values(this.mat)) {
        if (m && m.isMaterial) m.needsUpdate = true;
      }
    }
    const shadowSize = level === 'high' ? 1024 : 512;
    if (this.sun.shadow.mapSize.x !== shadowSize) {
      this.sun.shadow.mapSize.set(shadowSize, shadowSize);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
      this.sun.shadow.camera.updateProjectionMatrix();
    }
    this.resize();
  }

  stats() {
    const mem = this.renderer.info.memory;
    return {
      children: this.board.children.length,
      geometries: mem.geometries,
      textures: mem.textures,
      programs: this.renderer.info.programs ? this.renderer.info.programs.length : 0,
      quality: this.quality,
      pixelRatioCap: this.pixelRatioCap,
      shadowSize: this.sun.shadow.mapSize.x,
      shadows: this.renderer.shadowMap.enabled
    };
  }

  orbit(dx, dy) {
    this.cam.tYaw = Math.max(-1.05, Math.min(1.05, this.cam.tYaw + dx * 0.005));
    this.cam.tPitch = Math.max(0.42, Math.min(1.38, this.cam.tPitch + dy * 0.004));
  }

  zoomBy(delta) {
    this.cam.tZoom = Math.max(0.65, Math.min(1.75, this.cam.tZoom + delta));
  }

  resize() {
    const w = Math.max(1, this.canvas.clientWidth);
    const h = Math.max(1, this.canvas.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  updateCamera(dt) {
    const c = this.cam;
    const k = 1 - Math.exp(-9 * dt);
    c.yaw += (c.tYaw - c.yaw) * k;
    c.pitch += (c.tPitch - c.pitch) * k;
    c.zoom += (c.tZoom - c.zoom) * k;
    const aspectFix = Math.max(1, 1.28 / this.camera.aspect);
    const sizeFix = 1 + Math.max(0, this.span - 14) * 0.012;
    const dist = (this.span * 1.15 + 5.5) * c.zoom * aspectFix * sizeFix;
    const cp = Math.cos(c.pitch);
    this.camera.position.set(
      Math.sin(c.yaw) * cp * dist,
      Math.sin(c.pitch) * dist,
      Math.cos(c.yaw) * cp * dist
    );
    this.camera.lookAt(0, 0, 0);
  }

  update(dt, marble, opts = {}) {
    this.time += dt;
    const fall = opts.fall || 0;
    this.tiltRoot.rotation.z = marble.tiltZ;
    this.board.rotation.x = marble.tiltX;

    if (this.ball) {
      this.ball.position.set(marble.x, BALL_R - fall * 2.8, marble.z);
      const sc = Math.max(0.05, 1 - fall * 0.7);
      this.ball.scale.setScalar(sc);
      if (marble.spinAngle > 0 && fall === 0) {
        this.spinVec.set(marble.spinAxis.x, 0, marble.spinAxis.z).normalize();
        this.spinQuat.setFromAxisAngle(this.spinVec, marble.spinAngle);
        this.ball.quaternion.premultiply(this.spinQuat);
      }
    }
    const scale = Math.max(0.05, 1 - fall * 0.7);
    if (this.ballShell) {
      this.ballShell.position.set(marble.x, BALL_R - fall * 2.8, marble.z);
      this.ballShell.scale.setScalar(scale);
      this.ballShell.visible = fall < 0.95;
    }
    if (this.ballMarker) {
      this.ballMarker.position.set(marble.x, 0.012, marble.z);
      this.ballMarker.material.opacity = 0.78 * (1 - fall);
      this.ballMarker.visible = fall < 0.95;
    }
    if (this.ballShadow) {
      this.ballShadow.position.set(marble.x, 0.010, marble.z);
      this.ballShadow.material.opacity = 0.38 * (1 - fall);
      this.ballShadow.visible = fall < 0.95;
    }

    for (let i = 0; i < this.gemMeshes.length; i++) {
      const g = this.gemMeshes[i];
      g.rotation.y += dt * 1.8;
      g.rotation.x = Math.sin(this.time * 1.2 + i) * 0.25;
      g.position.y = 0.45 + Math.sin(this.time * 2.2 + i * 1.3) * 0.09;
    }
    if (this.goalRing) {
      const s = 1 + Math.sin(this.time * 3.4) * 0.09;
      this.goalRing.scale.set(s, s, s);
      this.goalRing.material.opacity = 0.55 + Math.sin(this.time * 3.4) * 0.3;
    }
    if (this.goalLight) {
      this.goalLight.intensity = 2.1 + Math.sin(this.time * 3.4) * 0.6;
    }
    if (this.goalBeam) {
      this.goalBeam.material.opacity = 0.22 + Math.sin(this.time * 2.6) * 0.07;
    }
    if (this.goalBeacon) {
      this.goalBeacon.rotation.y += dt * 1.6;
      this.goalBeacon.position.y = 2.6 + Math.sin(this.time * 2.6) * 0.09;
    }
    if (this.mat.hazard) {
      this.mat.hazard.emissiveIntensity = 0.45 + Math.sin(this.time * 4.5) * 0.22;
    }
    for (const a of this.boostMeshes) {
      a.scale.setScalar(0.88 + Math.sin(this.time * 4.2 + a.position.x * 0.7) * 0.16);
    }
    for (let i = 0; i < this.checkpointMeshes.length; i++) {
      const m = this.checkpointMeshes[i];
      m.ring.scale.setScalar(1 + Math.sin(this.time * 3 + i) * 0.08);
    }
    if (this.goalParticles && this.particleLife > 0) {
      this.particleLife -= dt;
      const attr = this.goalParticles.geometry.getAttribute('position');
      const arr = attr.array;
      for (let i = 0; i < this.particleVel.length; i++) {
        const v = this.particleVel[i];
        arr[i * 3] += v.x * dt;
        arr[i * 3 + 1] += v.y * dt;
        arr[i * 3 + 2] += v.z * dt;
        v.y -= 5.2 * dt;
      }
      attr.needsUpdate = true;
      this.mat.particle.opacity = Math.max(0, (this.particleLife / 1.3) * 0.95);
      if (this.particleLife <= 0) this.goalParticles.visible = false;
    }

    this.updateCamera(dt);
    this.renderer.render(this.scene, this.camera);
  }
}
