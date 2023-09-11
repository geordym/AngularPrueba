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
    name: 'Ingresos',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Egresos',
    url: '/theme/buttons',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },






];
