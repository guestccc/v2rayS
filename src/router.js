import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});

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
