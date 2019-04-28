const Single = () => import(/* webpackChunkName: "single" */ '@/views/main/single.vue');

export default {
  path: 'single',
  component: Single,
  meta: {
    name: 'single',
  },
};
