<script setup lang="ts">
const collapse = ref(false)
</script>

<template>
  <ElContainer class="min-h-screen">
    <AdminTheSidebar :collapse="collapse" />

    <ElContainer direction="vertical">
      <AdminTheHeader v-model="collapse" />
      <ElMain>
        <BaseContainer>
          <slot />
        </BaseContainer>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
