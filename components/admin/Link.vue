<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import type { RouteLocation, RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
}>()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink v-slot="{ href, navigate }" :to="localePath(to as unknown as RouteLocation)" custom>
    <ElButton tag="a" v-bind="$attrs" :href="href" @click="navigate">
      <slot />
    </ElButton>
  </NuxtLink>
</template>
