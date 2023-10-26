module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['@antfu/eslint-config-vue', 'plugin:prettier/recommended'],
    rules: {
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
        'n/prefer-global/process': 'off',
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-console': [
            process.env.NODE_ENV === 'production' ? 'error' : 'warn',
            { allow: ['error'] },
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'jsonc/indent': ['error', 4],
    },
}
