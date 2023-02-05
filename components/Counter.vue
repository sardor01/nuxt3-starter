<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const counterStore = useCounterStore()
const { increment, decrement } = counterStore
const { count } = storeToRefs(counterStore)
</script>

<template>
  <div class="w-full mt-8 flex justify-center">
    <span ref="counter" class="text-3xl font-bold">{{ count }}</span>
  </div>
  <div class="w-full mt-4 flex flex-wrap flex-row space-x-4 justify-center">
    <button
      class="text-md font-medium bg-gray-500 hover:bg-gray-600 transition py-1 px-4 text-white rounded drop-shadow-xl" @click="decrement"
    >
      -
    </button>
    <button class="text-md font-medium bg-gray-500 hover:bg-gray-600 transition py-1 px-4 text-white rounded drop-shadow-xl" @click="increment">
      +
    </button>
  </div>
  <div class="w-full mt-4 flex flex-row space-x-4 justify-center">
    <button class="text-md font-medium bg-red-500 hover:bg-red-600 transition py-1 px-4 text-white rounded drop-shadow-xl" @click="count = 0">
      Reset
    </button>
  </div>
</template>
