import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/todo-list/',
    name: 'todo',
    component: () => import('../views/TodoView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;