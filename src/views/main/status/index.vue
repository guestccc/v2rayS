<template>
  <div class="status">
    <a-card>
      <a-card-grid style="width:50%;textAlign:'center'">
        <p>运存</p>
        <p>{{ vpsDetail.xxx }}%</p>
        <p>{{ vpsDetail.freemem_gb }}/{{ vpsDetail.totalmem_gb }} GB</p>
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <p>运存</p>
        <p>{{ vpsDetail.xxx }}%</p>
        <p>{{ vpsDetail.freemem_gb }}/{{ vpsDetail.totalmem_gb }} GB</p>
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <p>负载</p>
        <p>1/5/15 分钟</p>
        <p v-if="vpsDetail.loadavg">{{ vpsDetail.loadavg.join('/') }}</p>
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <div id="chart"></div>
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        {{ vpsDetail.uptime }}
      </a-card-grid>
    </a-card>
    <a-button
      @click="handleIoVps"
      :disabled="!!socketVps">socket - /detail/vps</a-button>
    <a-button @click="eventPushVps">push</a-button>
  </div>
</template>

<script>
import io from 'socket.io-client';
import G2 from '@antv/g2';

import { getSysInfo } from '@/api/status';

export default {
  data() {
    return {
      socketVps: null,
      g2Chart: null,
      vpsDetail: {},
      data: [{
        year: '1991',
        value: 3,
      }, {
        year: '1992',
        value: 4,
      }, {
        year: '1993',
        value: 3.5,
      }, {
        year: '1994',
        value: 5,
      }, {
        year: '1995',
        value: 4.9,
      }, {
        year: '1996',
        value: 6,
      }, {
        year: '1997',
        value: 7,
      }, {
        year: '1998',
        value: 9,
      }, {
        year: '1999',
        value: 20,
      }],
    };
  },
  methods: {
    eventPushVps() {
      this.socketVps.emit('chat', '您好啊服务器，我是客户端');
    },
    async getSysInfo() {
      const { data } = await getSysInfo();
      console.log('------------');
      console.log(data.res);
      console.log('------------');
    },
    hanldeConnectWs() {
      this.socketVps = io('http://127.0.0.1:7001/ws', {
        query: {
          room: 'demo',
          userId: `client_${Math.random()}`,
        },
        transports: ['websocket'],
      });
      window.socketVps = this.socketVps;
    },
    handleIoVps() {
      this.hanldeConnectWs();
      this.socketVps.on('connect', () => {
        console.log('------------');
        console.log('connect', this.socketVps.id);
        console.log('------------');
      });
      this.socketVps.on('res', (msg) => {
        console.log('------------');
        console.log('新消息：', msg);
        console.log('------------');
        this.vpsDetail = msg;
      });
      this.socketVps.on('disconnect', (msg) => {
        console.log('------------');
        console.log('断开连接', msg);
        console.log('------------');
      });
    },
    handleInitChart() {
      this.g2Chart = new G2.Chart({
        container: 'chart',
        forceFit: true,
        height: 300,
        padding: [10, 0, 20, 20],
      });
      this.g2Chart.source(this.data);
      this.g2Chart.scale('value', {
        alias: '使用',
      });
      this.g2Chart.axis('year', {
        label: null,
      });
      // this.g2Chart.scale('year', {
      //   range: [0, 1],
      // });
      this.g2Chart.line().position('year*value');
      this.g2Chart.render();
    },
  },
  mounted() {
    this.handleIoVps();
    this.handleInitChart();
  },
  beforeDestroy() {
    this.socketVps.close();
  },
};
</script>
