import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import './styles/app.scss'; // global css
import './plugins/antd'; // antd
import './permission'; // router 拦截

Vue.config.productionTip = false;

window.$vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
