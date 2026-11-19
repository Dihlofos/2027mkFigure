<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'

const localeData = useLocaleData()
const heroData = computed(() => localeData.value.pages.index.hero)
const aboutEventData = computed(() => localeData.value.pages.index.aboutEvent)
const masterClassesData = computed(() => localeData.value.pages.index.masterClasses)

useHead({
  title: computed(() => heroData.value.title),
})
</script>
<template>
  <main>
    <HeroSection v-bind="heroData" />
    <AboutSection v-bind="aboutEventData" />
    <MasterClassesSection v-bind="masterClassesData" />
  </main>
</template>
