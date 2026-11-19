<script setup>
import Image from '~/components/ui/Image.vue'
import Title from '~/components/ui/Title.vue'

const props = defineProps({
  title: { type: String, required: true },
  registrationLabel: { type: String, required: true },
  cards: { type: Array, required: true },
})
</script>

<template>
  <section id="master-classes" class="master-classes" aria-labelledby="master-classes-title">
    <Container wide class="master-classes__container">
      <div class="master-classes__content">
        <Title id="master-classes-title" tag="h2" pale>{{ props.title }}</Title>

        <div class="master-classes__cards">
          <article v-for="card in props.cards" :key="card.name" class="master-classes__card">
            <div class="master-classes__card-main">
              <div class="master-classes__photo">
                <Image
                  :src="card.photo"
                  :alt="card.photoAlt"
                  :width="352"
                  :height="352"
                  loading="lazy"
                  class="master-classes__photo-image"
                />
              </div>

              <div class="master-classes__details">
                <h3 class="master-classes__name">{{ card.name }}</h3>

                <div class="master-classes__info">
                  <div class="master-classes__date">
                    <span class="master-classes__calendar" aria-hidden="true">
                      <Image src="/images/calendar.svg" alt="" :width="18" :height="18" />
                    </span>
                    <span>{{ card.date }}</span>
                  </div>
                  <span class="master-classes__time">{{ card.time }}</span>
                </div>
              </div>
            </div>

            <a class="master-classes__registration" :href="card.registrationHref">
              {{ props.registrationLabel }}
            </a>
          </article>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.master-classes {
  padding: 12rem 0 14rem;
  background: $red-500;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.4rem;
  }

  &__card {
    display: flex;
    min-width: 0;
    min-height: 64.9rem;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 1.4rem 1.4rem 2.8rem;
    border: 0.2rem solid $blue-50;
    border-radius: 2rem;
  }

  &__card-main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__photo {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 1.2rem;
    background: $white;
  }

  &__photo-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
    object-position: center;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  &__name {
    margin: 0;
    color: $white;
    font-family: $finlandica-text;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.05;
  }

  &__info {
    display: flex;
    min-height: 5.7rem;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.2rem;
    padding-top: 2rem;
    border-top: 0.1rem solid rgba($white, 0.24);
  }

  &__date {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    gap: 1.2rem;
    color: $white;
    font-family: $finlandica-text;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.1;
    white-space: nowrap;
  }

  &__calendar {
    display: inline-flex;
    width: 3.6rem;
    height: 3.6rem;
    flex: 0 0 3.6rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba($white, 0.21);
  }

  &__time {
    display: inline-flex;
    min-height: 3.6rem;
    flex: 0 0 auto;
    align-items: center;
    padding: 0 1.6rem;
    border-radius: 5rem;
    background: rgba($white, 0.21);
    color: $white;
    font-family: $finlandica-text;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.1;
    white-space: nowrap;
  }

  &__registration {
    display: inline-flex;
    min-height: 5.2rem;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    padding: 1.6rem 3.2rem;
    border-radius: 10rem;
    background: $white;
    color: $blue-700;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.1;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 150ms ease, color 150ms ease;

    &:hover {
      background: $blue-50;
    }

    &:focus-visible {
      outline: 0.2rem solid $white;
      outline-offset: 0.3rem;
    }
  }

  @media (max-width: $tablet) {
    padding: 9rem 0 11rem;

    &__container {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0 2.8rem;
      box-sizing: border-box;
    }

    &__cards {
      grid-template-columns: minmax(0, 1fr);
      justify-items: center;
      gap: 2.4rem;
    }

    &__card {
      width: 100%;
      max-width: 48rem;
    }
  }

  @media (max-width: $mobile) {
    padding: 7rem 0 9rem;

    &__container { padding: 0 2rem; }

    &__card {
      min-height: 58rem;
      padding: 1.2rem 1.2rem 2.4rem;
    }

    &__name { font-size: 2.2rem; }

    &__date,
    &__time { font-size: 1.6rem; }

    &__time { padding: 0 1.2rem; }
  }
}
</style>
