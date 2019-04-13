import Vue from 'vue';
import Router from 'vue-router';

import login from '@/router/login';
import main from '@/router/main/index';
import error from '@/router/error';

// const login = () => import('@/router/login');

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
    error,
    // {
    //   name: '404',
    //   path: '*',
    //   component: NoFind,
    // },
  ],
});
