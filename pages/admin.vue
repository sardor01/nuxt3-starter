<script setup lang="ts">
definePageMeta({
  title: { value: 'Admin Panel', dynamic: true },
  layout: 'admin-default',
  middleware: 'admin-auth',
})
</script>

<template>
  <NuxtPage />
</template>

<style lang="less">
@import 'ant-design-vue/dist/antd.less';
@import 'assets/css/custom.less';
</style>
