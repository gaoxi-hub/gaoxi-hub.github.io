# xixi —— 个人网站（仓库内容）

VitePress 站点：个人简历 + 技术笔记。部署后访问 **https://<用户名>.github.io/**。


## 本地开发

```bash
cd 个人网站/xixi
npm install
npm run dev      # http://localhost:5173
npm run build    # 产物在 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

Node 建议 20 / 22。

> 站点内容（正文、配置、主题）全部在 `docs/` 下，脚本里已带上 `docs` 参数。

## 目录

```
xixi/
├─ package.json          脚本：vitepress dev/build/preview docs
├─ README.md             仓库说明（不进站点）
├─ docs/                 ← 站点根目录
│  ├─ index.md           首页（Hero + 精选项目 + 最新笔记）
│  ├─ resume.md          简历
│  ├─ projects.md        项目
│  ├─ about.md           关于 / 联系方式
│  ├─ notes/
│  │  ├─ index.md        笔记总览
│  │  ├─ java/           Java / Spring
│  │  ├─ vue/            Vue3 / 前端
│  │  ├─ observability/  可观测性
│  │  ├─ ai/             AI / VibeCoding
│  │  └─ deploy/         部署运维
│  ├─ public/            静态资源（favicon、简历 PDF 等）
│  ├─ 01-PRD/            PRD 等内部文档（已在 srcExclude 里，不发布）
│  └─ .vitepress/
│     ├─ config.mts      站点配置（base / nav / sidebar / search）
│     └─ theme/          自定义主题（custom.css）
└─ .github/workflows/deploy.yml   GitHub Pages 自动部署
```

## 简历页怎么改

`resume.md` 只是壳（`layout: page` + `<ResumeLayout />`），真正的版式和数据在：

- **数据**：`docs/.vitepress/theme/components/ResumeLayout.vue` 顶部的 `RESUME` 对象（个人资料 / 技能 / 工作 / 项目 / 教育）
- **版式**：同文件 `<template>` + `<style scoped>`
- **打印 / 导出 PDF**：点页面右上角「打印 / 存为 PDF」，或用 Cmd+P；打印样式在 `custom.css` 的 `@media print` 里（自动隐藏导航，A4 边距，避免经历块被切页）

标注 `【待补】` 的字段会在页面上以橙色高亮，补完自动变正常。

## 新增组件

1. 放进 `docs/.vitepress/theme/components/xxx.vue`
2. 在 `docs/.vitepress/theme/index.ts` 里 `app.component('Xxx', Xxx)` 全局注册
3. md 里直接写 `<Xxx />`

> 组件会在构建时 SSR 渲染，用到 `window` / `document` 必须放进 `onMounted`。

## 部署（重要）

1. **仓库名必须是 `<GitHub用户名>.github.io`**，才能用 `https://<用户名>.github.io/` 直接访问。
   - 若仓库名是别的（如 `xixi`），地址会变成 `https://<用户名>.github.io/xixi/`，
     此时必须把 `docs/.vitepress/config.mts` 里的 `BASE` 改成 `'/xixi/'`，否则 CSS/JS 全部 404。
2. 仓库设为 **Public**，默认分支 **master**（与 workflow 的 `branches: [master]` 保持一致）。
3. Settings → Pages → Source 选 **GitHub Actions**。
4. 推送到 master 即触发 `.github/workflows/deploy.yml`，构建完成后上线。

```bash
cd 个人网站/xixi
git init -b master
git add .
git commit -m "init: personal site skeleton"
git remote add origin git@github.com:<用户名>/<用户名>.github.io.git
git push -u origin master
```

## 换成本地预览注意

`base: '/'` 时本地 `npm run dev` 正常；若改成项目页路径，本地预览也走该前缀（如 `localhost:5173/xixi/`）。
