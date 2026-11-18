<script setup>
defineProps({
  navigation: { type: Object, required: true },
  ui: { type: Object, required: true },
})
const { locale, setLocale } = useLocale()
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
        <div class="header__locale" role="group" :aria-label="ui.languageSwitcher">
          <button type="button" :aria-pressed="locale === 'ru'" @click="setLocale('ru')">Русский</button>
          <button type="button" :aria-pressed="locale === 'en'" @click="setLocale('en')">English</button>
        </div>
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
  transition: all 250ms ease;
  padding: 2.6rem 0;
  background-color: $blue-700;

  @media (max-width: $tablet) {
    background: transparent;
    padding: 0;
  }

  &--scrolled {
    backdrop-filter: blur(0.8rem);
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.05);
    padding: 0.8rem 0;

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

  &__locale {
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    gap: 0.4rem;
    transform: translateY(-50%);

    button {
      border: 0.1rem solid $white;
      border-radius: 2rem;
      background: transparent;
      color: $white;
      cursor: pointer;
      font-family: $finlandica-text;
      font-size: 1.4rem;
      padding: 0.6rem 1rem;

      &[aria-pressed='true'] {
        background: $white;
        color: $blue-700;
      }

      &:focus-visible {
        outline: 0.2rem solid $white;
        outline-offset: 0.2rem;
      }
    }

    @media (max-width: $tablet) {
      position: fixed;
      top: 1.2rem;
      right: auto;
      left: 1.6rem;
      z-index: 1031;
      transform: none;
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
