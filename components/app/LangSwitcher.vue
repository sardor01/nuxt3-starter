<script setup lang="ts">
const { locale: currentLocale, locales, setLocale } = useI18n()

const selectedLocale = ref(currentLocale.value)

watch(selectedLocale, (value) => {
  setLocale(value)
})
</script>

<template>
  <BaseDropdown
    :items="[locales]"
    strategy="absolute"
    placement="bottom"
    class="inline-flex"
    trigger-class="rounded-md"
    items-class="py-1 px-2"
  >
    <template #trigger>
      <span class="flex items-center capitalize rounded-md py-1 px-2">
        <span class="font-semibold text-red ml-0.5 mr-1.5">
          {{ currentLocale }}
        </span>
        <fa-icon icon="fa-solid fa-chevron-down" class="fa-xs text-gray-dark" />
      </span>
    </template>
    <template #item="{ item }: { item: typeof locales.value[number] }">
      <BaseButton
        variant="none"
        size="none"
        class="min-w-[100px] rounded-md py-1 px-2"
        :centered="false"
        @click="typeof item === 'string' ? selectedLocale = item : selectedLocale = item.code"
      >
        {{ typeof item === 'string' ? item : item.name }}
      </BaseButton>
    </template>
  </BaseDropdown>
</template>
