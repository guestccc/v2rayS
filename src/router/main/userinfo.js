// import MainLayout from '@/components/main-layout.vue';

const UserInfo = () => import(/* webpackChunkName: "userinfo" */ '@/views/main/userinfo/index.vue');

export default {
  path: 'userinfo',
  component: UserInfo,
  noMenu: true,
};
