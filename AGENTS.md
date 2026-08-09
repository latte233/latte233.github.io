# AGENTS.md

本文件是 AI Agent 在本仓库工作的操作手册。**当用户说"发布博客""写篇文章""发个日报"时，一律按本文件执行。**

---

## 1. 项目概览

| 项 | 值 |
|---|---|
| 仓库 | `latte233/latte233.github.io` |
| 站点 | https://latte233.github.io |
| 主分支 | `main` |
| 框架 | Jekyll 4.3 + jekyll-theme-chirpy 7.2（gem 方式引入，无主题源码） |
| 插件 | jekyll-archives |
| 语言 | zh-CN，时区 Asia/Shanghai |
| 部署 | push 到 `main` → GitHub Actions（`.github/workflows/pages-deploy.yml`）自动构建并发布到 GitHub Pages |

### 目录结构

```
_config.yml              # 站点配置（含 build 版本号，用于缓存刷新）
_posts/                  # 所有博客文章（212+ 篇）★ 发博客只动这里
_tabs/                   # 顶部导航页：about / archives / categories / tags
_data/authors.yml        # 作者映射（latte / 邱实 → latte）
_includes/               # footer.html、metadata-hook.html（自定义 CSS/JS 注入点）
_locales/zh-CN.yml       # 中文文案覆盖
assets/css/style.scss    # 自定义样式
assets/js/               # custom.js（侧栏收起、TOC 排序）、refresh.js
assets/img/              # 头像、favicon
assets/radar/            # AI 雷达报告的交互式图表 HTML（按日期命名）
html/                    # 独立静态页，构建时原样拷贝到 _site/html/
index.md                 # 首页 = 文章索引（permalink: /）
.github/workflows/       # Pages 部署流水线
```

---

## 2. 发布博客的标准流程

### Step 0 — 先同步

```bash
cd /Users/qiushi/code/github/latte233.github.io
git pull https://<TOKEN>@github.com/latte233/latte233.github.io.git main
```

> 本仓库有多个自动化任务每天写入，**不 pull 直接提交几乎必冲突**。

### Step 1 — 创建文章文件

路径：`_posts/YYYY-MM-DD-<slug>.md`

- 日期必须是文章发布日（`_config.yml` 中 `future: true`，未来日期也会渲染）
- slug 用英文小写连字符，如 `2026-08-09-github-ai-hotspot.md`
- 自动化脚本产出的文章可用随机串作 slug（历史沿用），**人工写的文章请用可读 slug**
- 文件名日期与 front matter 的 `date` 必须一致

### Step 2 — 写 Front Matter

最小可用模板：

```yaml
---
title: "文章标题"
date: 2026-08-09 08:00:00 +0800
author: latte
categories: [分类]
tags: [标签1, 标签2]
toc: true
---
```

字段说明：

| 字段 | 必填 | 说明 |
|---|---|---|
| `title` | ✅ | 用双引号包裹，中文标题 |
| `date` | ✅ | `YYYY-MM-DD HH:MM:SS +0800` 或 `YYYY-MM-DDTHH:MM:SS+08:00`，**必须带时区** |
| `author` | 建议 | 固定 `latte`（对应 `_data/authors.yml`） |
| `categories` | ✅ | 1–2 级，见下方"现有分类" |
| `tags` | ✅ | 3–8 个，中文/英文皆可 |
| `toc` | 可选 | 默认已在 `_config.yml` 开启，长文显式写 `true` |
| `excerpt` | 可选 | 首页索引摘要；不写则自动截取前 120 字 |
| `layout` | 免写 | `_config.yml` 已对 posts 默认 `layout: post` |
| `pin` | 可选 | `true` 置顶 |
| `image` | 可选 | `{ path: /assets/img/xxx.png, alt: "描述" }` |

**现有分类（新文章优先复用，别乱造）：**

| 分类 | 篇数 | 用途 |
|---|---|---|
| `["日报"]` | 60+ | Latte 热点报告 · MMDD |
| `[AI, GitHub, 开源]` | 30+ | GitHub AI 项目热度榜 |
| `[AI雷达]` | 30+ | AI 全域雷达报告 |
| `[深度研究]` | 25+ | 长篇研究文章 |
| 其他 | 各 1–2 | 游戏攻略 / 技术分析 / 工具评测 / 投资分析 / 生活随笔 等 |

**三类固定栏目的标题格式（务必保持一致，否则归档页会乱）：**

- 日报：`"Latte 热点报告 · 0809"`（MMDD）
- 雷达：`"AI 全域雷达报告 · 2026-08-09"`
- 热度榜：`"GitHub AI Agent 项目综合热度榜 - 2026-08-09"`

### Step 3 — 正文写作规范

- Markdown 引擎为 **kramdown + GFM**，代码高亮 rouge（代码块默认显示行号）
- 正文**不要**再写一级标题重复 `title`（Chirpy 会自动渲染标题）；从 `##` 开始
  - 例外：历史的热度榜/日报文章有用 `#` 开头的，保持各自栏目内部一致即可
- 站内资源用绝对路径：`/assets/img/xxx.png`、`/assets/radar/radar-chart-20260809-080000.html`
- 外链一律用 Markdown 链接语法，写明来源
- 表格、emoji 小标题在本站是常规风格，可放心用
- 不要在文中放任何密钥、Token、私人联系方式

### Step 4 — 附带静态资源（如有）

- 交互式图表 → `assets/radar/radar-chart-YYYYMMDD-HHMMSS.html`，文中用
  `📊 [点击查看交互式雷达图](/assets/radar/radar-chart-20260809-080000.html)` 引用
- 独立完整页面 → 放 `html/`，构建时原样拷贝，访问路径 `/html/<file>.html`
- 图片 → `assets/img/`

### Step 5 — 本地校验（可选但推荐）

```bash
bundle exec jekyll build   # 或 bundle exec jekyll serve
```

没装 Ruby 环境时，至少人工检查：front matter 三条横线闭合、YAML 缩进、日期格式、方括号列表未漏引号。

### Step 6 — 提交推送

```bash
git add -A
git commit -m "func(post): 新增2026-08-09 AI全域雷达报告"
git push https://<TOKEN>@github.com/latte233/latte233.github.io.git main
```

推送后 GitHub Actions 自动构建，1–3 分钟后线上生效。

### Step 7 — 回报用户

告知：文章标题、文件路径、commit message、线上 URL（`https://latte233.github.io/posts/<title-slug>/`，permalink 规则为 `/posts/:title/`）。

---

## 3. Git 操作规范

### 认证

Token 保存在本地 `~/.catpaw/skills/github-git-ops/SKILL.md`，需要时从该文件读取。
**禁止把 Token 写进本仓库任何文件**——这是公开仓库。

推送地址格式：`https://<TOKEN>@github.com/latte233/latte233.github.io.git`

### Commit Message 规范（强制）

格式：`<type>(<scope>): <中文 subject>`

**Type（英文小写，必须是下列之一）：**

| type | 含义 |
|---|---|
| `func` | 小功能点（替代 feat，避免大粒度提交） |
| `fix` | bug 修复 |
| `refactor` | 重构（非 bug 修复、非性能优化） |
| `impr` | 小的代码设计改进 |
| `perf` | 性能优化 |
| `apm` | 监控打点、异常日志 |
| `chore` | 无关紧要的改动 |
| `conf` | 仅配置变化（`_config.yml` 等） |
| `docs` | 仅文档变更 |
| `style` | 代码格式 / CSS 调整 |
| `test` | 单测相关 |
| `typo` | 拼写错误 |
| `wip` | work in progress（少用） |

**Scope（英文小写，多个用逗号分隔，范围大用 `*`）：**
`post`、`config`、`style`、`layout`、`tab`、`data`、`workflow`、`asset`

**Subject：** 中文，结尾不加句号。

**规则：**
- 冒号后必须有一个空格
- message **不能包含换行符**（长描述用分号写在同一行）

**示例：**

```
func(post): 新增2026年学习机品牌对比文章
fix(style): 修复左右侧边栏过宽导致内容区压缩的问题
conf(config): 移除固定 theme_mode，恢复主题切换按钮
style(layout): 收窄左右侧边栏至150px
docs(tab): 更新 About 页个人介绍内容
chore(*): 统一展示名称为 latte
```

### 常用命令

```bash
git status                    # 操作前先看状态
git --no-pager log --oneline -10
git branch -a
git checkout -b <branch>
git restore <file>            # 撤销未暂存修改
git restore --staged <file>   # 取消暂存
git reset HEAD~1              # 撤销上一次 commit，保留改动
```

### 红线

- **永远不要** force push 到 `main`（除非用户明确要求）
- **永远不要** 用 `--no-verify` 跳过 hooks
- push 前确认无冲突残留（搜 `<<<<<<`）
- push 被拒 → 先 pull 再 push，不要 `-f`
- 不提交 `_site/`、`.jekyll-cache/`、`Gemfile.lock`（已在 `.gitignore`）

---

## 4. 改站点样式 / 配置时

- 自定义 CSS/JS 注入点是 `_includes/metadata-hook.html`（Chirpy 的 hook），不要去改主题 gem
- 独立脚本放 `assets/js/`，引用时**带版本号查询串**：`custom.js?v=2026051107`
- 改了会影响缓存的资源，同步把 `_config.yml` 里的 `build:` 数字 +1
- `theme_mode: light` 目前固定亮色；留空则显示跟随系统的切换按钮
- 新增不想被 Jekyll 渲染成页面的根目录文件（如本文件），记得加进 `_config.yml` 的 `exclude`

---

## 5. 快速自查清单

发布前逐条确认：

- [ ] 已 `git pull`
- [ ] 文件名 `_posts/YYYY-MM-DD-slug.md`，日期与 front matter 一致
- [ ] front matter YAML 合法，`date` 带 `+0800`
- [ ] `categories` 复用了现有分类
- [ ] 固定栏目标题格式与历史一致
- [ ] 站内链接用绝对路径
- [ ] 无 Token / 密钥泄漏
- [ ] commit message 符合 `<type>(<scope>): <中文>`，无换行
- [ ] push 后告知用户线上 URL
