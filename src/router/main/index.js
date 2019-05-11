import userinfo from './userinfo';
import single from './single';
import singles from './singles';
import many from './many';
import status from './status';
import v2ray from './v2ray';
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
    single,
    singles,
    many,
    status,
    v2ray,
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
