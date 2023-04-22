import { createFetch } from '@vueuse/core'
import { useAdminTokenStore } from '~/stores/admin/auth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { getAccessToken } = useAdminTokenStore()

  const baseFetch = $fetch.create({ baseURL: config.public.apiURL })

  const adminFetch = createFetch({
    baseUrl: `${config.public.apiURL}/dashboard`,
    options: {
      beforeFetch: ({ options }) => {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        }

        return { options }
      },
    },
  })

  return {
    provide: {
      baseFetch,
      adminFetch,
    },
  }
})
