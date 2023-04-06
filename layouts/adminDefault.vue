<script setup lang="ts">
const drawerVisible = ref(false)
const showDrawer = ref(false)
const collapsed = ref(false)
const layoutSiderWidth = ref(270)
const drawerWidth = ref(270)

const handleTrigger = () => {
  if (showDrawer.value) {
    collapsed.value = true
    drawerVisible.value = !drawerVisible.value
  } else {
    drawerVisible.value = false
    collapsed.value = !collapsed.value
  }
}

const onBreakPoint = (closed: boolean) => {
  drawerVisible.value = false
  if (closed) {
    showDrawer.value = true
    collapsed.value = true
    layoutSiderWidth.value = 0
    drawerWidth.value = 270
  } else {
    showDrawer.value = false
    collapsed.value = false
    layoutSiderWidth.value = 270
    drawerWidth.value = 0
  }
}
</script>

<template>
  <ALayout class="min-h-screen" :has-sider="true">
    <ADrawer
      v-model:visible="drawerVisible"
      class="select-none"
      :width="drawerWidth"
      :closable="false"
      placement="left"
    >
      <AdminTheSidebarMenu v-if="showDrawer" />
    </ADrawer>
    <ALayoutSider
      :collapsed="collapsed"
      :width="layoutSiderWidth"
      :collapsed-width="0"
      :trigger="null"
      collapsible
      theme="dark"
      class="d z-[500] min-h-screen overflow-y-auto"
      breakpoint="lg"
      @breakpoint="onBreakPoint"
    >
      <AdminTheSidebarMenu v-if="!showDrawer" />
    </ALayoutSider>

    <ALayout class="min-h-screen" :class="{ active: !collapsed }">
      <ALayoutHeader class="flex items-center justify-between !bg-white !px-6">
        <AButton
          type="text"
          shape="circle"
          size="large"
          class="!flex items-center justify-center !border-2"
          @click="handleTrigger"
        >
          <MenuFoldIcon v-if="showDrawer ? drawerVisible : !collapsed" class="h-5 w-5" />
          <MenuUnfoldIcon v-else class="h-5 w-5" />
        </AButton>
        <div class="flex items-center">
          <AButton type="primary">Logout</AButton>
        </div>
      </ALayoutHeader>
      <ALayoutContent>
        <main class="main-layout-content-wrap">
          <RouterView />
        </main>
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>
