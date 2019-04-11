import Vue from 'vue';
import Router from 'vue-router';

import login from '@/router/modules/login';
import main from '@/router/modules/main';
import error from '@/router/modules/error';

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
    error,
    // {
    //   name: '404',
    //   path: '*',
    //   component: NoFind,
    // },
  ],
});
