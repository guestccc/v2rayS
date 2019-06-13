import userinfo from './userinfo';
import status from './status';
import config from './config';
import client from './client';

const Layout = () => import(/* webpackChunkName: "main" */'@/layout/index.vue');
const NotFind = () => import('@/views/error/notFind.vue');

export default {
  path: '/main',
  component: Layout,
  children: [
    {
      path: '',
      redirect: '/main/userinfo',
    },
    userinfo,
    status,
    config,
    client,
    {
      path: '*',
      component: NotFind,
      meta: {
        name: 'Not Find',
        noMenu: true,
      },
    },
  ],
};
