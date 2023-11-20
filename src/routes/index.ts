import { lazy } from 'react';
const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'))
const Chart = lazy(() => import('../pages/Chart'));

const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: ECommerce,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
];

const routes = [...coreRoutes];
export default routes;
