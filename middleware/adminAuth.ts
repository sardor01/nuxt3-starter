import { useAdminAuthStore } from '~/stores/adminAuth'

export default defineNuxtRouteMiddleware((to, _from) => {
  const adminAuthStore = useAdminAuthStore()

  const isUserLoggedIn = adminAuthStore.isUserLoggedIn
  const toPath = to.path

  if (isUserLoggedIn && toPath === '/admin/login') {
    return navigateTo('/admin')
  }
  if (!isUserLoggedIn && toPath !== '/admin/login') {
    return navigateTo('/admin/login')
  }
})
