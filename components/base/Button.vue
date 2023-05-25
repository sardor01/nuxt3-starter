<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
    variant?: 'blue' | 'red' | 'none'
    size?: 'sm' | 'md' | 'lg' | 'none'
    theme?: 'light' | 'dark'
    href?: string
    link?: boolean
    loading?: boolean
    disabled?: boolean
    centered?: boolean
    active?: boolean
    exactActive?: boolean
  }>(),
  {
    type: 'button',
    variant: 'blue',
    size: 'md',
    theme: 'dark',
    centered: true,
  },
)

const disableButton = computed(() => {
  return props.disabled || props.loading
})

const btnVariant = computed(() => {
  switch (props.variant) {
    case 'red': {
      if (props.link) return 'text-red focus-visible:ring-red/30'
      return 'border border-red bg-red text-white hover:border-red/80 hover:bg-red/80 focus-visible:ring-red/30'
    }
    case 'blue': {
      if (props.link) return 'text-blue focus-visible:ring-blue/30'
      return 'border border-blue bg-blue text-white hover:border-blue/80 hover:bg-blue/80 focus-visible:ring-blue/30'
    }
    default:
      return props.theme === 'dark' ? 'focus-visible:ring-blue/30' : 'focus-visible:ring-light'
  }
})

const btnSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-11 min-w-[120px] rounded-2xl px-3 py-2 text-sm'

    case 'md':
      return 'h-12 min-w-[120px] rounded-2xl px-4 py-3 text-base'

    case 'lg':
      return 'h-14 min-w-[120px] rounded-2xl px-6 py-4 text-lg'

    default:
      return ''
  }
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :disabled="href ? undefined : disableButton"
    class="inline-flex select-none items-center whitespace-nowrap font-semibold transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring"
    :class="[
      btnVariant,
      btnSize,
      centered && 'justify-center text-center',
      disableButton && 'pointer-events-none opacity-80',
    ]"
  >
    <span v-if="loading" class="i-fa6-solid-spinner h-5 w-5 animate-spin" />
    <slot v-else />
  </component>
</template>
