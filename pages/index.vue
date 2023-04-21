<script setup lang="ts">
definePageMeta({
  title: 'menu.home',
})

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: 'fa-solid fa-download',
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: 'fa-solid fa-lock',
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: 'fa-solid fa-rotate',
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: 'fa-solid fa-fingerprint',
  },
]
</script>

<template>
  <div class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-blue">Deploy faster</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p class="mt-4 text-lg leading-8 text-gray">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas
          a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-dark">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue"
              >
                <FontAwesomeIcon :icon="feature.icon" size="lg" class="text-white" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 text-base leading-7 text-gray">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
