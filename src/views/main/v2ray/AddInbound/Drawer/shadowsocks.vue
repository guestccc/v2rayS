<template>
  <a-drawer-pro
    :visible="visible"
    :width="720"
    @ok="handleOk"
    @close="handleClose"
    footer>
    <a-form>
      <a-form-item label="监听 IP">
        <a-input v-model="form.listen"/>
      </a-form-item>
      <a-form-item label="端口">
        <a-input-number
          v-model="form.port"
          :min="1"
          :max="99999"/>
      </a-form-item>
      <a-form-item label="加密方式">
        <a-select v-model="form.settings.method">
          <a-select-option
            v-for="{label, value} in methods"
            :key="value"
            :value="value">{{ label }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="密码">
        <a-input v-model="form.settings.password"/>
      </a-form-item>
      <a-form-item label="网络连接类型">
        <a-select v-model="form.settings.network">
          <a-select-option
            v-for="{label, value} in networks"
            :key="value"
            :value="value">{{ label }}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-drawer-pro>
</template>

<script>
import ADrawerPro from '@/components/ADrawerPro.vue';

import { addV2ray } from '@/api/v2ray';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      methods: [
        {
          label: 'aes-256-cfb',
          value: 'aes-256-cfb',
        },
        {
          label: 'aes-128-cfb',
          value: 'aes-128-cfb',
        },
        {
          label: 'chacha20',
          value: 'chacha20',
        },
        {
          label: 'chacha20-ietf',
          value: 'chacha20-ietf',
        },
        {
          label: 'aes-256-gcm',
          value: 'aes-256-gcm',
        },
        {
          label: 'aes-128-gcm',
          value: 'aes-128-gcm',
        },
        {
          label: 'chacha20-poly1305',
          value: 'chacha20-poly1305',
        },
        {
          label: 'chacha20-ietf-poly1305',
          value: 'chacha20-ietf-poly1305',
        },
      ],
      networks: [
        {
          label: 'tcp',
          value: 'tcp',
        },
        {
          label: 'upd',
          value: 'upd',
        },
        {
          label: 'tcp,udp',
          value: 'tcp,udp',
        },
      ],
      form: {
        listen: '0.0.0.0',
        port: 1080,
        protocol: 'shadowsocks',
        settings: { // https://www.v2ray.com/chapter_02/protocols/shadowsocks.html
          email: '',
          method: '',
          password: '',
          level: 0,
          // ota: false, // 是否强制 OTA，如果不指定此项，则自动判断。强制开启 OTA 后，V2Ray 会拒绝未启用 OTA 的连接。反之亦然。
          network: '', // "tcp" | "udp" | "tcp,udp"
        },
        streamSettings: {}, // https://www.v2ray.com/chapter_02/05_transport.html#perproxy
        tag: '', // 当其不为空时，其值必须在所有tag中唯一
        sniffing: { // https://www.v2ray.com/chapter_02/01_overview.html#sniffingobject
          // enabled: false,
          // destOverride: ['http', 'tls'],
        },
        allocate: { // https://www.v2ray.com/chapter_02/01_overview.html#allocateobject
          // strategy: 'always',
          // refresh: 5,
          // concurrency: 3,
        },
      },
    };
  },
  methods: {
    async networkAddV2ray() {
      await addV2ray(this.form);
      this.handleClose();
      this.$emit('success');
      this.$message.success('添加成功');
    },
    handleOk() {
      this.networkAddV2ray();
    },
    handleClose() {
      this.$emit('update:visible', false);
    },
  },
  components: {
    ADrawerPro,
  },
};
</script>
