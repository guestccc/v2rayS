const Client = () => import(/* webpackChunkName: "single" */ '@/views/main/client/index.vue');

export default {
  path: 'client',
  component: Client,
  meta: {
    name: '客户端下载',
  },
};
