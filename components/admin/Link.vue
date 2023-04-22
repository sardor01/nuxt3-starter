<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
/* eslint-disable import/first */
import type { RouteLocationRaw } from 'vue-router'
import type { ButtonProps } from 'ant-design-vue'

defineProps<{
  to: RouteLocationRaw
  buttonProps: ButtonProps
}>()
</script>

<template>
  <NuxtLink v-slot="{ isExactActive, href: slotHref, navigate }" :to="to" custom>
    <AButton
      v-bind="{ ...buttonProps, ...$attrs }"
      :href="slotHref"
      :aria-current="isExactActive ? 'page' : undefined"
      @click="navigate"
    >
      <slot />
    </AButton>
  </NuxtLink>
</template>
