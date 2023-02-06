<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center py-8">
    <h2 class="text-lg font-medium mb-2">
      {{ t('hello') }} <fa-icon icon="fa-solid fa-user" />
    </h2>
    <LangSwitcher />
  </div>
</template>
