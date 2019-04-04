import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index.vue';

import login from '@/router/login';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
    },
    login,
    // {
    //   name: '404',
    //   path: '*',
    //   component: NoFind,
    // },
  ],
});

// routes: [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
//   },
// ],
