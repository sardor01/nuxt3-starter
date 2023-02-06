<template>
  <div class="py-6 space-y-6">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">
        Buttons:
      </h2>
      <div class="flex items-center gap-2">
        <BaseButton>Button</BaseButton>
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
  </div>
</template>
