/* eslint-disable no-shadow */

const state = {
  inbounds: [],
  inbound: {
    protocol: 'shadowsocks',
    listen: '',
    port: '',
    tag: '',
  },
  shadowsocksForm: {
    protocol: 'shadowsocks',
    listen: '',
    port: '',
    tag: '',
    settings: {
      email: '123123',
      method: '',
      password: '',
      level: '',
      ota: '',
      network: '',
    },
  },
};

const getters = {};

const mutations = {
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
