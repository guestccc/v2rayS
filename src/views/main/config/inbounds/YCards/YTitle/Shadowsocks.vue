<template>
  <div>
    <a-icon
      @click="eventQrcode"
      type="qrcode"/>
    <a-icon
      @click="eventCopy"
      type="copy"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { copyToClipboard } from '@/utils';

export default {
  inject: {
    root: {
      default: () => ({}),
    },
  },
  computed: {
    ssUrl() {
      const { listen, port, settings } = this.root.data;
      const { method, password } = settings;
      return `ss://${btoa(`${method}:${password}@${listen}:${port}`)}`;
    },
  },
  methods: {
    ...mapMutations('config', [
      'setVisibleQrcode',
    ]),
    eventQrcode() {
      this.setVisibleQrcode({
        bool: true,
        url: this.ssUrl,
      });
    },
    eventCopy() {
      copyToClipboard(this.ssUrl);
    },
  },
};
</script>
