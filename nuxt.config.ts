export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
