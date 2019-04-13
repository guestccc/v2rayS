import MainLayout from '@/components/main-layout.vue';

const DemoList = () => import(/* webpackChunkName: "demo" */ '@/views/main/demo/index.vue');
const DemoAdd = () => import(/* webpackChunkName: "demo" */ '@/views/main/demo/add.vue');

export default {
  path: 'demo',
  component: MainLayout,
  children: [
    {
      name: 'demo',
      path: '',
      component: DemoList,
    },
    {
      name: 'add',
      path: 'add',
      component: DemoAdd,
    },
  ],
};
