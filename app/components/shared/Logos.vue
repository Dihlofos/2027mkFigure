<script setup>
import Image from '~/components/ui/Image.vue'

const props = defineProps({
  items: { type: Array, required: true },
  label: { type: String, default: 'Логотипы организаторов' },
})
</script>

<template>
  <ul class="logos" :aria-label="props.label">
    <li v-for="logo in props.items" :key="logo.src" class="logos__item">
      <Image
        :src="logo.src"
        :alt="logo.alt"
        :width="logo.width"
        :height="logo.height"
        loading="eager"
        class="logos__image"
      />
    </li>
  </ul>
</template>

<style lang="scss">
.logos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  width: 100%;
  max-width: 58.7rem;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    min-width: 0;
  }

  &__image {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: $mobile) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.4rem 2.4rem;
  }
}
</style>
