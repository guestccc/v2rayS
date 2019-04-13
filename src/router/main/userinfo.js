import MainLayout from '@/components/main-layout.vue';

const UserInfo = () => import(/* webpackChunkName: "demo" */ '@/views/main/userinfo/index.vue');

export default {
  path: 'userinfo',
  component: MainLayout,
  children: [
    {
      name: 'userinfo',
      path: '',
      component: UserInfo,
    },
  ],
};
