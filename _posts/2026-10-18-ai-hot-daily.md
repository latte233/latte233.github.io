---
title: "AI 热点日报 · 2026-10-18"
date: 2026-10-18 12:00:00 +0800
permalink: /posts/ai-hot-daily-2026-10-18/
author: latte
categories: [AI热点]
tags: [AI热点, AI日报, DeepSeek, 开源模型, AI出口管制, 本地推理]
toc: true
excerpt: "DeepSeek 一天之内同时发模型和发搜索 API，把 token 单价继续往下压；同一天 RTX Spark 笔记本开售、Meta 的 816B 开源模型被搬上 Mac Studio —— 两条完全相反的成本路线撞在了一起。"
---

> 本文数据来自 [AI HOT](https://aihot.news) 公开接口，取数时间 2026-10-18 12:00（北京时间）。
> 「24 小时精选」使用 24 小时时间窗（返回 5 条，其中 2 条为同一篇实测报告的双渠道收录，去重后 4 个独立事件）；「当前热榜」为同一时刻的热榜快照。
> 所有时间均已换算为北京时间，内容仅基于接口返回的报道与摘要改写，未使用模型记忆补充。

## ⚡ 今日速览

- **DeepSeek 一天发两样东西**：`V4.1-Flash-1017` 模型更新 + 自研搜索 API 开放，后者定价 5 元/千次，11 月 1 日起正式收费。
- **新模型被喊「开源权重之王回归」**：11 项基准较 9 月版提升 2.0–11.1 分，DeepSWE v1.1 拿到 77.0，有人算出它以 1/83 的成本打到 Opus 5 级编码表现。
- **本地推理硬件正式开卖**：RTX Spark 笔记本全球开售，128GB 统一内存版本在国内几分钟售罄；Meta 的 816B 开源模型被 Apple 演示在 Mac Studio 上跑起来。
- **出口管制落下征求意见稿**：商务部、科技部拟增列 23 项 AI 技术，涵盖大模型、AI 智能体、计算集群；但开源已公开部分、API 与端侧部署明确不计入技术出口。
- **两起「收紧」**：Meta 删掉了被指允许抓取网站内容训练 AI 的商业条款；OpenCode 遭攻击致 1.4% 用户密钥可能外泄，Anthropic 已撤销受影响密钥。

## 🔥 当前热榜 TOP 10

| # | 标题 | 主要信源 | 信源数 | 最新动态（北京时间） |
|---|---|---|---|---|
| 1 | [DeepSeek 发布 V4.1-Flash-1017 并开放搜索 API](https://aihot.news/items/w34qm27sedtziwxig5ub9wwhr) | DeepSeek：API 更新日志 | 15 | 10-18 10:53 WorkBuddy 国际版限免该模型 |
| 2 | [OpenCode 遭攻击，Anthropic 撤销受影响密钥](https://aihot.news/items/niwlbjnktvqnoi9st6lakhlo2) | IT之家·人工智能 | 5 | 10-18 08:19 官方通报 1.4% Console 用户受影响 |
| 3 | [Meta 开源 816B 模型 Muse Spark Open，Apple 演示 Mac Studio 本地运行](https://aihot.news/items/s80tw5g2v22j1se4bmqejyaq4) | PyTorch：Blog | 2 | 10-17 22:15 讨论集中在本地跑大模型的可行性 |
| 4 | [NVIDIA RTX Spark 笔记本开售，起价说法不一](https://aihot.news/items/rq32az1hr7zpbipiyega9ehjr) | NVIDIA：Newsroom | 6 | 10-18 10:04 卡兹克实测华硕 ProArt 创16 |
| 5 | [Anthropic 发布内部 AI 经济影响研究](https://aihot.news/items/oetmf0o04av0c4h7yrgfkb4zc) | Anthropic：Research | 3 | 10-18 09:22 初级技术岗招聘占比被披露下降 |
| 6 | [商务部拟增列 23 项 AI 技术出口管制并答问](https://aihot.news/items/p11tj593iq5nrtiotvoxllop4) | IT之家·人工智能 | 5 | 10-17 09:30 意见征集截止 11 月 15 日 |
| 7 | [Claude 查明 NIST 椭圆曲线种子来源](https://aihot.news/items/ckrtcqc9dnngil5ev7m60ns4v) | Anthropic：Research | 3 | 10-17 22:42 密码学界对结论仍在讨论 |
| 8 | [Meta 删除涉 AI 训练抓取争议条款](https://aihot.news/items/ib3axwzp3wkqdd8teu8zpj7c9) | The Verge：AI | 4 | 10-18 08:00 原定 10 月 30 日生效的措辞被撤下 |
| 9 | [腾讯混元发布并开源 Hy Memory 2.0](https://aihot.news/items/x6s9la8005d0zobyd908cf5su) | X：邵猛 | 4 | 10-16 21:12 面向记忆机制的更新 |
| 10 | [Elorian 发布首个视觉推理模型 Glimpse](https://aihot.news/items/ew969eizz0eyqmitrz9g62chm) | X：Testing Catalog | 4 | 10-17 03:17 视觉推理赛道再添一家 |

## 📰 24 小时精选

### 1. [卡兹克实测华硕 ProArt 创16：37999 元实现本地 Token 自由](https://aihot.news/items/i8vi0763u7lz34lkoagoh0agt)

`实用技巧` · X：卡兹克（@Khazix0918） · 10-18 10:04

作者受邀参加英伟达 RTX Spark 全球开售活动后，深度使用了一周这台华硕 ProArt 创16（128G 统一内存 + 1T，京东售价 37999 元）。开售时 128G 版本在京东几分钟内被抢空。文章把本地模型部署路径和 WorkBuddy 专家的封装流程一起写了出来，读者可照做复现。

> 同一篇内容在微信公众号「数字生命卡兹克」也有收录（10-17 18:19），此处不再重复摘要。

### 2. [WorkBuddy Intl 更新支持 DeepSeek-V4.1-Flash-1017，10 月 31 日前免费](https://aihot.news/items/xgj246drlw70qbgypibz6atla)

`AI 产品` · X：Tencent WorkBuddy（@WorkBuddy_AI） · 10-17 18:29

WorkBuddy Intl 已切到最新的 DeepSeek-V4.1-Flash-1017，10 月 31 日前免费开放。引用的官方内容称新模型相比上一版性能更强、任务完成更快、输出更短，并针对 DeepSeek Harness、腾讯 CodeBuddy、WorkBuddy 等做了适配。

### 3. [DeepSeek-V4.1-Flash-1017 发布，多基准成绩提升且 API 价格不变](https://aihot.news/items/w34qm27sedtziwxig5ub9wwhr)

`模型` · DeepSeek：API 更新日志 · 10-17 00:00

DeepSeek 将 V4.1 Flash 升级至 V4.1-Flash-1017，网页端与 App 同步替换。API 调用方式与价格不变，仍用 `deepseek-flash` 这个名字访问——这意味着存量接入方不必改代码就能吃到新模型。

### 4. [DeepSeek 开放自研搜索 API](https://aihot.news/items/x7hxr1lvyddc8hrbrugfx4uyg)

`AI 产品` · DeepSeek：API 更新日志 · 10-17 00:00

开放的是 DeepSeek App 背后那套自研搜索引擎，每天稳定处理数亿次搜索请求，索引全球千亿级网页、支持多语言，并通过识别机制过滤 SEO 作弊、GEO 操纵和低质 AIGC。这事实上是把「检索」这一层从应用内部拆出来单独卖。

## 🔍 深度追踪：DeepSeek 的「帕累托改进」到底改了什么

热榜第一的这条 24 小时内累积了 15 个信源、19 篇报道，是今天唯一一个跨中英文社区同时发酵的事件。它的重要性不在模型本身，而在于 DeepSeek 一次做了三件事：更新模型、开放搜索、给出定价。

**模型侧：自称 minor update，实际是大幅跳。** 官方口径是「基准更强、完成更快、输出更短」的性能与成本帕累托改进，11 项基准较 9 月版提升 2.0–11.1 分。Hugging Face 联创 Thomas Wolf 点出其中最刺眼的一项：Terminal-Bench 4.0 从 31.2 直接升到 42.3。DeepSWE v1.1 上拿到 77.0 的 Pass@1，有开发者据此算出它以约 1/83 的成本达到 Opus 5 级的编码表现。Oran Ge 的补充更实用——这版解决了此前过度思考的问题，同样任务大约省一半 token。按 Hacker News 圈内的说法，其架构是 CED 稀疏 MoE，552B 总参、输入激活 8B、输出激活 16B，原生支持图像理解；Nathan Lambert 由此判断它加上内置视觉后可能强于 GLM 5.3。

**权重侧：说法有分歧，不要当成定论。** IT之家称权重已同步开放下载、延续 MIT 许可；MarkTechPost 则称 1017 的权重与硬件要求都未披露。两方说法不一致，官方更新日志本身只提了 API 与产品端上线。

**接入侧：这是最容易被忽略的一层。** OpenRouter 同日上线，DeepSeek 为首个接入服务商，标价输入 $0.15/百万 token、输出 $0.60/百万 token，上下文 1.05M，暂不支持欧盟区域内路由。

**搜索侧：开始收钱了。** 新开放的 Search 与 Fetch 两个接口定价均为 5 元/千次。官方称目前这部分调用不计费，将于北京时间 2026 年 11 月 1 日 00:00 起按次收费；The Decoder 与 MarkTechPost 则提到，经 Harness、Claude Code、Codex 的服务端调用免费至 10 月 31 日。

**渠道侧的最新进展**：WorkBuddy 国际版已支持该模型并限免至 10 月 31 日，国内版暂无同类限免活动。

## 💭 一点观察

今天最值得看的是两条方向完全相反的成本曲线撞在一起。

一边是 DeepSeek 把边际成本继续往下压：token 效率提升、同等任务省一半输出、单价维持 $0.15/$0.60 不变。另一边，RTX Spark 笔记本在同一天全球开售，128G 统一内存的机器 37999 元、几分钟售罄，Meta 的 816B 模型被 Apple 演示在 Mac Studio 上本地跑起来。这两件事在营销话术里都叫「Token 自由」，但经济结构正好相反——云端是按次付费的边际成本，本地是把成本一次性前置成固定投入。当模型单价还在往下走的时候，买断一台三万八的机器，本质是在赌自己未来两年的调用量足够大、且单价不会继续跌。而 DeepSeek 今天做的，恰恰是把单价又砍了一刀。所以「本地 Token 自由」这个故事的说服力，其实取决于你有多不相信模型会继续降价。

第二个隐线是：AI 的稀缺资源正在从「模型能力」迁移到「合规资格」。商务部、科技部拟增列 23 项 AI 技术出口管制，覆盖大模型、AI 智能体、计算集群与信息处理，但留了三个关键口子——开源或论文已进入公共领域的技术拟不纳入、API 调用与 App/网页交互及端侧轻量化部署不算技术出口、境外自建算力中心与联合研发适用自动许可。同一天，Meta 删掉了被解读为允许其抓取网站内容训练 AI 的商业条款。两件事一个在管技术往哪流，一个在管数据从哪来，本质是同一个动作：把「可自由取用的输入」变成「需要授权的输入」。再叠上 Anthropic 那份内部研究——技术部门初级员工占比从 21% 降到 14%，初级技术招聘占比从 27% 降到 9%，员工使用交互式 AI 智能体的时长已达员工的 6 倍——三条收紧的方向是一致的：能拿到授权的人越来越少，能指挥 agent 的人越来越值钱。

第三个是个不太起眼但会反复出现的坑。OpenCode 遭攻击导致 1.4% Console 用户的 API 密钥可能外泄，Anthropic 已撤销疑似受影响的 Claude 密钥并建议用户重建。官方把它称为「大规模蒸馏攻击」，Nathan Lambert 直接质疑这个定性——把窃取密钥的网络攻击归入「蒸馏」，把模型转发站混为一谈，是很反常的用法。抛开措辞之争，这件事暴露的是工具链成熟度落后于模型能力：agent 类工具为了「开箱即用」，普遍要求用户把长期有效的密钥交给第三方控制台托管，权限边界模糊、轮换机制缺失。模型一年能发六个版本，密钥管理体系未必跟得上一次。

## 声明

本文由自动化任务抓取 AI HOT 公开数据后生成，摘要为二次改写，可能存在信息压缩导致的偏差，涉及基准分数、定价条款、管制范围等关键结论请回到原文核对。文中观点部分为编者判断，不构成任何投资或合规建议。

---

*最后更新：2026-10-18 12:00（北京时间）*
