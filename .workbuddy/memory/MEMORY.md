# 项目长期笔记：3D 弹珠迷宫

## 定位与交付形态
纯前端、自包含的 3D 弹珠迷宫游戏。最终运行产物是 `index.html + styles.css + game.bundle.js`（+ favicon.svg），双击 `index.html` 即可玩，不依赖服务器、CDN 或任何外部素材。`src/` 为可维护源码，`npm run build` 用本地 esbuild 重新打包。

## 技术选型（2026-11-07 确定）
- 渲染：Three.js 0.187.0，打包为 IIFE；不使用 ESM importmap（避免 file:// 的 CORS 限制）。
- 物理：自研确定性 2.5D 求解，球在迷宫局部平面运动、板整体倾斜；不用 cannon/rapier，便于严格保证不穿墙。
- 资源：所有纹理、环境贴图、音效运行时程序化生成。
- 验证：`npm test`（纯 Node 逻辑/物理，95 项）、`npm run test:browser`（无头 Edge CDP，85 项，含 file:// 模式）、`npm run shots`（实拍截图）。

## 维护注意
- 倾斜采用嵌套 Group（外 z / 内 x），物理公式与之一一对应，见 2026-11-07 日志。
- 改 `src/` 后必须 `npm run build`，否则 `game.bundle.js` 不会更新。
- 关卡由固定种子生成，改 seed / hole 数量后要重跑 `npm test` 确认可解且不穿墙。
- 计分口径：**总分只在通关时累加一次**，本关奖励是实时预估、失败不结算；改动需同步 `game.js` 的 `rewardBreakdown`/`updateHUD` 与 `ui.js` 的结算弹窗明细，否则会重现「开局 1300 分 / 失败跳 0」的跳变。
- Shift 精细档在 `main.js` 的 `applyInput()`（×0.42），倾角盘提示由 `ui.setFineMode()` 控制；相机对大关卡的避让系数在 `SceneView.updateCamera()` 的 `sizeFix`。
- P1 新机制集中在 `levels.js`（`buildLevel()` 尾部生成 checkpoints / boosts / iceZones）与 `physics.js`（`step()` 内阻尼乘数、边界钳制后的定向冲量、检查点激活）。**加速带与冰面必须避开 safePath 与陷阱格**，否则会破坏 `tests/verify.mjs` 的自动通关断言。
- 检查点复活在 `Game.retry()`：`respawn(cp)` 不重建关卡，保留 elapsed/hits/gemsGot；`restartLevel()`（R）走 `loadLevel()` 完全重置。改动这两条路径要同步浏览器测试里的「复活保留数据 / R 清空检查点」断言。
- 成绩在 `src/records.js`，`localStorage` 键 `marble-maze-3d.records.v1`；任何存储读写都要 try/catch 降级（`file://` 会抛异常）。浏览器测试用 `Page.addScriptToEvaluateOnNewDocument` 在导航前清键，保证解锁断言可复现。
- 3D 场景里的「界面型」标记材质（检查点环、加速带箭头、冰面）必须 `toneMapped: false`，否则 ACES 色调映射会把亮色压成灰白、与地板/空洞混淆。
- 菜单弹窗高度受 `max-height: min(88vh, 760px)` 限制，新增内容要重跑「菜单内容完整可见」断言（`modalScroll <= modalClient + 2`），避免主按钮被裁。

## P2 工程向约束（2026-11-07）
- 主循环物理步数**只能**由 `src/clock.js` 的 `FixedClock` 决定；`MAX_CATCHUP=0.25` 与 `MAX_STEPS=30` 必须匹配（30×1/120=0.25），任一改动都要重跑时钟断言，否则会重现低帧率慢动作或追帧死亡螺旋。
- 小地图静态缓存按 `level` **对象引用**失效；若改用原地复用 level 对象，需手动清 `ui.mmLevel`。静态层拆 base / walls 两张是为了保留「轨迹画在墙下」的图层顺序。
- `SceneView.setQuality()` 切换阴影开关后必须遍历 `this.mat` 标 `needsUpdate`；`setQuality('low')` 会关阴影，无头 swiftshader 会自动降级，取证截图前要 `quality.setMode('high')`。
- 资源泄漏审计要**同一关卡**前后对比，并每关强制 `view.update()` 渲染一帧才会把 geometry 计入 `renderer.info.memory`；不同关卡的几何体数量本来就不同（L1≈20、L3≈58）。
- `main.js` 整体包在 `boot(view)` 内，初始化由 try/catch 兜底；新增顶层代码不要放到 boot 外，否则 WebGL 不可用时仍会执行并报错。
- 存档格式带 `v:1`，`Records` 构造时清洗脏数据；坏 JSON 要与「存储不可用」区分处理（前者回退空存档但仍可写）。
- `Records.data.hints` 是一次性引导状态，key 白名单 `tilt/checkpoint/boost/ice/goal`，新增讲解必须同步白名单 + `sanitizeHints`。提示只弹一次靠 `markHint()` 落盘；宝石得分属即时反馈不走该机制。
- 小地图逻辑尺寸由 `ui.js` 的 `minimapSize(level)` 决定（220→320 封顶），静态层缓存失效键是 **level 引用 + 尺寸**；改公式要同步 Node 递增断言与浏览器缓存探针的烘焙次数。
- 终点与检查点靠颜色语义区分：终点金色（光柱 + 小地图准心）、检查点青色，界面型材质须 `toneMapped:false`；改色时同步图例 `.dot.goal`、关卡 tip 与菜单文案。
- 难度倍率只改手感参数（gravity/tiltMax/timeLimit/par），**不动 seed 与机制布置**；标准档倍率恒为 1，改动后重跑自动通关断言确认零回归。辅助档成绩键 `id:relaxed`，标准档是纯数字 `id`；`totalStars` 只统计标准档，新增档位要同步 `DIFFICULTY_KEYS`、best key 正则与 `sanitizeBest`。
- 全通关页内容多，弹窗 `max-height: min(88vh,760px)`；新增内容要重跑「底部按钮完整可见」断言，否则按钮会被裁。
- 浏览器/截图测试启动不能用固定 sleep，须轮询 `window.__marbleMaze.game` 就绪；UI 状态（难度按钮 label/disabled）由 `applyInput` 下一帧刷新，断言里要轮询等待而非同帧读取；注入输入后也要轮询 axis 到位（固定 220ms 在 swiftshader 下不够一帧）。注入上下文丢失前先确保 state 为 playing/failing，否则前面的全通关用例留下 gameclear 会让「自动暂停」断言假失败。

## P5 约束（2026-11-16）
- 机制音效在 `Game.handleEvents()` 走 `Sfx.checkpoint()/boost()/ice()`，不要退回 `pickup()/bump()`；冰面只在 `!wasOnIce` 的进入沿播放。`Sfx.ensure()` 用 `globalThis.AudioContext` 以便无 WebAudio 环境静默降级；新增音色要补浏览器 spy 断言。
- 生涯统计存 `Records.data.stats = { clears, playTime }`：新增字段必须同步默认值、`sanitizeStats()`、构造读取三处。时长只能 `addPlayTime()` 累积，由 `flush()` / `Game.flushStats()` 在每 5 秒及暂停/通关/失败/回菜单落盘，禁止每帧 `save()`；通关计数在 `clearLevel()` 每次 +1（`addClear()` 自带落盘）。菜单统计内联在「选择关卡」标题行，不新增弹窗块，改文案要重跑菜单完整可见与菜单统计两条浏览器断言。
