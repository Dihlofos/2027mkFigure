<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'

const localeData = useLocaleData()
const heroData = computed(() => localeData.value.pages.index.hero)
const aboutEventData = computed(() => localeData.value.pages.index.aboutEvent)

useHead({
  title: computed(() => heroData.value.title),
})
</script>
<template>
  <main>
    <HeroSection v-bind="heroData" />
    <AboutSection v-bind="aboutEventData" />
  </main>
</template>
