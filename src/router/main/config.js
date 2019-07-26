const Layout = () => import('@/components/main-layout.vue');

const Config = () => import(/* webpackChunkName: "config" */ '@/views/main/config/index.vue');

const Inbounds = () => import(/* webpackChunkName: "config_inbounds" */ '@/views/main/config/inbounds/index.vue');
const InboundsCreate = () => import(/* webpackChunkName: "config_inbounds_create" */'@/views/main/config/inbounds/create/index.vue');

const Log = () => import(/* webpackChunkName: "config_log" */ '@/views/main/config/log/index.vue');

export default {
  path: 'config',
  component: Config,
  meta: {
    name: 'config',
  },
  children: [
    {
      path: 'inbounds',
      component: Layout,
      meta: {
        name: 'inbounds',
      },
      children: [
        {
          path: '',
          component: Inbounds,
        },
        {
          path: 'create/:protocol?',
          component: InboundsCreate,
          meta: {
            name: 'create',
          },
        },
      ],
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
