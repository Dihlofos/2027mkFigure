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
      <Logos class="dummy__logos" :items="props.logos" />

      <div class="dummy__stage">
        <Image
          class="dummy__figure"
          src="/images/hero/figurist.png"
          alt="Figure skater"
          loading="eager"
          fetchpriority="high"
        />

        <div class="dummy__main">
          <h1 id="dummy-title" class="dummy__title">{{ props.title }}</h1>
          <p class="dummy__date">{{ props.date }}</p>
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
      </div>
    </Container>

    <Image
      class="dummy__mobile-decor"
      src="/images/hero/mobile-decor.svg"
      alt=""
      :width="204"
      :height="204"
      loading="eager"
      aria-hidden="true"
    />
  </section>
</template>

<style lang="scss">
.dummy {
  --dummy-reference-height: 76rem;
  --dummy-stage-shift: max(0rem, calc((100vh - var(--dummy-reference-height)) / 3));
  position: relative;
  min-height: max(100vh, calc(99.4rem + var(--dummy-stage-shift)));
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
  &__logos {
    position: relative;
    z-index: 4;
    margin-top: 8.8rem;
    @media (max-width: $tablet) {
      width: 100%;
      max-width: 50rem;
      justify-content: flex-start;
      gap: 2.4rem;
      margin-top: 6rem;
    }
  }
  &__date {
    position: absolute;
    top: -7.6rem;
    left: calc(100% + 0.9rem);
    right: auto;
    width: 45.5rem;
    margin: 0;
    font-family: $finlandica-text;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: right;
    white-space: nowrap;
    @media (max-width: $laptop) {
      width: auto;
      font-size: 2rem;
    }
    @media (max-width: $tablet) {
      position: static;
      width: auto;
      margin: 2.8rem 0 1rem;
      font-size: 1.6rem;
      text-align: left;
      white-space: nowrap;
    }
  }
  &__main {
    position: relative;
    z-index: 1;
    width: min(73.6rem, 62%);
    margin-top: 3.6rem;
    @media (max-width: $laptop) {
      width: min(62%, 73.6rem);
    }
    @media (max-width: $tablet) {
      width: min(100%, 64rem);
      margin-top: 0;
    }
  }
  &__title {
    margin: 0 0 3rem;
    font-family: $jost;
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: 0.124rem;
    line-height: 0.87;
    text-transform: uppercase;
    @media (max-width: $laptop) {
      font-size: clamp(5.6rem, 6vw, 7.6rem);
    }
    @media (max-width: $tablet) {
      margin-bottom: 0;
      font-size: clamp(3.6rem, 5.3vw, 4.8rem);
      letter-spacing: 0.124rem;
      line-height: 0.95;
    }
  }
  &__details {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    margin-top: 3.2rem;
    @media (max-width: $tablet) {
      align-items: flex-start;
      flex-direction: column;
      gap: 3rem;
      margin-top: 1.6rem;
      max-width: 50rem;
    }
    @media (max-width: $mobile) {
      margin-top: 1.6rem;
    }
  }
  &__description {
    flex: 0 1 52.3rem;
    margin: 0;
    font-family: $finlandica-text;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    @media (max-width: $laptop) {
      flex-basis: 44%;
      font-size: 1.8rem;
    }
    @media (max-width: $tablet) {
      font-size: 1.6rem;
    }
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
    p {
      margin: 0;
    }
    a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
    @media (max-width: $laptop) {
      flex-basis: 46%;
      padding: 2rem 2.8rem;
      font-size: 1.8rem;
    }
    @media (max-width: $tablet) {
      min-height: 0;
      padding: 1.6rem 2rem;
      border-radius: 2.2rem;
      font-size: 1.6rem;
    }
  }
  &__figure {
    position: absolute;
    z-index: 0;
    top: -13.4rem;
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
  &__mobile-decor {
    display: none;
    @media (max-width: $tablet) {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: 0;
      display: block;
      width: 20.4rem;
      height: 20.4rem;
      pointer-events: none;
    }
  }
  @media (max-width: $tablet) {
    --dummy-stage-shift: 0rem;
    min-height: max(100vh, 73.5rem);
    --dummy-reference-height: 76rem;
  }
  @media (min-width: $tablet) and (max-width: $laptop) {
    --dummy-reference-height: 95rem;
  }
  &__logos .logos__item {
    @media (max-width: $tablet) {
      flex: 0 0 auto;
    }
  }
  &__logos .logos__image {
    @media (max-width: $tablet) {
      width: auto;
      height: 2.4rem;
      max-width: none;
    }
  }
  &__stage {
    @media (max-width: $tablet) {
      margin-top: 3.8rem;
    }
    @media (min-width: $tablet) and (min-height: 47.5rem) {
      transform: translateY(var(--dummy-stage-shift));
    }
  }
  &__description,
    &__portal {
    @media (max-width: $tablet) {
      flex: 0 1 auto;
      width: 100%;
      max-width: 50rem;
    }
  }
  &__figure,
    &__corner {
    @media (max-width: $tablet) {
      display: none;
    }
  }
}
</style>
