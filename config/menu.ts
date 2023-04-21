interface Sub {
  id: string
  label: string
  to: string
}

interface Menu {
  id: string
  label: string
  icon: string
  to?: string
  newWindow?: boolean
  subs?: Sub[]
}

const menu: Menu[] = [
  {
    id: 'sliders',
    label: 'sliders',
    icon: 'fa-solid fa-list',
    to: '/admin/sliders',
  },
  {
    id: 'events',
    label: 'events',
    icon: 'fa-solid fa-list',
    subs: [
      {
        id: 'conferences',
        label: 'conferences',
        to: '/admin/events/conferences',
      },
      {
        id: 'seminars',
        label: 'seminars',
        to: '/admin/events/seminars',
      },
      {
        id: 'news',
        label: 'news',
        to: '/admin/events/news',
      },
    ],
  },
  {
    id: 'useful-links',
    label: 'usefulLinks',
    icon: 'fa-solid fa-list',
    to: '/admin/useful-links',
  },
  {
    id: 'participants',
    label: 'participants',
    icon: 'fa-solid fa-list',
    to: '/admin/participants',
  },
  {
    id: 'pages',
    label: 'pages',
    icon: 'fa-solid fa-list',
    to: '/admin/pages',
  },
  {
    id: 'options',
    label: 'options',
    icon: 'fa-solid fa-list',
    to: '/admin/options',
  },
]

export default menu
