<script setup>
import { ref } from 'vue'
import Image from '~/components/ui/Image.vue'
import Title from '~/components/ui/Title.vue'

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  images: {
    type: Object,
    default: () => ({
      decorRight: '/images/faq/decor.svg',
      arrowDown: '/images/faq/arrow-down.svg',
      arrowUp: '/images/faq/arrow-up.svg',
    }),
  },
})

const openState = ref({ 0: true })

function toggle(index) {
  openState.value = { ...openState.value, [index]: !openState.value[index] }
}

function isOpen(index) {
  return !!openState.value[index]
}
</script>

<template>
  <section id="faq" class="faq" aria-labelledby="faq-title">
    <Image
      class="faq__decor"
      :src="props.images.decorRight"
      alt=""
      :width="256"
      :height="256"
      aria-hidden="true"
    />

    <Container wide class="faq__container">
      <div class="faq__inner">
        <div class="faq__content-wrap">
          <Title id="faq-title" tag="h2">{{ props.title }}</Title>

          <div class="faq__accordion">
            <article
              v-for="(item, index) in props.items"
              :key="item.question"
              class="faq__item"
              :class="{ 'faq__item--open': isOpen(index) }"
            >
              <button
                :id="`faq-question-${index}`"
                class="faq__toggler"
                type="button"
                :aria-expanded="isOpen(index)"
                :aria-controls="`faq-content-${index}`"
                @click="toggle(index)"
              >
                <span class="faq__question">{{ item.question }}</span>
                <span class="faq__icon" aria-hidden="true">
                  <Image
                    :src="isOpen(index) ? props.images.arrowUp : props.images.arrowDown"
                    alt=""
                    :width="38"
                    :height="38"
                  />
                </span>
              </button>

              <div
                v-if="isOpen(index)"
                :id="`faq-content-${index}`"
                class="faq__answer"
                role="region"
                :aria-labelledby="`faq-question-${index}`"
              >
                <p v-if="typeof item.answer === 'string'">{{ item.answer }}</p>
                <p v-else>
                  <template v-for="(part, partIndex) in item.answer" :key="partIndex">
                    <a
                      v-if="part.href"
                      :href="part.href"
                      :target="part.href === '#map' ? null : '_blank'"
                      :rel="part.href === '#map' ? null : 'noopener noreferrer'"
                    >{{ part.text }}</a>
                    <template v-else>{{ part.text }}</template>
                  </template>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.faq {
  position: relative;
  isolation: isolate;
  padding: 0 0 12rem;
  overflow: visible;
  background: $blue-50;

  &__container {
    position: relative;
    z-index: 1;
    overflow: visible;
  }

  &__inner {
    padding-top: 12rem;
    border-top: 0.1rem solid $blue-700;
  }

  &__content-wrap {
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
  }

  &__accordion {
    padding: 0.4rem 4rem;
    border: 0.1rem solid rgba($white, 0.28);
    border-radius: 2rem;
    background: $blue-500;
  }

  &__item {
    border-bottom: 0.1rem solid rgba($white, 0.28);

    &:last-child { border-bottom: 0; }
  }

  &__toggler {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.4rem 0;
    border: 0;
    background: transparent;
    color: $white;
    cursor: pointer;
    text-align: left;

    &:focus-visible {
      outline: 0.2rem solid $white;
      outline-offset: 0.2rem;
    }
  }

  &__question {
    max-width: 69rem;
    font-family: $finlandica-text;
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.026rem;
    line-height: 1.05;
  }

  &__icon {
    display: inline-flex;
    width: 3.8rem;
    height: 3.8rem;
    flex: 0 0 3.8rem;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      width: 3.8rem;
      height: 3.8rem;
    }
  }

  &__answer {
    padding: 0 0 2.4rem;
    color: $blue-50;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.3;
     margin-top: -2.4rem;

    p { margin: 0; }

    a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }

  &__decor {
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    width: 25.6rem;
    height: 25.6rem;
    max-width: none;
    pointer-events: none;
  }

  &__container {
    @media (max-width: $laptop) {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 0 4rem;
      box-sizing: border-box;
    }
  }

  @media (max-width: $tablet) {
    padding-bottom: 11rem;
  }

  &__container {
    @media (max-width: $tablet) {
      padding: 0 2.8rem;
    }
  }

  &__inner {
    @media (max-width: $tablet) {
      padding-top: 9rem;
    }
  }

  &__content-wrap {
    @media (max-width: $tablet) {
      gap: 4rem;
    }
  }

  &__accordion {
    @media (max-width: $tablet) {
      padding: 0.4rem 2.8rem;
    }
  }

  &__question {
    @media (max-width: $tablet) {
      font-size: 2rem;
    }
  }

  &__toggler {
    @media (max-width: $tablet) {
      padding: 2rem 0;
    }
  }

  @media (max-width: $mobile) {
    padding-bottom: 9rem;
  }

  &__container {
    @media (max-width: $mobile) {
      padding: 0 2rem;
    }
  }

  &__inner {
    @media (max-width: $mobile) {
      padding-top: 7rem;
    }
  }

  &__content-wrap {
    @media (max-width: $mobile) {
      gap: 3.2rem;
    }
  }

  &__accordion {
    @media (max-width: $mobile) {
      padding: 0.4rem 1.8rem; border-radius: 1.6rem;
    }
  }

  &__question {
    @media (max-width: $mobile) {
      font-size: 1.8rem;
    }
  }

  &__toggler {
    @media (max-width: $mobile) {
      gap: 1.2rem; padding: 1.8rem 0;
    }
  }

  &__icon,
    &__icon img {
    @media (max-width: $mobile) {
      width: 3.2rem; height: 3.2rem;
    }
  }

  &__icon {
    @media (max-width: $mobile) {
      flex-basis: 3.2rem;
    }
  }

  &__answer {
    @media (max-width: $mobile) {
      padding-bottom: 1.8rem; font-size: 1.6rem;
    }
  }

  &__decor {
    @media (max-width: $mobile) {
      width: 18rem; height: 18rem;
    }
  }
}
</style>
