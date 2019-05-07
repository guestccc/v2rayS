const Status = () => import(/* webpackChunkName: "status" */ '@/views/main/status/index.vue');

export default {
  path: 'status',
  component: Status,
  meta: {
    name: '运行状态',
  },
};
