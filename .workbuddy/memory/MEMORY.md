# 项目长期笔记：3D 弹珠迷宫

## 定位与交付形态
纯前端、自包含的 3D 弹珠迷宫游戏。最终运行产物是 `index.html + styles.css + game.bundle.js`（+ favicon.svg），双击 `index.html` 即可玩，不依赖服务器、CDN 或任何外部素材。`src/` 为可维护源码，`npm run build` 用本地 esbuild 重新打包。

## 技术选型（2026-11-07 确定）
- 渲染：Three.js 0.187.0，打包为 IIFE；不使用 ESM importmap（避免 file:// 的 CORS 限制）。
- 物理：自研确定性 2.5D 求解，球在迷宫局部平面运动、板整体倾斜；不用 cannon/rapier，便于严格保证不穿墙。
- 资源：所有纹理、环境贴图、音效运行时程序化生成。
- 验证：`npm test`（纯 Node 逻辑/物理，144 项）、`npm run test:browser`（无头 Edge CDP，104 项，含 file:// 模式）、`npm run shots`（实拍截图，含每日挑战与 AI 演示取证）。

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

## P6 参赛版约束（2026-11-16）
- AI 能力集中在 `src/ai.js` + `studio/app.py`。**token 绝不进前端/仓库**：只在创空间 secret `MODELSCOPE_API_KEY`，前端靠后端注入的 `__MARBLE_AI_ENABLED__` 决定是否发请求；本地 `file://`/HTTP 不发请求（否则 404/CORS 破坏零错误断言）。改 AI 端点要同步 `SYSTEMS`（后端 prompt）与 `ai.js` 的 `call()`。
- AI 生成的关卡必须经过 `sanitizeLevelInput`（数值钳制）→ `validateLevelInput`（buildLevel + BFS 可解性）才能加载；模型输出用 `extractJSON` 容错围栏。新增 AI 功能必须保留本地规则引擎降级路径，否则离线双击会坏。
- `studio/` 是创空间部署源（docker, 端口 7860）。推送后必须删除 `studio/.git`（remote URL 含 token），`.gitignore` 排除 `studio/.git/`。**线上核验通道已变（2026-11-17）**：`.ms.show` 直连现在一律 403（提示改走 API 专用地址），改用 `https://studio-{owner}-{repo}.api-inference.modelscope.net/…` 并带 `Authorization: Bearer <token>`，可回读 bundle/index/health 做 SHA 与注入核验；浏览器外壳页依旧拿不到 iframe context，行为验证仍靠「线上 SHA == 本地 + 本地浏览器全量用例」。
- 当前线上：https://www.modelscope.cn/studios/hutuboy/marble-maze-ai （host `hutuboy-marble-maze-ai.ms.show`）。仓库已 public，创作手记在根目录 `创作手记.md`。更新线上要先 `npm run build` → 同步 4 个静态件到 `studio/` → 推送创空间 → 回读 bundle SHA 比对。

## 输入与部署约束（2026-11-16 · v1.2.2）
- **任何全局键盘监听都必须先判断焦点**：`isTypingTarget()`（INPUT/TEXTAREA/SELECT/contenteditable）直接放行，不 `preventDefault`、不响应快捷键。历史上 AI 实验室输入框吞空格 + 回车触发 `advance()` 关弹窗，被当成「崩溃」；`game.advance()` 另有 `overlayType==='ailab'` 兜底。空格/回车落在 BUTTON/A 上要交回浏览器原生激活，否则与 `advance()` 双触发。新增输入框 / 新快捷键都要重跑浏览器三条断言（空格不被吞 / 回车只换行 / Ctrl+Enter 开玩）。
- **创空间 push 不会自动重新部署**：必须再 `POST https://www.modelscope.cn/openapi/v1/studios/{owner}/{repo}/deploy`（Bearer token），否则线上一直是旧容器（曾空转 37 次轮询）。状态查询走 `GET /openapi/v1/studios/{owner}/{repo}` 的 `data.status`，`Building → Deploying → Running`。
- **创空间仓库必须 LF**：Windows `core.autocrlf=true` 会把 `game.bundle.js` 以 CRLF 写进 blob，容器检出的字节数每行 +1，线上 sha256 永远对不上本地。同步前 `git config core.autocrlf input core.eol lf`（工作区是 CRLF 也能归一化），用 `git ls-files --eol` 校验全为 `i/lf`，再用 `git rev-parse HEAD:game.bundle.js` 与 `git hash-object game.bundle.js` 比对（避免 PowerShell 管道转码污染字节）。studio 远端自带 LFS 规则 `.gitattributes`，merge 后会落到本地，已随主仓库提交。
- **本机网络细节**：主仓库 local config 有 `http.proxy=127.0.0.1:52600`（代理软件未开时 push 失败），用 `git -c http.proxy= -c https.proxy= push` 临时绕过，不改配置；PowerShell 5.1 调 modelscope OpenAPI 要先 `[Net.ServicePointManager]::SecurityProtocol = Tls12`，下载线上文件用 curl.exe（PS 的 Invoke-WebRequest 对 .ms.show/api-inference 握手失败）。
- 线上行为验证别指望浏览器：`www.modelscope.cn/studios/...?mode=full` 外壳页把游戏放在 iframe 里，本机 CDP 拿不到该 frame 的 context（frameTree 只有顶层）；直连 `.ms.show` 也会被 302 到外壳页。可靠做法是「线上 bundle SHA == 本地 SHA + 本地浏览器全量用例」。
- `studio/app.py` 的 `Server.handle_error` 已忽略 ConnectionReset/BrokenPipe/ConnectionAborted（前端 8s AbortController 到点必然触发），别再改回默认。

## v1.4 赛事口径与约束（2026-11-17）
- **评分口径修正**：官方活动页对「AI 游戏作品」赛道的评审维度是 **可玩性 30 / AI 运用 25 / 作品完成度 20 / 创意与呈现 15 / 创作手记 10**；旧笔记里「实用价值30/AI能力25/工程25/开源10/手记10」是「AI 原生工具/Agent」赛道口径，本作品按游戏赛道评审。单项奖可冲：最佳 AI 原生玩法 / 最佳 Agent 工程实践 / 最佳创新创意；人气奖按创空间点赞前 5。提交硬门槛：报名帖（小红书等公开平台）+ 创空间可试玩 + 手记发布到魔搭开发者实践（附演示视频）+ 工具使用记录截图。截止 12/01 12:00 报名 / 18:00 提交。
- **v1.4 已实现**：自动试玩 Agent（`src/autopilot.js`，Node/浏览器共用）+ 游戏内 AI 演示（`startDemo/stopDemo/finishDemo`，仅定制关卡）+ 教练反馈闭环（`coachFollowUp` 快照 → `buildTelemetry` 附 `improvement` 只下发一次，localCoach 与 app.py prompt 同步「先验证再建议」契约）+ 每日挑战（`dailyConfig()` FNV 日期种子，id 8000，走 custom 分支 + `records.submitDaily()` 按日期分键保留 30 天）+ 成绩卡每日行与结算页「看 AI 演示」。
- **Autopilot trace 必须全精度**：轴值舍入（哪怕 3 位小数）会在反馈控制中逐帧累积，L3 冰面/加速带回放发散；改控制律后重跑三关 `replayTrace` 断言（`rp.ok && rp.steps === r.steps`）。
- **演示模式约束**：`game.demo` 时不 `addPlayTime`、不采样 tilt、时限到不扣命；演示通关走 `finishDemo()`（toast + 回起点）不走 `clearLevel()`；玩家接管靠 `setAxis(x,z,human=true)`，main.js 四处键盘/摇杆/体感/鼠标输入都已传 true，新增输入源别漏。Game stub 必须补 `setDemoVisible` noop，否则 loadLevel/loadConfigured 报 TypeError。
- **弹窗高度预算再次收紧**：每日入口做成紧凑单行 `.daily-btn`，并压缩 modal-cols/level-picker/difficulty-row/modal-lead/record-flag/result-grid/breakdown/stars-row/share-line 间距；新增任何弹窗内容都要重跑菜单与结算页「按钮完整可见」断言。
- **浏览器接管断言细节**：演示接管 toast 会被首次倾斜提示覆盖，测试里先 `records.markHint('tilt') + tiltHintDone=true` 模拟老玩家；每日成绩断言用 `records.best(8000) === null` + 存档 `daily` 键集合验证主线隔离。

## v1.3 约束（2026-11-17）
- **赛中教练**只在 `Game.fail()` 触发，闸门是 `canLiveCoach()`（每关 2 次、间隔 ≥8s），时间源必须走 `this.now()` 以便测试构造序列；遥测统一由 `buildTelemetry(phase, reason)` 产出，别在别处另拼字段。`zoneOf()` 方位词顺序是 `${col}${row}角`（「右下角」）。
- **分享码**（`src/share.js`）编码 17 元组且**必须含 seed**；自实现 base64url，末组要 `n <<= pad*6` 才对得齐校验位。改格式要升 `VERSION` 并同步 verify.mjs 的往返/截断/篡改断言。`#l=` 只在启动与 `state==='menu'` 的 hashchange 时载入。
- **自定义关卡（AI / 分享码）不得写主线成绩**：`clearLevel()` 走 `custom` 分支只 `addClear()`，不 `submit`、不 `unlock`。新增非主线关卡入口必须复用这条路径。
- **自定义关卡结算弹窗高度预算已用满**：新增任何一行都会溢出（`modal max-height: min(88vh,760px)`）。分享码用 `<details>` 折叠并放在按钮下方；说明性文字并入副标题行。改完必须看 `scrollHeight == clientHeight` 并实拍确认按钮不被压。
- **无障碍**：overlay 是 `role=dialog aria-modal`，状态与 toast 是 `aria-live=polite`，canvas 有 `role=img`；`prefers-reduced-motion` 下必须关掉闪白与震屏（对应浏览器断言）。
- **CI**（`.github/workflows/ci.yml`）：除测试外还校验「bundle == 源码构建」「studio 静态件 == 根目录」「产物无 token」。主仓库 `.gitattributes` 是 `* text=auto eol=lf`，构建产物跨平台一致；改了静态件必须同步 `studio/`，否则 CI 红。
- 本机 `Write`/`Edit` 对长中文段落偶发匹配失败，改 `src/` 里的中文模板时用小锚点或 python 脚本替换更稳。

## v1.5 云存档 / 排行榜约束（2026-11-18）
- **免注册身份**：后端签发匿名 HttpOnly Cookie `mm_uid`，用户名由 uid 经 FNV-1a 派生（不存名字表、不收集个人信息）。`src/cloud.js` 的 `fnHash`/用户名词库必须与 `studio/app.py` 的 `_fnv1a`/`USERNAME_ADJ`/`USERNAME_NOUN` 逐项一致，Node 测试有跨端断言守着。
- **三个线上专属坑（本地测试测不出）**：① `ensureCloudIdentity()` 必须在**构造 + toMenu** 都调用（构造不走 toMenu）；② `CloudService.me()` 的 `_mePromise` 去重**不能删**，否则并发签发两个 uid、前端缓存与 Cookie 不符；③ 所有 `/api/cloud/*` 响应**必须带 `ok:true`**，因 `request()` 统一要求该字段，漏了会恒判失败返回空榜单。
- **云存储**：`/mnt/workspace/marble-cloud/leaderboard.json`（`CLOUD_FILE` env 可覆盖），原子写 + `_cloud_lock`，逐字段取历史最优防回退，白名单字段+数值钳制。注入开关 `inject_config`（旧的 `inject_ai` 保留为别名）；本地 serve.mjs/file:// 不注入 → 前端零请求，这是硬约束。
- **隔离口径**：`Game.syncCloud()` 与自定义关卡一致，跳过 custom/每日/演示，只传主线三关标准档最佳。云入口用 `float:right` 内嵌菜单统计行，本地不渲染，不占弹窗高度预算。
- **验证**：`npm test` 157、`npm run test:browser` 106；线上端到端另跑 `tools/cloud-e2e.mjs`（先起 `studio/app.py` @7901）7 项——**改云功能必须跑它**，本地全绿不代表线上没问题。
