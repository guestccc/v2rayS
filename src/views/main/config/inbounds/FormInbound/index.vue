<template>
  <a-drawer-pro
    :visible="visibleDrawers"
    :title="protocol.label"
    :width="720"
    @ok="submit"
    @close="setVisibleDrawers()"
    footer>
    <a-form>
      <a-row :gutter="16">
        <a-col :span="18">
          <a-form-item label="监听 IP">
            <a-input v-model="inbound.listen"/>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="端口">
            <a-input-number
              v-model="inbound.port"
              :mix="1"
              :max="99999"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <component
      :is="protocol.components.drawer.settings"
      class="y-settings"/>
  </a-drawer-pro>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import ADrawerPro from '@/components/ADrawerPro.vue';

export default {
  computed: {
    ...mapState('config', [
      'visibleDrawers',
      'protocol',
      'inbound',
    ]),
  },
  methods: {
    ...mapMutations('config', [
      'setVisibleDrawers',
    ]),
    ...mapActions('config', [
      'submit',
    ]),
  },
  components: {
    ADrawerPro,
  },
};
</script>
