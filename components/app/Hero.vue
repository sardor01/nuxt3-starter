<script setup lang="ts">
import { getUrl } from '~/helpers/functions'
import type { Link } from '~/composables/useSiteLinks'

const props = defineProps<{
  title: string
  image?: string
  routes?: Link[]
  hideRoutes?: boolean
  dynamic?: boolean
}>()

const config = useRuntimeConfig()
const route = useRoute()
const { t, localeCodes } = useI18n()

const heroImage = computed(() => {
  if (props.image) return `${config.public.assetURL}/${props.image}`
  return 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
})

const heroRoutes = computed<Link[]>(() => {
  const excludedRoutes = {
    '2': ['about'],
  }

  if (props.hideRoutes) return []
  if (props.routes) return props.routes
  const routes: Link[] = []
  const routePathSplit = route.path.split('/').filter((i) => !localeCodes.value.includes(i))

  for (let i = 0; i < routePathSplit.length; i++) {
    const path = routePathSplit[i]
    let id = 'home'
    let title = 'menu.home'
    if (path) {
      id = path
      title = `menu.${path}`
    }
    let key: keyof typeof excludedRoutes
    for (key in excludedRoutes) {
      if (!(routePathSplit.length > +key && excludedRoutes[key].includes(path))) {
        routes.push({
          id,
          title,
          to: getUrl(routePathSplit, i),
        })
      }
    }
  }
  return routes
})
</script>

<template>
  <div
    class="z-hero relative flex h-56 w-full items-center justify-center py-32 sm:h-60 md:h-64 lg:h-72 xl:h-80"
  >
    <img
      :src="heroImage"
      alt="A Building Close To A Cliff Of A Mountain With Lush Vegetaion"
      class="absolute inset-0 z-[1] h-full w-full object-cover"
    />
    <div class="absolute inset-0 z-[2] bg-black/70" />

    <BaseContainer class="relative z-[3] w-full text-white">
      <span
        class="line-clamp-2 block text-3xl font-medium uppercase !leading-snug sm:text-4xl lg:text-5xl"
      >
        {{ dynamic ? title : t(title) }}
      </span>
      <BaseBreadcrumb :items="heroRoutes" />
    </BaseContainer>
  </div>
</template>
