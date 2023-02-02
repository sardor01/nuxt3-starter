<script setup lang="ts">
const { locale: currentLocale, locales, setLocale } = useI18n()

const selectedLocale = ref(currentLocale.value)
watch(selectedLocale, (value) => {
  setLocale(value)
})
</script>

<template>
  <select
    v-model="selectedLocale"
    class="block w-28 text-sm rounded-lg border bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5"
  >
    <option
      v-for="(locale, index) in locales"
      :key="index"
      :value="typeof locale === 'string' ? locale : locale.code"
    >
      {{ typeof locale === 'string' ? locale : locale.name }}
    </option>
  </select>
</template>
