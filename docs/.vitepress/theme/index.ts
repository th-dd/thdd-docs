import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick, h } from 'vue'
import { useRoute, useData } from 'vitepress'
import GitLastUpdated from './components/GitLastUpdated.vue'
import NotFound from './components/404-page.vue' // 引入你的404组件
import './custom.css'

export default {
  extends: DefaultTheme,
  // 使用 Layout 包装，处理 404 和 GitLastUpdated
  Layout: () => {
    const route = useRoute()
    const { frontmatter } = useData()

    return h(DefaultTheme.Layout, null, {
      // 如果当前路径包含 404.html，则渲染自定义 404 页面
      // 使用 layout-top 插槽可以让 404 页面完全覆盖掉 VitePress 默认的 "404 Not found" 内容和侧边栏
      'layout-top': () => {
        if (route.path.indexOf('/404.html') !== -1) {
          return h(NotFound)
        }
        return null
      },
      // 文档页脚前的更新时间组件
      'doc-footer-before': () => h(GitLastUpdated)
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('GitLastUpdated', GitLastUpdated)
  },
  setup() {
    const route = useRoute()

    const initZoom = () => {
      // 为所有图片添加缩放功能
      mediumZoom('.main img', {
        background: 'var(--vp-c-bg)',
        margin: 24
      })
    }

    onMounted(() => {
      initZoom()
    })

    // 路由变化时重新初始化缩放
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
