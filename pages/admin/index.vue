<script setup lang="ts">
definePageMeta({
  layout: 'admin-default',
  middleware: 'admin-auth',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="mb-2 text-4xl font-bold">Admin Panel</h1>
    <p class="text-gray-500">Welcome to the admin panel</p>
  </div>
</template>
