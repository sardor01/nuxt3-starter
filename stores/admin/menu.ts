export interface MenuItem {
  label: string
  path: string
  external?: boolean
  icon?: string
  children?: MenuItem[]
}

export const useAdminMenuStore = defineStore('adminMenu', () => {
  const isSmallScreen = useMediaQuery('(max-width: 1023.9px)')

  const collapse = ref(isSmallScreen.value)

  const toggleCollapse = () => {
    collapse.value = !collapse.value
  }

  const handleClickOutside = () => {
    if (isSmallScreen.value) {
      collapse.value = true
    }
  }

  const watchCollapse = (value: boolean) => {
    if (isSmallScreen.value && !value) {
      document.documentElement.classList.add('overflow-hidden')
    }
  }

  return {
    collapse,
    toggleCollapse,
    handleClickOutside,
    watchCollapse,
  }
})
