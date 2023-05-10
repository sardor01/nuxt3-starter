<script setup lang="ts">
defineProps<{
  collapse: boolean
}>()

const menu = [
  {
    label: 'Dashboard',
    icon: ElIconCirclePlus,
    path: '/dashboard',
    children: [
      {
        label: 'Analytics',
        path: '/dashboard/analytics',
      },
      {
        label: 'Workplace',
        path: '/dashboard/workplace',
      },
    ],
  },
  {
    label: 'Document',
    icon: ElIconDocument,
    path: 'https://vuejs.org',
    external: true,
  },
  {
    label: 'Guide',
    icon: ElIconPosition,
    path: 'https://vuejs.org/guide',
    external: true,
  },
  {
    label: 'Components',
    icon: ElIconShop,
    path: '/components',
    children: [
      {
        label: 'Dialog',
        path: '/components/dialog',
      },
      {
        label: 'Form',
        path: '/components/form',
        children: [
          {
            label: 'All examples',
            path: '/components/form/all',
          },
          {
            label: 'UseForm',
            path: '/components/form/use-form',
          },
          {
            label: 'RefForm',
            path: '/components/form/ref-form',
          },
        ],
      },
      {
        label: 'Table',
        path: '/components/table',
        children: [
          {
            label: 'Basic Example',
            path: '/components/table/basic',
          },
          {
            label: 'UseTable',
            path: '/components/table/use-table',
          },
          {
            label: 'RefTable',
            path: '/components/table/ref-table',
          },
        ],
      },
      {
        label: 'Password Input',
        path: '/components/password-input',
      },
      {
        label: 'Editor',
        path: '/components/editor',
      },
    ],
  },
  {
    label: 'Example',
    icon: ElIconCollection,
    path: '/example',
    children: [
      {
        label: 'Example Dialog',
        path: '/example/dialog',
      },
      {
        label: 'Example Page',
        path: '/example/page',
      },
    ],
  },
  {
    label: 'Error Page',
    icon: ElIconWarningFilled,
    path: '/error',
    children: [
      {
        label: '401',
        path: '/error/401',
      },
      {
        label: '403',
        path: '/error/403',
      },
      {
        label: '404',
        path: '/error/404',
      },
      {
        label: '500',
        path: '/error/500',
      },
    ],
  },
]
</script>

<template>
  <div class="sidebar sticky top-0 h-screen flex-shrink-0 overflow-auto">
    <ElScrollbar wrap-class="sidebar-scrollbar__wrap" always>
      <ElMenu :collapse="collapse" popper-effect="light">
        <template v-for="(menuItem, index) in menu">
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
                >
                  <template #title>{{ subSubMenuItem.label }}</template>
                </ElMenuItem>
              </ElSubMenu>
              <ElMenuItem
                v-else
                :key="`sub-item-${subMenuIndex}`"
                :index="`${index}-${subMenuIndex}`"
              >
                <template #title>{{ subMenuItem.label }}</template>
              </ElMenuItem>
            </template>
          </ElSubMenu>
          <ElMenuItem v-else :key="`item-${index}`" :index="index.toString()">
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
