import type { RouteLocationRaw } from 'vue-router'

export interface Link {
    id: string
    title: string
    to: RouteLocationRaw
    dynamic?: boolean
}

export const useSiteLinks = () => {
    const headerLinks: Link[] = []

    return { headerLinks }
}
