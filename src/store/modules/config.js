/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { message } from 'ant-design-vue';
import { JSONCopy } from '@/utils';

import { getConfigInbound, createConfigInbound, updateConfigInbound } from '@/api/main/config/inbounds';

const protocols = [
  {
    label: 'Shadowsocks',
    value: 'shadowsocks',
  },
  {
    label: 'VMess',
    value: 'vmess',
  },
  {
    label: 'MTProto',
    value: 'mtproto',
  },
];

const protocol = {
  label: '',
  value: '',
};

const inbound = {
  protocol: '',
  listen: '0.0.0.0',
  port: '',
  settings: {},
  tag: '', // 当其不为空时，其值必须在所有tag中唯一
  streamSettings: { // https://www.v2ray.com/chapter_02/05_transport.html#perproxy
    network: 'tcp',
    security: 'none',
    tlsSettings: undefined,
    tcpSettings: { // https://www.v2ray.com/chapter_02/transport/tcp.html
      header: {
        type: 'none', // http
        // request: {},
        // response: {},
      },
    },
    kcpSettings: { // https://www.v2ray.com/chapter_02/transport/mkcp.html
      mtu: 1350,
      tti: 50,
      uplinkCapacity: 5, // 上行链路容量
      downlinkCapacity: 20, // 下行链路容量
      congestion: false, // 是否启用拥塞控制
      readBufferSize: 2, // 读取缓冲区大小
      writeBufferSize: 2, // 写入缓冲区大小
      header: { // https://www.v2ray.com/chapter_02/transport/mkcp.html#headerobject
        type: 'none', // srtp utp wechat-video dtls wireguard
      },
    },
    wsSettings: undefined,
    httpSettings: undefined,
    dsSettings: undefined,
    quicSettings: undefined,
    sockopt: { // https://www.v2ray.com/chapter_02/05_transport.html#sockoptobject
      mark: 0,
      tcpFastOpen: undefined,
      tproxy: 'off',
    },
  },
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
    // default: {
    //   level: 0,
    //   alterId: 4,
    // },
    // detour: {
    //   to: 'tag_to_detour',
    // },
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
  visibleQrcode: false,
  protocol: {
    ...protocol,
  },
  inbounds: [],
  inbound: {
    ...inbound,
  },
  settings: null,
  clickInfo: null,
  qrcodeValue: '',
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
  setVisibleQrcode(state, data = {}) {
    if (data.bool) state.qrcodeValue = data.url;
    state.visibleQrcode = !!data.bool;
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
