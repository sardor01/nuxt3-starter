export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: ['@pinia/nuxt'],
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
})
