const Router = () => import('@/components/main-layout.vue');

const Config = () => import(/* webpackChunkName: "config" */ '@/views/main/config/index.vue');

const Inbounds = () => import(/* webpackChunkName: "config_inbounds" */ '@/views/main/config/inbounds/index.vue');
const Inboundss = () => import(/* webpackChunkName: "config_inboundss" */ '@/views/main/config/inboundss/index.vue');
const InboundsCreate = () => import(/* webpackChunkName: "config_inboundss_create" */'@/views/main/config/inboundss/create/index.vue');

const Log = () => import(/* webpackChunkName: "config_log" */ '@/views/main/config/log/index.vue');

export default {
  path: 'config',
  component: Config,
  meta: {
    name: 'config',
  },
  children: [
    {
      path: 'inboundss',
      component: Inbounds,
      meta: {
        name: 'inboundss',
      },
    },
    {
      path: 'inbounds',
      component: Router,
      meta: {
        name: 'inbounds',
      },
      children: [
        {
          path: '',
          component: Inboundss,
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
