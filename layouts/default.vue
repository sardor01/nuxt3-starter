<script setup lang="ts">
const route = useRoute()

const { t } = useI18n()

const head = useLocaleHead({
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

const title = computed(() => {
  const title = route.meta.title as string | { value: string; dynamic: boolean } | undefined
  if (title) {
    if (typeof title === 'string') {
      return { value: title, dynamic: false }
    }
    return title
  }
  console.error('No title found for route', route.path)
})
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" class="leading-extra-normal">
    <Head>
      <Title>{{ title && (title.dynamic ? title.value : t(title.value)) }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <div class="relative flex bg-white text-neutral-950">
        <div class="relative flex min-h-screen max-w-full flex-auto flex-col backface-hidden">
          <TheHeader />
          <div class="flex w-full flex-[1_0_auto] p-0">
            <main class="relative max-w-full flex-auto">
              <slot />
            </main>
          </div>
          <TheFooter />
        </div>
      </div>
    </Body>
  </Html>
</template>
