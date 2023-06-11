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
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
    {
      path: '~/components/icons',
      extensions: ['.vue'],
      prefix: '',
    },
  ],
  css: [
    '~/assets/css/element/custom.scss',
    '~/assets/fonts/roboto.scss',
    '~/assets/css/tailwind.css',
  ],
  devtools: {
    enabled: true,
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
  ],
  // #region modules
  elementPlus: {
    icon: false,
    importStyle: 'scss',
  },
  i18n: {
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales,
    defaultLocale,
    lazy: true,
    langDir: 'locales',
    customRoutes: 'config',
    pages: {
      admin: false,
    },
    vueI18n: {
      legacy: false,
    },
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  // #endregion
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/admin/**': { ssr: false },
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_PUBLIC_API_URL,
      assetURL: process.env.NUXT_PUBLIC_ASSET_URL,
      tinymceKey: process.env.NUXT_PUBLIC_TINYMCE_KEY,
    },
  },
  typescript: {
    shim: true,
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/element/index.scss" as *;',
        },
      },
    },
  },
})
