<script setup>
defineProps({
  navigation: { type: Object, required: true },
  ui: { type: Object, required: true },
})
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <Container>
      <div class="header__inner">
        <Navigation :navigation="navigation" :ui="ui" />
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1020;
  background: transparent;
  transition: padding 250ms ease;
  padding: 2rem 0;
  @media (max-width: $tablet) {
    background: transparent;
    padding: 0;
  }
  &--scrolled {
    padding: 1rem 0;
    @media (max-width: $tablet) {
      padding: 0;
      backdrop-filter: none;
      box-shadow: none;
    }
  }
  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: $tablet) {
      min-height: 0;
    }
  }
  &__logo {
    text-decoration: none;
    color: $blue-900;
    font-weight: 700;
    font-size: 1.6rem;
    &:hover {
      color: $blue-700;
    }
  }
}
</style>
