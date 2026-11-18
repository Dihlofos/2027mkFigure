<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  button: { type: Object, default: () => ({}) },
  secondaryButton: { type: Object, default: () => ({}) },
  backgroundImage: { type: String, default: '' },
})

</script>

<template>
  <section id="hero" class="hero">
    <Container>
      <div class="hero__content">
        <h1 class="hero__title">{{ title }}</h1>
        <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
        <div v-if="button || secondaryButton" class="hero__actions">
          <Button v-if="button?.text" :to="button.link" variant="primary" size="lg">
            {{ button.text }}
          </Button>
          <Button v-if="secondaryButton?.text" :to="secondaryButton.link" variant="secondary" size="lg">
            {{ secondaryButton.text }}
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-color: $blue-900;
  position: relative;

  // Overlay for readability
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(31, 48, 95, 0.9) 0%,
      rgba(31, 48, 95, 0.6) 100%
    );
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 72rem;
  }

  &__title {
    color: $white;
    font-size: 3.6rem;
    line-height: 1;
    margin-bottom: 2.4rem;

    @media (min-width: 48rem) {
      font-size: 4.8rem;
    }

    @media (min-width: 64rem) {
      font-size: 6rem;

    }
  }

  &__subtitle {
    color: $blue-300;
    font-size: 1.8rem;
    margin-bottom: 3.2rem;
    line-height: 1.75;
    max-width: 54rem;

    @media (min-width: 48rem) {
      font-size: 2rem;
    }
  }

  &__actions {
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
  }
}
</style>
