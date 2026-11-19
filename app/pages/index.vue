<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'

const localeData = useLocaleData()
const heroData = computed(() => localeData.value.pages.index.hero)

useHead({
  title: computed(() => heroData.value.title),
})
</script>
<template>
  <main>
    <HeroSection v-bind="heroData" />
  </main>
</template>
