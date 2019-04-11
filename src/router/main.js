import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/main.vue';

Vue.use(Router);

export default {
  name: 'main',
  path: '/main',
  component: Main,
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
