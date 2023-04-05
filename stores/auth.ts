interface User {
  name: string
  role: string
}

const useAuthTokenStore = defineStore('authToken', () => {
  const cookie = useCookie('access_token')

  const getToken = () => cookie.value
  const setToken = (token: string | null) => {
    if (token) {
      cookie.value = token
    } else {
      cookie.value = null
    }
  }

  return { getToken, setToken }
})

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    const { getToken } = useAuthTokenStore()
    return {
      isUserLoggedIn: !!getToken(),
      currentUser: <User | null>null,
      isLoading: false,
    }
  },
  actions: {
    async login(payload: { name: string; password: string }) {
      console.log('login payload', payload)
    },
  },
})
