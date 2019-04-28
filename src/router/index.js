import Vue from 'vue';
import Router from 'vue-router';

import main from '@/router/main/index';
import login from '@/router/login';

import NotFind from '@/views/error/notFind.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    main,
    login,
    {
      path: '*',
      component: NotFind,
    },
  ],
});
