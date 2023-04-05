<script setup lang="ts">
import { useField } from 'vee-validate'

const props = withDefaults(
  defineProps<{
    id: string
    name: string
    label: string
    size?: 'small' | 'middle' | 'large'
    formItemClass?: string
    required?: boolean
  }>(),
  {
    size: 'middle',
    required: true,
  },
)

const { value, errorMessage } = useField<string | number>(props.name)
const { uid } = useUid(props.id)
</script>

<template>
  <AFormItem
    :label="label as any"
    :html-for="uid"
    :help="errorMessage as any"
    :validate-status="errorMessage ? 'error' : ''"
    :rules="{ required }"
    :label-col="{ span: 24 }"
    :wrapper-col="{ span: 24 }"
    :class="formItemClass"
  >
    <AInputPassword :id="uid" v-model:value="value" :size="size" spellcheck="false" />
  </AFormItem>
</template>
