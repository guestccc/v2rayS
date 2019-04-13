import MainLayout from '@/components/main-layout.vue';

const DemoList = () => import(/* webpackChunkName: "singles" */ '@/views/main/singles/index.vue');
const DemoAdd = () => import(/* webpackChunkName: "singles" */ '@/views/main/singles/add.vue');

export default {
  name: 'singles',
  path: 'singles',
  component: MainLayout,
  children: [
    {
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
