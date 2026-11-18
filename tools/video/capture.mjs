// 演示视频实机捕获：按七段分镜驱动真实游戏（headless Edge + CDP screencast），
// 页面内注入字幕/章节角标，帧带时间戳落盘，供 encode.py 合成带解说视频。仅开发期使用。
import { spawn, execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const here = path.join(root, 'tools', 'video');
const OUT = path.join(here, 'out');
const FRAMES = path.join(OUT, 'frames');
mkdirSync(FRAMES, { recursive: true });

const EDGE = process.env.EDGE_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PORT = 5299;
const CDP = 9444;
const profile = path.join(os.tmpdir(), 'marble-maze-video-profile');
const SPEC = JSON.parse(readFileSync(path.join(here, 'narration.json'), 'utf8'));
const DUR = JSON.parse(readFileSync(path.join(OUT, 'durations.json'), 'utf8'));
const STUDIO = 'https://hutuboy-marble-maze-ai.ms.show/';
const LOCAL = `http://127.0.0.1:${PORT}/`;

// ---- 终端取证卡：真实 verify.mjs 输出里的逐帧回放断言 ----
const verifyOut = execFileSync(process.execPath, ['tests/verify.mjs'], { cwd: root, encoding: 'utf8' });
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const replayLines = verifyOut.split('\n').filter((l) => /复现|回放|结果/.test(l)).map((l) => l.trim());
writeFileSync(path.join(here, 'terminal.html'), `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;background:#0b1220;color:#d7e4f2;font:16px/1.9 Consolas,"Courier New",monospace;padding:48px 64px;}
h1{font-size:18px;color:#9fd8ff;margin:0 0 18px;} .ok{color:#7ee2a8;} .dim{color:#7f95a8;}
</style></head><body><h1>$ node tests/verify.mjs · 自动试玩逐帧回放断言</h1>
${replayLines.map((l) => `<div class="${/PASS|通过/.test(l) ? 'ok' : 'dim'}">${esc(l)}</div>`).join('')}
</body></html>`, 'utf8');

const server = spawn(process.execPath, ['serve.mjs'], { cwd: root, env: { ...process.env, PORT: String(PORT) }, stdio: 'ignore' });
let edge = null;
let ws = null;
const frames = [];
const marks = [];
const stalls = []; // 导航编译冻结区间（epoch 秒），encode 据此压缩转场卡时长
let currentLabel = '';

async function main() {
  await sleep(500);
  edge = spawn(EDGE, [
    '--headless=new', '--no-first-run', '--no-default-browser-check',
    '--disable-gpu-sandbox', '--use-gl=angle', '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--hide-scrollbars',
    `--remote-debugging-port=${CDP}`, `--user-data-dir=${profile}`,
    '--window-size=1280,720', LOCAL
  ], { stdio: 'ignore' });

  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${CDP}/json/list`)).json();
      target = list.find((t) => t.type === 'page' && t.url.includes(String(PORT)));
    } catch { /* 尚未就绪 */ }
    if (!target) await sleep(250);
  }
  if (!target) throw new Error('无法连接浏览器调试端口');
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  let seq = 0;
  const pending = new Map();
  let session = null; // 当前 eval 目标：null=顶页；创空间镜头时为游戏 iframe 的 flatten session
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id); pending.delete(msg.id);
      msg.error ? p.reject(new Error(JSON.stringify(msg.error))) : p.resolve(msg.result);
    } else if (msg.method === 'Page.screencastFrame') {
      const { data, metadata, sessionId } = msg.params;
      const file = `f${String(frames.length).padStart(5, '0')}.jpg`;
      writeFileSync(path.join(FRAMES, file), Buffer.from(data, 'base64'));
      frames.push({ file, t: metadata.timestamp });
      send('Page.screencastFrameAck', { sessionId }).catch(() => {});
    }
  };
  const send = (method, params = {}, sessionId = undefined) => new Promise((resolve, reject) => {
    const id = ++seq; pending.set(id, { resolve, reject });
    ws.send(JSON.stringify(sessionId ? { id, method, params, sessionId } : { id, method, params }));
  });
  const evalJS = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, session || undefined);
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text);
    return r.result.value;
  };
  const waitFor = async (expr, ms = 8000) => {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) {
      if (await evalJS(`!!(${expr})`)) return true;
      await sleep(120);
    }
    return false;
  };
  const keyEv = (type, code, key, vk, modifiers = 0) => send('Input.dispatchKeyEvent', { type, code, key, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk, modifiers });
  const tap = async (code, key, vk, mod = 0) => { await keyEv('keyDown', code, key, vk, mod); await keyEv('keyUp', code, key, vk, mod); };
  const hold = async (code, key, vk, ms) => { await keyEv('keyDown', code, key, vk); await sleep(ms); await keyEv('keyUp', code, key, vk); };
  const click = (sel) => evalJS(`document.querySelector('${sel}').click()`);
  const G = (body) => evalJS(`(() => { const g = window.__marbleMaze.game; ${body} })()`);

  const OVERLAY = `(() => {
    if (document.getElementById('vidOverlay')) return true;
    const w = document.createElement('div');
    w.id = 'vidOverlay';
    w.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99999;font-family:system-ui,"Microsoft YaHei",sans-serif;';
    w.innerHTML = '<div id="vidChip" style="position:absolute;top:14px;left:16px;padding:6px 12px;border-radius:8px;background:rgba(4,10,18,.72);border:1px solid rgba(120,200,255,.25);color:#9fd8ff;font-size:13px;letter-spacing:2px;"></div>'
      + '<div style="position:absolute;top:18px;right:18px;color:#8fa4b8;font-size:12px;letter-spacing:1px;text-shadow:0 1px 4px #000;">3D 弹珠迷宫 · AI 版</div>'
      + '<div id="vidSub" style="position:absolute;left:50%;bottom:26px;transform:translateX(-50%);max-width:88%;padding:10px 20px;border-radius:10px;background:rgba(4,10,18,.82);border:1px solid rgba(120,200,255,.2);color:#fff;font-size:20px;line-height:1.5;text-align:center;"></div>';
    document.body.appendChild(w);
    return true;
  })()`;
  // 新文档注入：字幕 overlay + 品牌转场卡（盖住 swiftshader 着色器编译冻结）
  const NEWDOC = `(() => {
    const inject = () => {
      ${OVERLAY.slice(OVERLAY.indexOf('(() => {') + 8, OVERLAY.lastIndexOf('})()'))}
      if (document.getElementById('vidBumper')) return;
      const b = document.createElement('div');
      b.id = 'vidBumper';
      b.style.cssText = 'position:fixed;inset:0;z-index:100000;background:#040a12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font-family:system-ui,"Microsoft YaHei",sans-serif;';
      b.innerHTML = '<div style="font-size:30px;font-weight:700;color:#fff;letter-spacing:3px;">3D 弹珠迷宫 · AI 版</div>'
        + '<div style="font-size:14px;color:#9fd8ff;letter-spacing:2px;">AI 示范 · 玩家接管 · 建议可验证 · 逐帧可复现</div>'
        + '<div style="width:56px;height:3px;border-radius:2px;background:rgba(120,200,255,.25);overflow:hidden;"><div style="width:40%;height:100%;background:#9fd8ff;animation:vidslide 1.1s ease-in-out infinite alternate;"></div></div>'
        + '<style>@keyframes vidslide{from{transform:translateX(-60%)}to{transform:translateX(160%)}}</style>';
      document.body.appendChild(b);
    };
    if (document.body) inject();
    else document.addEventListener('DOMContentLoaded', inject);
  })()`;
  const setSub = (t) => evalJS(`(document.getElementById('vidSub') || {}).textContent = ${JSON.stringify(t)}`);
  const setChip = (t) => evalJS(`(document.getElementById('vidChip') || {}).textContent = ${JSON.stringify(t)}`);
  const READY = `window.__marbleMaze && (document.querySelector('#modal [data-action="start"]') || !document.querySelector('#overlay.visible'))`;
  const goto = async (url, readyExpr = READY, ms = 40000, tries = 1) => {
    for (let k = 0; k < tries; k++) {
      const a = Date.now() / 1000;
      session = null;
      await send('Page.navigate', { url });
      await send('Page.bringToFront');
      if (await waitFor(readyExpr, ms)) {
        stalls.push({ a, b: Date.now() / 1000 });
        await evalJS(`(() => { const b = document.getElementById('vidBumper'); if (b) b.remove(); return true; })()`);
        await setChip(currentLabel);
        return;
      }
    }
    throw new Error(`页面未就绪: ${url}`);
  };
  // 创空间镜头：ms.show 会重定向到社区页，游戏在 OOPIF iframe 里——attach 进去等就绪
  const gotoStudio = async () => {
    const a = Date.now() / 1000;
    session = null;
    await send('Page.navigate', { url: STUDIO });
    await send('Page.bringToFront');
    if (!(await waitFor(`document.querySelector('iframe[src*="ms.show"]')`, 30000))) throw new Error('创空间 iframe 未出现');
    let tid = null;
    for (let i = 0; i < 40 && !tid; i++) {
      const list = await (await fetch(`http://127.0.0.1:${CDP}/json/list`)).json();
      const t = list.find((x) => x.type === 'iframe' && x.url.includes('ms.show'));
      tid = t && t.id;
      if (!tid) await sleep(250);
    }
    if (!tid) throw new Error('创空间 iframe target 未找到');
    const att = await send('Target.attachToTarget', { targetId: tid, flatten: true });
    session = att.sessionId;
    await send('Runtime.enable', {}, session);
    if (!(await waitFor(READY, 40000))) throw new Error('创空间游戏未就绪');
    stalls.push({ a, b: Date.now() / 1000 });
    const drop = `(() => { const b = document.getElementById('vidBumper'); if (b) b.remove(); return true; })()`;
    await send('Runtime.evaluate', { expression: drop, returnByValue: true }); // 顶页转场卡
    await send('Runtime.evaluate', { expression: `(() => { const o = document.getElementById('vidOverlay'); if (o) o.style.display = 'none'; return true; })()`, returnByValue: true });
    await evalJS(drop); // iframe 内转场卡
    await setChip(currentLabel);
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 720, deviceScaleFactor: 1, mobile: false });
  await send('Page.addScriptToEvaluateOnNewDocument', { source: NEWDOC });
  await gotoStudio(); // 社区页 + iframe 唤醒发生在开录之前
  await goto(LOCAL); // 首屏编译冻结发生在开录之前
  await send('Page.startScreencast', { format: 'jpeg', quality: 90, maxWidth: 1280, maxHeight: 720, everyNthFrame: 1 });

  // 字幕 cues：按标点切块、≤24 字合并，时长按字数比例铺满段时长
  const cuesOf = (text, d) => {
    const parts = text.split(/(?<=[，。；：、])/).filter(Boolean);
    const cues = [];
    for (const p of parts) {
      const last = cues[cues.length - 1];
      if (last && (last.text + p).length <= 24) last.text += p;
      else cues.push({ text: p });
    }
    const total = cues.reduce((s, c) => s + c.text.length, 0);
    let acc = 0.4;
    for (const c of cues) { c.at = acc; acc += (d - 1.4) * (c.text.length / total); }
    return cues;
  };
  const segment = async (id, actions) => {
    const seg = SPEC.segments.find((s) => s.id === id);
    const d = DUR[id].dur;
    const t0 = Date.now();
    const markStart = Date.now() / 1000;
    currentLabel = seg.label;
    await setChip(seg.label);
    const cues = cuesOf(seg.text, DUR[id].audio); // 字幕跟配音时长铺，压缩后不越段
    const cueLoop = (async () => {
      for (const c of cues) {
        const wait = c.at * 1000 - (Date.now() - t0);
        if (wait > 0) await sleep(wait);
        await setSub(c.text);
      }
    })();
    await actions(d);
    await cueLoop;
    const rest = d * 1000 - (Date.now() - t0);
    if (rest > 0) await sleep(rest);
    await setSub('');
    marks.push({ id, start: markStart, end: Date.now() / 1000 });
    console.log(`captured ${id} (plan ${d}s, actual ${(marks[marks.length - 1].end - markStart).toFixed(1)}s, frames=${frames.length})`);
  };
  const fallInto = (pick) => G(`const hs = g.level.holes; const h = ${pick}; if (h) { g.marble.x = h.x; g.marble.z = h.z; g.marble.vx = 0; g.marble.vz = 0; } return !!h;`);
  const toGoal = () => G(`g.marble.x = g.level.goal.x; g.marble.z = g.level.goal.z; g.marble.vx = 0; g.marble.vz = 0; return true;`);
  const state = () => evalJS('window.__marbleMaze.game.state');
  const ensurePlaying = async () => {
    const s = await state();
    if (s === 'playing') return;
    if (s !== 'menu') {
      await evalJS(`(document.querySelector('[data-action="menu"]') || {}).click && document.querySelector('[data-action="menu"]').click()`);
      await waitFor(`document.querySelector('[data-action="start"]')`);
    }
    await click('[data-action="start"]');
    await waitFor(`window.__marbleMaze.game.state === 'playing'`);
  };
  const fallFailed = async (pick) => {
    // 生命 3：每次掉洞扣 1 命并复活，连掉 3 次才进 failed 结算（教练建议 therein）
    for (let k = 0; k < 5; k++) {
      if ((await state()) === 'failed') return true;
      if ((await state()) !== 'playing') await ensurePlaying();
      await fallInto(pick);
      await sleep(1500);
    }
    return (await state()) === 'failed';
  };

  // ---- 01 开场：本地双击即玩 → 创空间在线同迷宫 ----
  await segment('s1', async () => {
    await sleep(4200);
    await gotoStudio();
    await sleep(3500);
  });

  // ---- 02 基础玩法：滚动手感 / 检查点 / 掉洞赛中教练（第 2 关才有空洞） ----
  await segment('s2', async () => {
    await goto(LOCAL);
    const card = `[data-action="level"][data-level="1"]`;
    if (await evalJS(`!!(document.querySelector('${card}') && !document.querySelector('${card}').disabled)`)) await click(card);
    else await G('g.start(1); return true;');
    await waitFor(`window.__marbleMaze.game.state === 'playing'`);
    await hold('ArrowRight', 'ArrowRight', 39, 600);
    await hold('ArrowUp', 'ArrowUp', 38, 500);
    await hold('ArrowLeft', 'ArrowLeft', 37, 400);
    await ensurePlaying();
    await G(`const cp = g.level.checkpoints[0]; if (cp) { g.marble.x = cp.x; g.marble.z = cp.z; g.marble.vx = 0; g.marble.vz = 0; } return !!cp;`);
    await sleep(1200);
    await fallFailed('hs[0]');
    await G('window.__vidZone = g.zoneOf(g.marble.x, g.marble.z); return window.__vidZone;');
    await sleep(6000);
  });

  // ---- 03 教练闭环：换方位再失败，教练先验证上次建议 ----
  await segment('s3', async () => {
    if ((await state()) === 'failed') await click('[data-action="retry"]');
    else await ensurePlaying();
    await waitFor(`window.__marbleMaze.game.state === 'playing'`);
    await hold('ArrowRight', 'ArrowRight', 39, 800);
    // 换方位掉洞：教练闭环必出「这次没再在那里失手」验证句
    await fallFailed(`hs.find((h) => g.zoneOf(h.x, h.z) !== window.__vidZone) || hs[hs.length - 1]`);
    await sleep(8000);
  });

  // ---- 04 AI 设计师：一句话生成 → 分享链接复现 ----
  await segment('s4', async () => {
    await goto(LOCAL);
    await waitFor(`document.querySelector('[data-action="ai-lab"]')`);
    await click('[data-action="ai-lab"]');
    await waitFor(`document.getElementById('aiPrompt')`);
    await evalJS(`(() => {
      const el = document.getElementById('aiPrompt');
      const proto = el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, '难一点，有熔岩和冰面，多加加速带');
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.focus();
      return true;
    })()`);
    await sleep(600);
    await tap('Enter', 'Enter', 13, 2); // Ctrl+Enter
    const ga = Date.now() / 1000;
    await waitFor(`window.__marbleMaze.game.state === 'playing' && window.__marbleMaze.game.cfgOverride`, 20000);
    stalls.push({ a: ga, b: Date.now() / 1000 }); // 生成等待压缩为跳切
    await hold('ArrowRight', 'ArrowRight', 39, 1200);
    await sleep(3500); // 实滚生成关：熔岩/冰面可见，结算用时非零
    await toGoal();
    await waitFor(`window.__marbleMaze.game.state === 'levelclear'`, 8000);
    await sleep(1200);
    await click('[data-action="copy-share"]');
    await sleep(1500);
    const link = await evalJS('window.__marbleMaze.shareLink()');
    // 纯 hash 导航不重载文档：插查询参数强制全量加载，分享码才真正走一遍载入路径
    await goto(link.replace('#', `?r=${Date.now()}#`));
    await waitFor(`window.__marbleMaze.game.state === 'playing'`);
    await sleep(2000);
  });

  // ---- 05 AI 演示：接管 → 跑完展示成绩 → 终端逐帧回放取证 ----
  await segment('s5', async () => {
    await click('#btnDemo');
    await sleep(2500);
    await hold('ArrowRight', 'ArrowRight', 39, 900);
    await sleep(1200);
    await click('#btnDemo');
    await sleep(3000);
    await G(`g.marble.x = g.level.goal.x - 1.0; g.marble.z = g.level.goal.z; g.marble.vx = 0; g.marble.vz = 0; return true;`);
    await waitFor(`window.__marbleMaze.game.state === 'levelclear'`, 15000);
    await sleep(2600);
    await goto(`http://127.0.0.1:${PORT}/tools/video/terminal.html`, `document.querySelector('h1')`);
    await sleep(4000);
  });

  // ---- 06 每日挑战：全球同图 → 结算每日最佳 ----
  await segment('s6', async () => {
    await goto(LOCAL);
    await click('[data-action="daily"]');
    await waitFor(`window.__marbleMaze.game.state === 'playing'`);
    await sleep(2500);
    await toGoal();
    await waitFor(`window.__marbleMaze.game.state === 'levelclear'`, 8000);
    await sleep(7000);
  });

  // ---- 07 收尾：三关全通关 → 成绩卡 → 结束卡 ----
  await segment('s7', async () => {
    await click('[data-action="menu"]');
    await waitFor(`document.querySelector('[data-action="start"]')`);
    for (let i = 1; i <= 3; i++) {
      if (i === 1) await click('[data-action="start"]');
      await waitFor(`window.__marbleMaze.game.state === 'playing'`);
      await sleep(700);
      await toGoal();
      await waitFor(`window.__marbleMaze.game.state === 'levelclear' || window.__marbleMaze.game.state === 'gameclear'`, 8000);
      if (i < 3) { await tap('Enter', 'Enter', 13); await sleep(600); }
    }
    await sleep(1200);
    await click('[data-action="copy-card"]');
    await sleep(1800);
    await evalJS(`(() => {
      const c = document.createElement('div');
      c.style.cssText = 'position:fixed;inset:0;z-index:100000;background:rgba(4,10,18,.94);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font-family:system-ui,"Microsoft YaHei",sans-serif;color:#d7e4f2;';
      c.innerHTML = '<div style="font-size:34px;font-weight:700;color:#fff;letter-spacing:2px;">3D 弹珠迷宫 · AI 版</div>'
        + '<div style="font-size:16px;color:#9fd8ff;">AI 示范 · 玩家接管 · 建议可验证 · 逐帧可复现</div>'
        + '<div style="font-size:14px;color:#8fa4b8;">试玩 modelscope.cn/studios/hutuboy/marble-maze-ai</div>'
        + '<div style="font-size:14px;color:#8fa4b8;">开源 github.com/hutuboy/marble-maze-3d · MIT</div>'
        + '<div style="font-size:14px;color:#7ee2a8;">144 + 104 项自动化断言 · 零运行时依赖</div>';
      document.body.appendChild(c);
      return true;
    })()`);
    await sleep(3200);
  });

  await send('Page.stopScreencast');
  writeFileSync(path.join(OUT, 'frames.json'), JSON.stringify(frames), 'utf8');
  writeFileSync(path.join(OUT, 'marks.json'), JSON.stringify(marks), 'utf8');
  writeFileSync(path.join(OUT, 'stalls.json'), JSON.stringify(stalls), 'utf8');
  console.log('total frames', frames.length);
  ws.close();
  edge.kill();
  server.kill();
  process.exit(0);
}

main().catch((e) => { console.error(e); try { edge && edge.kill(); server.kill(); } catch {} process.exit(1); });