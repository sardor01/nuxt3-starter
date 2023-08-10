# Opinionated [Nuxt 3](https://nuxt.com/docs) Starter

## TODO

- [ ] - Base components
- [ ] - Unit testing with [vitest and @nuxt/test-utils](https://nuxt.com/docs/getting-started/testing)
- [ ] - E2E testing with [Cypress](https://cypress.io) or [Playwright](https://playwright.dev)

## IDE

Recommend using [VS Code](https://code.visualstudio.com) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (remove Vetur).

## Steps to get started on a project

1. Remove `LICENSE`
2. Modify `README.md`
3. Modify `nuxt.config.ts`

## Steps to remove Admin Panel

1. Run these commands

```sh
rm -rf assets/css/element components/admin layouts/defaultAdmin.vue middleware pages/admin stores

pnpm remove @pinia/nuxt @tinymce/tinymce-vue pinia @element-plus/nuxt @iconify-json/ep element-plus
```

2. Modify `components/icons`, `plugins/fetch.ts`, `.env.template`, `nuxt.config.ts`, `tailwind.config.cjs`

## Useful Links

- [Nuxt 3 Docs Guide](https://nuxt.com/docs/guide)
- [Rendering](https://nuxt.com/docs/guide/concepts/rendering#coming-in-nuxt-3)
- [Deployment](https://nuxt.com/docs/getting-started/deployment)
- [Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)
- [Testing](https://nuxt.com/docs/getting-started/testing)
- [Seo and Meta](https://nuxt.com/docs/getting-started/seo-meta)
- [Environment Variables](https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens)
- [Route Rules](https://nuxt.com/docs/guide/concepts/rendering#route-rules)
- [iconify](https://icon-sets.iconify.design)
- [fontawesome](https://icon-sets.iconify.design/fa6-solid)
- [ESLint Config](https://github.com/antfu/eslint-config)
- [tailwindcss](https://tailwindcss.com/docs)
- [Nuxt/i18n](https://v8.i18n.nuxtjs.org)
