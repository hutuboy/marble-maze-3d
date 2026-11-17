// AI 关卡分享码：把「能复现同一座迷宫」的配置压成一段短码，放进 URL 的 #l= 里。
// 纯逻辑模块：不依赖 DOM，Node 侧可直接单测。
//
// 编码只保留影响迷宫形状与手感的字段（含 seed —— 它是复现的关键），
// 不编码随机 id；解码后重新走 sanitizeLevelInput + validateLevelInput，
// 因此手改过的坏码最多是「生成失败」，不会把非法配置喂进渲染层。
import { sanitizeLevelInput, validateLevelInput } from './ai.js';

const VERSION = 1;
const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const CHECK_MOD = 4096;   // 2 个 base64 字符的校验位空间
const CHECK_LEN = 2;
const MAX_CODE = 600;     // 远超正常长度，防止超长字符串拖慢解析

const enc = typeof TextEncoder !== 'undefined' ? new TextEncoder() : null;
const dec = typeof TextDecoder !== 'undefined' ? new TextDecoder() : null;

function bytesToCode(bytes) {
  let out = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i];
    const b = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const c = i + 2 < bytes.length ? bytes[i + 2] : 0;
    const n = (a << 16) | (b << 8) | c;
    out += B64[(n >> 18) & 63] + B64[(n >> 12) & 63];
    if (i + 1 < bytes.length) out += B64[(n >> 6) & 63];
    if (i + 2 < bytes.length) out += B64[n & 63];
  }
  return out;
}

function codeToBytes(str) {
  const out = [];
  for (let i = 0; i < str.length; i += 4) {
    const chunk = str.slice(i, i + 4);
    let n = 0;
    for (const ch of chunk) {
      const idx = B64.indexOf(ch);
      if (idx < 0) return null;
      n = (n << 6) | idx;
    }
    const pad = 4 - chunk.length;
    n <<= pad * 6;              // 末组不足 4 字符时补回低位，否则字节会错位
    const bytes = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    for (let k = 0; k < 3 - pad; k++) out.push(bytes[k]);
  }
  return out;
}

const checksum = (bytes) => {
  let s = 0;
  for (let i = 0; i < bytes.length; i++) s = (s * 31 + bytes[i]) % CHECK_MOD;
  return s;
};

const checkChars = (bytes) => {
  const v = checksum(bytes);
  return B64[(v >> 6) & 63] + B64[v & 63];
};

// 把配置压成短码；非法输入返回空串（调用方据此决定是否展示分享入口）。
export function encodeShare(cfg) {
  if (!cfg || !enc) return '';
  const arr = [
    VERSION,
    Math.round(cfg.cols), Math.round(cfg.rows), Math.round(cfg.seed),
    Math.round(cfg.holes), Math.round(cfg.hazards), Math.round(cfg.gems),
    Math.round(cfg.checkpoints), Math.round(cfg.boosts), Math.round(cfg.ice),
    Math.round(cfg.tiltMax * 100), Math.round(cfg.gravity), Math.round(cfg.timeLimit),
    Math.round(cfg.loop * 100),
    String(cfg.name || ''), String(cfg.subtitle || ''), String(cfg.tip || '')
  ];
  const bytes = enc.encode(JSON.stringify(arr));
  return bytesToCode(bytes) + checkChars(bytes);
}

// 兼容用户从地址栏、聊天记录里粘来的各种形态：#l=xxx / l=xxx / 纯码
export function normalizeCode(input) {
  let s = String(input || '').trim();
  if (!s) return '';
  const m = s.match(/[#?&]l=([^&\s]+)/) || s.match(/^l=([^&\s]+)/);
  if (m) s = m[1];
  return s.replace(/[^A-Za-z0-9_-]/g, '');
}

export function decodeShare(input) {
  const code = normalizeCode(input);
  if (!code || code.length < 10 || code.length > MAX_CODE || !dec) {
    return { ok: false, reason: '分享码格式不正确' };
  }
  const body = code.slice(0, -CHECK_LEN);
  const check = code.slice(-CHECK_LEN);
  const bytes = codeToBytes(body);
  if (!bytes || !bytes.length) return { ok: false, reason: '分享码已损坏' };
  if (checkChars(bytes) !== check) return { ok: false, reason: '分享码校验未通过（可能被截断）' };

  let arr;
  try {
    arr = JSON.parse(dec.decode(new Uint8Array(bytes)));
  } catch (_) {
    return { ok: false, reason: '分享码内容无法解析' };
  }
  if (!Array.isArray(arr) || arr.length < 17 || arr[0] !== VERSION) {
    return { ok: false, reason: '分享码版本不匹配' };
  }

  const cfg = sanitizeLevelInput({
    name: arr[14], subtitle: arr[15], tip: arr[16],
    cols: arr[1], rows: arr[2], seed: arr[3],
    holes: arr[4], hazards: arr[5], gems: arr[6],
    checkpoints: arr[7], boosts: arr[8], ice: arr[9],
    tiltMax: arr[10] / 100, gravity: arr[11], timeLimit: arr[12], loop: arr[13] / 100
  });
  const check2 = validateLevelInput(cfg);
  if (!check2.ok) return { ok: false, reason: `分享码对应关卡不可玩：${check2.reason}` };
  return { ok: true, cfg, level: check2.level };
}
