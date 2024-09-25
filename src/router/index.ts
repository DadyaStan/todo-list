import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'all',
    component: () => import('../views/AllView.vue'),
  },
  {
    path: '/inWork',
    name: 'inWork',
    component: () => import('../views/InWorkView.vue'),
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import('../views/CompletedView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;