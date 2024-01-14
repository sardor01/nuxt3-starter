<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  to: RouteLocationRaw
}>()
</script>

<template>
  <NuxtLink v-slot="{ href, navigate }" :to="to" custom>
    <ElButton tag="a" v-bind="$attrs" :href="href" @click="navigate">
      <slot />
    </ElButton>
  </NuxtLink>
</template>
