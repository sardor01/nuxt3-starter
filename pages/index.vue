<script setup lang="ts">
const msg = ref('Nuxt3 Starter')
msg.value = 1
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center py-10">
    <img src="/nuxt.png" alt="Nuxt 3" class="w-18 h-18 inline-block">
    <h1 class="text-3xl font-semibold">
      {{ msg }}
    </h1>
  </div>
</template>
