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
      switch (this.protocol.value) {
        case 'shadowsocks':
          return Shadowsocks;
        case 'vmess':
          return Vmess;
        default:
          return null;
      }
    },
  },
};
</script>
