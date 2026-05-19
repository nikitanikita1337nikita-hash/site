import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SecGuide",
  description: "Защити свои данные правильно",
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'О проекте', link: '/about' }
    ],
    // Это боковое меню, которое заменит ваши NextButton
    sidebar: [
      {
        text: 'Введение',
        items: [
          { text: 'База безопасности', link: '/intro' }
        ]
      },
      {
        text: 'Telegram',
        items: [
          { text: 'Приватность', link: '/tg-privacy' },
          { text: 'Защита входа', link: '/tg-security' }
        ]
      },
      {
        text: 'ВКонтакте',
        items: [
          { text: 'Приватность профиля', link: '/vk-privacy' },
          { text: 'VK ID: Безопасность', link: '/vk-security' }
        ]
      },
      {
        text: 'Discord',
        items: [
          { text: 'Конфиденциальность', link: '/discord-privacy' },
          { text: 'Угон аккаунта', link: '/discord-security' }
        ]
      },
      {
        text: 'Завершение',
        items: [
          { text: 'Финальный чеклист', link: '/checklist' },
          { text: 'О проекте', link: '/about' }
        ]
      }
    ],
    outline: {
      label: 'На этой странице'
    }
  }
})