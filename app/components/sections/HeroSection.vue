<script setup>
import Image from '~/components/ui/Image.vue'
import Logos from '~/components/shared/Logos.vue'
import FreeEntry from '~/components/shared/FreeEntry.vue'

const props = defineProps({
  title: { type: String, required: true },
  date: { type: String, required: true },
  logos: { type: Array, required: true },
  entry: { type: Object, required: true },
})
</script>

<template>
  <section id="hero" class="hero" aria-labelledby="hero-title">
    <Image
      class="hero__corner hero__corner--top"
      src="/images/hero/decor.svg"
      alt=""
      :width="120"
      :height="121"
      loading="eager"
      aria-hidden="true"
    />

    <Container wide>
      <div class="hero__figure-wrap" aria-hidden="true">
        <Image
          class="hero__figure"
          src="/images/hero/figurist.png"
          alt=""
          :width="746"
          :height="997"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div class="hero__content">
        <h1 id="hero-title" class="hero__title">{{ props.title }}</h1>
        <p class="hero__date">{{ props.date }}</p>
        <FreeEntry class="hero__entry" :label="props.entry.label" :address="props.entry.address" />
        <Logos class="hero__logos" :items="props.logos" />
      </div>
    </Container>

    <Image
      class="hero__mobile-decor"
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
.hero {
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at center, $white 35%, $blue-50 100%);
  color: $blue-900;
  > .container {
    position: relative;
    min-height: inherit;
    @media (max-width: $laptop) {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0 4rem;
      box-sizing: border-box;
    }
    @media (max-width: $tablet) {
      padding: 0 2.8rem;
    }
    @media (max-width: $mobile) {
      padding: 0 2rem;
    }
  }
  &__content {
    position: relative;
    z-index: 1;
    padding-top: 15.9rem;
    padding-bottom: 11.5rem;
    @media (max-width: $tablet) {
      padding-top: 14rem;
      padding-bottom: 8rem;
    }
    @media (max-width: $mobile) {
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
      padding-bottom: 10rem;
    }
  }
  &__title {
    width: min(73.6rem, 62%);
    margin: 0;
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
      width: min(100%, 64rem);
      font-size: clamp(3.6rem, 5.3vw, 4.8rem);
      letter-spacing: 0.124rem;
      line-height: 0.95;
    }
    @media (max-width: $mobile) {
      order: 1;
    }
  }
  &__date {
    margin: 2.2rem 0 2.9rem;
    font-family: $finlandica-text;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.1;
    @media (max-width: $tablet) {
      margin: 2.8rem 0 1.6rem;
      font-size: 1.6rem;
    }
    @media (max-width: $mobile) {
      order: 2;
      margin: 1.8rem 0;
    }
  }
  .hero__logos {
    width: 58.7rem;
    max-width: 100%;
    margin-top: 3.6rem;
    @media (max-width: $tablet) {
      width: 100%;
      max-width: 50rem;
      justify-content: flex-start;
      gap: 2.4rem;
      margin-top: 3.8rem;
    }
    @media (max-width: $mobile) {
      order: 0;
      box-sizing: border-box;
      padding-right: 6rem;
      margin-top: 0;
      margin-bottom: 2.8rem;
    }
  }
  &__mobile-decor {
    display: none;
    @media (max-width: $mobile) {
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
  &__figure-wrap {
    position: absolute;
    z-index: 0;
    top: -9.7rem;
    bottom: 0;
    right: -35.6rem;
    width: 101rem;
    overflow: hidden;
    pointer-events: none;
    @media (max-width: $laptop) {
      right: -15rem;
      transform: scale(0.9);
      transform-origin: top right;
    }
  }
  &__figure {
    position: absolute;
    top: 1rem;
    left: 0;
    display: block;
    width: 101rem;
    height: 120.3rem;
    max-width: none;
    object-fit: contain;
  }
  &__corner {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    display: block;
    width: 18.9rem;
    height: 18.9rem;
    pointer-events: none;
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
  &__figure-wrap,
    &__corner {
    @media (max-width: $tablet) {
      display: none;
    }
  }
  &__entry {
    @media (max-width: $mobile) {
      order: 3;
    }
  }
}
</style>
