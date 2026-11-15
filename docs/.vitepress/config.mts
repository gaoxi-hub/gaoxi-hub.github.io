import { defineConfig } from 'vitepress'

// 部署为「用户页」仓库（仓库名 = <用户名>.github.io），站点在域名根路径，
// 所以 base 必须是 '/'。若以后改成项目页（用户名.github.io/仓库名/），
// 这里要同步改成 '/仓库名/'，否则 CSS/JS 会 404。
const BASE = '/'

export default defineConfig({
  base: BASE,
  lang: 'zh-CN',
  title: 'XiXi',
  description: 'Java 后端工程师 / 全栈 —— 个人简历与技术笔记',
  lastUpdated: true,

  // README.md 是仓库说明、01-PRD 是内部文档，都不当作站点页面
  srcExclude: ['README.md', '01-PRD/**'],

  head: [
    ['link', { rel: 'icon', href: `${BASE}favicon.svg` }],
    ['meta', { name: 'author', content: 'XiXi' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'XiXi · Java 后端工程师 / 全栈' }],
    ['meta', { property: 'og:description', content: '个人简历与技术笔记' }]
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '简历', link: '/resume' },
      { text: '笔记', link: '/notes/' },
      { text: '项目', link: '/projects' },
      { text: '关于', link: '/about' },
      { text: '读书笔记', link: 'https://gaoxi-hub.github.io/mind-book/' }
    ],

    sidebar: {
      '/notes/': [
        {
          text: 'Java / Spring',
          collapsed: false,
          items: [
            { text: 'JWT 单 token 设计', link: '/notes/java/jwt-single-token' }
          ]
        },
        {
          text: 'Vue3 / 前端',
          collapsed: false,
          items: [{ text: '待补充', link: '/notes/vue/' }]
        },
        {
          text: '可观测性',
          collapsed: false,
          items: [{ text: '待补充', link: '/notes/observability/' }]
        },
        {
          text: 'AI / VibeCoding',
          collapsed: false,
          items: [{ text: '待补充', link: '/notes/ai/' }]
        },
        {
          text: '部署运维',
          collapsed: false,
          items: [{ text: '待补充', link: '/notes/deploy/' }]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',

    socialLinks: [{ icon: 'github', link: 'https://github.com/gaoxi-hub' }],

    footer: {
      message: '用 VitePress 构建 · 部署于 GitHub Pages',
      copyright: '© 2026 XiXi'
    }
  }
})
