// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Goedemiddag! checklist',
      htmlAttrs: {
        lang: 'nl'
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

