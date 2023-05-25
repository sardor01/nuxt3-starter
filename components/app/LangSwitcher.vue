<script setup lang="ts">
const { locale: currentLocale, locales, setLocale } = useI18n()

const changeLocale = (item: (typeof locales.value)[number]) => {
  if (typeof item === 'string') {
    setLocale(item)
  } else {
    setLocale(item.code)
  }
}
</script>

<template>
  <BaseDropdown
    :items="[locales]"
    strategy="absolute"
    placement="bottom"
    class="inline-flex"
    trigger-class="rounded-md py-2 px-3 bg-light"
    items-class="py-1 px-2"
  >
    <template #trigger>
      <span class="flex items-center rounded-md uppercase text-dark">
        <span class="ml-0.5 mr-1.5 font-normal">
          {{ currentLocale }}
        </span>
        <span class="i-fa6-solid-chevron-down h-3 w-3" />
      </span>
    </template>
    <template #item="{ item }: { item: (typeof locales.value)[number] }">
      <BaseButton
        variant="none"
        size="none"
        class="min-w-[100px] rounded-md px-2 py-1"
        :centered="false"
        @click="changeLocale(item)"
      >
        {{ typeof item === 'string' ? item : item.name }}
      </BaseButton>
    </template>
  </BaseDropdown>
</template>
