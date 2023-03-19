<script setup lang="ts">
const errorDetails = {
  type: '404',
  title: '404.title',
  description: '404.description',
  photo: '/img/errors/404.svg',
}

const { t } = useI18n()

definePageMeta({
  layout: false,
})

useHead({
  title: t(`pages.error.${errorDetails.title}`),
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div
    class="w-full min-h-screen flex justify-center items-center bg-white md:px-24 md:py-20 xl:px-40 xl:py-20"
  >
    <div
      class="w-full h-full flex flex-wrap flex-row justify-center items-center gap-8 rounded-lg py-4 px-10"
    >
      <img :src="errorDetails.photo" alt="Error" class="w-full max-w-md">
      <div class="w-full max-w-md flex flex-col gap-4 text-lg text-center">
        <h1 class="error-heading">
          {{ errorDetails.type }}
        </h1>
        <p>{{ t(`pages.error.${errorDetails.title}`) }}</p>
        <p>{{ t(`pages.error.${errorDetails.description}`) }}</p>
        <div class="flex justify-center mt-4">
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
