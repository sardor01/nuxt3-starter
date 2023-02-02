<script setup lang="ts">
useHead({
  title: 'Nuxt3 Starter',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
