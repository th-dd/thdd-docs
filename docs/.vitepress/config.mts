import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "叹号大帝的文档站",
  description: "叹号旗下各类文档和笔记",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '叹号Bot 指令', link: '/thbot-commands' },
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '叹号Bot 指令列表', link: '/thbot-commands' },
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
