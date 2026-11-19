<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  to: { type: String, default: '' },
  type: { type: String, default: 'button' },
})
</script>

<template>
  <a
    v-if="to"
    :href="to"
    :class="['button', `button--${variant}`, `button--${size}`]"
  >
    <slot />
  </a>
  <button
    v-else
    :class="['button', `button--${variant}`, `button--${size}`]"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  transition: all 150ms ease;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.white {
    background-color: $white;
    border-color: $white;
    color: $blue-700;
    &:hover {
      color: $white;
    }
  }
  // --- Sizes ---
  &--sm {
    padding: 0.4rem 1.6rem;
    font-size: 1.4rem;
  }
  &--md {
    padding: 0.8rem 2.4rem;
    font-size: 1.6rem;
  }
  &--lg {
    padding: 1.6rem 3.2rem;
    font-size: 1.8rem;
  }
  // --- Variants ---
  &--primary {
    display: inline-flex;
    color: $white;
    font-family: $finlandica-text;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 2rem;
    border: 0.2rem solid $blue-700;
    background: $blue-700;
    text-decoration: none;
    padding: 2.3rem;
    cursor: pointer;
    flex-shrink: 0;
    &:hover {
      background-color: $blue-900;
      border-color: $blue-900;
    }
    &--active {
      border: 0.2rem solid $blue-700;
      background: $blue-700;
    }
    @media (max-width: $tablet) {
      border-width: 0.1rem;
      border-radius: 0.6rem;
      font-size: 2.2rem;
      padding: 0.5rem 0.8rem;
    }
  }
  &--secondary {
    background-color: transparent;
    color: $blue-700;
    border: 0.2rem solid $blue-700;
    &:hover:not(:disabled) {
      background-color: $blue-700;
      color: $white;
    }
  }
  &--ghost {
    background-color: transparent;
    color: $blue-900;
    &:hover:not(:disabled) {
      background-color: $blue-100;
    }
  }
}
</style>
