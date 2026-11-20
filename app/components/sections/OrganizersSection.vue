<script setup>
import Image from '~/components/ui/Image.vue'
import Title from '~/components/ui/Title.vue'

const props = defineProps({
  title: { type: String, required: true },
  logos: { type: Array, required: true },
})
</script>

<template>
  <section id="organizers" class="organizers" aria-labelledby="organizers-title">
    <Container wide class="organizers__container">
      <div class="organizers__content">
        <div class="organizers__heading">
          <Title id="organizers-title" tag="h2" pale>{{ props.title }}</Title>
        </div>

        <ul class="organizers__list" aria-label="Организации-организаторы">
          <li v-for="logo in props.logos" :key="logo.src" class="organizers__tile">
            <a class="organizers__link" :href="logo.href" :aria-label="logo.alt" target="_blank" rel="noopener noreferrer">
              <Image
                class="organizers__logo"
                :src="logo.src"
                :alt="logo.alt"
                :width="logo.width"
                :height="logo.height"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.organizers {
  padding: 12rem 0 14rem;
  background: $red-500;
  &__container {
    @media (max-width: $laptop) {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0 4rem;
      box-sizing: border-box;
    }
    @media (max-width: $tablet) {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0;
      box-sizing: border-box;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
    @media (max-width: $tablet) {
      gap: 4rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2.4rem;
    margin: 0;
    padding: 0;
    list-style: none;
    @media (max-width: $tablet) {
      display: flex;
      gap: 2rem;
      padding: 0 2.8rem 0 0;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scrollbar-width: none;
      -ms-overflow-style: none;
      -webkit-overflow-scrolling: touch;
    }
    @media (max-width: $mobile) {
      gap: 1.6rem;
      padding-right: 2rem;
    }
    &::-webkit-scrollbar {
      @media (max-width: $tablet) {
        display: none;
      }
    }
  }
  &__tile {
    display: flex;
    min-width: 0;
    height: 16rem;
    align-items: center;
    justify-content: center;
    padding: 2.4rem 3.6rem;
    border: 0.1rem solid $blue-50;
    border-radius: 5rem;
    @media (max-width: $tablet) {
      height: 14rem;
      padding: 2rem;
      border-radius: 4rem;
      flex: 0 0 min(32rem, 78vw);
    }
    @media (max-width: $mobile) {
      height: 12rem;
      padding: 2rem 3.6rem;
      border-radius: 3.2rem;
      flex-basis: 21rem;
    }
  }
  &__logo {
    display: block;
    width: auto;
    max-width: 100%;
    max-height: 6rem;
    object-fit: contain;
  }
  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  &__heading {
    @media (max-width: $tablet) {
      padding: 0 2.8rem;
    }
    @media (max-width: $mobile) {
      padding: 0 2rem;
    }
  }
  &__tile:first-child {
    @media (max-width: $tablet) {
      margin-left: 2.8rem;
    }
    @media (max-width: $mobile) {
      margin-left: 2rem;
    }
  }
  @media (max-width: $tablet) {
    padding: 9rem 0 11rem;
  }
  @media (max-width: $mobile) {
    padding: 7rem 0 9rem;
  }
}
</style>
