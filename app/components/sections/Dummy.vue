<script setup>
import Image from '~/components/ui/Image.vue'
import Logos from '~/components/shared/Logos.vue'
import FreeEntry from '~/components/shared/FreeEntry.vue'

const props = defineProps({
  title: { type: String, required: true },
  date: { type: String, required: true },
  logos: { type: Array, required: true },
  entry: { type: Object, required: true },
  description: { type: String, required: true },
  portal: { type: Object, required: true },
})
</script>

<template>
  <section class="dummy" aria-labelledby="dummy-title">
    <Image
      class="dummy__corner dummy__corner--top"
      src="/images/hero/decor.svg"
      alt=""
      :width="120"
      :height="121"
      loading="eager"
      aria-hidden="true"
    />
    <Image
      class="dummy__corner dummy__corner--bottom"
      src="/images/hero/decor.svg"
      alt=""
      :width="120"
      :height="121"
      loading="eager"
      aria-hidden="true"
    />

    <Container>
      <Image
        class="dummy__figure"
        src="/images/hero/figurist.png"
        alt="Фигуристка выполняет элемент на льду"
        loading="eager"
        fetchpriority="high"
      />

      <div class="dummy__header">
        <Logos :items="props.logos" />
        <p class="dummy__date">{{ props.date }}</p>
      </div>

      <div class="dummy__main">
        <h1 id="dummy-title" class="dummy__title">{{ props.title }}</h1>
        <FreeEntry :label="props.entry.label" :address="props.entry.address" />
      </div>

      <div class="dummy__details">
        <p class="dummy__description">{{ props.description }}</p>
        <div class="dummy__portal">
          <p>
            {{ props.portal.lead }}
            <a :href="props.portal.href" target="_blank" rel="noreferrer">
              {{ props.portal.linkText }}
            </a>
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.dummy {
  position: relative;
  min-height: max(100vh, 99.4rem);
  overflow: hidden;
  background: radial-gradient(ellipse at center, $white 35%, #e1ebf4 100%);
  color: $blue-900;

  > .container {
    position: relative;
    z-index: 3;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: $laptop) {
      min-width: 0;
      max-width: 100%;
      padding: 0 4rem;
    }

    @media (max-width: $tablet) {
      padding: 0 2.8rem;
    }

    @media (max-width: $mobile) {
      padding: 0 2rem;
    }
  }

  &__header {
    position: relative;
    z-index: 1;
    display: flex;
    min-height: 4.4rem;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;
    padding-top: 8.8rem;
  }

  &__date {
    position: absolute;
    top: 9.2rem;
    right: 0;
    width: 45.5rem;
    margin: 0;
    font-family: $finlandica-text;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: right;
    white-space: nowrap;
  }

  &__main {
    position: relative;
    z-index: 1;
    width: min(73.6rem, 62%);
    margin-top: 3.6rem;
  }

  &__title {
    margin: 0 0 3rem;
    font-family: $jost;
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: 0.124rem;
    line-height: 0.87;
    text-transform: uppercase;
  }

  &__details {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    margin-top: 3.2rem;
  }

  &__description {
    flex: 0 1 52.3rem;
    margin: 0;
    font-family: $finlandica-text;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
  }

  &__portal {
    display: flex;
    flex: 0 0 55.1rem;
    min-height: 9.6rem;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
    border-radius: 2rem;
    background: $blue-700;
    color: $white;
    box-sizing: border-box;
    font-family: $finlandica-text;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;

    p { margin: 0; }

    a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }

  &__figure {
    position: absolute;
    z-index: 0;
    top: 3.4rem;
    left: calc(50% + 0.7rem);
    display: block;
    width: auto;
    height: 96rem;
    max-width: none;
    object-fit: contain;
    pointer-events: none;
  }

  &__corner {
    position: absolute;
    z-index: 4;
    display: block;
    width: 12rem;
    height: 12.1rem;
    pointer-events: none;

    &--top {
      top: 0;
      right: 0;
    }

    &--bottom {
      bottom: 0;
      left: 0;
      transform: rotate(180deg);
    }
  }

  @media (max-width: $laptop) {
    &__date {
      width: auto;
      font-size: 2rem;
    }

    &__main {
      width: min(62%, 73.6rem);
    }

    &__title {
      font-size: clamp(5.6rem, 6vw, 7.6rem);
    }

    &__portal {
      flex-basis: 46%;
      padding: 2rem 2.8rem;
      font-size: 1.8rem;
    }

    &__description {
      flex-basis: 44%;
      font-size: 1.8rem;
    }
  }

  @media (max-width: $tablet) {
    min-height: max(100vh, 90rem);

    &__header {
      display: block;
      padding-top: 4rem;
    }

    &__date {
      position: static;
      margin-top: 2.4rem;
      text-align: left;
      white-space: normal;
    }

    &__main {
      width: min(100%, 70rem);
      margin-top: 5.6rem;
    }

    &__title {
      font-size: clamp(5.2rem, 8vw, 7.2rem);
    }

    &__details {
      align-items: flex-start;
      flex-direction: column;
      gap: 2.4rem;
      margin-top: 4.2rem;
    }

    &__description,
    &__portal {
      flex: 0 1 auto;
      max-width: 56rem;
    }

    &__figure {
      top: 18rem;
      height: 62rem;
    }
  }

  @media (max-width: $mobile) {
    min-height: max(100vh, 90rem);
    padding-bottom: 4.8rem;

    &__header { padding-top: 3.2rem; }

    &__date {
      margin-top: 2.4rem;
      font-size: 1.8rem;
    }

    &__main { margin-top: 4.4rem; }

    &__title {
      margin-bottom: 2.4rem;
      font-size: clamp(4.2rem, 11vw, 5.8rem);
      letter-spacing: 0.05rem;
    }

    &__details { margin-top: 3.2rem; }

    &__description { font-size: 1.8rem; }

    &__portal {
      width: 100%;
      min-height: 8.8rem;
      padding: 2rem 2.4rem;
      font-size: 1.6rem;
    }

    &__figure {
      top: 25rem;
      height: 56rem;
    }

    &__corner {
      width: 8.4rem;
      height: 8.5rem;
    }
  }
}
</style>
