export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
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
  typescript: {
    strict: true,
    typeCheck: 'build',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiURL: '',
      assetURL: '',
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
