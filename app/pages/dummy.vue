<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'

const localeData = useLocaleData()
const pageData = computed(() => localeData.value.pages.index)
const dummyData = computed(() => pageData.value.dummy)

useHead({
  title: computed(() => dummyData.value.title),
})
</script>

<template>
  <main>
    <Dummy v-bind="dummyData" />
  </main>
</template>
