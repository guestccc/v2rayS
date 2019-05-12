<template>
  <component
    :is="xxx"
    ref="settings"
    class="y-settings">setting</component>
</template>

<script>
import Shadowsocks from './shadowsocks.vue';
import Vmess from './vmess.vue';

export default {
  props: {
    classify: {
      type: String,
      default: '',
    },
  },
  computed: {
    xxx() {
      let res = null;
      switch (this.classify) {
        case 'Shadowsocks':
          res = Shadowsocks;
          break;
        case 'VMess':
          res = Vmess;
          break;
        default:
          break;
      }
      return res;
    },
  },
  methods: {
    getSettings() {
      return this.$refs.settings.settings;
    },
  },
};
</script>
