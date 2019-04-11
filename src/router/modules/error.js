import RouterView from '@/views/error.vue';

import Code404 from '@/views/error/code404.vue';

export default {
  path: '*',
  component: RouterView,
  children: [
    {
      name: 'notFind',
      path: '',
      component: Code404,
    },
  ],
};
