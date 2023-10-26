const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

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
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        extend: {
            aria: {
                'current-page': 'current="page"',
            },
            lineHeight: {
                'extra-normal': '1.5715',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-bullets': theme('colors.sky.600'),
                        maxWidth: '100%',
                        'ul > li': {
                            'padding-left': 0,
                            '&:first-child, &:last-child': {
                                'margin-block': 0,
                            },
                        },
                    },
                },
            }),
            zIndex: {
                overlay: '999',
                modal: '1000',
                navigationDrawer: '1100',
            },
        },
    },
    plugins: [
        backfaceVisibility,
        iconsPlugin({ collections: getIconCollections(['ep', 'fa6-solid']) }),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
