import { type InferType, object, string } from 'yup'

export const formSchema = object({
  name: string().required('Name is required'),
  password: string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters'),
})

export const useAdminTokenStore = defineStore('adminToken', () => {
  const accessToken = useCookie('access_token', { maxAge: 86400, path: '/admin' })

  const getAccessToken = () => accessToken.value

  const setAccessToken = (token: string | null) => {
    if (token) {
      accessToken.value = token
    } else {
      accessToken.value = null
    }
  }

  return { getAccessToken, setAccessToken }
})

export const useAdminAuthStore = defineStore('adminAuth', () => {
  const { getAccessToken } = useAdminTokenStore()

  const isLoading = ref(false)
  const isUserLoggedIn = ref(!!getAccessToken())

  const login = async (payload: InferType<typeof formSchema>, onSuccess: () => void) => {
    const { setAccessToken } = useAdminTokenStore()
    const token = `${payload.name}_${payload.password}_1234567890`
    isUserLoggedIn.value = !!token
    setAccessToken(token)
    onSuccess()
  }

  const logout = (callback: () => void) => {
    const { setAccessToken } = useAdminTokenStore()
    isUserLoggedIn.value = false
    setAccessToken(null)
    callback()
  }

  return {
    isLoading,
    isUserLoggedIn,
    login,
    logout,
  }
})
