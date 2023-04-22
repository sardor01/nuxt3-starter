<script setup lang="ts">
definePageMeta({
  layout: 'admin-default',
  middleware: 'admin-auth',
})

const editorValue = ref('')
</script>

<template>
  <div class="bg-white p-6">
    <ARow :gutter="[24, 24]">
      <ACol :xs="24" :xl="16">
        <AdminFileUpload label="Choose an image" />
      </ACol>
      <ACol :xs="24" :xl="16">
        <AdminTinymceEditor v-model:value="editorValue" />
      </ACol>
    </ARow>
  </div>
</template>
