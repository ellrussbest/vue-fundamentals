import { h } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/main-path/:param',
    //   name: 'ComponentName',
    //   component: Component
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/about/:id',
      name: 'aboutId',
      component: () => import('@/views/AboutId.vue'),
    },
    {
      path: '/all-abouts',
      redirect: '/about',
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: {
        render() {
          return h('div', 'Not found');
        },
      },
    },
  ],
});

export default router;
