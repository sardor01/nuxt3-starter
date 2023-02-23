module.exports = {
  apps: [
    {
      name: 'nuxt3-starter',
      port: '3000',
      watch: true,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
