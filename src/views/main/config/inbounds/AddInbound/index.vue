<template>
  <div class="add-inbound">
    <a-button @click="setVisibleModal(1)">添加账号</a-button>
    <protocols-modal/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import ProtocolsModal from './ProtocolsModal.vue';

export default {
  methods: {
    ...mapMutations('v2ray', [
      'setVisibleModal',
    ]),
  },
  components: {
    ProtocolsModal,
  },
};
</script>
