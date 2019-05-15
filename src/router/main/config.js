import MainLayout from '@/components/main-layout.vue';

const Inbounds = () => import(/* webpackChunkName: "configInbounds" */ '@/views/main/config/inbounds/index.vue');
const Log = () => import(/* webpackChunkName: "configLog" */ '@/views/main/config/log/index.vue');

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
    {
      path: 'log',
      component: Log,
      meta: {
        name: 'log',
      },
    },
  ],
};
