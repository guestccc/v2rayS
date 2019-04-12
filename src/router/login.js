const RouterView = () => import(/* webpackChunkName: "login" */ '@/views/login.vue');
const Login = () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue');
const Pwd = () => import(/* webpackChunkName: "login" */ '@/views/login/pwd.vue');

export default {
  path: '/login',
  component: RouterView,
  children: [
    {
      name: 'login',
      path: '',
      component: Login,
    },
    {
      name: 'pwd',
      path: 'pwd',
      component: Pwd,
    },
  ],
};
