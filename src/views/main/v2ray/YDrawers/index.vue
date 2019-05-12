<template>
  <a-drawer-pro
    :visible="visible"
    :title="protocol"
    :width="720"
    @ok="handleOk"
    @close="setVisibleDrawers()"
    footer>
    <a-form>
      <a-form-item label="监听 IP">
        <a-input v-model="inbound.listen"/>
      </a-form-item>
      <a-form-item label="端口123">
        <a-input-number
          v-model="inbound.port"
          :mix="1"
          :max="99999"/>
      </a-form-item>
    </a-form>
    <y-settings ref="settings"/>
  </a-drawer-pro>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import ADrawerPro from '@/components/ADrawerPro.vue';
import YSettings from './Settings/index.vue';

export default {
  computed: {
    ...mapState({
      visible: state => state.v2ray.visibleDrawers,
      protocol: state => state.v2ray.protocol,
      inbound: state => state.v2ray.inbound,
    }),
  },
  methods: {
    ...mapMutations('v2ray', [
      'setVisibleDrawers',
    ]),
    handleOk() {
      this.$store.dispatch('v2ray/addV2rayInbound');
    },
  },
  components: {
    ADrawerPro,
    YSettings,
  },
};
</script>
