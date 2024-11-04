import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/auth/LoginView.vue';
import SignUpView from '../views/auth/SignUpView.vue';

const routes = [
  {
    path: '/todo-list/',
    name: 'auth',
    children: [
      {
        path: 'login',
        component: LoginView
      },
      {
        path: 'sign-up',
        component: SignUpView
      }
    ]
  },
  {
    path: '/todo-list/todo',
    name: 'todo',
    component: () => import('../views/TodoView.vue'),
  },
  {
    path: '/todo-list/profile',
    name: 'profile',
    component: () => import('../views/UserProfileView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;