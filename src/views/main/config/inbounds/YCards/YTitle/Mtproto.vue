<template>
  <div>
    <a-icon type="link"/>
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
      const { users } = settings;
      const str = `https://t.me/proxy?server=${listen}&port=${port}&secret=${users[0].secret}`;
      copyToClipboard(str);
    },
  },
};
</script>
