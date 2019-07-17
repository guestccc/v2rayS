/* eslint-disable no-shadow */

const state = {
  visibleDrawer: false,
  inbounds: [],
  shadowsocksForm: {
    port: 1080,
    listen: '127.0.0.1',
    protocol: 'shadowsocks',
    settings: {
      email: 'love@v2ray.com',
      method: 'aes-128-cfb',
      password: 'password',
      level: 0,
      ota: true,
      network: 'tcp',
    },
    tag: '标识',
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
  updateShadowsocksFrom(state, data) {
    Object.assign(state.shadowsocksForm, data);
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
