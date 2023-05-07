<script setup>
definePageMeta({
  title: { value: 'Admin Panel', dynamic: true },
  layout: false,
})

const menu = [
  {
    label: 'Dashboard',
    icon: 'CirclePlus',
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
    icon: 'Document',
    path: 'https://vuejs.org',
    external: true,
  },
  {
    label: 'Guide',
    icon: 'Position',
    path: 'https://vuejs.org/guide',
    external: true,
  },
  {
    label: 'Components',
    icon: 'Shop',
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
    icon: 'Collection',
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
    icon: 'WarningFilled',
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
  <el-container class="h-screen">
    <el-aside width="260px">
      <el-scrollbar class="h-full">
        <el-menu>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><ElIconMessage /></el-icon>Navigator One
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><ElIconMenu /></el-icon>Navigator Two
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><ElIconSetting /></el-icon>Navigator Three
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <div class="p-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure temporibus reiciendis
        non dicta eveniet impedit sequi vel ipsam voluptatem quas, sit perspiciatis, aspernatur
        provident iusto voluptatibus pariatur quidem, ut magni. Corporis voluptas eos eligendi
        soluta repellendus excepturi et quis nihil. Voluptates, at. Blanditiis reiciendis eius, at
        adipisci hic quos illum aliquam enim perferendis amet natus eos eligendi dolorem fuga nam.
        Molestiae, quaerat voluptates officiis autem esse cum cupiditate obcaecati quod quis
        recusandae deleniti excepturi iste debitis nihil incidunt deserunt dolores quas perspiciatis
        dolor fugit eum? Necessitatibus vero optio eligendi, tempora alias eveniet! Fugit, nobis
        velit. Recusandae fuga neque dolor.
      </div>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.el-aside {
  --el-menu-bg-color: #001529;
  --el-menu-text-color: #bfcbd9;
  --el-menu-hover-bg-color: transparent;
  --el-menu-hover-text-color: #ffffff;
  --el-menu-active-color: #ffffff;
  --el-menu-active-bg-color: var(--el-color-primary);

  background-color: var(--el-menu-bg-color);

  .el-menu {
    border-right: 0;
  }

  .el-menu-item:not(.is-active):hover,
  .el-sub-menu__title:hover {
    color: var(--el-menu-hover-text-color);
  }

  .el-menu-item.is-active {
    background-color: var(--el-menu-active-bg-color);
  }
}
</style>
