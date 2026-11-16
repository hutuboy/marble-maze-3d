# 3D 弹珠迷宫 · AI 版（创空间后端）

本目录是魔搭创空间的部署源。后端用纯标准库 HTTP Server：

- 托管游戏静态文件（`index.html` / `game.bundle.js` / `styles.css` / `favicon.svg`）
- 在 `index.html` 注入 `window.__MARBLE_AI_ENABLED__=true`，前端才会启用远程 AI
- `/api/ai/{design,coach,narrative,report}` 代理魔搭推理接口，模型链降级 + 配额闸门

安全：`MODELSCOPE_API_KEY` 只作为创空间 **secret** 注入，不写进代码、不进入公开仓库。

本地游戏仍是纯静态、双击即玩的；本目录只服务于线上参赛版本。
