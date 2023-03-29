export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - Nuxt3 Starter',
      link: [{ rel: 'icon', type: 'image/png', href: '/nuxt.png' }],
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/fonts/montserrat.css',
    '~/assets/css/tailwind.css',
  ],
  modules: [
    [
      '@nuxtjs/i18n',
      {
        legacy: false,
        stategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
        },
        locales: [
          { code: 'en', name: 'English', file: 'en.json' },
          { code: 'ru', name: 'Русский', file: 'ru.json' },
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
      },
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_PUBLIC_API_URL,
      assetURL: process.env.NUXT_PUBLIC_ASSET_URL,
    },
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
})
