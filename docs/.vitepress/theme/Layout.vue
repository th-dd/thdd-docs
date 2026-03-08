<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import GitLastUpdated from './components/GitLastUpdated.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <GitLastUpdated />
    </template>
  </Layout>
</template>
