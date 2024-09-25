import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/todo-list/',
    name: 'all',
    component: () => import('../views/AllView.vue'),
  },
  {
    path: '/todo-list/inWork',
    name: 'inWork',
    component: () => import('../views/InWorkView.vue'),
  },
  {
    path: '/todo-list/completed',
    name: 'completed',
    component: () => import('../views/CompletedView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;