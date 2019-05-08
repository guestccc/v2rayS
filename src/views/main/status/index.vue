<template>
  <div class="status">
    <ram ref="ram"/>
  </div>
</template>

<script>
import io from 'socket.io-client';

import Ram from './Ram.vue';

export default {
  data() {
    return {
      socketVps: null,
    };
  },
  methods: {
    hanldeConnectWs() {
      this.socketVps = io('http://127.0.0.1:7001/ws', {
        query: {
          room: 'demo',
          userId: `client_${Math.random()}`,
        },
        transports: ['websocket'],
      });
    },
    handleSocketInit() {
      this.hanldeConnectWs();
      this.socketVps.on('connect', () => {
        console.log('------------');
        console.log('成功连接', this.socketVps.id);
        console.log('------------');
      });
      this.socketVps.on('res', ({ type, data }) => {
        if (type === 'vps') {
          this.$refs.ram.handleData(data.ram);
          return;
        }
        console.log('--------------------------');
        console.log(data);
        console.log('--------------------------');
      });
      this.socketVps.on('disconnect', (msg) => {
        console.log('------------');
        console.log('断开连接', msg);
        console.log('------------');
      });
    },
  },
  mounted() {
    this.handleSocketInit();
  },
  beforeDestroy() {
    this.socketVps.close();
  },
  components: {
    Ram,
  },
};
</script>

<style lang="scss" scoped>
</style>
