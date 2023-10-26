<script setup lang="ts">
const props = defineProps<{
    href?: string
    type?: 'button' | 'reset' | 'submit'
    size?: 'sm' | 'md' | 'lg'
    variant?: 'blue' | 'red'
    custom?: boolean
    disabled?: boolean
    left?: boolean
    loading?: boolean
}>()

const btnDisabled = computed(() => props.disabled || props.loading)

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

const btnVariant = computed(() => {
    switch (props.variant) {
        case 'red':
            return 'border border-red-700 bg-red-700 text-white hover:border-red-700/80 hover:bg-red-700/80 focus-visible:ring-red-700/30'

        case 'blue':
            return 'border border-sky-600 bg-sky-600 text-white hover:border-sky-600/80 hover:bg-sky-600/80 focus-visible:ring-sky-600/30'

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
        :disabled="href ? undefined : btnDisabled"
        class="select-none transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring"
        :class="[
            btnSize,
            btnVariant,
            !custom && 'inline-flex items-center whitespace-nowrap font-medium',
            !left && 'justify-center text-center',
            btnDisabled && 'pointer-events-none opacity-80',
        ]"
    >
        <span v-if="loading" class="i-fa6-solid-spinner h-5 w-5 animate-spin" />
        <slot v-else />
    </component>
</template>
