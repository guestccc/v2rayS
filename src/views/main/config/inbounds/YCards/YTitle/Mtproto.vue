<template>
  <div>
    <a-icon
      @click="eventLink"
      type="link"/>
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
  computed: {
    mtprotoUrl() {
      const { listen, port, settings } = this.root.data;
      const { users } = settings;
      return `https://t.me/proxy?server=${listen}&port=${port}&secret=${users[0].secret}`;
    },
  },
  methods: {
    eventLink() {
      window.open(this.mtprotoUrl, '_blank');
    },
    eventCopy() {
      copyToClipboard(this.mtprotoUrl);
    },
  },
};
</script>
