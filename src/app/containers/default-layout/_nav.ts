import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Sistema'
  },
  {
    name: 'Medicos',
    url: '/medicos',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Facturas',
    url: '/facturas',
    iconComponent: { name: 'cil-pencil' }
  },

  {
    name: 'Egresos',
    url: '/egresos',
    iconComponent: { name: 'cil-pencil' }
  },

  {
    name: 'Citas',
    url: '/citas',
    iconComponent: { name: 'cil-pencil' }
  },










];
