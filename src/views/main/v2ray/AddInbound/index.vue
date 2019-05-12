<template>
  <div class="add-inbound">
    <a-button @click="setVisibleModal(1)">添加账号</a-button>
    <y-modal/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import YModal from './YModal.vue';

export default {
  methods: {
    ...mapMutations('v2ray', [
      'setVisibleModal',
    ]),
  },
  components: {
    YModal,
  },
};
</script>
