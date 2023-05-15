<script setup lang="ts">
import { useAdminMenuStore } from '~/stores/admin/menu'

const route = useRoute()
const store = useAdminMenuStore()

const sidebarMenu = ref<HTMLElement>()

onClickOutside(sidebarMenu, store.handleClickOutside)
</script>

<template>
  <div
    class="sidebar top-0 z-navigationDrawer h-screen flex-shrink-0 overflow-auto"
    :class="{ 'sidebar--collapse': store.collapse }"
  >
    <ElScrollbar wrap-class="sidebar-scrollbar__wrap">
      <ElMenu
        ref="sidebarMenu"
        class="sidebar-menu"
        :collapse="store.collapse"
        :collapse-transition="false"
        router
      >
        <template v-for="(menuItem, index) in store.menu">
          <ElSubMenu v-if="menuItem.children" :key="`sub-${index}`" :index="index.toString()">
            <template #title>
              <ElIcon><component :is="menuItem.icon" /></ElIcon>
              <span>{{ menuItem.label }}</span>
            </template>
            <template v-for="(subMenuItem, subMenuIndex) in menuItem.children">
              <ElSubMenu
                v-if="subMenuItem.children"
                :key="`sub-sub-${subMenuIndex}`"
                :index="`${index}-${subMenuIndex}`"
              >
                <template #title>{{ subMenuItem.label }}</template>
                <ElMenuItem
                  v-for="(subSubMenuItem, subSubMenuIndex) in subMenuItem.children"
                  :key="subSubMenuIndex"
                  :index="`${index}-${subMenuIndex}-${subSubMenuIndex}`"
                  :route="subSubMenuItem.path"
                  :class="{ 'is-active': route.path === subSubMenuItem.path }"
                >
                  <template #title>{{ subSubMenuItem.label }}</template>
                </ElMenuItem>
              </ElSubMenu>
              <ElMenuItem
                v-else
                :key="`sub-item-${subMenuIndex}`"
                :index="`${index}-${subMenuIndex}`"
                :route="subMenuItem.path"
                :class="{ 'is-active': route.path === subMenuItem.path }"
              >
                <template #title>{{ subMenuItem.label }}</template>
              </ElMenuItem>
            </template>
          </ElSubMenu>
          <ElMenuItem
            v-else
            :key="`item-${index}`"
            :index="index.toString()"
            :route="menuItem.path"
            :class="{ 'is-active': route.path === menuItem.path }"
          >
            <ElIcon><component :is="menuItem.icon" /></ElIcon>
            <template #title>{{ menuItem.label }}</template>
          </ElMenuItem>
        </template>
      </ElMenu>
    </ElScrollbar>
  </div>
</template>

<style lang="scss">
.sidebar {
  --el-menu-bg-color: #001529;
  --el-menu-text-color: #bfcbd9;
  --el-menu-hover-bg-color: transparent;
  --el-menu-hover-text-color: #ffffff;
  --el-menu-active-color: #ffffff;
  --el-menu-active-bg-color: var(--el-color-primary);
  --el-menu-item-height: 50px;
  --el-menu-sub-item-height: 50px;

  .el-menu {
    border-right: 0;
  }

  .el-menu:not(.el-menu--collapse) {
    width: 260px;
  }

  .el-menu-item:not(.is-active):hover,
  .el-sub-menu__title:hover {
    color: var(--el-menu-hover-text-color);
  }

  .el-menu-item.is-active {
    background-color: var(--el-menu-active-bg-color);
  }

  .sidebar-scrollbar__wrap {
    background-color: var(--el-menu-bg-color);
  }
}
</style>

<style lang="scss" scoped>
.sidebar {
  position: sticky;

  @media (max-width: 1023.9px) {
    position: fixed;

    &:not(&--collapse)::before {
      content: '';
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &-menu.el-menu--collapse {
      width: 0;
    }
  }
}
</style>
