export default {
  site: {
    title: 'Мастер-классы от известных фигуристов в Лужниках',
    description: 'Бесплатные мастер-классы по фигурному катанию в Лужниках. С 5 декабря 2026 по 28 февраля 2027.',
    keywords: [],
    url: 'https://figureskating.sport.mos.ru',
    ogImage: '/images/favicons/favicon.svg',
  },
  navigation: {
    navItems: [
      { label: 'О событии', link: '#about-event' },
      { label: 'Регистрация', link: '#master-classes' },
      { label: 'Расписание', link: '#schedule' },
      { label: 'Карта', link: '#map' },
      { label: 'Организаторы', link: '#organizers' },
      { label: 'Контакты', link: '#contact' },
    ],
    images: {
      burger: '/images/burger.svg',
      close: '/images/close.svg',
    },
  },
  footer: {
    contacts: [
      { label: 'Общая почта', email: 'ano@mossport.ru' },
      { label: 'Для СМИ', email: 'press@moscow.sport' },
    ],
    docs: [
      { href: '/docs/reject_child.pdf', label: 'Согласие родителей на участие несовершеннолетнего' },
      { href: '/docs/reject.pdf', label: 'Согласие на участие и обработку персональных данных' },
      { href: '/docs/policy.pdf', label: 'Политика конфиденциальности' },
    ],
  },
  ui: {
    languageSwitcher: 'Выбор языка',
    menu: 'Меню',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    cookieMessage: 'Продолжая пользоваться сайтом, вы соглашаетесь с условиями обработки cookie-файлов. Это необходимо для качественной работы сайта. Если вы не согласны, установите специальные настройки в браузере.',
    cookieAccept: 'Ок',
    sliderPrevious: 'Назад',
    sliderNext: 'Вперёд',
  },
}
