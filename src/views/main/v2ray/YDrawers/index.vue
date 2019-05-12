<template>
  <a-drawer-pro
    :visible="visible"
    :title="classify"
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
          :mix="1"
          :max="99999"/>
      </a-form-item>
    </a-form>
    <y-settings
      :classify="classify"
      ref="settings"/>
  </a-drawer-pro>
</template>

<script>
import ADrawerPro from '@/components/ADrawerPro.vue';
import YSettings from './Settings/index.vue';
import { addV2ray } from '@/api/v2ray';

const form = {
  protocol: '',
  listen: '0.0.0.0',
  port: '',
  settings: {},
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
};

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    classify: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      form: { ...form },
    };
  },
  computed: {
    showComp() {
      const res = null;
      switch (this.classify) {
        case 'Shadowsocks':
          break;
        default:
          break;
      }
      return res;
    },
  },
  methods: {
    async networkAddV2ray() {
      await addV2ray(this.form);
      this.handleClose();
      this.$emit('success');
      this.$message.success('添加成功');
    },
    handleOk() {
      Object.assign(this.form, {
        protocol: this.classify,
      });
      Object.assign(this.form.settings, this.$refs.settings.getSettings());
      this.networkAddV2ray();
    },
    handleClose() {
      this.form = { ...form };
      this.$emit('update:visible', false);
    },
  },
  components: {
    ADrawerPro,
    YSettings,
  },
};
</script>
