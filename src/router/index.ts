import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/auth/LoginView.vue';
import SignUpView from '../views/auth/SignUpView.vue';

const routes = [
  {
    path: '/todo-list/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/todo-list/sign-up',
    name: 'sign-up',
    component: SignUpView
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

router.beforeEach((to, _from, next) => {
  const isLoggedIn = localStorage.getItem('accessToken'); 

  if (to.path === '/todo-list' && !isLoggedIn) {
      next('/todo-list/login'); 
  } else {
      next();
  }
});

export default router;