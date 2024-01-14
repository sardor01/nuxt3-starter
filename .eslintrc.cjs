module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@sarast', 'plugin:prettier/recommended'],
  rules: {
    'sarast/if-newline': 'off',
    'sarast/top-level-function': 'off',
    'n/prefer-global/process': 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', { allow: ['error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
}
