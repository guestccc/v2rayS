/* eslint-disable no-shadow */

const state = {
  visibleDrawer: false,
  inbounds: [],
};

const getters = {};

const mutations = {
  setVisibleDrawerShow(state) {
    state.visibleDrawer = true;
  },
  setVisibleDrawerHide(state) {
    state.visibleDrawer = false;
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
