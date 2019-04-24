import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import './plugins/antd'; // antd
import './styles/index.scss'; // global css

import App from './App.vue';
import router from './router';
import store from './store/index';
import { keepAlive } from './mixins';

import './permission'; // router 拦截

Vue.mixin(keepAlive);

Vue.config.productionTip = false;

window.$vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
