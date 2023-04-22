<script setup lang="ts">
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
    :label="label"
    :html-for="uid"
    :help="errorMessage"
    :validate-status="errorMessage ? 'error' : ''"
    :rules="{ required }"
    :label-col="{ span: 24 }"
    :wrapper-col="{ span: 24 }"
    :class="formItemClass"
  >
    <AInputPassword :id="uid" v-model:value="value" :size="size" spellcheck="false" />
  </AFormItem>
</template>
