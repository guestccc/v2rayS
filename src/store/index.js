import Vue from 'vue';
import Vuex from 'vuex';

import v2ray from './modules/v2ray';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    v2ray,
  },
});
