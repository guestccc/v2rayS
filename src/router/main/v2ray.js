const V2ray = () => import(/* webpackChunkName: "single" */ '@/views/main/v2ray/index.vue');

export default {
  path: 'v2ray',
  component: V2ray,
  meta: {
    name: 'v2ray',
  },
};
