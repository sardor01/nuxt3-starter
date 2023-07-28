const process = require('node:process')
require('dotenv').config()

module.exports = {
  apps: [
    {
      name: process.env.PM2_APP_NAME,
      port: process.env.PM2_APP_PORT,
      watch: true,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
