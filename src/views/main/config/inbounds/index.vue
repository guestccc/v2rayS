<template>
  <div class="config">
    <inb-header/>
    <inb-content/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import InbHeader from './InbHeader.vue';
import InbContent from './InbContent/index.vue';

export default {
  name: 'inbounds',
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
