<script setup lang="ts">
import { getFileName } from '~/helpers/functions'

const props = defineProps<{
    name: string
    label: string
    accept: Array<keyof typeof fileCheckTypes>
    limitSize?: number // MB
    defaultUrl?: string
}>()

const { t } = useI18n()
const { value: inputValue, errorMessage: error } = useField<
    File | null | undefined
>(props.name)
const { checkFiles } = useFilesCheck({
    accept: props.accept,
    limitSize: props.limitSize,
})

const assetUrl = import.meta.env.VITE_ASSET_URL

const fileInput = ref<HTMLInputElement>()

const handleChange = () => {
    if (!fileInput.value) return
    const files = checkFiles(fileInput.value.files)
    if (files) inputValue.value = files[0]
    else inputValue.value = null

    fileInput.value.value = ''
    if (!/safari/i.test(navigator.userAgent)) {
        fileInput.value.type = ''
        fileInput.value.type = 'file'
    }
}
</script>

<template>
    <div class="relative flex flex-col items-start justify-start">
        <div class="flex flex-wrap items-center gap-4">
            <input
                ref="fileInput"
                type="file"
                :accept="accept.map((type) => `.${type}`).join(',')"
                class="hidden"
                @change="handleChange"
            />
            <ElButton
                size="large"
                :type="error ? 'danger' : 'primary'"
                plain
                @click="fileInput?.click()"
            >
                {{ label }}
            </ElButton>
            <span v-if="inputValue" class="text-[var(--el-text-color-regular)]">
                {{ inputValue.name }}
            </span>
        </div>
        <span v-if="error" class="m-1 text-xs text-[var(--el-color-danger)]">{{
            t(error)
        }}</span>
        <ElButton
            v-if="defaultUrl && !inputValue"
            tag="a"
            type="primary"
            link
            class="mt-1"
            :href="`${assetUrl}/${defaultUrl}`"
            target="_blank"
            download
        >
            {{ getFileName(defaultUrl) }}
        </ElButton>
    </div>
</template>
