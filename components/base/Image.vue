<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    type?: 'img' | 'person'
  }>(),
  {
    src: '',
    alt: '',
    type: 'img',
  }
)
const imgUrl = computed(() => {
  if (props.src) return props.src
  return `/img/${props.type}NotFound.png`
})
</script>

<template>
  <img :src="imgUrl" :alt="alt" :onerror="`this.src='/img/${props.type}NotFound.png'`" />
</template>
