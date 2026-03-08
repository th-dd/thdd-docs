<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const gitInfo = computed(() => {
  const frontmatter = page.value.frontmatter
  return {
    author: frontmatter.gitAuthor || 'Unknown',
    date: frontmatter.gitDate || '',
    hash: frontmatter.gitHash || ''
  }
})

const formattedDate = computed(() => {
  if (!gitInfo.value.date) return ''
  const date = new Date(gitInfo.value.date)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
})

const commitUrl = computed(() => {
  if (!gitInfo.value.hash) return ''
  return `https://github.com/th-dd/thdd-docs/commit/${gitInfo.value.hash}`
})
</script>

<template>
  <div class="git-last-updated" v-if="formattedDate">
    <span class="label">最后由</span>
    <span class="author">{{ gitInfo.author }}</span>
    <span class="label">更新于</span>
    <a 
      v-if="commitUrl" 
      :href="commitUrl" 
      target="_blank" 
      rel="noopener noreferrer"
      class="date-link"
      :title="`查看提交 ${gitInfo.hash.slice(0, 7)}`"
    >
      {{ formattedDate }}
    </a>
    <span v-else class="date">{{ formattedDate }}</span>
  </div>
</template>

<style scoped>
.git-last-updated {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.label {
  color: var(--vp-c-text-3);
}

.author {
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.date-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: all 0.2s ease;
  border-bottom: 1px dashed transparent;
}

.date-link:hover {
  color: var(--vp-c-brand-2);
  border-bottom-color: var(--vp-c-brand-2);
}

.date {
  color: var(--vp-c-text-2);
}
</style>
