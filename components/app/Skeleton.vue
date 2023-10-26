<script lang="ts">
const LOADER_TYPES = { rectangle: 'rectangle', circle: 'circle' }

const LOADER_CSS_CLASSES = {
    [LOADER_TYPES.rectangle]: 'rounded',
    [LOADER_TYPES.circle]: 'rounded-full',
}

type LoaderTypesKeys = keyof typeof LOADER_TYPES
type LoaderTypesValues = (typeof LOADER_TYPES)[LoaderTypesKeys]

const SHIMMER_COLOR = '#ffffff'

const isHexColor = (hexColor: string) => {
    const hex = hexColor.replace('#', '')

    return (
        typeof hexColor === 'string' &&
        hexColor.startsWith('#') &&
        hex.length === 6 &&
        !Number.isNaN(Number(`0x${hex}`))
    )
}

const hexToRgb = (hex: string) => `${hex.match(/\w\w/g)?.map((x) => +`0x${x}`)}`
</script>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        type?: LoaderTypesValues
        bgClass?: string
        cssClass?: string
        shimmerColor?: string
        loading?: boolean
    }>(),
    {
        type: LOADER_TYPES.rectangle,
        bgClass: 'bg-[#c8c8c8]',
        cssClass: '',
        shimmerColor: SHIMMER_COLOR,
    },
)

const { type, bgClass, cssClass, shimmerColor } = toRefs(props)

const shimmerStyle = computed(() => {
    const rgb = isHexColor(shimmerColor.value)
        ? hexToRgb(shimmerColor.value)
        : SHIMMER_COLOR

    return {
        backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, 0.2) 20%, rgba(${rgb}, 0.5) 60%, rgba(${rgb}, 0))`,
    }
})

const loaderClass = computed(() =>
    cssClass.value ? cssClass.value : LOADER_CSS_CLASSES[type.value],
)
</script>

<template>
    <div
        class="relative flex items-center justify-center overflow-hidden"
        :class="[bgClass, loaderClass]"
    >
        <div
            class="shimmer absolute bottom-0 left-0 right-0 top-0"
            :style="shimmerStyle"
        ></div>

        <div v-if="loading" role="status">
            <svg
                aria-hidden="true"
                class="h-9 w-9 animate-spin fill-white text-white/50"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<style scoped>
.shimmer {
    transform: translateX(-100%);
    animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}
</style>
