const plugin = require('tailwindcss/plugin')

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
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        light: '#f1f3f5',
        DEFAULT: '#b6c5d2',
      },
      blue: {
        light: '#184368',
        DEFAULT: '#133654',
      },
      red: {
        light: '#b30022',
        DEFAULT: '#89001a',
      },
      success: '#04d65c',
      warning: '#ffb131',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    extend: {
      fontSize: {
        '2.5xl': ['1.75rem', '2.125rem'],
        '3.5xl': ['2rem', '2.375rem'],
        '0.5xs': ['0.625rem', '0.75rem'],
      },
      minWidth: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      minHeight: {
        8: '2rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
      },
    },
  },
  plugins: [
    backfaceVisibility,
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
