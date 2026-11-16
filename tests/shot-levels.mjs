import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EDGE = process.env.EDGE_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PORT = 5198;
const CDP = 9334;

const server = spawn(process.execPath, ['serve.mjs'], {
  cwd: root, env: { ...process.env, PORT: String(PORT) }, stdio: 'ignore'
});
let edge = null;
let ws = null;

try {
  await sleep(500);
  edge = spawn(EDGE, [
    '--headless=new', '--no-first-run', '--no-default-browser-check',
    '--disable-gpu-sandbox', '--use-gl=angle', '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--hide-scrollbars',
    `--remote-debugging-port=${CDP}`,
    `--user-data-dir=${path.join(os.tmpdir(), 'marble-maze-shots-profile')}`,
    '--window-size=1440,900', `http://127.0.0.1:${PORT}/`
  ], { stdio: 'ignore' });

  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${CDP}/json/list`)).json();
      target = list.find((t) => t.type === 'page' && t.url.includes(String(PORT)));
    } catch { /* 等待就绪 */ }
    if (!target) await sleep(250);
  }
  if (!target) throw new Error('无法连接浏览器调试端口');

  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let seq = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) {
      const p = pending.get(m.id);
      pending.delete(m.id);
      m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result);
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, { resolve: (r) => resolve(r), reject: (e) => reject(new Error(method + ': ' + e.message)) });
    ws.send(JSON.stringify({ id, method, params }));
  });
  const evalJS = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text);
    return r.result.value;
  };
  const shot = async (name) => {
    let r;
    try {
      r = await send('Page.captureScreenshot', { format: 'png' });
    } catch (_) {
      // 恢复会话时可能选中后台标签页，先激活再重试一次。
      try { await send('Page.bringToFront'); } catch (_) { /* 忽略 */ }
      await sleep(350);
      r = await send('Page.captureScreenshot', { format: 'png' });
    }
    writeFileSync(path.join(root, 'tests', name), Buffer.from(r.data, 'base64'));
    console.log('已保存 tests/' + name);
  };

  await send('Runtime.enable');
  await send('Page.enable');
  await send('Page.reload', { ignoreCache: true });
  // 等页面钩子真正就绪再操作；固定 sleep 在慢速 swiftshader 下偶尔不够。
  let ready = false;
  for (let i = 0; i < 40 && !ready; i++) {
    try {
      const probe = await send('Runtime.evaluate', {
        expression: '!!(window.__marbleMaze && window.__marbleMaze.quality && window.__marbleMaze.game)',
        returnByValue: true
      });
      ready = probe.result.value === true;
    } catch (_) { /* 等待就绪 */ }
    if (!ready) await sleep(250);
  }
  if (!ready) throw new Error('页面脚本未就绪，无法取证');
  await sleep(900);
  // 无头 swiftshader 帧率偏低会触发自动降级，取证时固定高画质。
  await evalJS('window.__marbleMaze.quality.setMode("high")');
  await sleep(350);

  await shot('shot-menu-p1.png');

  await evalJS('window.__marbleMaze.game.start()');
  await sleep(1700);
  await shot('shot-level1.png');

  await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.nextLevel();
    const cp = g.level.checkpoints[0];
    g.marble.x = cp.x; g.marble.z = cp.z;
    g.marble.vx = 0; g.marble.vz = 0;
    return true;
  })()`);
  await sleep(1700);
  await shot('shot-level2.png');

  await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.nextLevel();
    const z = g.level.iceZones[0];
    g.marble.x = z.x; g.marble.z = z.z;
    g.marble.vx = 0; g.marble.vz = 0;
    return true;
  })()`);
  await sleep(1700);
  await shot('shot-level3.png');
} finally {
  if (ws) ws.close();
  if (edge) edge.kill();
  server.kill();
}
