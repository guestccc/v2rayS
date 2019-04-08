import RouterView from '@/views/error.vue';

import NotFind from '@/views/error/404.vue';

export default {
  path: '*',
  component: RouterView,
  children: [
    {
      name: 'notFind',
      path: '',
      component: NotFind,
    },
  ],
};
