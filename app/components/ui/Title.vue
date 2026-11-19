<script setup>
defineProps({
  tag: { type: String, default: 'h2' },
  white: { type: Boolean, default: false },
})
</script>

<template>
  <component :is="tag" :class="['title', { 'title--white': white }]">
    <slot />
  </component>
</template>

<style lang="scss">
.title {
  font-family: $jost;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.87;
  letter-spacing: 0.124rem;
  color: $blue-900;
  text-transform: uppercase;
  text-align: left;
  margin: 0;

  &--white { color: $white; }

  @media (max-width: $tablet) {
    font-size: 4rem;
  }

  @media (max-width: $mobile) {
    font-size: 3.6rem;
  }
}
</style>
