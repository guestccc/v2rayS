const Account = () => import(/* webpackChunkName: "single" */ '@/views/main/account/index.vue');

export default {
  path: 'account',
  component: Account,
  meta: {
    name: '账号管理',
  },
};
