import MainLayout from '@/components/main-layout.vue';

const UserInfo = () => import(/* webpackChunkName: "demo" */ '@/views/main/userinfo/index.vue');

export default {
  path: 'userinfo',
  component: MainLayout,
  children: [
    {
      name: '个人中心',
      path: '',
      component: UserInfo,
    },
  ],
};
