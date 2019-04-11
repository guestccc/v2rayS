import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';
import Main from '@/views/main/index.vue';

Vue.use(Router);

export default {
  path: '/main',
  component: Layout,
  children: [
    {
      name: 'main',
      path: '',
      component: Main,
    },
  ],
};

// routes: [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
//   },
// ],
