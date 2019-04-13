import MainLayout from '@/components/main-layout.vue';

const DemosList = () => import(/* webpackChunkName: "demos" */ '@/views/main/demos/list.vue');
const DemosClassify = () => import(/* webpackChunkName: "demos" */ '@/views/main/demos/classify.vue');

export default {
  name: 'demos',
  path: 'demos',
  component: MainLayout,
  children: [
    {
      name: 'list',
      path: 'list',
      component: DemosList,
    },
    {
      name: 'classify',
      path: 'classify',
      component: DemosClassify,
    },
  ],
};
