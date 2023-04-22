<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: string
    name: string
    label: string
    type?: string
    size?: 'small' | 'middle' | 'large'
    formItemClass?: string
    required?: boolean
  }>(),
  {
    type: 'text',
    size: 'middle',
    required: true,
  },
)

const { value, errorMessage } = useField<string | undefined>(props.name)
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
    <AInput
      v-bind="$attrs"
      :id="uid"
      v-model:value="value"
      :type="type"
      :size="size"
      spellcheck="false"
    />
  </AFormItem>
</template>
