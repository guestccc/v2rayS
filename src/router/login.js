import YRouterView from '@/views/login.vue';

import Login from '@/views/login/index.vue';
import Pwd from '@/views/login/pwd.vue';

export default {
  path: '/login',
  component: YRouterView,
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
