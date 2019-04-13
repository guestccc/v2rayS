import MainLayout from '@/components/main-layout.vue';

const ManySingle = () => import(/* webpackChunkName: "manySingle" */ '@/views/main/many/single.vue');
const ManySingles = () => import(/* webpackChunkName: "manySingles" */ '@/views/main/many/singles/index.vue');
const ManySinglesAdd = () => import(/* webpackChunkName: "manySingles" */ '@/views/main/many/singles/add.vue');

export default {
  name: 'many',
  path: 'many',
  component: MainLayout,
  children: [
    {
      name: 'single',
      path: 'single',
      component: ManySingle,
    },
    {
      name: 'singles',
      path: 'singles',
      component: MainLayout,
      children: [
        {
          path: '',
          component: ManySingles,
        },
        {
          name: 'add',
          path: 'add',
          component: ManySinglesAdd,
        },
      ],
    },

  ],
};
