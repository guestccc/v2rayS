import Layout from '@/layout/index.vue';
import Userinfo from '@/views/main/userinfo/index.vue';

import demos from './demos';
import demo from './demo';

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
