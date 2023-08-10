<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { type BlobInfo, useAdminFileManagerStore } from '~/stores/admin/fileManager'

const props = withDefaults(
  defineProps<{
    name: string
    label: string
    formItemClass?: string
    cloudChannel?: string
  }>(),
  { cloudChannel: '5' },
)

const config = useRuntimeConfig()
const { t } = useI18n()
const { value, errorMessage } = useField<string | undefined>(props.name)
const { uploadImage } = useAdminFileManagerStore()

const handleTinyImageUpload = (blobInfo: BlobInfo, success: any, failure: any) => {
  uploadImage(blobInfo, success, failure)
}
</script>

<template>
  <ElFormItem
    :error="errorMessage && t(errorMessage)"
    :label="label"
    size="large"
    class="app-form-item"
    :class="formItemClass"
    required
    inline-message
  >
    <Editor
      v-model="value"
      :api-key="config.public.tinymceKey"
      :cloud-channel="cloudChannel"
      class="h-80 w-full border border-[var(--el-border-color)]"
      :init="{
        width: '100%',
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
  </ElFormItem>
</template>
