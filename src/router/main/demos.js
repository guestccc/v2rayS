import MainLayout from '@/components/main-layout.vue';
import DemosList from '@/views/main/demos/list.vue';
import DemosClassify from '@/views/main/demos/classify.vue';

export default {
  name: 'demos',
  path: 'demos',
  component: MainLayout,
  children: [
    {
      name: 'demoList',
      path: 'list',
      component: DemosList,
    },
    {
      name: 'demoClassify',
      path: 'classify',
      component: DemosClassify,
    },
  ],
};
