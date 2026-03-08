import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick, h } from 'vue'
import { useRoute } from 'vitepress'
import GitLastUpdated from './components/GitLastUpdated.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
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

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
  // 使用 doc-footer-before 插槽，显示在原来的位置
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(GitLastUpdated)
    })
  }
}
