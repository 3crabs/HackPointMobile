import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Main/EventsPage.vue'),
  },

  {
    path: '/login',
    component: () => import('pages/Auth/Login.vue'),
    meta: {
      layout: 'login'
    }
  },
  {
    path: '/teams',
    component: () => import('pages/Teams/Teams.vue')
  },
  {
    path: '/team',
    component: () => import('pages/Teams/TeamPoint.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
