import userinfo from './userinfo';
import single from './single';
import singles from './singles';
import many from './many';

const Layout = () => import(/* webpackChunkName: "main" */'@/layout/index.vue');

export default {
  path: '/main',
  component: Layout,
  children: [
    {
      path: '',
      redirect: '/main/userinfo',
      noMenu: true,
    },
    userinfo,
    single,
    singles,
    many,
  ],
};
