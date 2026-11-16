# 3D 弹珠迷宫 · AI 版（创空间后端）

本目录是魔搭创空间的部署源。后端用纯标准库 HTTP Server：

- 托管游戏静态文件（`index.html` / `game.bundle.js` / `styles.css` / `favicon.svg`）
- 在 `index.html` 注入 `window.__MARBLE_AI_ENABLED__=true`，前端才会启用远程 AI
- `/api/ai/{design,coach,narrative,report}` 代理魔搭推理接口，模型链降级 + 配额闸门

安全：`MODELSCOPE_API_KEY` 只作为创空间 **secret** 注入，不写进代码、不进入公开仓库。

本地游戏仍是纯静态、双击即玩的；本目录只服务于线上参赛版本。

## 换行符约定

静态件必须以 **LF** 提交。Windows 上 `core.autocrlf=true` 会把 `game.bundle.js`
连同 CRLF 一起写进 blob，容器检出的文件字节数会比本地多（每行 +1 字节），
线上 `sha256` 就对不上本地构建。同步到创空间仓库前先
`git config core.autocrlf false`，再用 `git ls-files --eol` 确认是 `i/lf`。

