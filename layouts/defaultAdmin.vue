<script setup lang="ts">
const collapse = ref(false)
</script>

<template>
  <ElContainer class="min-h-screen">
    <AdminSidebar :collapse="collapse" />

    <ElContainer direction="vertical">
      <AdminHeader v-model="collapse" />
      <ElMain>
        <BaseContainer>
          <slot />
        </BaseContainer>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
