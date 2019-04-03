import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './styles/app.scss';
import './plugins/antd';

Vue.config.productionTip = false;

window.$vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
