---
title: "AI 全域雷达报告 · 2026-08-07"
date: 2026-08-07 08:00:00 +0800
author: latte
categories: [AI雷达]
tags: [AI雷达, AI动态, GitHub开源, 全量扫描, OpenClaw, Cloudflare OS, Jeff Dean, 中国AI办公]
toc: true
---

> 扫描周期：2026-07-31 — 2026-08-07 | 执行模式：全量扫描 | 信号源：16/16 | 采集信号数：28 条 | 数据获取：混合（GitHub API 精确 + web_search 多源交叉验证）

---

## 本期速览

本期最大的补漏是 [OpenClaw](https://github.com/openclaw/openclaw)——这个个人 AI 助理网关项目累计已达 38.5 万 Star，是历史上增长最快的开源项目（约 8 个月前已超越 React 保持十年的记录），且近 7 天仍满格 100 commit。此前多期报告均未收录该信号，本期作为重大遗漏予以补齐，直接进入 Adopt。这也提醒我们，雷达的信号采集本身也需要持续自我校验，而不只是校验被扫描的对象。

如果说上期的主线是「AI 反噬基础设施」，本期最值得关注的主线是**顶尖研究人才的出走潮与巨头收拢入口的同步发生**。[Jeff Dean 携三位 Google 27 年老将出走创立 Discovery Loop](https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/)，同日 Demis Hassabis 退居 DeepMind 董事长，Alphabet 股价一度下跌约 5%——这是继此前多轮人才流动之后，第一次由如此资深的核心技术人物同时出走并明确对准「自动化科学发现循环」这个比单一产品更大的目标。几乎同一周，[字节飞书并入豆包、腾讯 WorkBuddy 上线人机双写、阿里千问办公三合一公测](https://news.qq.com/rain/a/20260804A00EQ900)在五天内密集发生，中国三大厂商同步收拢 AI 办公入口。两条线索共同指向：无论是顶尖人才还是巨头资源，都在这个时间点上做出了更集中的下注，行业整合的速度比产品迭代的速度更值得关注。

基础设施安全这条线本期没有降温反而在演化。[Shai-Hulud/TeamPCP 蠕虫家族](https://cloudsmith.com/blog/keyv-and-cacheable-npm-packages-compromised-in-active-supply-chain-attack)延续 keyv/cacheable 攻击线索，需要指出的是，这个僵尸网络此前已有「Mini Shai-Hulud」「Here We Go Again」等多波跨 npm/PyPI 攻击，本期是同一家族的持续变种而非独立新事件，但也说明这类攻击没有被一次性清除，供应链防护需要持续投入而非一次性响应。与此同时 Simon Willison 的「意外网络攻击」系列已扩展到 9 篇，本期新增 Irregular 的 CTF 环境误配置联网案例（目标域名巧合撞上了他自己的网站），评测沙箱缺口仍是系统性问题。

模型层面，[Qwen3.8-Max 权重再度跳票](https://qwen.ai/blog?id=qwen3.8)，官方从「下周」改口为「8 月 10 日当周」，这是连续第二期跳票，下期若仍未兑现应考虑降级观察。[DeepSeek V4-Flash-0731](https://huggingface.co/deepseek-ai) 则交出了扎实的进展：Terminal-Bench 从 61.8% 大幅提升到 82.7%，反超自家 V4-Pro，且原生支持 OpenAI Responses API 服务 Codex CLI，成本仍保持 $0.14/M token 的低位。[OpenRouter 7 月调用量榜前六名全部是中国开源模型](https://openrouter.ai/rankings)，中国模型在实际调用量而非仅仅是跑分上的份额优势正在坐实。

环位变化上，本期做了较多回收性调整：[MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)、[Shai-Hulud 蠕虫](https://cloudsmith.com/blog/keyv-and-cacheable-npm-packages-compromised-in-active-supply-chain-attack)、[Meta Muse Code](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) 三条从 Trial 降至 Assess，均因发布后首周未见足以支撑 Trial 定位的持续动态；[human-writing](https://github.com/KKKKhazix/human-writing) 与 [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) 则双双从 Watch 回升至 Assess，前者 Star 持续走高、后者结束连续两期零提交恢复活跃。[superpowers](https://github.com/obra/superpowers) 已连续三期零提交，衰减程度进一步加重，下期若仍无提交建议正式移出雷达。

---

## 雷达图谱

### 象限×环 分布表

| 环位 \ 象限 | Models & Research | Frameworks & Infrastructure | Tools & Products | Practices & Ecosystem |
|---|---|---|---|---|
| **Adopt** | — | [MCP Protocol](https://modelcontextprotocol.io/)<br>[Hermes Agent](https://github.com/NousResearch/hermes-agent)<br>[ECC（Everything Claude Code）](https://github.com/affaan-m/ECC) | [OpenAI Codex](https://github.com/openai/codex)<br>[OpenClaw](https://github.com/openclaw/openclaw)<br>[Claude Code](https://github.com/anthropics/claude-code) | — |
| **Trial** | [Qwen3.8-Max](https://qwen.ai/blog?id=qwen3.8) | [Cloudflare OS](https://github.com/cloudflare/cloudflare-os)<br>[qm（Quartermaster）](https://github.com/yc-software/qm) | — | [中国 AI 办公三巨头五天变阵](https://news.qq.com/rain/a/20260804A00EQ900) |
| **Assess** | [DeepSeek V4-Flash-0731](https://huggingface.co/deepseek-ai)<br>[OpenAI Astra 十项数学突破](https://openai.com/index/ten-advances-in-mathematics/)<br>[MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)<br>[Kimi K3](https://github.com/MoonshotAI/Kimi-K3)<br>[对齐推理综述与 Agent 记忆系统研究](https://arxiv.org/list/cs.AI/current) | [Shai-Hulud npm/PyPI 供应链蠕虫（持续演化）](https://cloudsmith.com/blog/keyv-and-cacheable-npm-packages-compromised-in-active-supply-chain-attack)<br>[alibaba/open-code-review](https://github.com/alibaba/open-code-review)<br>[AI Agent Skills 生态持续升温](https://github.com/anthropics/skills) | [Meta Muse Code + Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)<br>[human-writing](https://github.com/KKKKhazix/human-writing)<br>[OpenAI Atlas 浏览器 8 月 9 日停用](https://pasqualepillitteri.it/en/news/7783/openai-shuts-down-atlas-agentic-features-move-to) | [Jeff Dean 离职 Google 创立 Discovery Loop](https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/)<br>[OpenRouter 7 月调用量榜](https://openrouter.ai/rankings)<br>[AI 评测意外网络攻击系列](https://simonwillison.net/2026/Aug/5/incident-report/)<br>[Smallest.ai 语音 AI $13M A 轮](https://techcrunch.com/2026/07/31/smallest-ai-raises-13m-to-build-ultra-fast-voice-ai-that-sounds-genuinely-human/) |
| **Watch** | [HERA 希腊语 RAG 基准与 Nemotron 适配](https://arxiv.org/abs/2608.05138) | [superpowers](https://github.com/obra/superpowers) | — | [IJCAI-ECAI 2026 布雷梅](https://2026.ijcai.org/) |

环位分布：Adopt 6 / Trial 4 / Assess 15 / Watch 3，合计 28 条。象限分布：Models 7 / Frameworks 8 / Tools 6 / Practices 7。

### 交互式雷达图

📊 [点击查看交互式雷达图](/assets/radar/radar-chart-20260807-080000.html)

---

## GitHub 开源生态专题

本期通过 GitHub REST API 精确获取了 13 个仓库的 Star、Fork、Open Issues、License、主语言、最近推送时间、近 7 天 commit 数、Contributors 数量与最新 Release 共 9 个字段，累计约 30 次 API 调用（配额 5000/小时，余量充足）。以下数据全部为 API 精确值，无估算。

### Star 爆发项目

按 7 天 Star 增量 > 2000 的严格口径，本期无新晋 Star 爆发项目，但有一个补漏发现和一个巨头新品值得单独点名：

[OpenClaw](https://github.com/openclaw/openclaw) 累计 38.5 万 Star，是有记录以来增长最快的开源项目——约 8 个月前已超越 React 保持十年的最快增长记录。近 7 天仍满格 100 commit，PR 合并率约 32%。此前多期雷达报告均未收录此信号，属于重大遗漏，本期已补齐并直接列入 Adopt。

[Cloudflare OS](https://github.com/cloudflare/cloudflare-os) 8 月 5 日开源，5137 Star，近 7 天 89 次 commit。Cloudflare 官方博客坦承第一版内部设计存在缺陷，推倒重来后才决定开源，内部已有数千名非工程员工日常使用。零信任 Gatekeeper 权限模型与按实例沙箱是核心差异化能力。

### 细分领域新秀

**企业级 Agent 工作空间**

- [Cloudflare OS](https://github.com/cloudflare/cloudflare-os) — ⭐5137 — 浏览器直达、零信任权限模型、按实例沙箱，12 位贡献者，近 7 天 89 commit。 — 推荐环位：Trial
- [qm（Quartermaster）](https://github.com/yc-software/qm) — ⭐12030 — YC 孵化多人协作 Agent harness，按员工/频道隔离沙箱，Star 持续走高但贡献者仍仅 3 人。 — 推荐环位：Trial

**AI 代码审计与评审**

- [alibaba/open-code-review](https://github.com/alibaba/open-code-review) — ⭐19371 — 阿里开源 AI 代码评审，近 7 天 61 次 commit，迭代活跃。 — 推荐环位：Assess

**Agent 技能生态**

- [anthropics/skills](https://github.com/anthropics/skills) — ⭐166697 — Anthropic 官方技能库，持续高位活跃，「Skills 取代 MCP」论调自 5 月起延续发酵。 — 推荐环位：Assess
- [superpowers](https://github.com/obra/superpowers) — ⭐268070 — Agent 技能框架，26.8 万 Star 但近 7 天连续第三期 0 commit，衰减程度持续加重。 — 推荐环位：Watch（建议下期移出）

**模型仓库延续追踪**

- [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) — ⭐8146 — Moonshot 2.78T 模型仓库，连续两期 0 commit 后本期恢复至 4 次 commit。 — 推荐环位：Assess
- [MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — ⭐112（主仓库） — 首个开放权重全模态视频模型，主仓库活动有限，生态活跃度集中在 ComfyUI 与第三方插件侧。 — 推荐环位：Assess

### 巨头入场

本期巨头动作共 5 个，重心从模型发布转向基础设施与办公场景：

| 项目 | 背后组织 | 精确数据 | 判断 |
|------|----------|----------|------|
| [Cloudflare OS](https://github.com/cloudflare/cloudflare-os) | Cloudflare | ⭐5137，12 贡献者，近 7 天 89 commit | 首次开源企业级 Agent 工作空间，内部已规模化使用 |
| [Qwen3.8-Max](https://qwen.ai/blog?id=qwen3.8) | 阿里 | 2.4T 参数/95B 激活/1M 上下文 | 权重连续第二期跳票，已给出 8 月 10 日当周的确切日期 |
| [中国 AI 办公三巨头五天变阵](https://news.qq.com/rain/a/20260804A00EQ900) | 字节/腾讯/阿里 | 飞书并入豆包、WorkBuddy 双写、千问办公三合一 | 五天内密集收拢 AI 办公入口，竞争格局加速固化 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 阿里 | ⭐19371，100 贡献者，近 7 天 61 commit | 持续投入，迭代活跃度高 |
| [DeepSeek V4-Flash-0731](https://huggingface.co/deepseek-ai) | DeepSeek | Terminal-Bench 61.8%→82.7% | 反超自家 Pro 版本，性价比优势进一步扩大 |

### 项目健康度 Top 榜

#### [OpenAI Codex](https://github.com/openai/codex)

- **Star / Fork / Open Issues**：104428 ⭐ / 15799 / 11809
- **Fork/Star 比率**：0.15（正常）
- **Contributors**：100 人（API 上限 100，实际可能更多）
- **近 7 天 Commit**：100 次（API 上限 100）
- **最近推送 / 最新 Release**：2026-08-06 / 2026-08-05 rust-v0.146.1
- **License / 主语言**：Apache-2.0 / Rust
- **综合健康度评分**：2.9 / 3.0
- **推荐环位**：Adopt
- **数据来源**：API 精确

#### [OpenClaw](https://github.com/openclaw/openclaw)

- **Star / Fork / Open Issues**：385384 ⭐ / 81018 / 5550
- **Fork/Star 比率**：0.21（正常）
- **Contributors**：100 人（API 上限 100，实际可能更多）
- **近 7 天 Commit**：100 次（API 上限 100）
- **最近推送 / 最新 Release**：2026-08-07 / 2026-08-04 v2026.7.1-2
- **License / 主语言**：NOASSERTION / TypeScript
- **综合健康度评分**：2.6 / 3.0
- **推荐环位**：Adopt
- **数据来源**：API 精确

#### [Hermes Agent](https://github.com/NousResearch/hermes-agent)

- **Star / Fork / Open Issues**：226585 ⭐ / 44208 / 29085
- **Fork/Star 比率**：0.20（正常）
- **Contributors**：100 人（API 上限 100，实际可能更多）
- **近 7 天 Commit**：100 次（API 上限 100）
- **最近推送 / 最新 Release**：2026-08-06 / 2026-08-03 v2026.8.3
- **License / 主语言**：MIT / Python
- **综合健康度评分**：2.8 / 3.0
- **推荐环位**：Adopt
- **数据来源**：API 精确

#### [Cloudflare OS](https://github.com/cloudflare/cloudflare-os)

- **Star / Fork / Open Issues**：5137 ⭐ / 392 / 28
- **Fork/Star 比率**：0.08（观望者偏多，符合刚开源阶段）
- **Contributors**：12 人
- **近 7 天 Commit**：89 次
- **最近推送 / 最新 Release**：2026-08-06 / 无 Release
- **License / 主语言**：Apache-2.0 / TypeScript
- **综合健康度评分**：2.1 / 3.0
- **推荐环位**：Trial
- **数据来源**：API 精确

#### [qm（Quartermaster）](https://github.com/yc-software/qm)

- **Star / Fork / Open Issues**：12030 ⭐ / 1350 / 112
- **Fork/Star 比率**：0.11（正常）
- **Contributors**：3 人
- **近 7 天 Commit**：31 次
- **最近推送 / 最新 Release**：2026-08-05 / 2026-07-31 v0.1.4
- **License / 主语言**：MIT / TypeScript
- **综合健康度评分**：2.0 / 3.0
- **推荐环位**：Trial
- **数据来源**：API 精确

### 竞品对比矩阵

#### 终端编码 Agent / 助理网关三强对比

| 维度 | [OpenAI Codex](https://github.com/openai/codex) | [Claude Code](https://github.com/anthropics/claude-code) | [OpenClaw](https://github.com/openclaw/openclaw) |
|------|------|------|------|
| Star | 104428 | 140502 | 385384 |
| Fork | 15799 | 22606 | 81018 |
| Contributors | 100+ | 54 | 100+ |
| 近 7 天 Commit | 100+ | 3 | 100+ |
| 最新 Release | 2026-08-05 rust-v0.146.1 | 2026-08-04 v2.1.222 | 2026-08-04 v2026.7.1-2 |
| License | Apache-2.0 | None | NOASSERTION |
| 主语言 | Rust | Python | TypeScript |
| 核心差异 | Rust 重写、迭代最快、Atlas 浏览器能力并入 | 生态最厚、代码推理与架构理解口碑最好 | 个人 AI 助理网关，历史增长最快开源项目 |
| 适用场景 | 需要高频跟进上游能力的团队 | 已有 Claude 订阅且重视代码质量 | 需要统一入口管理多个 AI 服务的个人/团队 |
| 综合健康度 | 2.9/3.0 | 2.5/3.0 | 2.6/3.0 |

需要指出的是，Claude Code 近 7 天 commit 数从上期的 2 次仅回升至 3 次，活跃度依然处于三者中最低位，与其 Adopt 环位的生态厚度形成一定反差，建议持续观察是否只是节奏性波动。

#### 多人协作 / 企业级 Agent 工作空间对比

| 维度 | [Cloudflare OS](https://github.com/cloudflare/cloudflare-os) | [qm](https://github.com/yc-software/qm) | [Hermes Agent](https://github.com/NousResearch/hermes-agent) |
|------|------|------|------|
| Star | 5137 | 12030 | 226585 |
| Contributors | 12 | 3 | 100+ |
| 近 7 天 Commit | 89 | 31 | 100+ |
| License | Apache-2.0 | MIT | MIT |
| 主语言 | TypeScript | TypeScript | Python |
| 核心差异 | 零信任 Gatekeeper 权限模型，浏览器直达 | 按员工/Slack 频道隔离沙箱与权限 | 长青通用 Agent 框架，生态最大 |
| 适用场景 | 企业级非工程员工规模化使用 | 组织级多人共享 Agent | 需要成熟生态与稳定性 |
| 综合健康度 | 2.1/3.0 | 2.0/3.0 | 2.8/3.0 |

qm 的核心风险仍未解除：Star 已达 12030，贡献者数量仍停留在 3 人，规模尚未突破小团队阶段。Cloudflare OS 虽然贡献者更多（12 人），但作为企业背书项目仍处早期，暂无 Release，需要观察后续版本节奏。

---

## 重点信号详解

### [OpenClaw](https://github.com/openclaw/openclaw)

**象限**：Tools & Products　**环位**：Adopt　**跨源热度分**：2.9　**来源**：GitHub、博客、媒体

**是什么**：个人 AI 助理网关项目，累计 38.5 万 Star，是有记录以来增长最快的开源项目——约 8 个月前已超越 React 保持十年的最快增长记录。

**为什么重要**：这是本期雷达自我校验发现的最大遗漏。一个已经超越 React 历史记录的现象级项目此前从未被纳入报告，说明信号采集本身也需要周期性回头核查，而不能只依赖增量关键词搜索。从数据看，它不是昙花一现：近 7 天仍满格 100 commit，PR 合并率约 32%，说明社区贡献质量有一定筛选而非来者不拒。

**当前状态**：38.5 万 Star，8.1 万 Fork，100+ 贡献者（API 上限），5550 个未决 issue。License 标注为 NOASSERTION，需要在正式采用前单独核实许可条款。

**建议下一步**：鉴于其规模和采用广度，建议将其纳入常规跟踪列表，并在下一期重点复查其许可证问题——NOASSERTION 状态对企业采用是个需要澄清的风险点。

### [Cloudflare OS](https://github.com/cloudflare/cloudflare-os)

**象限**：Frameworks & Infrastructure　**环位**：Trial　**跨源热度分**：2.75　**来源**：博客、HN、产品发布、官方

**是什么**：Cloudflare 8 月 5 日开源的企业级 AI Agent 工作空间，支持浏览器直达、零信任 Gatekeeper 权限模型、按实例沙箱隔离。

**为什么重要**：Cloudflare 官方博客罕见地坦承第一版内部设计存在缺陷，推倒重来后才决定开源——这种诚实的复盘本身就是一个值得记录的信号。更重要的是它不是概念验证：官方称内部已有数千名非工程员工日常使用，这意味着权限隔离与沙箱设计已经过真实的非技术用户规模验证，而不只是工程团队内部测试。

**当前状态**：5137 Star，12 位贡献者，近 7 天 89 次 commit，尚无正式 Release，Apache-2.0 许可。

**建议下一步**：如果团队正在评估企业级 Agent 工作空间方案，建议安排 PoC 重点验证零信任权限模型在实际组织架构下的适配成本。作为 Cloudflare 背书项目，可信度较高，但仍需观察开源后首个正式 Release 的节奏。

### [Qwen3.8-Max](https://qwen.ai/blog?id=qwen3.8)

**象限**：Models & Research　**环位**：Trial　**跨源热度分**：2.6　**来源**：HN、产品发布、媒体、LMArena

**是什么**：阿里 2.4 万亿总参数、95B 激活的 MoE 架构模型，1M token 上下文，API 已上线，是 Qwen Max 级模型首次承诺开源权重。

**为什么重要**：延续上期判断，这仍是中国开源阵营参数规模最大的一次潜在发布，此前公开的自主编程实验（16 天自主运行产出 265 次提交、127 个 PR）依然是目前最有说服力的长程自主性证据。

**当前状态**：官方开源时间表已从上期的「下周」明确改口为「8 月 10 日当周」，这是**连续第二期跳票**，虽然给出了具体日期但可信度需要打折扣。API 已可用，定价与基准表现维持上期水平。

**建议下一步**：维持 Trial，但**权重跳票已构成明确的下期降级触发条件**。建议下期核查若 8 月 10 日当周仍未兑现，直接降级至 Assess。当前可继续通过 API 做小规模对比测试，不建议基于「即将开源」的承诺做资源规划。

### [中国 AI 办公三巨头五天变阵](https://news.qq.com/rain/a/20260804A00EQ900)

**象限**：Practices & Ecosystem　**环位**：Trial　**跨源热度分**：2.5　**来源**：媒体、官方公告

**是什么**：字节飞书并入豆包（7/30）、腾讯 WorkBuddy 上线人机双写（7/30）、阿里千问办公三合一公测（8/3，整合悟空/QoderWork/MuleRun），三家在五天内密集调整 AI 办公产品布局。

**为什么重要**：三家几乎同时收拢 AI 办公入口并非巧合，而是对同一个判断的集体反应——AI 办公场景的竞争窗口正在收窄，谁先把多个分散的产品线整合成统一入口，谁就能在用户习惯形成前占据心智。这类同步动作历史上通常预示着该细分赛道即将进入更激烈的直接竞争阶段。

**当前状态**：三个产品线均处于整合或公测的早期阶段，尚未看到用户规模或留存的公开数据。

**建议下一步**：建议持续跟踪三家产品在整合后的用户反馈与功能完善度，尤其关注「人机双写」这类新交互范式是否会被其他厂商效仿成为行业标配。暂不建议基于当前信息做具体产品选型决策。

---

## 评估观察

### Assess（评估 — 值得了解）

| 信号 | 象限 | 来源 | 描述 | 为什么值得关注 | 升级条件 |
|------|------|------|------|---------------|----------|
| [Jeff Dean 离职 Google 创立 Discovery Loop](https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/) | Practices | 媒体、HN、官方 | Google 27 年老将携三位核心研究者出走，成立公益公司性质初创，目标自动化科学发现循环；同日 Hassabis 退居董事长，Alphabet 股价一度下跌约 5%。 | 顶尖人才出走规格空前，目标超越单一产品指向科学发现自动化 | 公司正式产品发布或披露具体技术路线 |
| [OpenAI Atlas 浏览器 8 月 9 日停用](https://pasqualepillitteri.it/en/news/7783/openai-shuts-down-atlas-agentic-features-move-to) | Tools | 官方、媒体 | 上线不到一年即被关停，代理式浏览能力迁移至 ChatGPT 桌面应用、Chrome 扩展与 Codex；书签不自动迁移需手动导出。 | 反映 OpenAI 产品线快速收敛策略，能力向核心产品集中 | 迁移后的浏览能力在 Codex 中获得实质增强验证 |
| [OpenRouter 7 月调用量榜：中国开源模型占全球 41%](https://openrouter.ai/rankings) | Practices | 媒体、数据平台 | 7 月调用量前六名全部为中国开源模型（小米 MiMo-V2.5、DeepSeek V4 Flash、腾讯 HY3、MiniMax M3、智谱 GLM-5.2、DeepSeek V4 Pro）。 | 实际调用量而非跑分层面验证中国开源模型的份额优势 | 份额持续扩大或首次出现单一模型占比过半 |
| [DeepSeek V4-Flash-0731](https://huggingface.co/deepseek-ai) | Models | HuggingFace、媒体 | MIT 许可正式版，Terminal-Bench 从 61.8% 提升到 82.7%，反超自家 V4-Pro，原生支持 Codex CLI，$0.14/M input token。 | 性价比与能力同步提升，反超自家旗舰版本 | 第三方基准复现且生产环境案例出现 |
| [AI 评测意外网络攻击系列](https://simonwillison.net/2026/Aug/5/incident-report/) | Practices | 博客、官方、HN | Simon Willison 标签系列扩展至 9 篇，新增 AISI 与 Irregular 两起独立事件，亦有评论质疑证据是否足以坐实全部「事故」定性。 | 系列化积累说明评测沙箱缺口是系统性而非偶发问题 | 出现行业级评测沙箱标准或监管介入 |
| [MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | Models | HN、HuggingFace、GitHub、博客 | 首个开放权重全模态视频模型，商用许可明确排除美、欧盟、英、韩四地区，发布首周未见显著后续动态。 | 权限限制罕见地公开列明四大主要市场，反映版权风险考量 | 生态活跃度回升或许可范围扩大 |
| [Shai-Hulud npm/PyPI 供应链蠕虫（持续演化）](https://cloudsmith.com/blog/keyv-and-cacheable-npm-packages-compromised-in-active-supply-chain-attack) | Practices | 安全媒体、npm、HN | TeamPCP 蠕虫家族本期延续 keyv/cacheable 攻击线索，为该家族多波跨生态攻击中的最新变种，非独立新事件。 | 供应链攻击已形成持续性家族化演化，非一次性清除 | 出现行业级 AI Agent 配置文件安全扫描标准 |
| [OpenAI Astra 十项数学突破](https://openai.com/index/ten-advances-in-mathematics/) | Models | HN、博客 | 约 $2000 推理成本攻克 10 项长期未解数学/理论计算机难题，全部经 Lean 形式化验证。 | 用可机器验证的数学新结果替代 benchmark 展示能力 | 数学界完成独立验证或 Astra 正式对外发布 |
| [Smallest.ai 语音 AI $13M A 轮](https://techcrunch.com/2026/07/31/smallest-ai-raises-13m-to-build-ultra-fast-voice-ai-that-sounds-genuinely-human/) | Practices | 媒体、官方 | Seligman Ventures 领投，累计融资超 $21M，主打端到端实时语音转语音架构。 | 语音 AI 赛道持续获资本关注，目标明确对准图灵测试级体验 | 产品公开发布并获第三方体验评测 |
| [Meta Muse Code + Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) | Tools | 博客、HN、产品发布、媒体 | Meta 首款终端编码 Agent，发布首周未见显著后续动态，社区反馈尚不充分。 | 编码 Agent 三强格局的新变量，但热度未如预期延续 | 出现规模化用户反馈或性能对比数据 |
| [human-writing](https://github.com/KKKKhazix/human-writing) | Tools | GitHub | 让 AI 写的中文更像真人的通用创作 Skill，Star 从 1025 增至 1561（7 天 +536），持续走高，仍单人维护。 | 持续增长而非昙花一现，反映 AI 腔调同质化痛点真实存在 | 从单人项目转为社区维护且效果获验证 |
| [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) | Models | GitHub | Moonshot 2.78T 模型仓库，Star 8146，连续两期 0 commit 后本期恢复至 4 次 commit。 | 从衰减中恢复，值得观察是否为持续趋势 | commit 频率持续保持或权重生态活跃度提升 |
| [对齐推理综述与 Agent 记忆系统研究](https://arxiv.org/list/cs.AI/current) | Models | arXiv | 多篇关于 LLM Agent 长时程一致性、记忆系统权威综述集中出现，核心结论：记忆系统对 Agent 表现的影响可能超过底座模型差异。 | 挑战「模型能力决定一切」的默认假设 | 出现基于该结论的实际产品设计验证 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Tools | GitHub | 阿里开源 AI 代码评审，19371 Star，近 7 天 61 次 commit，迭代活跃。 | 阿里持续投入，活跃度稳定 | 出现规模化生产落地案例与效果数据 |
| [AI Agent Skills 生态持续升温](https://github.com/anthropics/skills) | Frameworks | 博客、GitHub | 「Skills 取代 MCP」论调自 5 月起持续发酵，anthropics/skills（16.7 万 Star）等维持高位活跃，行业标准化收敛趋势延续。 | 长线趋势的持续验证而非突发新闻 | 出现明确的行业标准或主流框架原生支持切换 |

### Watch（观察 — 仅做记录）

| 信号 | 象限 | 来源 | 描述 | 触发条件 |
|------|------|------|------|----------|
| [superpowers](https://github.com/obra/superpowers) | Frameworks | GitHub | Agent 技能框架，26.8 万 Star，但近 7 天仍 0 次 commit，已连续第三期零提交。 | 恢复提交，否则下期建议正式移出 |
| [HERA 希腊语 RAG 基准与 Nemotron 适配](https://arxiv.org/abs/2608.05138) | Models | arXiv | 首个大规模希腊语检索增强生成基准，NVIDIA Nemotron 检索栈端到端本地化适配案例。 | 扩展至更多语种或被主流 RAG 框架采纳 |
| [IJCAI-ECAI 2026 布雷梅](https://2026.ijcai.org/) | Practices | 会议 | 第 35 届国际人工智能联合会议，8 月于德国布雷梅召开，属既定日程非突发新闻。 | 会议期间出现重大论文或产品发布 |

---

## 论文与研究前沿

| 论文 / 研究 | 作者 / 机构 | 摘要 | 为什么重要 |
|------|-----------|------|-----------|
| [Ten Advances in Mathematics and Theoretical Computer Science](https://openai.com/index/ten-advances-in-mathematics/) | OpenAI（Astra 模型） | 以约 $2000 推理成本解决或实质推进 10 项长期开放问题，全部经 Lean 形式化验证 | 用可机器验证的数学新结果替代 benchmark 展示模型能力 |
| [Incident Report: unsanctioned agent behaviour during cyber testing 系列（第 9 篇）](https://simonwillison.net/2026/Aug/5/incident-report/) | 英国 AISI / Irregular / Simon Willison 整理 | 新增两起独立事件：AISI 安全过滤器关闭致真实攻击、Irregular CTF 环境误配置联网（目标域名巧合撞上整理者本人网站） | 系列化积累说明评测沙箱缺口是系统性问题，但也有评论质疑证据是否足以定性为「事故」 |
| Agent 长时程一致性与记忆系统综述（多篇，arXiv cs.AI） | 多机构 | 核心结论：记忆系统设计对 Agent 实际表现的影响可能超过底座模型能力差异 | 挑战「模型能力决定 Agent 上限」的默认假设，为工程投入优先级提供新依据 |
| [HERA: 希腊语 RAG 基准](https://arxiv.org/abs/2608.05138) | 学术团队 | 首个大规模希腊语检索增强生成基准，含 NVIDIA Nemotron 检索栈本地化适配案例 | 多语种 RAG 评测的空白填补，对非英语市场落地有参考价值 |

---

## 投融资与商业动态

| 事件 | 公司 | 金额 / 估值 | 要点 |
|------|------|-----------|------|
| A 轮融资 | [Smallest.ai](https://techcrunch.com/2026/07/31/smallest-ai-raises-13m-to-build-ultra-fast-voice-ai-that-sounds-genuinely-human/) | $13M（累计超 $21M） | Seligman Ventures 领投，主打端到端实时语音转语音架构，目标让 AI 电话对话通过图灵测试 |
| 人才出走创业 | [Jeff Dean 等 / Discovery Loop](https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/) | 未披露 | Google 27 年老将携 Sanjay Ghemawat、Oriol Vinyals、Quoc Le 出走，成立公益公司性质初创，Alphabet 股价一度下跌约 5% |
| 市场份额数据 | [OpenRouter 调用量榜](https://openrouter.ai/rankings) | — | 7 月前六名全部为中国开源模型，实际调用量层面验证中国开源阵营的份额优势 |

---

## 信号全景表

| # | 信号 | 象限 | 来源 | 日期 | 描述 | 环位 | 热度分 |
|---|------|------|------|------|------|------|--------|
| 1 | [OpenAI Codex](https://github.com/openai/codex) | Tools | GitHub、产品发布、博客 | 2026-08-06 | OpenAI 终端编码 Agent，近 7 天仍 100+ commit 满格迭代；Atlas 浏览器停用后代理式浏览能力并入。 | Adopt | 2.9 |
| 2 | [OpenClaw](https://github.com/openclaw/openclaw) 🆕 | Tools | GitHub、博客、媒体 | 2026-08-07 | 个人 AI 助理网关，历史增长最快开源项目，累计 38.5 万 Star；本期首次收录，重大遗漏补齐。 | Adopt | 2.9 |
| 3 | [MCP Protocol](https://modelcontextprotocol.io/) | Frameworks | GitHub、博客、产品发布 | 2026-08-05 | 模型上下文协议持续作为 Agent 工具层事实标准；「Skills 取代 MCP」论调本周升温。 | Adopt | 2.7 |
| 4 | [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Frameworks | GitHub | 2026-08-06 | NousResearch 长青 Agent 框架，22.6 万 Star，近 7 天满格 100 commit。 | Adopt | 2.75 |
| 5 | [Claude Code](https://github.com/anthropics/claude-code) | Tools | GitHub、产品发布、博客 | 2026-08-06 | Anthropic 终端编码 Agent，近 7 天 commit 从 2 次回升至 3 次，活跃度仍处低位。 | Adopt | 2.65 |
| 6 | [ECC（Everything Claude Code）](https://github.com/affaan-m/ECC) | Frameworks | GitHub | 2026-08-06 | Claude Code 生态聚合项目，23.8 万 Star，近 7 天 21 次 commit。 | Adopt | 2.6 |
| 7 | [Cloudflare OS](https://github.com/cloudflare/cloudflare-os) 🆕 | Frameworks | 博客、HN、产品发布、官方 | 2026-08-05 | Cloudflare 开源企业级 Agent 工作空间，零信任权限模型，内部已数千员工日常使用。 | Trial | 2.75 |
| 8 | [Qwen3.8-Max](https://qwen.ai/blog?id=qwen3.8) | Models | HN、产品发布、媒体、LMArena | 2026-08-03 | Max 级权重首次开源承诺，连续第二期跳票，改口 8 月 10 日当周。 | Trial | 2.6 |
| 9 | [中国 AI 办公三巨头五天变阵](https://news.qq.com/rain/a/20260804A00EQ900) 🆕 | Practices | 媒体、官方公告 | 2026-08-03 | 字节飞书并入豆包、腾讯 WorkBuddy 双写、阿里千问办公三合一公测。 | Trial | 2.5 |
| 10 | [qm（Quartermaster）](https://github.com/yc-software/qm) | Frameworks | GitHub、HN | 2026-08-05 | YC 开源多人协作 Agent harness，Star 11675→12030，贡献者仍仅 3 人。 | Trial | 2.45 |
| 11 | [Jeff Dean 离职 Google 创立 Discovery Loop](https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/) 🆕 | Practices | 媒体、HN、官方 | 2026-08-05 | Google 27 年老将携三位核心研究者出走，目标自动化科学发现循环。 | Assess | 2.6 |
| 12 | [AI 评测意外网络攻击系列](https://simonwillison.net/2026/Aug/5/incident-report/) | Practices | 博客、官方、HN | 2026-08-05 | Simon Willison 标签系列扩展至 9 篇，新增 AISI 与 Irregular 两起独立事件。 | Assess | 2.5 |
| 13 | [DeepSeek V4-Flash-0731](https://huggingface.co/deepseek-ai) 🆕 | Models | HuggingFace、媒体 | 2026-07-31 | MIT 许可正式版，Terminal-Bench 61.8%→82.7%，反超自家 Pro 版本。 | Assess | 2.4 |
| 14 | [OpenAI Astra 十项数学突破](https://openai.com/index/ten-advances-in-mathematics/) | Models | HN、博客 | 2026-08-03 | 约 $2000 推理成本攻克 10 项长期未解数学/理论计算机难题。 | Assess | 2.4 |
| 15 | [MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | Models | HN、HuggingFace、GitHub、博客 | 2026-08-03 | 首个开放权重全模态视频模型，商用许可排除美欧英韩四地区。 | Assess | 2.35 |
| 16 | [OpenRouter 7 月调用量榜](https://openrouter.ai/rankings) 🆕 | Practices | 媒体、数据平台 | 2026-08-01 | 7 月调用量前六名全部为中国开源模型。 | Assess | 2.3 |
| 17 | [Shai-Hulud npm/PyPI 供应链蠕虫（持续演化）](https://cloudsmith.com/blog/keyv-and-cacheable-npm-packages-compromised-in-active-supply-chain-attack) | Practices | 安全媒体、npm、HN | 2026-08-04 | TeamPCP 蠕虫家族延续 keyv/cacheable 攻击线索，为多波变种中的最新一波。 | Assess | 2.3 |
| 18 | [Meta Muse Code + Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) | Tools | 博客、HN、产品发布、媒体 | 2026-08-05 | Meta 首款终端编码 Agent，发布首周未见显著后续动态。 | Assess | 2.3 |
| 19 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) 🆕 | Frameworks | GitHub | 2026-08-06 | 阿里开源 AI 代码评审，19371 Star，近 7 天 61 次 commit。 | Assess | 2.2 |
| 20 | [Smallest.ai 语音 AI $13M A 轮](https://techcrunch.com/2026/07/31/smallest-ai-raises-13m-to-build-ultra-fast-voice-ai-that-sounds-genuinely-human/) 🆕 | Practices | 媒体、官方 | 2026-07-31 | Seligman Ventures 领投，累计融资超 $21M，主打实时语音转语音。 | Assess | 2.1 |
| 21 | [对齐推理综述与 Agent 记忆系统研究](https://arxiv.org/list/cs.AI/current) 🆕 | Models | arXiv | 2026-08-04 | 记忆系统对 Agent 表现的影响可能超过底座模型差异。 | Assess | 2.1 |
| 22 | [AI Agent Skills 生态持续升温](https://github.com/anthropics/skills) 🆕 | Frameworks | 博客、GitHub | 2026-08-01 | 「Skills 取代 MCP」论调自 5 月起持续发酵，行业标准化收敛趋势延续。 | Assess | 2.0 |
| 23 | [human-writing](https://github.com/KKKKhazix/human-writing) | Tools | GitHub | 2026-08-05 | 让 AI 写的中文更像真人的创作 Skill，Star 1025→1561，持续走高。 | Assess | 1.9 |
| 24 | [OpenAI Atlas 浏览器 8 月 9 日停用](https://pasqualepillitteri.it/en/news/7783/openai-shuts-down-atlas-agentic-features-move-to) 🆕 | Tools | 官方、媒体 | 2026-07-09 | 上线不到一年即被关停，代理式浏览能力迁移至 ChatGPT 桌面应用与 Codex。 | Assess | 2.2 |
| 25 | [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) | Models | GitHub | 2026-08-06 | Moonshot 2.78T 模型仓库，连续两期 0 commit 后本期恢复至 4 次 commit。 | Assess | 1.7 |
| 26 | [superpowers](https://github.com/obra/superpowers) | Frameworks | GitHub | 2026-08-06 | Agent 技能框架，26.8 万 Star，近 7 天连续第三期 0 commit。 | Watch | 1.3 |
| 27 | [HERA 希腊语 RAG 基准与 Nemotron 适配](https://arxiv.org/abs/2608.05138) 🆕 | Models | arXiv | 2026-08-05 | 首个大规模希腊语 RAG 基准，NVIDIA Nemotron 检索栈本地化适配案例。 | Watch | 1.6 |
| 28 | [IJCAI-ECAI 2026 布雷梅](https://2026.ijcai.org/) 🆕 | Practices | 会议 | 2026-08-30 | 第 35 届国际人工智能联合会议，德国布雷梅召开，既定日程。 | Watch | 1.3 |

---

## 趋势追踪

本期与上期（2026-08-06，46 条信号）对比。

### 环位变迁

| 信号 | 变化 | 原因 |
|------|------|------|
| [OpenClaw](https://github.com/openclaw/openclaw) | 🆕 新进雷达 → Adopt | 历史增长最快开源项目，此前多期漏收，本期作为重大遗漏补齐 |
| [Cloudflare OS](https://github.com/cloudflare/cloudflare-os) | 🆕 新进雷达 → Trial | Cloudflare 首次开源企业级 Agent 工作空间，内部已规模化验证 |
| [中国 AI 办公三巨头五天变阵](https://news.qq.com/rain/a/20260804A00EQ900) | 🆕 新进雷达 → Trial | 字节/腾讯/阿里五天内密集收拢 AI 办公入口 |
| [MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | ⬇️ Trial → Assess | 发布首周未见显著后续生态动态，主仓库活跃度有限 |
| [Shai-Hulud npm/PyPI 供应链蠕虫](https://cloudsmith.com/blog/keyv-and-cacheable-npm-packages-compromised-in-active-supply-chain-attack) | ⬇️ Trial → Assess | 确认为既有蠕虫家族的延续变种而非独立新事件，风险等级下调但仍需关注 |
| [Meta Muse Code + Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) | ⬇️ Trial → Assess | 发布首周社区反馈尚不充分，未见能支撑 Trial 定位的持续动态 |
| [human-writing](https://github.com/KKKKhazix/human-writing) | ⬆️ Watch → Assess | Star 从 1025 增至 1561（7 天 +536），持续走高 |
| [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) | ⬆️ Watch → Assess | 连续两期 0 commit 后本期恢复至 4 次 commit，解除衰减预警 |
| [Claude Code](https://github.com/anthropics/claude-code) | ➡️ 维持 Adopt（预警持续） | 近 7 天 commit 从 2 次回升至 3 次，活跃度略有恢复但仍显著低于同类项目 |
| [Qwen3.8-Max](https://qwen.ai/blog?id=qwen3.8) | ➡️ 维持 Trial（预警加重） | 权重开源连续第二期跳票，下期若仍未兑现应考虑降级 |

### 信号衰减预警

| 信号 | 当前环位 | 连续缺席期数 | 衰减等级 | 建议动作 |
|------|----------|-------------|----------|----------|
| [superpowers](https://github.com/obra/superpowers) | Watch | 3 期 | ⚠️ 中度（接近严重） | 26.8 万 Star 但连续三期 0 commit，下期若仍无提交建议正式移出 |
| [Claude Code](https://github.com/anthropics/claude-code) | Adopt | 2 期 | ⚠️ 轻微 | 近 7 天 3 commit，较上期 2 次略有回升但仍处低位，持续复查 |
| [Qwen3.8-Max](https://qwen.ai/blog?id=qwen3.8) | Trial | 2 期 | ⚠️ 中度 | 权重开源连续第二期跳票，下期未兑现应降级 |
| [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) | Assess | — | ✅ 恢复活跃 | 结束连续两期零提交，解除衰减标记 |
| [human-writing](https://github.com/KKKKhazix/human-writing) | Assess | — | ✅ 持续走高 | Star 与 commit 数据均向好，无衰减风险 |
| [ECC（Everything Claude Code）](https://github.com/affaan-m/ECC) | Adopt | — | ✅ 保持活跃 | 近 7 天 21 commit，维持健康 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Assess | — | ✅ 保持活跃 | 近 7 天 61 commit，迭代稳定 |

### 新增信号

本期新增 15 条：[OpenClaw](https://github.com/openclaw/openclaw)、[Cloudflare OS](https://github.com/cloudflare/cloudflare-os)、[中国 AI 办公三巨头五天变阵](https://news.qq.com/rain/a/20260804A00EQ900)、[Jeff Dean 离职 Google 创立 Discovery Loop](https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/)、[OpenAI Atlas 浏览器 8 月 9 日停用](https://pasqualepillitteri.it/en/news/7783/openai-shuts-down-atlas-agentic-features-move-to)、[OpenRouter 7 月调用量榜](https://openrouter.ai/rankings)、[DeepSeek V4-Flash-0731](https://huggingface.co/deepseek-ai)、[Smallest.ai 语音 AI $13M A 轮](https://techcrunch.com/2026/07/31/smallest-ai-raises-13m-to-build-ultra-fast-voice-ai-that-sounds-genuinely-human/)、[对齐推理综述与 Agent 记忆系统研究](https://arxiv.org/list/cs.AI/current)、[alibaba/open-code-review](https://github.com/alibaba/open-code-review)、[AI Agent Skills 生态持续升温](https://github.com/anthropics/skills)、[HERA 希腊语 RAG 基准与 Nemotron 适配](https://arxiv.org/abs/2608.05138)、[IJCAI-ECAI 2026 布雷梅](https://2026.ijcai.org/)。

其中 OpenClaw 是最重要的一条——它不是本周新出现的项目，而是长期被雷达遗漏的现象级信号，本期修正后直接进入 Adopt。Cloudflare OS 与中国 AI 办公三巨头变阵两条共同指向巨头正在基础设施与场景入口两端同步发力。

### 消失信号

上期 46 条信号中，本期未再出现的有 33 条，包括 [AI 评测意外网络攻击事件](https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing)（已由本期同主题系列信号延续覆盖）、[Codex Security CLI](https://github.com/openai/codex-security)、[DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)、[Don't Be a Meat Proxy](https://gruhn.me/blog/2026-08-03/)、[Devtools Must Be Open Source](https://blog.exe.dev/devtools-must-be-open-source)、[GitHub Stacked PRs](https://github.blog/changelog/2026-07-30-stacked-pull-requests-public-preview/)、[Graphify](https://github.com/Graphify-Labs/graphify)、[Grok Build](https://github.com/xai-org/grok-build)、[LLM 0.32](https://github.com/simonw/llm)、[MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code)、[OmniRoute](https://github.com/diegosouzapw/OmniRoute)、[Open Code Review](https://github.com/alibaba/open-code-review)（已由 alibaba/open-code-review 延续覆盖，命名口径调整）、[OpenWiki](https://github.com/langchain-ai/openwiki)、[OpenWorker](https://github.com/andrewyng/openworker)、[RealReplicaBench](https://github.com/Accio-Lab/RealReplicaBench)、[Stripe 洽购 OpenRouter](https://finance.sina.com.cn/roll/2026-08-06/doc-inimikrp3157306.shtml)、[agent-skills](https://github.com/addyosmani/agent-skills)、[anydoc](https://github.com/firecrawl/anydoc)、[cindy](https://github.com/makecindy/cindy)、[claude-mem](https://github.com/thedotmack/claude-mem)、[deer-flow](https://github.com/bytedance/deer-flow)、[genoffice](https://github.com/genspark-ai/genoffice)、[kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)、[microsoft/skill-recorder](https://github.com/microsoft/skill-recorder)、[open-kritt](https://github.com/Kritt-ai/open-kritt)、[pi](https://github.com/earendil-works/pi)、[qwen-audio-agent](https://github.com/QwenAudio/qwen-audio-agent)、[qwen-code](https://github.com/QwenLM/qwen-code)、[trycomp CRM](https://github.com/trycompai/crm)、[turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)、[waste](https://github.com/sqliteai/waste)、[英伟达为 OpenAI 提供 2500 亿美元融资担保](https://m.21jingji.com/article/20260727/herald/b7d129ad18df76c6dce5aa1bb1213fce.html)。

这些信号大多是一次性热点或近期无新动态，本期热度评分被更强的新信号挤出全景表，不代表其技术价值消失，仅反映本期采集口径下的相对优先级。

---

## 备注

**数据获取模式**：混合。GitHub 侧全部使用 REST API 精确获取，覆盖 13 个仓库、9 个字段（Star、Fork、Open Issues、License、主语言、最近推送、近 7 天 commit、Contributors、最新 Release），累计约 30 次调用，配额 5000/小时余量充足，无估算数据。非 GitHub 信号使用 web_search 多源交叉验证，关键事实均经 2 个以上独立来源确认。

**数据订正**：本期修正了 Shai-Hulud/TeamPCP 蠕虫的时间线表述——此前搜索中出现的「62 个包 / 172 个包」等大规模数据实际发生于 2026 年 5 月（Mini Shai-Hulud、Here We Go Again 等早期变种），与本期 8 月 4 日 keyv/cacheable 攻击是同一僵尸网络的不同波次，本期描述已避免将历史数据与当前事件混淆。

**已排除的旧闻**：本期核实排除了两条搜索中出现但实为历史旧闻的信号——GLM-5.2 MIT 开源（实为 6 月消息）与 Karpathy 加入 Anthropic（实为 5 月消息），未计入本期新增。

**异常情况**：web_fetch 因代理配置（HTTP_PROXY=127.0.0.1:8118）对多个域名返回连接失败；Product Hunt 网站被 Cloudflare 人机验证拦截；Reddit 站内搜索部分关键词组合无结果。均已按 skill 规范改用 web_search 多源交叉验证补齐，未使用 curl 等替代手段绕过。

**信号源覆盖**：16/16 全部扫描。AI 会议与峰会（信号源 12）本期处于非会议季，仅记录 IJCAI-ECAI 2026 既定日程，属正常情况。

**重大遗漏订正说明**：本期在采集过程中发现 OpenClaw（38.5 万 Star，历史增长最快开源项目）此前从未被纳入报告，已作为 Adopt 级信号补齐。建议后续每期扫描增加一次「GitHub 全域 Star 排行头部反查」步骤，以降低类似头部项目被增量关键词搜索遗漏的风险。

*报告由 AI Radar Skill 自动生成 · 2026-08-07*
