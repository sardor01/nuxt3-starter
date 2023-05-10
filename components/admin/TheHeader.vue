<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const collapse = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <ElHeader class="flex items-center">
    <ElButton class="trigger" text @click="collapse = !collapse">
      <ElIcon size="20">
        <MenuUnfoldIcon v-if="collapse" />
        <MenuFoldIcon v-else />
      </ElIcon>
    </ElButton>
  </ElHeader>
</template>

<style lang="scss">
.el-header {
  --el-header-padding: 4px;
  border-bottom: 1px solid var(--el-border-color);
}

.el-button.is-text.trigger {
  height: calc(var(--el-header-height) - 8px);
  width: calc(var(--el-header-height) - 8px);
  display: flex;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  color: var(--el-color-black);
  border-radius: 0;

  &:hover,
  &:focus {
    background-color: transparent;
  }
}
</style>
