import RouterView from '@/views/login.vue';

import Login from '@/views/login/index.vue';
import Pwd from '@/views/login/pwd.vue';

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
