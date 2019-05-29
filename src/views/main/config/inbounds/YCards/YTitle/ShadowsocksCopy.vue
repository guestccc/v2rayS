<template>
  <div>
    <a-icon type="qrcode"/>
    <a-icon
      @click="eventCopy"
      type="copy"/>
  </div>
</template>

<script>
import { copyToClipboard } from '@/utils';

export default {
  inject: {
    root: {
      default: () => ({}),
    },
  },
  methods: {
    eventCopy() {
      const { listen, port, settings } = this.root.data;
      const { method, password } = settings;
      const str = `ss://${btoa(`${method}:${password}@${listen}:${port}`)}`;
      copyToClipboard(str);
    },
  },
};
</script>
