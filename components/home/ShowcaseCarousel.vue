<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
</script>

<template>
  <Splide :options="{ heightRatio: 0.5, height: 500 }" aria-label="My Favorite Images">
    <SplideSlide>
      <img
        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Sample 1"
        class="w-full h-full object-cover"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Sample 2"
        class="w-full h-full object-cover"
      >
    </SplideSlide>
  </Splide>
</template>
