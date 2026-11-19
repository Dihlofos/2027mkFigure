<script setup>
import Image from '~/components/ui/Image.vue'
import Title from '~/components/ui/Title.vue'

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section id="schedule" class="schedule" aria-labelledby="schedule-title">
    <Container wide class="schedule__container">
      <Image
        class="schedule__decor"
        src="/images/schedule/decor.svg"
        alt=""
        :width="512"
        :height="418"
        aria-hidden="true"
      />

      <div class="schedule__content">
        <Title id="schedule-title" tag="h2">{{ props.title }}</Title>

        <div class="schedule__list">
          <article v-for="item in props.items" :key="`${item.date}-${item.name}`" class="schedule__item">
            <div class="schedule__date-time">
              <h3 class="schedule__date">{{ item.date }}</h3>
              <p class="schedule__time">{{ item.time }}</p>
            </div>
            <p class="schedule__name">{{ item.name }}</p>
          </article>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.schedule {
  position: relative;
  padding: 12rem 0 14rem;
  overflow: visible;
  background: $blue-50;
  overflow: hidden;
  &__container {
    position: relative;
    overflow: visible;
    @media (max-width: $tablet) {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0 2.8rem;
      box-sizing: border-box;
    }
    @media (max-width: $mobile) {
      padding: 0 2rem;
    }
  }
  &__decor {
    position: absolute;
    z-index: 0;
    top: -12rem;
    right: -41.4rem;
    display: block;
    width: 83.5rem;
    height: 83.5rem;
    max-width: none;
    transform: translateY(-50%);
    pointer-events: none;
    @media (max-width: $tablet) {
      right: -18rem;
      width: 64rem;
      height: 64rem;
    }
    @media (max-width: $mobile) {
      top: 45%;
      right: -24rem;
      width: 48rem;
      height: 48rem;
    }
  }
  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
    @media (max-width: $mobile) {
      gap: 3.2rem;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    @media (max-width: $tablet) {
      align-items: flex-start;
    }
    @media (max-width: $mobile) {
      flex-direction: column;
      gap: 1.2rem;
    }
  }
  &__date-time {
    display: flex;
    width: 25.2rem;
    flex: 0 0 25.2rem;
    align-items: center;
    gap: 1.2rem;
    color: $blue-700;
    white-space: nowrap;
    @media (max-width: $tablet) {
      width: 22rem;
      flex-basis: 22rem;
      flex-wrap: wrap;
      row-gap: 0.6rem;
    }
    @media (max-width: $mobile) {
      width: auto;
      flex: 0 0 auto;
      flex-wrap: nowrap;
    }
  }
  &__date {
    margin: 0;
    font-family: $jost;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.072rem;
    line-height: 1;
    text-transform: uppercase;
  }
  &__time {
    margin: 0;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.1;
  }
  &__name {
    display: inline-flex;
    min-height: 5.2rem;
    align-items: center;
    margin: 0;
    padding: 1.6rem 2.8rem;
    border-radius: 4rem;
    background: $white;
    color: $blue-700;
    font-family: $finlandica-text;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;
    @media (max-width: $tablet) {
      min-width: 0;
      padding: 1.4rem 2.2rem;
      font-size: 1.8rem;
    }
    @media (max-width: $mobile) {
      width: 100%;
      min-height: 0;
      padding: 1.4rem 2rem;
      border-radius: 2.8rem;
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
