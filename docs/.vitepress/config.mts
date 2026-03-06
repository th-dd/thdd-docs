import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "叹号大帝的文档站",
  description: "各种文档和笔记",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AstrBot 指令', link: '/astrbot-commands' },
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'AstrBot 指令列表', link: '/astrbot-commands' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/th-dd/thdd-docs' }
    ],
    search: {
      provider: 'local'
    }
  }
})
