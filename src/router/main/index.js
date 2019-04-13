import userinfo from './userinfo';
import demos from './demos';
import demo from './demo';

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
    demos,
    demo,
  ],
};
