<script setup lang="ts">
import menu from '~/config/menu'

const openKeys = ref<string[]>([])
const selectedKeys = ref<string[]>([])
</script>

<template>
  <AMenu
    v-model:default-selected-keys="selectedKeys"
    v-model:openKeys="openKeys"
    theme="dark"
    mode="inline"
  >
    <template v-for="(menuItem, index) in menu">
      <ASubMenu
        v-if="Array.isArray(menuItem.subs)"
        :key="menuItem.id"
        :style="{ order: `${index + 1}` }"
      >
        <template #title>
          <FontAwesomeIcon :icon="menuItem.icon" size="lg" />
          <span class="ml-3 capitalize">{{ menuItem.label }}</span>
        </template>
        <AMenuItem v-for="sub in menuItem.subs" :key="sub.id" class="!my-0 first:!mt-1 last:!mb-1">
          <RouterLink :to="sub.to" class="capitalize">{{ sub.label }}</RouterLink>
        </AMenuItem>
      </ASubMenu>
      <AMenuItem v-if="!menuItem.subs" :key="menuItem.id" :style="{ order: `${index + 1}` }">
        <RouterLink v-if="!menuItem.newWindow" :to="menuItem.to || '/'">
          <FontAwesomeIcon :icon="menuItem.icon" size="lg" />
          <span class="ml-3 capitalize">{{ menuItem.label }}</span>
        </RouterLink>

        <a v-else :href="menuItem.to" target="_blank">
          <FontAwesomeIcon :icon="menuItem.icon" size="lg" />
          <span class="ml-3 capitalize">{{ menuItem.label }}</span>
        </a>
      </AMenuItem>
    </template>
  </AMenu>
</template>
