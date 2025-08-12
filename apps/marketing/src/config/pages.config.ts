export type PageConfig = {
  title: string
  path: string
  icon?: string
  layout?: 'default' | 'dashboard' | 'auth'
  showHeader?: boolean
  showFooter?: boolean
}

export const pagesConfig: PageConfig[] = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
    layout: 'default',
    showHeader: true,
    showFooter: true,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    layout: 'dashboard',
    showHeader: false,
    showFooter: false,
  },
]