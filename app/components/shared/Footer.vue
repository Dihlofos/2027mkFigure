<script setup>
import Image from '~/components/ui/Image.vue'

defineProps({
  footerData: { type: Object, required: true },
})
</script>

<template>
  <footer id="contact" class="footer" aria-label="Контакты и документы">
    <Container wide class="footer__container">
      <div class="footer__layout">
        <div class="footer__contacts">
          <div v-for="contact in footerData.contacts" :key="contact.email" class="footer__contact">
            <span class="footer__contact-label">{{ contact.label }}</span>
            <a class="footer__contact-email" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </div>
        </div>

        <div class="footer__documents">
          <h2 class="footer__documents-title">Документы</h2>
          <ul class="footer__document-list">
            <li v-for="doc in footerData.docs" :key="doc.href" class="footer__document-item">
              <a class="footer__document-link" :href="doc.href" target="_blank" rel="noopener noreferrer">
                <span class="footer__document-icon" aria-hidden="true">
                  <Image src="/images/doc.svg" alt="" :width="18" :height="18" />
                </span>
                <span class="footer__document-label">{{ doc.label }}</span>
                <Image
                  class="footer__document-arrow"
                  src="/images/arrow-down.svg"
                  alt=""
                  :width="12"
                  :height="14"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 12rem 0;
  background: $blue-700;

  &__container {
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

  &__layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 55.6rem;
    gap: 4.8rem;
  }

  &__contacts {
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    align-content: start;
    column-gap: 2.7rem;
    row-gap: 2.8rem;
  }

  &__contact {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 1.4rem;
  }

  &__contact-label {
    margin: 0;
    color: $blue-50;
    font-family: $golos-text;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.3;
  }

  &__documents-title {
    margin: 0 0 1.2rem;
    color: $blue-50;
    font-family: $finlandica-text;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.3;
  }

  &__contact-email {
    color: $white;
    font-family: $finlandica-text;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1.08;
    text-decoration: none;
    white-space: nowrap;

    &:hover { text-decoration: underline; }

    &:focus-visible {
      outline: 0.2rem solid $white;
      outline-offset: 0.3rem;
    }
  }

  &__document-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__document-item {
    border-bottom: 0.1rem solid rgba($white, 0.16);

    &:last-child { border-bottom: 0; }
  }

  &__document-link {
    display: flex;
    min-height: 6.4rem;
    align-items: center;
    gap: 1.4rem;
    padding: 1.2rem 0;
    color: $white;
    text-decoration: none;

    &:hover .footer__document-label { text-decoration: underline; }

    &:focus-visible {
      outline: 0.2rem solid $white;
      outline-offset: 0.2rem;
    }
  }

  &__document-icon {
    display: inline-flex;
    width: 4rem;
    height: 4rem;
    flex: 0 0 4rem;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    background: rgba($white, 0.16);
  }

  &__document-label {
    flex: 1 1 auto;
    color: $white;
    font-family: $finlandica-text;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.2;
  }

  &__document-arrow {
    display: block;
    width: 1.2rem;
    height: 1.4rem;
    flex: 0 0 1.2rem;
  }

  @media (max-width: $tablet) {
    padding: 9rem 0;

    &__layout {
      grid-template-columns: minmax(0, 1fr);
      gap: 5rem;
    }

    &__contacts { gap: 2.4rem; }

    &__documents { max-width: 65rem; }
  }

  @media (max-width: $mobile) {
    padding: 7rem 0;

    &__layout { gap: 4rem; }

    &__contacts {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 2.8rem;
    }

    &__contact-email { font-size: 2.4rem; }

    &__document-link { gap: 1.2rem; }
  }
}
</style>
