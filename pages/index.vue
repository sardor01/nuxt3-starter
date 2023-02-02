<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center py-10">
    <img src="/nuxt.png" alt="Nuxt 3" class="w-18 h-18 inline-block">
    <h1 class="text-3xl font-semibold">
      Nuxt3 Starter
    </h1>
    <h2 class="text-lg font-medium my-4">
      {{ t('hello') }}
    </h2>
    <LangSwitcher />
  </div>
</template>
