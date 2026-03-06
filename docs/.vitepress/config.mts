import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AstrBot 指令文档",
  description: "AstrBot 机器人指令参考文档",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指令列表', link: '/commands/' },
      {
        text: '指令分类',
        items: [
          { text: '群管理', link: '/commands/group-admin' },
          { text: '消息管理', link: '/commands/message' },
          { text: 'AI 功能', link: '/commands/ai' },
          { text: '娱乐功能', link: '/commands/entertainment' },
          { text: '媒体功能', link: '/commands/media' },
          { text: '系统管理', link: '/commands/system' },
          { text: '用户功能', link: '/commands/user' },
        ]
      }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '首页', link: '/' },
          { text: '指令列表', link: '/commands/' },
        ]
      },
      {
        text: '指令分类',
        items: [
          { text: '群管理指令', link: '/commands/group-admin' },
          { text: '消息管理指令', link: '/commands/message' },
          { text: 'AI 功能指令', link: '/commands/ai' },
          { text: '娱乐功能指令', link: '/commands/entertainment' },
          { text: '媒体功能指令', link: '/commands/media' },
          { text: '系统管理指令', link: '/commands/system' },
          { text: '用户功能指令', link: '/commands/user' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/th-dd/thdd-docs' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'AstrBot 指令文档',
      copyright: 'Copyright © 2024'
    }
  }
})
