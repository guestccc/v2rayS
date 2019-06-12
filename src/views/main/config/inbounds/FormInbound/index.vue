<template>
  <y-drawer
    :visible="visibleDrawers"
    :title="protocol.label"
    :width="720"
    @cancel="submit"
    @close="setVisibleDrawers()"
    footer>
    <a-form>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="监听 IP">
            <a-input v-model="inbound.listen"/>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="端口">
            <a-input-number
              v-model="inbound.port"
              :mix="1"
              :max="99999"/>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="标签">
            <a-input-number
              v-model="inbound.tag"
              :mix="1"
              :max="99999"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <settings :protocol="protocol"/>
    <stream-settings/>
  </y-drawer>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import YDrawer from '@/components/YDrawer.vue';
import Settings from './Settings/index.vue';
import StreamSettings from './StreamSettings/index.vue';

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
    YDrawer,
    Settings,
    StreamSettings,
  },
};
</script>
