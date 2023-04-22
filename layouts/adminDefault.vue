<script setup lang="ts">
import { useAdminAuthStore } from '~/stores/admin/auth'

const drawerVisible = ref(false)
const showDrawer = ref(false)
const collapsed = ref(false)
const layoutSiderWidth = ref(270)
const drawerWidth = ref(270)

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const adminAuthStore = useAdminAuthStore()

const isGuest = computed(() => route.meta.isGuest)

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
  <ALayout has-sider>
    <main
      v-if="isGuest"
      class="flex min-h-screen w-full items-start justify-center bg-[#c8d8e4] py-28"
    >
      <slot />
    </main>
    <template v-else>
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
        class="!sticky top-0 z-[500] h-screen overflow-y-auto"
        breakpoint="lg"
        @breakpoint="onBreakPoint"
      >
        <AdminTheSidebarMenu v-if="!showDrawer" />
      </ALayoutSider>

      <ALayout :class="{ active: !collapsed }">
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
    </template>
  </ALayout>
</template>

<style lang="less">
@import 'ant-design-vue/dist/antd.less';
@import 'assets/css/custom.less';
</style>
