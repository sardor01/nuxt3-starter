<script setup lang="ts">
import { mixed, object, string } from 'yup'

definePageMeta({
  layout: 'default-admin',
  middleware: 'admin-auth',
})

const languages = ["O'zbek", 'Русский', 'English']
const statusList = ['Registered', 'Accepted', 'Declined']

const formSchema = object({
  fullname: string().required('help.fieldRequired'),
  description: string().required('help.fieldRequired'),
  current_language: string().required('help.fieldRequired'),
  status: string().required('help.fieldRequired'),
  content: string().required('help.fieldRequired'),
  template_file: mixed<File>().required('help.fieldRequired'),
})

const { handleSubmit } = useForm({ validationSchema: toTypedSchema(formSchema) })

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <ElForm label-position="top" @submit="onSubmit">
    <ElRow :gutter="20">
      <ElCol :xs="24" :xl="16">
        <AdminInput name="fullname" label="Fullname" placeholder="Elon Musk" />
        <AdminInput
          name="description"
          type="textarea"
          label="Description"
          :autosize="{ minRows: 4 }"
        />
        <AdminSelect
          :options="languages.map((i) => ({ label: i, value: i.toLowerCase() }))"
          name="current_language"
          label="Study language"
        />
        <AdminSelect
          :options="statusList.map((i) => ({ label: i, value: i.toLowerCase() }))"
          name="status"
          label="Status"
        />
        <AdminTinymceEditor name="content" label="Content" />
        <AdminUpload
          name="template_file"
          label="Upload template file"
          :accept="['docx', 'mp4']"
          class="mb-6"
        />
        <ElButton type="primary" size="large" native-type="submit">Create</ElButton>
      </ElCol>
    </ElRow>
  </ElForm>
</template>
