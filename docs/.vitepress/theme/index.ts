import { h, provide } from 'vue'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// @nolebase 插件
import {
  InjectionKey,
  LayoutMode,
  NolebaseEnhancedReadabilitiesPlugin,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { NolebaseHighlightTargetedHeadingPlugin } from '@nolebase/vitepress-plugin-highlight-targeted-heading'
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog'

// @nolebase 插件样式
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/dist/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/dist/style.css'
import '@nolebase/vitepress-plugin-git-changelog/dist/style.css'

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

    // 配置阅读增强插件
    provide(InjectionKey, {
      layoutSwitch: {
        defaultMode: LayoutMode.SidebarWidthAdjustable,
      },
      spotlight: {
        defaultStyle: 'aside', // 聚光灯样式
      },
    })
  },
  enhanceApp({ app }) {
    // 注册 @nolebase 插件
    app.use(NolebaseEnhancedReadabilitiesPlugin)
    app.use(NolebaseHighlightTargetedHeadingPlugin)
    app.use(NolebaseInlineLinkPreviewPlugin)
    app.use(NolebaseGitChangelogPlugin)
  },
}
