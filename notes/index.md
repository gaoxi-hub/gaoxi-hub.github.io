---
title: 技术笔记
description: 按方向整理的开发笔记
---

# 技术笔记

按方向分类，持续增量。左侧目录可直接跳转，右上角可全站搜索。

<div class="card-grid">
  <a class="card" href="/notes/java/">
    <h3>Java / Spring</h3>
    <p>JWT、MyBatis、分层与复用</p>
  </a>
  <a class="card" href="/notes/vue/">
    <h3>Vue3 / 前端</h3>
    <p>组件化、状态管理、交互细节</p>
  </a>
  <a class="card" href="/notes/observability/">
    <h3>可观测性</h3>
    <p>指标、日志、链路与告警</p>
  </a>
  <a class="card" href="/notes/ai/">
    <h3>AI / VibeCoding</h3>
    <p>AI 辅助开发的方法与踩坑</p>
  </a>
  <a class="card" href="/notes/deploy/">
    <h3>部署运维</h3>
    <p>Docker、K3s、多架构镜像</p>
  </a>
</div>

## 新增一篇笔记

1. 在对应分类目录新建 `xxx.md`，首行写 frontmatter：`title` / `description` / `date`
2. 在 `.vitepress/config.mts` 的 `sidebar` 里加一行链接
3. `npm run dev` 预览 → 提交推送，自动上线
