import demos from './demos';
import demo from './demo';

const Layout = () => import(/* webpackChunkName: "main" */'@/layout/index.vue');
const Userinfo = () => import(/* webpackChunkName: "userinfo" */ '@/views/main/userinfo/index.vue');

export default {
  path: '/main',
  component: Layout,
  children: [
    {
      path: '',
      redirect: '/main/userinfo',
      noMenu: true,
    },
    {
      name: '用户信息',
      icon: 'icon',
      path: 'userinfo',
      component: Userinfo,
    },
    demos,
    demo,
  ],
};
