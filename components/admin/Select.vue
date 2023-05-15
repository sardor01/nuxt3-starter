<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
/* eslint-disable import/first */
import { useField } from 'vee-validate'
import type { SelectOption } from '~/helpers/types'

const props = defineProps<{
  options: SelectOption[]
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
    <ElSelect
      v-bind="$attrs"
      v-model="value"
      :placeholder="placeholder"
      size="large"
      class="w-full"
    >
      <ElOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </ElSelect>
  </ElFormItem>
</template>
