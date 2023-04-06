<script setup lang="ts">
import { useForm } from 'vee-validate'
import { type LoginPayload, useAdminAuthStore, validationSchema } from '~/stores/adminAuth'

definePageMeta({
  layout: 'auth',
})

const router = useRouter()
const adminAuthStore = useAdminAuthStore()

const { handleSubmit } = useForm<LoginPayload>({ validationSchema })

const onSubmit = handleSubmit(async (values) => {
  await adminAuthStore.login(values, () => {
    router.push('/admin')
  })
})
</script>

<template>
  <div class="mx-auto w-full max-w-lg bg-white p-8">
    <AForm class="custom-ant-form" @submit.prevent="onSubmit">
      <h1 class="mb-2 text-center text-3xl font-bold">Admin Panel</h1>
      <VeeInput id="name" name="name" label="Full name" size="large" />
      <VeePasswordInput id="password" name="password" label="Password" size="large" />
      <AButton
        type="primary"
        html-type="submit"
        size="large"
        class="mt-2 w-full"
        :loading="adminAuthStore.isLoading"
      >
        Login
      </AButton>
    </AForm>
  </div>
</template>
