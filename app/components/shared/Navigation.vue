<script setup>
defineProps({
  navigation: { type: Object, required: true },
  ui: { type: Object, required: true },
})
const mobileOpen = ref(false)

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <nav class="nav" :class="{ 'nav--open': mobileOpen }" aria-label="Основная навигация">
    <button class="nav__toggle" @click="toggleMobile" :aria-label="ui.menu">
      <Image v-if="!mobileOpen" :src="navigation.images.burger" :alt="ui.openMenu" width="44" height="44" />
      <Image v-else :src="navigation.images.close" :alt="ui.closeMenu" width="35" height="35" />
    </button>

    <div class="nav__overlay">
      <ul class="nav__list">
        <li v-for="item in navigation.navItems" :key="item.link" class="nav__item">
          <a :href="item.link" class="nav__link" :class="{ 'nav__link--active': item.active }" :aria-current="item.active ? 'page' : undefined" v-anchor @click="closeMobile">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  &__toggle {
    display: none;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    line-height: 0;
    &:focus-visible {
      outline: 0.2rem solid $blue-700;
      outline-offset: 0.2rem;
    }
    @media (max-width: $tablet) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 1.2rem;
      right: 1.6rem;
      z-index: 1030;
      .nav--open & {
        top: 1.6rem;
        right: 2rem;
      }
    }
  }
  &__overlay {
    display: contents;
    @media (max-width: $tablet) {
      display: flex;
      flex-direction: column;
      position: fixed;
      inset: 0;
      background-color: $blue-700;
      z-index: 1029;
      padding: 2rem 2rem 4rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 300ms ease;
      overflow-y: auto;
    }
    .nav--open & {
      @media (max-width: $tablet) {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  &__list {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0.8rem;
    border-radius: 5rem;
    background: $blue-50;
    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 2.4rem;
      padding: 0;
      flex-shrink: 0;
      align-items: flex-start;
      background: transparent;
    }
  }
  &__link {
    display: block;
    padding: 1.5rem 1.6rem;
    border-radius: 5rem;
    font-family: $finlandica-text;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.1;
    color: $blue-700;
    transition: background-color 150ms ease, color 150ms ease;
    text-decoration: none;
    &:hover,
    &--active {
      background: $white;
    }
    &:focus-visible {
      outline: 0.2rem solid $blue-700;
      outline-offset: 0.2rem;
    }
    @media (max-width: $tablet) {
      font-size: 2.4rem;
      font-weight: 600;
      padding: 0.8rem 0;
      color: $white;
      background: transparent;
    }
  }
}
</style>
