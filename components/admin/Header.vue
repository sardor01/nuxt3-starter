<script setup lang="ts">
import { useAdminMenuStore } from '~/stores/admin/menu'
import { useAdminAuthStore } from '~/stores/admin/auth'

const store = useAdminMenuStore()
const { logout } = useAdminAuthStore()

watch(() => store.collapse, store.watchCollapse)
</script>

<template>
    <ElHeader class="flex items-center justify-between">
        <ElButton class="trigger" text @click="store.toggleCollapse">
            <ElIcon size="20">
                <MenuUnfoldIcon v-if="store.collapse" />
                <MenuFoldIcon v-else />
            </ElIcon>
        </ElButton>
        <ElButton type="primary" class="mr-4" @click="logout">Logout</ElButton>
    </ElHeader>
</template>

<style lang="scss">
.el-header {
    --el-header-padding: 4px;
    border-bottom: 1px solid var(--el-border-color);
}

.el-button.is-text.trigger {
    height: calc(var(--el-header-height) - 12px);
    width: calc(var(--el-header-height) - 12px);
    display: flex;
    padding: 10px;
    cursor: pointer;
    align-items: center;
    color: var(--el-color-black);
    border-radius: 0;

    &:hover,
    &:focus {
        background-color: transparent;
    }
}
</style>
