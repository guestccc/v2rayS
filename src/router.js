import Vue from 'vue';
import Router from 'vue-router';

import index from '@/router/index';
import login from '@/router/login';
import error from '@/router/error';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    index,
    login,
    error,
    // {
    //   name: '404',
    //   path: '*',
    //   component: NoFind,
    // },
  ],
});

// routes: [
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
//   },
// ],
