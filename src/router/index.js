import Vue from 'vue';
import Router from 'vue-router';

import login from '@/router/login';
import main from '@/router/main';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    login,
    main,
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
