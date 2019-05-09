<template>
  <div class="status">
    <div class="nav">
      <ram-mini
        :activa="type === 'ram'"
        ref="ramMini"/>
      <cpu-mini
        :activa="type === 'cpu'"
        ref="cpuMini"/>
    </div>
    <div class="content">
      <ram-pro ref="ramPro"/>
      <!-- <cpu-pro ref="cpuPir"/> -->
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

import RamMini from './Ram/mini.vue';
import RamPro from './Ram/pro.vue';
import CpuMini from './Cpu/mini.vue';
// import CpuPro from './Cpu/pro.vue';

export default {
  data() {
    return {
      type: 'ram',
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
          this.$refs.ramMini.handleData(data.ram);
          this.$refs.ramPro.handleData(data.ram);

          this.$refs.cpuMini.handleData(data.ram);
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
    RamMini,
    RamPro,
    CpuMini,
    // CpuPro,
  },
};
</script>

<style lang="scss" scoped>
.status {
  display: flex;
  .nav {
    width: 220px;
    .g2-mini {
      & + .g2-mini {
        margin-top: 5px;
      }
    }
  }
  .content {
    flex: 1;
  }
}
</style>
