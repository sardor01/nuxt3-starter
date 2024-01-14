<script setup lang="ts">
import { formSchema, useAdminAuthStore } from '~/stores/admin/auth'

definePageMeta({
  layout: false,
  middleware: 'admin-auth',
})

const store = useAdminAuthStore()
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(formSchema),
})

const onSubmit = handleSubmit((values) => {
  store.login(values)
})
</script>

<template>
  <div
    class="flex min-h-screen w-full items-center justify-center bg-cover bg-no-repeat"
    style="background-image: url('/img/login-bg.jpg')"
  >
    <BaseContainer>
      <ElForm
        label-position="top"
        class="mx-auto my-6 max-w-xl rounded-[var(--el-border-radius-base)] bg-white p-6 md:my-8 md:p-8 lg:my-10 lg:p-10"
        @submit="onSubmit"
      >
        <AdminInput name="name" label="Login" />
        <AdminInput name="password" type="password" label="Password" show-password />
        <ElButton type="primary" size="large" native-type="submit" class="w-full" :loading="store.isLoading">
          Login
        </ElButton>
      </ElForm>
    </BaseContainer>
  </div>
</template>
