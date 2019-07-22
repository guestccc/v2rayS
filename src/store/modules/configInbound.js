/* eslint-disable no-shadow */

const state = {
  visibleDrawer: false,
  inbounds: [],
  shadowsocksForm: {
    protocol: 'shadowsocks',
    listen: '',
    port: '',
    settings: {
      email: '',
      method: '',
      password: '',
      level: '',
      ota: '',
      network: '',
    },
    tag: '',
  },
};

const getters = {};

const mutations = {
  setVisibleDrawerShow(state) {
    state.visibleDrawer = true;
  },
  setVisibleDrawerHide(state) {
    state.visibleDrawer = false;
  },
  updateShadowsocksFrom(state, data = {}) {
    console.log('------------');
    console.log('form change');
    console.log('------------');
    Object.assign(state.shadowsocksForm, data);
    console.log('------------');
    console.log('shadowsocksForm', state.shadowsocksForm);
    console.log('------------');
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
