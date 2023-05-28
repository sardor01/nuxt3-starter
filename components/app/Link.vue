<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

defineProps<NuxtLinkProps>()

defineOptions({
  inheritAttrs: false,
})

const localePath = useLocalePath()
</script>

<template>
  <NuxtLink v-slot="{ isExactActive, href, navigate }" :to="localePath(to as any)" custom>
    <BaseButton
      v-bind="$attrs"
      :href="href"
      :aria-current="isExactActive ? 'page' : undefined"
      @click="navigate"
    >
      <slot />
    </BaseButton>
  </NuxtLink>
</template>
