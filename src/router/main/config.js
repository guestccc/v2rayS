const Config = () => import(/* webpackChunkName: "config" */ '@/views/main/config/index.vue');
const Inbounds = () => import(/* webpackChunkName: "configInbounds" */ '@/views/main/config/inbounds/index.vue');
const Log = () => import(/* webpackChunkName: "configLog" */ '@/views/main/config/log/index.vue');

export default {
  path: 'config',
  component: Config,
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
