import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import os from 'node:os';
import path from 'node:path';

const EDGE = process.env.EDGE_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const CDP = 9341;
const APP = 'http://127.0.0.1:7901/';
const profile = path.join(os.tmpdir(), 'marble-cloud-e2e-profile');

let edge = null;
let ws = null;
let seq = 0;
const pending = new Map();

const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++seq;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params }));
});
const evalJS = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' ' + (r.exceptionDetails.exception?.description || ''));
  return r.result.value;
};

let pass = 0, fail = 0;
const check = (label, ok, detail = '') => {
  if (ok) { pass++; console.log(`  PASS  ${label}${detail ? '  (' + detail + ')' : ''}`); }
  else { fail++; console.log(`  FAIL  ${label}${detail ? '  (' + detail + ')' : ''}`); }
};

async function main() {
  edge = spawn(EDGE, [
    '--headless=new', '--no-first-run', '--no-default-browser-check',
    '--disable-gpu-sandbox', '--use-gl=angle', '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--hide-scrollbars',
    `--remote-debugging-port=${CDP}`, `--user-data-dir=${profile}`,
    '--window-size=1440,900', APP
  ], { stdio: 'ignore' });

  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${CDP}/json/list`)).json();
      target = list.find((t) => t.type === 'page' && t.url.includes('7901'));
    } catch { /* retry */ }
    if (!target) await sleep(250);
  }
  if (!target) throw new Error('无法连接浏览器调试端口');

  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id); pending.delete(msg.id);
      if (msg.error) p.reject(new Error(JSON.stringify(msg.error))); else p.resolve(msg.result);
    }
  };
  await send('Runtime.enable');

  let ready = false;
  for (let i = 0; i < 60 && !ready; i++) {
    try { ready = await evalJS('!!(window.__marbleMaze && window.__marbleMaze.game)'); } catch { /* retry */ }
    if (!ready) await sleep(250);
  }
  if (!ready) throw new Error('页面未就绪');
  await sleep(800);

  console.log('3D 弹珠迷宫 · 线上云存档端到端验证\n');

  const boot = await evalJS(`({
    flag: window.__MARBLE_CLOUD_ENABLED__,
    enabled: window.__marbleMaze.game.cloud.enabled,
    entry: !!document.getElementById('cloudEntry'),
    status: window.__marbleMaze.cloudStatus()
  })`);
  check('线上注入云开关，前端启用云能力', boot.flag === true && boot.enabled === true);
  check('菜单渲染云排行榜入口', boot.entry === true);

  // 等待匿名身份 + 名字回填到入口按钮。
  let named = false;
  for (let i = 0; i < 20 && !named; i++) {
    named = await evalJS(`(() => { const b = document.getElementById('cloudEntry'); return !!b && b.textContent.includes('排行') && b.textContent.length > 6; })()`);
    if (!named) await sleep(200);
  }
  const entryText = await evalJS(`document.getElementById('cloudEntry').textContent`);
  check('异步建立匿名身份并回填用户名到入口', named && entryText.includes('☁'), entryText);

  // 打开云端榜单（此刻应为空或仅自己）。
  await evalJS(`window.__marbleMaze.showLeaderboard()`);
  await sleep(500);
  const board1 = await evalJS(`(() => { const m = document.getElementById('modal'); return {
    type: window.__marbleMaze.ui.overlayType,
    online: m.innerText.includes('免注册云存档'),
    scroll: m.scrollHeight, client: m.clientHeight
  }; })()`);
  check('线上榜单识别为在线并显示免注册说明', board1.type === 'leaderboard' && board1.online);
  check('线上榜单弹窗不溢出', board1.scroll <= board1.client + 2, `${board1.scroll}/${board1.client}`);

  // 通关第 1 关触发云同步。用 debug hook 直接推进到终点以节省时间。
  await evalJS(`(() => {
    const g = window.__marbleMaze.game;
    g.toMenu(); g.start(0);
    g.elapsed = 42; g.hits = 2; g.gemsGot = 2;
    g.clearLevel();
  })()`);
  await sleep(1200);
  const synced = await evalJS(`({ online: window.__marbleMaze.game.cloud.online, name: window.__marbleMaze.game.cloud.name })`);
  check('通关后云同步成功（进入在线态）', synced.online === true, `name=${synced.name}`);

  // 再次打开榜单，应看到自己上榜。
  await evalJS(`window.__marbleMaze.showLeaderboard()`);
  await sleep(600);
  const board2 = await evalJS(`(() => {
    const b = window.__marbleMaze.cloudBoard();
    const m = document.getElementById('modal');
    return { total: b.total, rows: b.rows.length, me: b.me, hasMe: m.innerText.includes('我的排名') };
  })()`);
  check('通关后自己出现在云端榜单并有排名',
    board2.total >= 1 && board2.rows >= 1 && board2.me && board2.me.rank >= 1 && board2.hasMe,
    `total=${board2.total} rank=${board2.me && board2.me.rank}`);

  console.log(`\n结果: ${pass} 项通过, ${fail} 项失败`);
  if (fail > 0) process.exitCode = 1;
}

try { await main(); }
catch (e) { fail++; console.log('  FAIL  脚本异常: ' + (e.stack || e.message)); }
finally {
  if (ws) ws.close();
  if (edge) edge.kill();
  if (fail > 0) process.exit(1);
}
