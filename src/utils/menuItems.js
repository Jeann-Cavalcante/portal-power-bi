import { ChartBarHorizontal, ChartDonut, Gear, Users } from "@phosphor-icons/react"

export const menuItems = [
  { id: 1, name: 'Inicio', path: '/', icon: <ChartDonut size={24} weight="fill" /> },
  { id: 2, name: 'Usuários', path: '/users', icon: <Users size={24} weight="fill" /> },
  { id: 3, name: 'Dashboards', path: '/dashboards', icon: <ChartBarHorizontal size={24} weight="fill" /> },
  {
    id: 4, name: 'Configuração', path: '/config', icon: <Gear size={24} weight="fill" />

  },
]