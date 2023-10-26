import { useAdminAuthStore } from '~/stores/admin/auth'

export default defineNuxtRouteMiddleware((to, _from) => {
    const adminAuthStore = useAdminAuthStore()

    const isUserLoggedIn = adminAuthStore.isUserLoggedIn
    const toPath = to.path
    const adminPath = '/admin'
    const loginPath = '/admin/login'

    if (isUserLoggedIn && toPath === loginPath) {
        return navigateTo(adminPath)
    }
    if (!isUserLoggedIn && toPath !== loginPath) {
        return navigateTo(loginPath)
    }
})
