interface MenuItem {
  label: string
  path: string
  external?: boolean
  icon?: any
  children?: MenuItem[]
}

export const useAdminMenuStore = defineStore('adminMenu', () => {
  const menu = markRaw<MenuItem[]>([
    {
      label: 'Educational Stages',
      path: '/admin/educational-stages',
      icon: ElIconDocument,
    },
    {
      label: 'Educational Forms',
      path: '/admin/educational-forms',
      icon: ElIconCollection,
    },
    {
      label: 'Educational Directions',
      path: '/admin/educational-directions',
      icon: ElIconPosition,
    },
    {
      label: 'Study Courses',
      path: '/admin/study-courses',
      icon: ElIconNotebook,
    },
    {
      label: 'Tariffs',
      path: '/admin/tariffs',
      icon: ElIconMoney,
    },
    {
      label: 'Reception Periods',
      path: '/admin/reception-periods',
      icon: ElIconCalendar,
    },
    {
      label: 'Appeals',
      path: '/admin/appeals',
      icon: ElIconEdit,
    },
  ])

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
    menu,
    collapse,
    toggleCollapse,
    handleClickOutside,
    watchCollapse,
  }
})
