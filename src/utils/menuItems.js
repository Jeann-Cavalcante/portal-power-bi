import { ChartBarHorizontal, ChartDonut, Gear, Users } from "@phosphor-icons/react"

export const menuItems = [
  { name: 'Inicio', path: '/', icon: <ChartDonut size={24} weight="fill" /> },
  { name: 'Usuários', path: '/users', icon: <Users size={24} weight="fill" /> },
  { name: 'Dashboards', path: '/dashboards', icon: <ChartBarHorizontal size={24} weight="fill" /> },
  {
    name: 'Configuração', path: '/config', icon: <Gear size={24} weight="fill" />

  },
]