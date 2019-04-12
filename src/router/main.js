import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';
import MainLayout from '@/components/main-layout.vue';

import Userinfo from '@/views/main/userinfo/index.vue';
import Sys from '@/views/main/sys/index.vue';
import Home from '@/views/main/home/index.vue';
import User from '@/views/main/user/index.vue';
import Goods from '@/views/main/goods/index.vue';

import DemosList from '@/views/main/demos/list.vue';
import DemosClassify from '@/views/main/demos/classify.vue';

Vue.use(Router);

export default {
  path: '/main',
  component: Layout,
  children: [
    {
      path: '',
      redirect: '/main/userinfo',
      noMenu: true,
    },
    {
      name: '用户信息',
      icon: 'icon',
      path: 'userinfo',
      component: Userinfo,
    },
    {
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
    },
    {
      name: '系统管理',
      path: 'sys',
      component: Sys,
    },
    {
      name: '主页',
      path: 'home',
      component: Home,
    },
    {
      name: '员工管理',
      path: 'user',
      component: User,
    },
    {
      name: '商品管理',
      path: 'goods',
      component: Goods,
    },
  ],
};
