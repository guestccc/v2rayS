<template>
  <a-drawer-pro
    :visible="visible"
    :title="protocol.label"
    :width="720"
    @ok="handleOk"
    @close="setVisibleDrawers()"
    footer>
    <a-form>
      <a-form-item label="监听 IP">
        <a-input v-model="inbound.listen"/>
      </a-form-item>
      <a-form-item label="端口">
        <a-input-number
          v-model="inbound.port"
          :mix="1"
          :max="99999"/>
      </a-form-item>
    </a-form>
    <component
      :is="protocol.components.drawer.settings"
      class="y-settings"/>
  </a-drawer-pro>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import ADrawerPro from '@/components/ADrawerPro.vue';

export default {
  computed: {
    ...mapState({
      visible: state => state.config.visibleDrawers,
      protocol: state => state.config.protocol,
      inbound: state => state.config.inbound,
    }),
  },
  methods: {
    ...mapMutations('config', [
      'setVisibleDrawers',
    ]),
    handleOk() {
      this.$store.dispatch('config/createConfigInbound');
    },
  },
  components: {
    ADrawerPro,
  },
};
</script>
