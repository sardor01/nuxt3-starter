<script setup lang="ts">
import { useAdminAuthStore } from '~/stores/adminAuth'

const drawerVisible = ref(false)
const showDrawer = ref(false)
const collapsed = ref(false)
const layoutSiderWidth = ref(270)
const drawerWidth = ref(270)

const router = useRouter()
const { t } = useI18n()
const adminAuthStore = useAdminAuthStore()

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

const handleLogout = () => {
  adminAuthStore.logout(() => {
    router.push('/admin/login')
  })
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
      <AdminSidebarMenu v-if="showDrawer" />
    </ADrawer>
    <ALayoutSider
      :collapsed="collapsed"
      :width="layoutSiderWidth"
      :collapsed-width="0"
      :trigger="null"
      collapsible
      theme="dark"
      class="!sticky top-0 z-[500] h-screen overflow-y-auto"
      breakpoint="lg"
      @breakpoint="onBreakPoint"
    >
      <AdminSidebarMenu v-if="!showDrawer" />
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
        <AButton type="primary" @click="handleLogout">
          {{ t('buttons.logout') }}
        </AButton>
      </ALayoutHeader>
      <ALayoutContent>
        <BaseContainer is="main" class="py-6">
          <slot />
        </BaseContainer>
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>
