<script setup>
import Image from '~/components/ui/Image.vue'
import Title from '~/components/ui/Title.vue'

const props = defineProps({
  title: { type: String, required: true },
  address: { type: Array, required: true },
  routeLabel: { type: String, required: true },
  routeHref: { type: String, required: true },
  stops: { type: Array, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
})
</script>

<template>
  <section id="map" class="map-section" aria-labelledby="map-section-title">
    <Image
      class="map-section__decor"
      src="/images/map/decor.svg"
      alt=""
      :width="256"
      :height="256"
      aria-hidden="true"
    />

    <Container wide class="map-section__container">
      <div class="map-section__inner">
        <div class="map-section__content">
          <div class="map-section__intro">
            <Title id="map-section-title" tag="h2">{{ props.title }}</Title>
            <address class="map-section__address">
              <p v-for="line in props.address" :key="line">{{ line }}</p>
            </address>
            <a
              class="map-section__route"
              :href="props.routeHref"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ props.routeLabel }}
            </a>
          </div>

          <ol class="map-section__stops">
            <li v-for="(stop, index) in props.stops" :key="stop" class="map-section__stop">
              <span class="map-section__number">{{ index + 1 }}</span>
              <span class="map-section__stop-name">{{ stop }}</span>
            </li>
          </ol>
        </div>

        <div class="map-section__image-wrap">
          <Image
            class="map-section__image"
            :src="props.image"
            :alt="props.imageAlt"
            :width="1174"
            :height="1024"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.map-section {
  position: relative;
  padding: 0 0 12rem;
  overflow: visible;
  background: $blue-50;

  &__container {
    position: relative;
    z-index: 1;
    overflow: visible;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4rem;
    padding-top: 12rem;
    border-top: 0.1rem solid $blue-700;
  }

  &__content {
    display: flex;
    width: 38.4rem;
    flex: 0 0 38.4rem;
    flex-direction: column;
    gap: 4.4rem;
  }

  &__intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  &__address {
    margin: 0;
    color: $blue-900;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;

    p { margin: 0; }
  }

  &__route {
    display: inline-flex;
    min-height: 4.4rem;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 2rem;
    border: 0.1rem solid $blue-700;
    border-radius: 10rem;
    color: $blue-700;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.1;
    text-decoration: none;
    transition: background-color 150ms ease, color 150ms ease;

    &:hover {
      background: $blue-700;
      color: $white;
    }

    &:focus-visible {
      outline: 0.2rem solid $blue-700;
      outline-offset: 0.3rem;
    }
  }

  &__stops {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__stop {
    display: flex;
    min-height: 6.4rem;
    align-items: center;
    gap: 1.6rem;
    padding: 1.2rem 1.6rem;
    border-radius: 4rem;
    background: $white;
  }

  &__number {
    display: inline-flex;
    width: 4rem;
    height: 4rem;
    flex: 0 0 4rem;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    background: $blue-700;
    color: $white;
    font-family: $jost;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.072rem;
    line-height: 1;
  }

  &__stop-name {
    color: $blue-900;
    font-family: $finlandica-text;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;
  }

  &__image-wrap {
    width: 58.8rem;
    flex: 0 1 58.8rem;
    overflow: hidden;
    border-radius: 2rem;
    background: $blue-500;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
  }

  &__decor {
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 25.6rem;
    height: 25.6rem;
    transform: rotate(180deg);
    pointer-events: none;
  }

  @media (max-width: $tablet) {
    padding-bottom: 11rem;

    &__container {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0 2.8rem;
      box-sizing: border-box;
    }

    &__inner {
      flex-direction: column;
      gap: 4rem;
      padding-top: 9rem;
    }

    &__content {
      width: 100%;
      flex: 0 0 auto;
    }

    &__stops { max-width: 48rem; }

    &__image-wrap {
      width: 100%;
      max-width: 72rem;
      flex: 0 0 auto;
      align-self: center;
    }
  }

  @media (max-width: $mobile) {
    padding-bottom: 9rem;

    &__container { padding: 0 2rem; }

    &__inner { gap: 3.2rem; padding-top: 7rem; }

    &__content { gap: 3.2rem; }

    &__stop {
      min-height: 5.6rem;
      gap: 1.2rem;
      padding: 0.8rem 1.2rem;
      border-radius: 3rem;
    }

    &__stop-name { font-size: 1.8rem; }

    &__decor {
      width: 18rem;
      height: 18rem;
    }
  }
}
</style>
