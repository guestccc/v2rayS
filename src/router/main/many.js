import MainLayout from '@/components/main-layout.vue';

const ManySingle = () => import(/* webpackChunkName: "manySingle" */ '@/views/main/many/single.vue');
const ManySingles = () => import(/* webpackChunkName: "manySingles" */ '@/views/main/many/singles/index.vue');
const ManySinglesAdd = () => import(/* webpackChunkName: "manySingles" */ '@/views/main/many/singles/add.vue');

export default {
  path: 'many',
  component: MainLayout,
  meta: {
    name: 'many',
  },
  children: [
    {
      path: 'single',
      component: ManySingle,
      meta: {
        name: 'single',
      },
    },
    {
      path: 'singles',
      component: MainLayout,
      meta: {
        name: 'singles',
      },
      children: [
        {
          path: '',
          component: ManySingles,
        },
        {
          name: 'add',
          path: 'add',
          component: ManySinglesAdd,
          meta: {
            name: 'add',
          },
        },
      ],
    },

  ],
};
