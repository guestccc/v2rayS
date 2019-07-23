/* eslint-disable no-shadow */

const state = {
  visibleDrawer: false,
  inbounds: [],
  shadowsocksForm: {
    protocol: 'shadowsocks',
    listen: '',
    port: '',
    settings: {
      email: '123123',
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
    Object.assign(state.shadowsocksForm, data);
    console.log('------------');
    console.log('change', state.shadowsocksForm);
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
