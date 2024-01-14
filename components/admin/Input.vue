<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
  label: string
  placeholder?: string
  formItemClass?: string
}>()

const { t } = useI18n()
const { value, errorMessage } = useField<string | number | undefined>(props.name)
</script>

<template>
  <ElFormItem
    :error="errorMessage && t(errorMessage)"
    :label="label"
    size="large"
    class="app-form-item"
    :class="formItemClass"
    required
    inline-message
  >
    <ElInput v-bind="$attrs" v-model="value" :placeholder="placeholder" />
  </ElFormItem>
</template>
