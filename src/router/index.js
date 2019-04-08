import RouterView from '@/views/index.vue';

import Index from '@/views/index/index.vue';

export default {
  path: '/',
  component: RouterView,
  children: [
    {
      name: 'index',
      path: '',
      component: Index,
    },
  ],
};
