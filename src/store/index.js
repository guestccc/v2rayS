import Vue from 'vue';
import Vuex from 'vuex';

import config from './modules/config';
import configInbound from './modules/configInbound';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    config,
    configInbound,
  },
});
