export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    if (count.value > 0)
      count.value--
  }

  return { count, doubleCount, increment, decrement }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
