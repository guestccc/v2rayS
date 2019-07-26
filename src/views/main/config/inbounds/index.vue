<template>
  <div class="config">
    <inb-header/>
    <inb-content/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import InbHeader from './InbHeader.vue';
import InbContent from './InbContent.vue';

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
  },
};
</script>
