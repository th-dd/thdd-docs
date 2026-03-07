import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default withMermaid(
  defineConfig({
    title: "叹号大帝的文档站",
    description: "叹号旗下各类文档和笔记",
    lang: 'zh-CN',
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', href: '/logo.jpg' }],
      ['meta', { name: 'theme-color', content: '#10b981' }],
    ],
    // Markdown 配置
    markdown: {
      lineNumbers: true,
      config: (md) => {
        md.use(groupIconMdPlugin)
      },
    },
    // Vite 配置
    vite: {
      plugins: [
        groupIconVitePlugin(),
      ],
    },
    themeConfig: {
      logo: '/logo.jpg',
      siteTitle: '叹号大帝',
      nav: [
        { text: '🏠 首页', link: '/' },
        { text: '🤖 叹号Bot', link: '/thbot-commands' },
        { text: '🚀 Nova Bot', link: '/nobot-commands' },
      ],
      sidebar: [
        {
          text: '📖 文档',
          items: [
            { text: '🤖 叹号Bot 指令列表', link: '/thbot-commands' },
            { text: '🚀 Nova Bot 指令列表', link: '/nobot-commands' },
          ]
        }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/th-dd/thdd-docs' }
      ],
      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '搜索文档...',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: {
                selectText: '选择',
                navigateText: '切换'
              }
            }
          }
        }
      },
      editLink: {
        pattern: 'https://github.com/th-dd/thdd-docs/edit/main/docs/:path',
        text: '✏️ 在 GitHub 上编辑此页'
      },
      footer: {
        message: '基于 MIT 许可发布',
        copyright: 'Copyright © 2026-present 叹号大帝'
      },
      docFooter: {
        prev: '上一页',
        next: '下一页'
      },
      outline: {
        label: '页面导航'
      },
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'short'
        }
      }
    },
    // Mermaid 配置
    mermaid: {
      theme: 'default',
    },
    mermaidPlugin: {
      class: 'mermaid',
    }
  })
)
