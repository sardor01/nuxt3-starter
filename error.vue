<script setup lang="ts">
const props = defineProps<{
  error: {
    url: string
    statusCode: 401 | 403 | 404 | 500
    statusMessage: string
    message: string
    stack: string
  }
}>()

useHead({
  title: props.error.statusMessage,
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/nuxt.png',
    },
  ],
})

const { t } = useI18n()

const errorDetails: Record<
  401 | 403 | 404 | 500,
  {
    type: string
    title: string
    description: string
    photo: string
  }
> = {
  401: {
    type: '401',
    title: '401.title',
    description: '401.description',
    photo: '/img/errors/401.svg',
  },
  403: {
    type: '403',
    title: '403.title',
    description: '403.description',
    photo: '/img/errors/403.svg',
  },
  404: {
    type: '404',
    title: '404.title',
    description: '404.description',
    photo: '/img/errors/404.svg',
  },
  500: {
    type: '500',
    title: '500.title',
    description: '500.description',
    photo: '/img/errors/500.svg',
  },
}

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div
    class="flex min-h-screen w-full items-center justify-center bg-white md:px-24 md:py-20 xl:px-40 xl:py-20"
  >
    <div
      class="flex h-full w-full flex-row flex-wrap items-center justify-center gap-8 rounded-lg py-4 px-10"
    >
      <img :src="errorDetails[error.statusCode].photo" alt="Error" class="w-full max-w-md" />
      <div class="flex w-full max-w-md flex-col gap-4 text-center text-lg">
        <h1 class="error-heading">
          {{ errorDetails[error.statusCode].type }}
        </h1>
        <p>{{ t(`pages.error.${errorDetails[error.statusCode].title}`) }}</p>
        <p>{{ t(`pages.error.${errorDetails[error.statusCode].description}`) }}</p>
        <div class="mt-4 flex justify-center">
          <BaseButton variant="red" @click="handleError">
            {{ t('buttons.backHome') }}
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-heading {
  font-size: 150px;
  font-weight: 700;
  line-height: 1;
}
</style>
