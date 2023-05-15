<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { type BlobInfo, useAdminFileManagerStore } from '~/stores/admin/fileManager'

const props = withDefaults(
  defineProps<{
    modelValue: any
    cloudChannel?: string
  }>(),
  { cloudChannel: '5' },
)

const emit = defineEmits(['update:modelValue'])

const config = useRuntimeConfig()
const { uploadImage } = useAdminFileManagerStore()

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const handleTinyImageUpload = (blobInfo: BlobInfo, success: any, failure: any) => {
  uploadImage(blobInfo, success, failure)
}
</script>

<template>
  <Editor
    v-model="inputValue"
    :api-key="config.public.tinymceKey"
    :value="modelValue"
    :cloud-channel="cloudChannel"
    class="h-80 w-full border border-gray"
    :init="{
      height: 320,
      menubar: true,
      images_upload_handler: handleTinyImageUpload,
      plugins: [
        'advlist autolink lists code table link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
        'undo redo | code | table | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
    }"
  />
</template>
