import { type InferType, object, string } from 'yup'

export const validationSchema = object({
  name: string().required('Name is required'),
  password: string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters'),
})
export type LoginPayload = InferType<typeof validationSchema>

const useAuthTokenStore = defineStore('authToken', () => {
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

export const useAdminAuthStore = defineStore({
  id: 'adminAuth',
  state: () => {
    const { getAccessToken } = useAuthTokenStore()
    return {
      isUserLoggedIn: !!getAccessToken(),
      isLoading: false,
    }
  },
  actions: {
    async login(payload: LoginPayload, onSuccess: () => void) {
      const { setAccessToken } = useAuthTokenStore()
      const token = `${payload.name}_${payload.password}_1234567890`
      this.isUserLoggedIn = !!token
      setAccessToken(token)
      onSuccess()
    },
  },
})
