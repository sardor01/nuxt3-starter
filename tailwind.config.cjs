const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

const backfaceVisibility = plugin(({ addUtilities }) => {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden',
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.ts',
    './error.vue',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      light: '#f1f3f5',
      dark: '#1a1a1a',
      gray: '#b6c5d2',
      blue: '#133654',
      red: '#89001a',
      green: '#04d65c',
      yellow: '#ffb131',
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      aria: {
        'current-page': 'current="page"',
      },
      zIndex: {
        overlay: '999',
        modal: '1000',
        navigationDrawer: '1100',
      },
    },
  },
  plugins: [backfaceVisibility, require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
