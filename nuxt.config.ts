import { defaultLocale, locales } from './config'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt3 Starter',
      link: [{ rel: 'icon', type: 'image/png', href: '/nuxt.png' }],
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/fonts/montserrat.css',
    '~/assets/fonts/roboto.css',
    '~/assets/css/tailwind.css',
  ],
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }],
    [
      '@nuxtjs/i18n',
      {
        legacy: false,
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
        },
        locales,
        defaultLocale,
        lazy: true,
        langDir: 'locales',
        vueI18n: {
          fallbackLocale: defaultLocale,
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
  routeRules: {
    '/admin/**': { ssr: false },
    '/auth/**': { ssr: false },
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
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
})
