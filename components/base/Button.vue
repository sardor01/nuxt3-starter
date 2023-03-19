<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
    variant?: 'blue' | 'red' | 'gray' | 'blue-red' | 'none'
    size?: 'sm' | 'md' | 'lg' | 'link' | 'none'
    focusTheme?: 'light' | 'dark'
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
    focusTheme: 'dark',
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
      return 'border border-red bg-red text-white hover:border-red-light hover:bg-red-light focus-visible:ring-red/30'
    }
    case 'blue': {
      if (props.link) return 'text-blue focus-visible:ring-blue/30'
      return 'border border-blue bg-blue text-white hover:border-blue-light hover:bg-blue-light focus-visible:ring-blue/30'
    }
    default:
      return props.focusTheme === 'dark'
        ? 'focus-visible:ring-blue/30'
        : 'focus-visible:ring-gray-light/50'
  }
})

const btnSize = computed(() => {
  switch (props.size) {
    case 'sm': {
      return {
        base: 'h-11 min-w-[120px] rounded-2xl px-3 py-2 text-sm',
        icon: 'fa-xl',
      }
    }
    case 'md': {
      return {
        base: 'h-12 min-w-[120px] rounded-2xl px-4 py-3 text-base',
        icon: 'fa-xl',
      }
    }
    case 'lg': {
      return {
        base: 'h-13 min-w-[120px] rounded-2xl px-6 py-4 text-lg',
        icon: 'fa-xl',
      }
    }
    case 'link': {
      return {
        base: 'rounded-lg p-1 text-base',
        icon: 'fa-xl',
      }
    }
    default: {
      return { base: '', icon: '' }
    }
  }
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    class="inline-flex select-none items-center whitespace-nowrap font-semibold transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring"
    :class="[
      btnVariant,
      btnSize.base,
      centered && 'justify-center text-center',
      disableButton && 'pointer-events-none opacity-80',
    ]"
  >
    <FontAwesomeIcon
      v-if="loading"
      icon="fa-solid fa-spinner"
      class="fa-spin"
      :class="btnSize.icon"
    />
    <slot v-else />
  </component>
</template>
