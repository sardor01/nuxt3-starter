<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center py-8">
    <img src="/nuxt.png" alt="Nuxt 3" class="w-18 h-18 inline-block">
    <h1 class="text-3xl font-semibold">
      Nuxt3 Starter
    </h1>
    <Counter />
    <h2 class="text-lg font-medium my-4">
      {{ t('hello') }} <fa-icon icon="fa-solid fa-user" />
    </h2>
    <LangSwitcher />
  </div>
</template>
