<template>
  <div class="status">
    <g2-mini-box
      :activaName="type"
      @change="handleChange">
      <ram-mini
        name="ram"
        ref="ramMini"/>
      <cpu-mini
        name="cpu"
        ref="cpuMini"/>
      <network-mini
        name="network"
        ref="networkMini"/>
    </g2-mini-box>
    <div class="content">
      <ram-pro ref="ramPro"/>
      <!-- <cpu-pro ref="cpuPir"/> -->
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

import G2MiniBox from '@/components/main/status/g2-mini-box.vue';
import RamMini from './Ram/mini.vue';
import RamPro from './Ram/pro.vue';
import CpuMini from './Cpu/mini.vue';
// import CpuPro from './Cpu/pro.vue';
import NetworkMini from './Network/mini.vue';

export default {
  data() {
    return {
      type: 'ram',
      socketVps: null,
    };
  },
  methods: {
    hanldeConnectWs() {
      this.socketVps = io(`${process.env.VUE_APP_BASE_API_PRO}/ws`, {
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
          this.$refs.networkMini.handleData(data.ram);
          // console.log('--------------------------');
          // console.log(data);
          // console.log('--------------------------');
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
    handleChange(v) {
      this.type = v;
    },
  },
  mounted() {
    this.handleSocketInit();
  },
  beforeDestroy() {
    this.socketVps.close();
  },
  components: {
    G2MiniBox,
    RamMini,
    RamPro,
    CpuMini,
    // CpuPro,
    NetworkMini,
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
