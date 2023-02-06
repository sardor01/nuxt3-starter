<script setup lang="ts">
const showModal = ref(false)
</script>

<template>
  <div class="py-6 space-y-6">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">
        Buttons:
      </h2>
      <div class="flex items-center gap-2">
        <BaseButton @click="showModal = true">
          Button
        </BaseButton>
        <BaseButton variant="red" size="none" class="w-12 h-12 rounded-full">
          <fa-icon icon="fa-solid fa-magnifying-glass" class="fa-lg" />
        </BaseButton>
        <NuxtLink v-slot="{ href, navigate }" to="/" custom>
          <BaseButton size="link" :href="href" link @click="navigate">
            Custom about page
          </BaseButton>
        </NuxtLink>
      </div>
    </div>

    <BaseModal
      v-model:show="showModal"
      header-text="Modal Example"
      @cancel="showModal = false"
      @confirm="showModal = false"
    >
      <template #body>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident debitis libero eligendi optio repudiandae adipisci molestiae fugiat ex, non, nesciunt aliquam, quia expedita iure magni aut tempora ipsam temporibus numquam deleniti necessitatibus! Dicta, necessitatibus. Accusantium voluptatum eveniet dolorum ad sint, quidem molestias laudantium, corrupti, rem animi quam velit fuga! Nam ad ipsam fugiat dignissimos ullam?
        </p>
      </template>
    </BaseModal>
  </div>
</template>
