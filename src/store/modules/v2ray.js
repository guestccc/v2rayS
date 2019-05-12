/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import Vue from 'vue';

import { getV2rayInbound, addV2rayInbound } from '@/api/v2ray';

const inbound = {
  protocol: '',
  listen: '0.0.0.0',
  port: '',
  settings: {},
  tag: '', // 当其不为空时，其值必须在所有tag中唯一
  streamSettings: {}, // https://www.v2ray.com/chapter_02/05_transport.html#perproxy
  sniffing: { // https://www.v2ray.com/chapter_02/01_overview.html#sniffingobject
    // enabled: false,
    // destOverride: ['http', 'tls'],
  },
  allocate: { // https://www.v2ray.com/chapter_02/01_overview.html#allocateobject
    // strategy: 'always',
    // refresh: 5,
    // concurrency: 3,
  },
};

const settingsObj = {
  Shadowsocks: { // https://www.v2ray.com/chapter_02/protocols/shadowsocks.html
    email: '',
    method: '',
    password: '',
    level: 0,
    // ota: false, // 是否强制 OTA，如果不指定此项，则自动判断。强制开启 OTA 后，V2Ray 会拒绝未启用 OTA 的连接。反之亦然。
    network: '', // "tcp" | "udp" | "tcp,udp"
  },
  VMess: { // https://www.v2ray.com/chapter_02/protocols/shadowsocks.html
    clients: [
      {
        id: '',
        level: 0,
        alterId: 4,
        email: '',
      },
    ],
    default: {
      // level: 0,
      // alterId: 4,
    },
    detour: {
      // to: 'tag_to_detour',
    },
    disableInsecureEncryption: false,
  },
};

const state = {
  visibleModal: false,
  visibleDrawers: false,
  protocol: '',
  inbounds: [],
  inbound: {
    ...inbound,
  },
  settings: null,
};

const getters = {
};

const mutations = {
  setProtocol(state, data) {
    state.protocol = data;
    state.settings = { ...settingsObj[data] };
  },
  setInbounds(state, data) {
    state.inbounds = data;
  },
  setVisibleModal(state, data = false) {
    state.visibleModal = !!data;
  },
  setVisibleDrawers(state, data = false) {
    state.visibleDrawers = !!data;
    if (data) return;
    state.inbound = { ...inbound };
    state.settings = null;
  },
};

const actions = {
  async getV2rayInbound({ commit }) {
    const { data } = await getV2rayInbound();
    commit('setInbounds', data);
  },
  async addV2rayInbound({ state, commit, dispatch }) {
    const body = { ...state.inbound };
    body.protocol = state.protocol;
    body.settings = state.settings;
    await addV2rayInbound(body);
    commit('setVisibleDrawers');
    dispatch('getV2rayInbound');
    Vue.$message.success('添加成功');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
