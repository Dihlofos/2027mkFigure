<script setup>
import Image from '~/components/ui/Image.vue'
import Title from '~/components/ui/Title.vue'

const props = defineProps({
  title: { type: String, required: true },
  cards: { type: Array, required: true },
})
</script>

<template>
  <section id="about-event" class="about-event" aria-labelledby="about-event-title">
    <Container wide class="about-event__container">
      <Image
        class="about-event__decor"
        src="/images/about/decor.svg"
        alt=""
        :width="1014"
        :height="973"
        aria-hidden="true"
      />

      <div class="about-event__content">
        <div class="about-event__heading">
          <Title id="about-event-title" tag="h2">{{ props.title }}</Title>
        </div>

        <div class="about-event__cards" aria-label="Преимущества мероприятия">
          <article v-for="card in props.cards" :key="card.title" class="about-event__card">
            <h3 class="about-event__card-title">{{ card.title }}</h3>
            <p class="about-event__card-text">{{ card.text }}</p>
          </article>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.about-event {
  position: relative;
  isolation: isolate;
  padding: 12rem 0 16rem;
  background: $blue-50;
  color: $white;

  &__container {
    position: relative;
    overflow: visible;
  }

  &__decor {
    position: absolute;
    z-index: 0;
    top: -20.3rem;
    right: -18.3rem;
    display: block;
    width: 101.4rem;
    height: 97.3rem;
    max-width: none;
    pointer-events: none;
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2.4rem;
  }

  &__card {
    display: flex;
    min-width: 0;
    min-height: 24rem;
    flex-direction: column;
    padding: 2.8rem 2.4rem;
    border-radius: 2rem;
    background: $blue-700;
  }

  &__card-title {
    margin: 0 0 1.2rem;
    padding: 0 0 1.2rem;
    border-bottom: 0.1rem solid $blue-50;
    color: $white;
    font-family: $jost;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.072rem;
    line-height: 1;
    text-transform: uppercase;
  }

  &__card-text {
    margin: 0;
    padding: 0;
    color: $white;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.1;
  }

  @media (max-width: $tablet) {
    padding: 9rem 0 11rem;

    &__container {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0;
      box-sizing: border-box;
    }

    &__content { gap: 4rem; }

    &__heading { padding: 0 2.8rem; }

    &__cards {
      display: flex;
      gap: 2rem;
      padding: 0 2.8rem 0 0;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scrollbar-width: none;
      -ms-overflow-style: none;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar { display: none; }
    }

    &__card:first-child { margin-left: 2.8rem; }

    &__card {
      flex: 0 0 min(32rem, 78vw);
    }

    &__decor {
      top: -5rem;
      right: -7rem;
      width: 82rem;
      height: auto;
    }
  }

  @media (max-width: $mobile) {
    padding: 7rem 0 9rem;

    &__heading { padding: 0 2rem; }

    &__cards {
      gap: 1.6rem;
      padding-right: 2rem;
    }

    &__card:first-child { margin-left: 2rem; }

    &__card { flex-basis: min(31rem, 84vw); }
  }
}
</style>
