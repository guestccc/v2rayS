import MainLayout from '@/components/main-layout.vue';

const Inbounds = () => import(/* webpackChunkName: "inbounds" */ '@/views/main/config/inbounds/index.vue');

export default {
  path: 'config',
  component: MainLayout,
  meta: {
    name: 'config',
  },
  children: [
    {
      path: 'inbounds',
      component: Inbounds,
      meta: {
        name: 'inbounds',
      },
    },
  ],
};
