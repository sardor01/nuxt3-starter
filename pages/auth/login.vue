<script setup lang="ts">
import { useForm } from 'vee-validate'
import { type InferType, object, string } from 'yup'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'auth',
  title: { value: 'Login', dynamic: true },
})

const auth = useAuthStore()

const formSchema = object({
  name: string().required('Name is required'),
  password: string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters'),
})

const { handleSubmit } = useForm<Partial<InferType<typeof formSchema>>>({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  await auth.login(values)
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
        :loading="auth.isLoading"
      >
        Login
      </AButton>
    </AForm>
  </div>
</template>
