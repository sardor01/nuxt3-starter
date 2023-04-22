import { createFetch } from '@vueuse/core'
import { useAuthTokenStore } from '~/stores/adminAuth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { getAccessToken } = useAuthTokenStore()

  const baseFetch = $fetch.create({ baseURL: config.public.apiURL })

  const dashboardFetch = createFetch({
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
      dashboardFetch,
    },
  }
})
