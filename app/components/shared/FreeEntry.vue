<script setup>
const props = defineProps({
  label: { type: String, required: true },
  address: { type: Array, required: true },
})
</script>

<template>
  <div class="free-entry">
    <span class="free-entry__label">{{ props.label }}</span>
    <address class="free-entry__address">
      <p v-for="line in props.address" :key="line">{{ line }}</p>
    </address>
  </div>
</template>

<style lang="scss">
.free-entry {
  display: flex;
  align-items: center;
  gap: 2rem;

  &__label {
    display: inline-flex;
    min-height: 5rem;
    align-items: center;
    justify-content: center;
    padding: 0 3.2rem;
    border-radius: 10rem;
    background: $blue-700;
    color: $white;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &__address {
    color: $blue-700;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;

    p { margin: 0; }
  }

  @media (max-width: $mobile) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.4rem;
  }
}
</style>
