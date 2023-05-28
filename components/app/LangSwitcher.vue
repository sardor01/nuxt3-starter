<script setup lang="ts">
import { locales } from '~/config'

const { locale, setLocale } = useI18n()
</script>

<template>
  <BaseDropdown
    :items="[locales]"
    strategy="absolute"
    placement="bottom"
    class="inline-flex"
    trigger-class="rounded-md py-2 px-3 bg-light"
    items-class="py-1 px-2"
    item-class="mb-1 last:mb-0"
  >
    <template #trigger>
      <span class="flex items-center uppercase text-dark">
        {{ locale }}
        <span class="i-fa6-solid-chevron-down mb-0.5 ml-1.5 h-3 w-3" />
      </span>
    </template>
    <template #item="{ item }">
      <BaseButton
        class="min-w-[100px] rounded-md px-2 py-0.5 text-left font-medium"
        custom
        left
        @click="setLocale(item.code)"
      >
        {{ item.name }}
      </BaseButton>
    </template>
  </BaseDropdown>
</template>
