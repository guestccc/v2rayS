<template>
  <div class="config">
    <inb-header/>
    <inb-content/>
    <inb-drawer/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import InbHeader from './InbHeader.vue';
import InbContent from './InbContent.vue';
import InbDrawer from './InbDrawer/index.vue';

export default {
  name: 'inboundss',
  computed: {
    ...mapState('config', [
      'inbounds',
    ]),
  },
  components: {
    InbHeader,
    InbContent,
    InbDrawer,
  },
};
</script>
