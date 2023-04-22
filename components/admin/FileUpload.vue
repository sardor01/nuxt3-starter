<script setup lang="ts">
import type { UploadProps } from 'ant-design-vue'
import { getFileName, getUid } from '~/helpers/functions'

const props = withDefaults(
  defineProps<{
    label: string
    accept?: string
    images?: string[]
    formItemClass?: string
    multiple?: boolean
  }>(),
  {
    accept: '.jpeg,.jpg,.png,.webp',
    images: () => [],
  },
)
const emit = defineEmits(['change'])

const config = useRuntimeConfig()

const defaultImages = toRef(props, 'images')
const fileList = ref<UploadProps['fileList']>([])

watch(
  () => defaultImages.value,
  (value) => {
    if (value.length && value.every((image) => Boolean(image))) {
      fileList.value = value.map((image) => ({
        uid: getUid(),
        name: getFileName(image),
        fileName: image,
        status: 'done',
        url: `${config.public.assetURL}/${image}`,
        thumbUrl: `${config.public.assetURL}/${image}`,
      }))
    }
  },
  { deep: true },
)

watch(fileList, (value) => {
  emit('change', value)
})
</script>

<template>
  <AUploadDragger
    v-model:file-list="fileList"
    list-type="picture"
    :accept="accept"
    :multiple="multiple"
    :max-count="multiple ? 8 : 1"
    class="flex items-center justify-center"
    :before-upload="() => false"
  >
    <p class="ant-upload-drag-icon">
      <FontAwesomeIcon icon="fa-solid fa-upload" class="anticon" />
    </p>
    <p class="ant-upload-text">
      <span class="font-medium text-antd-primary">{{ label }}</span> or Drag & Drop here
    </p>
  </AUploadDragger>
</template>
