<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'button' | 'submit'
  variant?: 'blue' | 'red'
  size?: 'sm' | 'md' | 'lg' | 'link' | 'none'
  href?: string
  link?: boolean
  loading?: boolean
  disabled?: boolean
  centered?: boolean
  active?: boolean
  exactActive?: boolean
}>(), {
  type: 'button',
  variant: 'blue',
  size: 'md',
  centered: true,
})

const disableButton = computed(() => {
  return props.disabled || props.loading
})

const btnVariant = computed(() => {
  switch (props.variant) {
    case 'red': {
      if (props.link)
        return 'text-red focus-visible:ring-red/30'
      return 'bg-red text-white hover:bg-red-light hover:border-red-light border border-red focus-visible:ring-red/30'
    }
    default: {
      if (props.link)
        return 'text-blue focus-visible:ring-blue/30'
      return 'bg-blue text-white hover:bg-blue-light hover:border-blue-light border border-blue'
    }
  }
})

const btnSize = computed(() => {
  switch (props.size) {
    case 'sm': {
      return {
        base: 'min-w-[120px] h-11 text-sm rounded-2xl px-3 py-2',
        icon: 'fa-xl',
      }
    }
    case 'md': {
      return {
        base: 'min-w-[120px] h-12 text-base rounded-2xl px-4 py-3',
        icon: 'fa-xl',
      }
    }
    case 'lg': {
      return {
        base: 'min-w-[120px] h-13 text-lg rounded-2xl px-6 py-4',
        icon: 'fa-xl',
      }
    }
    case 'link': {
      return {
        base: 'text-base rounded-lg p-1',
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
    class="inline-flex items-center transition-colors ease-in-out duration-200 font-semibold whitespace-nowrap select-none focus:outline-none focus-visible:ring"
    :class="[
      btnVariant,
      btnSize.base,
      centered && 'justify-center text-center',
      disableButton && 'pointer-events-none opacity-80',
    ]"
  >
    <fa-icon
      v-if="loading"
      icon="fa-solid fa-spinner"
      class="fa-spin"
      :class="btnSize.icon"
    />
    <slot v-else />
  </component>
</template>
