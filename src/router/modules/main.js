import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';

import Userinfo from '@/views/main/userinfo/index.vue';
import Sys from '@/views/main/sys/index.vue';
import Home from '@/views/main/home/index.vue';
import User from '@/views/main/user/index.vue';

Vue.use(Router);

export default {
  path: '/main',
  component: Layout,
  children: [
    {
      path: '',
      redirect: '/main/userinfo',
    },
    {
      name: 'userinfo',
      path: 'userinfo',
      component: Userinfo,
    },
    {
      name: 'sys',
      path: 'sys',
      component: Sys,
    },
    {
      name: 'home',
      path: 'home',
      component: Home,
    },
    {
      name: 'user',
      path: 'user',
      component: User,
    },
  ],
};

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
