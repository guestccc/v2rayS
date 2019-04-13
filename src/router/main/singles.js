import MainLayout from '@/components/main-layout.vue';

const DemoList = () => import(/* webpackChunkName: "singles" */ '@/views/main/singles/index.vue');
const DemoAdd = () => import(/* webpackChunkName: "singles" */ '@/views/main/singles/add.vue');

export default {
  path: 'singles',
  component: MainLayout,
  meta: {
    name: 'singles',
  },
  children: [
    {
      path: '',
      component: DemoList,
    },
    {
      path: 'add',
      component: DemoAdd,
      meta: {
        name: 'add',
      },
    },
  ],
};
