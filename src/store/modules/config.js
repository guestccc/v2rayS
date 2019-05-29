/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { message } from 'ant-design-vue';
import { JSONCopy } from '@/utils';

import { getConfigInbound, createConfigInbound, updateConfigInbound } from '@/api/main/config/inbounds';

const DrawerSettingsShadowsocks = () => import('@/views/main/config/inbounds/FormInbound/Settings/shadowsocks.vue');
const DrawerSettingsVmess = () => import('@/views/main/config/inbounds/FormInbound/Settings/vmess.vue');
const DrawerSettingsMtproto = () => import('@/views/main/config/inbounds/FormInbound/Settings/mtproto.vue');

const protocols = [
  {
    label: 'Shadowsocks',
    value: 'shadowsocks',
    components: {
      drawer: {
        settings: DrawerSettingsShadowsocks,
      },
    },
  },
  {
    label: 'VMess',
    value: 'vmess',
    components: {
      drawer: {
        settings: DrawerSettingsVmess,
      },
    },
  },
  {
    label: 'MTProto',
    value: 'mtproto',
    components: {
      drawer: {
        settings: DrawerSettingsMtproto,
      },
    },
  },
];

const protocol = {
  label: '',
  value: '',
  components: {
    drawer: {},
  },
};

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
  shadowsocks: { // https://www.v2ray.com/chapter_02/protocols/shadowsocks.html
    email: '',
    method: '',
    password: '',
    level: 0,
    // ota: false, // 是否强制 OTA，如果不指定此项，则自动判断。强制开启 OTA 后，V2Ray 会拒绝未启用 OTA 的连接。反之亦然。
    network: '', // "tcp" | "udp" | "tcp,udp"
  },
  vmess: { // https://www.v2ray.com/chapter_02/protocols/shadowsocks.html
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
  mtproto: { // https://www.v2ray.com/chapter_02/protocols/mtproto.html
    users: [
      {
        email: '',
        level: 0,
        secret: '',
      },
    ],
  },
};

const state = {
  protocols,
  visibleModal: false,
  visibleDrawers: false,
  protocol: {
    ...protocol,
  },
  inbounds: [],
  inbound: {
    ...inbound,
  },
  settings: null,
  clickInfo: null,
};

const getters = {};

const mutations = {
  setProtocol(state, data) {
    state.protocol = data;
    state.settings = { ...settingsObj[data.value] };
    state.clickInfo = {
      type: 'create',
    };
  },
  setInbounds(state, data) {
    state.inbounds = data;
  },
  setVisibleModal(state, data = false) {
    state.visibleModal = !!data;
  },
  setVisibleDrawers(state, data = false) {
    state.visibleDrawers = !!data;
    // if (data) return;
    // state.inbound = { ...inbound };
    // state.protocol = protocol;
    // state.settings = null;
  },
  clickCreate() {},
  clickUpdate(state, inbound) {
    const { protocol, settings } = inbound;
    const obj = state.protocols.filter(item => item.value === protocol)[0];
    state.protocol = obj;
    state.inbound = JSONCopy(inbound);
    state.settings = JSONCopy(settings);
    state.clickInfo = {
      port: inbound.port,
      type: 'update',
    };
    state.visibleDrawers = true;
  },
};

const actions = {
  async submit({ state, commit, dispatch }) {
    const body = { ...state.inbound };
    body.protocol = state.protocol.value;
    body.settings = state.settings;
    switch (state.clickInfo.type) {
      case 'create':
        await dispatch('createConfigInbound', body);
        break;
      case 'update':
        await dispatch('updateConfigInbound', {
          port: state.clickInfo.port,
          body,
        });
        break;
      default:
        break;
    }
    commit('setVisibleDrawers');
    dispatch('getConfigInbound');
    message.success('添加成功');
  },
  async getConfigInbound({ commit }) {
    const { data } = await getConfigInbound();
    commit('setInbounds', data);
  },
  async createConfigInbound(obj, body) {
    await createConfigInbound(body);
  },
  async updateConfigInbound(obj, { port, body }) {
    await updateConfigInbound(port, body);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
