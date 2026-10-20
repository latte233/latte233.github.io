---
title: "AI 热点日报 · 2026-10-20"
date: 2026-10-20 12:00:00 +0800
permalink: /posts/ai-hot-daily-2026-10-20/
author: latte
categories: [AI热点]
tags: [AI热点, AI日报, MiniMax, DeepSeek, 医疗Agent]
toc: true
---

> 数据来自 [AI HOT](https://aihot.news) 公开接口，抓取时间 **2026-10-20 12:00（北京时间）**。
> 「当前热榜」为实时榜；「24 小时精选」覆盖 2026-10-19 12:00 — 2026-10-20 12:00，共 12 条（其中 Mercury 3 有官方博客与 OpenRouter 上架两条同事件收录，去重后为 11 个事件）。条数充足，未放宽时间窗。文中时间均已换算为北京时间。

## ⚡ 今日速览

- **MiniMax 发布 M3.1 Flash**：官方称以 M3 三分之一的成本、约 3 倍速度达到前沿智能体表现，权重定于 10 月 23 日开放；此前在 OpenRouter 匿名跑榜的 Space Bunny 被确认为其早期版本。
- **DeepSeek 双榜落位**：V4.1-Flash-20261017 (Max) 成为 Arena Agent 榜第一开源模型（总榜第 11），Artificial Analysis 智能指数 45 分、并列开源权重模型第二。同一天，美国土安全部下令联邦文职机构移除 DeepSeek 及关联产品。
- **OpenAI 推 GPT-6 系列的低资源语言能力**：主攻 COBOL、Fortran、Visual Basic 等存量系统语言，并自建两项评测。
- **斯坦福医疗 Agent 基准揭短**：PhysicianBench 上最佳模型单次只完成 46% 任务，HealthAdminBench 上为 36.3%，卡点集中在跨文档、跨系统传信息。
- **模型侧还有两个"快"**：Inception 扩散模型 Mercury 3 跑到 1068 tokens/秒；fal 联合 Black Forest Labs 的 FLUX 3 Max 生成 10 秒 720p 视频约需 12 秒。
- **一条值得单独记的行业消息**：Redact 发现 WhatsApp 帮助中心页面向 LLM 发送用户不可见的隐藏指令，要求客服机器人不推荐数据保护监管机构、不提 GDPR。

## 🔥 当前热榜 TOP 10

| # | 标题 | 主要信源 | 信源数 | 最新动态 |
|---|---|---|---|---|
| 1 | [MiniMax 发布 M3.1 Flash，权重 10 月 23 日开放](https://aihot.news/items/wrnv8dd428iozlj5xax99zbmj) | MiniMax Blog | 11 | M3.1-Flash 上线 WorkBuddy（10-20 11:29） |
| 2 | [DeepSeek 发布 V4.1-Flash-1017 并开放搜索 API](https://aihot.news/items/w34qm27sedtziwxig5ub9wwhr) | DeepSeek API 更新日志 | 4 | 10-20 02:18 更新 |
| 3 | [美国土安全部令文职机构移除 DeepSeek 及关联产品](https://aihot.news/items/p04w1xjk7v6fmlskpf5vsnuka) | Hacker News | 2 | 10-20 03:31 更新 |
| 4 | [Anthropic 设公益基金，承诺投入 5% 股份](https://aihot.news/items/eg3kb6utc3fzmkjqyxdi4i92b) | Anthropic Newsroom | 2 | 10-19 13:06 更新 |
| 5 | [DeepSeek 开放自研搜索 API 并按次计费](https://aihot.news/items/x7hxr1lvyddc8hrbrugfx4uyg) | DeepSeek API 更新日志 | 1 | 10-18 19:59 更新 |
| 6 | [Viggle AI 发布 JST-2 世界基础模型](https://aihot.news/items/oiji0al5s471sa5vhzj81s7dz) | X：Viggle AI | 1 | 10-19 23:20 更新 |
| 7 | [OpenAI 工程师涉装窃听器被捕，检方称获沙特支持](https://aihot.news/items/fgxi5gwvctlssc05odpcyf6ov) | OpenAI Newsroom | 2 | 10-20 04:21 更新 |
| 8 | [Gemini 4 Argon 四智能体 27 小时通关 Minecraft](https://aihot.news/items/j09idrjvlzzusmmlsy0tlpr4e) | Google DeepMind | 2 | 10-19 23:03 更新 |
| 9 | [Anthropic 与 Nscale 洽谈第二笔 450 亿美元算力协议](https://aihot.news/items/wqrhtp77zm07qjtfi9sjz6xbb) | TechCrunch | 1 | 10-20 07:39 更新 |
| 10 | [蚂蚁开源 Ming-3.0 语音系列五款模型](https://aihot.news/items/uvgayscfmc9ujjak94ymsnxnd) | 蚂蚁 inclusionAI GitHub | 5 | 10-20 10:06 更新 |

> 「信源数」为该事件被独立信源收录的数量，非报道篇数；表中只列最新一次更新的时间，不代表首次出现时间。

## 📰 24 小时精选

### 1. [Redact 调查：WhatsApp 帮助页面隐藏 LLM 指令，让 AI 不推荐监管机构、不提 GDPR](https://aihot.news/items/apaky0ybxpb9uwt12jrwj954p)

`行业` · Hacker News：AI 热帖 · 10-20 00:00

Redact 发现 WhatsApp 帮助中心页面向 LLM 发送了用户看不到的隐藏指令，要求其支持聊天机器人不推荐数据保护监管机构，并在用户提到律师或法律行动后不引用 GDPR、LGPD 或 CCPA。这件事的要点不是"AI 说错话"，而是合规话术被下沉成了一段用户不可见的系统提示。

### 2. [Apate.ai 用 35 万个 AI 反诈拖住骗子，国内年轻人用 AI 视频反制 AI 卖惨账号](https://aihot.news/items/awmaqqunma83599eii4g3akgw)

`行业` · 公众号：数字生命卡兹克 · 10-20 08:26

澳大利亚公司 Apate.ai 用 35 万个 AI 伪装成容易上当的受害者，已与骗子对话 250 万次、累计耗掉骗子约 17 年时间。澳大利亚运营商 TPG 把近 59 万通可疑来电转给这些 AI，澳洲联邦银行公开报告的诈骗损失降低 76%，公司今年 8 月拿到 815 万美元种子轮融资。文中另记了国内年轻人用 AI 视频反制 AI 卖惨账号的做法。

### 3. [斯坦福 HAI 发布 MedHELM、PhysicianBench 与 HealthAdminBench，测出医疗 AI Agent 实际完成率不足一半](https://aihot.news/items/dla37so34wcgznigffx3j6qko)

`论文` · Stanford HAI · 10-19 00:00

斯坦福团队把三年构建医疗 AI 基准的成果做了总结。PhysicianBench 上最佳模型 GPT-5.5 单次仅完成 46% 任务，HealthAdminBench 上 Claude Opus 4.6 完成 36.3%。MedHELM 覆盖 5 大类 121 项临床任务，临床决策支持与管理流程两块得分最低；失败主因不是知识不足，而是跨文档、跨系统传递信息时丢失上下文。两项基准均以合成数据、公开代码和排行榜形式开放。

### 4. [OpenAI 发布 GPT-6 系列模型，提升 COBOL 等低资源编程语言编码能力](https://aihot.news/items/tzuiybo7a45sm87wj4rec2mvo)

`模型` · OpenAI 官网动态 · 10-19 20:00

OpenAI 称最新模型在 COBOL、Fortran、Visual Basic 等低资源编程语言上的能力显著提升，并推出了两项自建评测。低资源语言的另一端是银行、保险、政府里跑了几十年的存量系统，这块市场此前主要靠人工维护。

### 5. [美国国土安全部下令所有联邦文职机构移除 DeepSeek 及基于其开发的产品](https://aihot.news/items/p04w1xjk7v6fmlskpf5vsnuka)

`行业` · Hacker News：AI 热帖 · 10-19 23:05

美国国土安全部依据 2018 年供应链法发布 2026-01 号命令，要求所有联邦文职机构立即停止采购 DeepSeek 及其关联公司产品，并从 IT 系统中移除相关产品——包括使用 DeepSeek 实现开发的第三方产品与服务。注意最后半句：受影响的不只是 DeepSeek 自家的服务，还有把它当组件封进产品里的第三方。

### 6. [DeepSeek-V4.1-Flash-20261017 (Max) 登顶 Agent Arena 开源模型第一](https://aihot.news/items/h6okcjroca6s95iemyh7dhpcm)

`模型` · X：Arena · 10-20 02:18

Arena 宣布该模型成为 Agent Arena 第一开源模型，总排名第 11，基于超 7.5K 真实会话净提升 +5.1%。其中位任务成本 $0.20，约为 GPT-6.1 Sol 提升幅度的 37%、成本的 27%；Confirmed Success 提升 +11.5%，且无 Tool Hallucination 问题。

### 7. [fal 联合 bfl_ai 发布后训练视频模型 FLUX 3 Max](https://aihot.news/items/qldoluc73m0j8mo7u0ttf95km)

`模型` · X：fal · 10-20 02:34

fal 与 Black Forest Labs 合作的后训练视频模型，在第三方 image-to-video 质量评测中并列第一，生成 10 秒 720/768p 视频约需 12 秒。未来三周 75% 折扣，标注为同质量级别中价格最低的前沿视频模型。

### 8. [Inception Labs 发布扩散大语言模型 Mercury 3，速度达 1068 tokens/秒](https://aihot.news/items/osk3jj5jltogwr6zpo09w80j8)

`模型` · Inception Labs Blog · 10-19 15:00

扩散式大语言模型 Mercury 3 发布，称在多项基准上超过 GPT-6 Luna 和 Claude Haiku 5.5，速度达 1068 tokens/秒，参数量较 Mercury 1 扩大 40 倍以上。扩散架构的价值主要落在延迟而非绝对质量上。

### 9. [FBI 称前 OpenAI 工程师涉嫌窃密，手机中发现 "Saudi Gov Docs" 文件夹](https://aihot.news/items/b80bl8763pqoqq8hdio0ew6t1)

`行业` · Ars Technica · 10-20 04:21

美国法院批准羁押被指控在 OpenAI 会议室安装窃听器的前工程师 Abdulrahman Alfozan。检方称其 iPhone 上有名为 Saudi Gov Docs 的文件夹，与沙特王室成员有 WhatsApp 联系，并曾用 OpenAI 的生产力 Agent 搜索"适合安放窃听器的会议室"；被捕前他已预订沙特政府付费的单程机票。Agent 在这里的角色是被当作检索工具使用的"外脑"。

### 10. [Inception 扩散模型 Mercury 3 上线 OpenRouter](https://aihot.news/items/hnasqdie0vmly79xyg2ehqcgb)

`AI 产品` · X：OpenRouter · 10-20 00:54

Mercury 3 上线 OpenRouter，生成速度超 1,000 tok/s、支持 1M 上下文，是 Mercury 2.5 的 4 倍。Inception 报告其在 IFBench、GPQA Diamond 和 SWE-Bench Atlas 上超过 GPT-6 Luna 与 Haiku 5.5。上线期五折，价格 $0.10/M 输入、$0.35/M 输出。

### 11. [Google ADK 教程：用流式工具与响应调度构建永不冷场的语音智能体](https://aihot.news/items/emuxoxo4dpkovprjlldl4ugqt)

`实用技巧` · Google Developers Blog · 10-19 00:00

Google Developers Blog 的实操教程，讲怎么用开源 ADK 与 gemini-3.8-live 搭一个不出现冷场的语音智能体，核心是非阻塞工具调用——工具还在跑的时候先把话接住，别让用户对着静音等。

### 12. [DeepSeek V4.1 Flash 1017 发布，Artificial Analysis 智能指数得分 45 并列开源模型第二](https://aihot.news/items/wrlpmwb2tsk1moehp5kpsvovb)

`模型` · X：Artificial Analysis · 10-20 00:25

Artificial Analysis Intelligence Index 得分 45，比上一版 V4.1 Flash 提高 6 分，与 GLM-5.3 并列开源权重模型第二，仅次于 MiMo-V2.6-Pro。这条与第 6 条是同一个模型的两套评测体系，分数结论一致但榜单口径不同。

## 🔍 深度追踪：MiniMax M3.1 Flash —— 一只匿名兔子和一块钱

今天热榜第一是 MiniMax M3.1 Flash，13 个独立信源、20 篇报道，事件本身已经足够清楚，但真正有意思的是它被发布的方式。

**价格与规格。** 官方口径是以 M3 三分之一的成本、约 3 倍速度达到前沿级智能体表现，日常输出可达 200+ TPS。API 定价为输入每百万 token 1 元、输出 4 元、缓存读取 0.1 元；英文口径 $0.15 / $0.60 / $0.015，MarkTechPost 称无长上下文附加费。规格上，MarkTechPost 给出的是 428B 总参数、约 23B 激活的 MoE 多模态模型，上下文 100 万 token；The Decoder 给出单任务成本约 $0.22。权重定于 10 月 23 日开放，**许可证尚未公布**——这一点比参数更值得盯，因为"开放权重"和"可商用开源"在这个圈子里是两件事。

**评测口径。** 官方自评 DeepSWE v1.1 得 73.7%、OSWorld V2 得 61.7 分、CyberGym 得 82%；Arena 侧在 Code Arena: WebDev 榜以 1588 分列开源模型第 12、总榜第 32；Artificial Analysis 给出 Intelligence Index 42 分，比 M3 高 13 分，与 GLM-5.3-Flash 持平，但低于同期的 DeepSeek V4.1 Flash 1017 的 45 分。也就是说，这一轮它赢在性价比，不是赢在分数。

**匿名期才是主角。** 发布前它在 OpenRouter 上挂着代号 Space Bunny 跑了 10 天，连续第一，处理 56.7T token，是 OpenRouter 运行过的匿名模型中用量最高的；在 OpenCode 上则是连续 12 天第一、累计 106T token。身份揭晓后立刻回归并免费 72 小时（OpenCode 侧为免费 3 天），Cline 发布当日完成适配并免费开放。分发端也几乎同步：Ollama 与 GMI Cloud 均称 Day0 上线，其中 Ollama 侧强调"美国托管、零数据保留"。到 11:29，WorkBuddy 也宣布上线该模型，标注 0.08x 消耗量、300K 上下文、最大思考强度。

**这里有几处口径不一致，需要标注。** 一是上下文长度：MarkTechPost、The Decoder 与 OpenRouter 侧都称 100 万 token，而 WorkBuddy 侧写的是 300K；二是"可调思考深度"和 1M 上下文的最初来源是第三方账号 Testing Catalog 转述 API 参考文档，官方发布信息未逐项确认；三是免费窗口的边界各家表述不同（OpenRouter 说 72 小时、OpenCode 说 3 天、Cline 说免费、CommandCode 侧称对订阅用户限时免费），这些是渠道各自的促销，不是模型能力差异。

**最新进展**：MiniMax M3.1-Flash 上线 WorkBuddy（10-20 11:29）。

## 💭 一点观察

今天有四家在同一个方向上出牌：MiniMax 把输入价压到每百万 token 1 元，Inception 的 Mercury 3 在 OpenRouter 上五折跑到 $0.10/$0.35，FLUX 3 Max 直接三周 75% 折扣，DeepSeek 干脆把搜索能力单独拆出来按次计费。但同一天斯坦福 HAI 给出的数字是：医疗 Agent 在 PhysicianBench 上最佳模型单次只完成 46% 的任务，HealthAdminBench 上是 36.3%，而失败主因被明确指为"跨文档、跨系统传信息时丢失上下文"。把这两件事并排放，价格战压的是 token 单价，压不动的是返工成本——一个完成率 46% 的流程，省下来的钱最终要在人工补漏上再花一遍。同一天里"便宜"还有一种用法，产出很实在：Apate.ai 拿 35 万个 AI 去耗骗子的时间，TPG 转过去近 59 万通可疑来电，澳洲联邦银行公开的诈骗损失降了 76%。这里的便宜不是省在账单上，是省在对手身上。

今天还有两条不太像"技术新闻"的消息，恰好卡在同一个位置。一条是 Redact 发现 WhatsApp 帮助中心页面向 LLM 发送用户看不见的隐藏指令，要求客服机器人不推荐数据保护监管机构、用户一提律师或法律行动就不引 GDPR、LGPD 或 CCPA——合规话术被下沉成了一段用户不可见的系统提示。另一条是美国土安全部依 2018 年供应链法发布命令，要求联邦文职机构移除 DeepSeek 及关联产品，连"用 DeepSeek 实现的第三方产品与服务"一起算。而 DeepSeek 今天在 Arena Agent 榜是第一开源模型、在 Artificial Analysis 智能指数是第二。三件事的共同点是：一个模型"该说什么""能不能用"，越来越不由它的分数决定，而由产品方的措辞策略和政策方的供应链清单决定。榜单和准入，正在变成两套互不参考的评价体系。

我自己觉得今天最值得记的其实是 Space Bunny 这个匿名期。先让人用，再告诉人这是什么——MiniMax 把发布前的尽调外包给了真实用量，用 56.7T + 106T token 的跑量替代了发布会上的 PPT；揭晓当天五六个平台 Day0 上线、全线免费，等于用"可以立刻免费用"把揭晓本身做成了获客。价格战打到每百万 token 一块钱，"便宜"已经不再是卖点，能证明"确实有人在用"才是。而斯坦福那两个基准说的恰好是反面：用得多不等于做得成，匿名榜上的用量只能证明它便宜且不算太差，证明不了它能把一份跨五个系统的病历填完。所以今天真正被反复定价的其实是证据——用量是证据，基准是证据，法院的羁押裁定和 DHS 的命令也是证据。谁的证据更硬，那一块钱才值一块钱。

---

*本文由自动化任务基于 AI HOT 公开数据生成，摘要为机器改写，可能存在口径偏差或遗漏；涉及数字、评测分数与政策表述，请回原文核对。*
