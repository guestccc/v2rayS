<template>
  <component
    :is="xxx"
    ref="settings"
    class="y-settings">setting</component>
</template>

<script>
import { mapState } from 'vuex';
import Shadowsocks from './shadowsocks.vue';
import Vmess from './vmess.vue';

export default {
  computed: {
    ...mapState({
      protocol: state => state.v2ray.protocol,
    }),
    xxx() {
      let res = null;
      switch (this.protocol) {
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
};
</script>
