import { type InferType, object, string } from 'yup'

export const formSchema = object({
    name: string().required('help.fieldRequired'),
    password: string()
        .required('help.fieldRequired')
        .min(4, 'help.passwordMin4Length'),
})

export const useAdminTokenStore = defineStore('adminToken', () => {
    const accessToken = useCookie('access_token', {
        maxAge: 86400,
        path: '/admin',
    })

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
    const router = useRouter()
    const { getAccessToken } = useAdminTokenStore()

    const isLoading = ref(false)
    const isUserLoggedIn = ref(!!getAccessToken())

    const login = async (payload: InferType<typeof formSchema>) => {
        const { setAccessToken } = useAdminTokenStore()
        const token = `${payload.name}_${payload.password}_1234567890`
        isUserLoggedIn.value = !!token
        setAccessToken(token)
        router.push('/admin')
    }

    const logout = () => {
        const { setAccessToken } = useAdminTokenStore()
        isUserLoggedIn.value = false
        setAccessToken(null)
        router.push('/admin/login')
    }

    return {
        isLoading,
        isUserLoggedIn,
        login,
        logout,
    }
})
