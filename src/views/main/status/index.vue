<template>
  <div class="status">
    <a-card>
      <a-card-grid style="width:50%;textAlign:'center'">
        <a-progress type="circle" :percent="75" />
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <a-progress type="circle" :percent="75" />
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <a-progress type="circle" :percent="75" />
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <a-progress type="circle" :percent="75" />
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <a-progress type="circle" :percent="75" />
      </a-card-grid>
      <a-card-grid style="width:50%;textAlign:'center'">
        <a-progress type="circle" :percent="75" />
      </a-card-grid>
    </a-card>
    <a-button @click="handleIo">socket</a-button>
  </div>
</template>

<script>
import io from 'socket.io-client';

import { getSysInfo } from '@/api/status';

export default {
  data() {
    return {
      socket: null,
    };
  },
  methods: {
    async getSysInfo() {
      const { data } = await getSysInfo();
      console.log('------------');
      console.log(data.res);
      console.log('------------');
    },
    handleIo() {
      console.log('------------');
      console.log('start');
      console.log('------------');
      this.socket = io('http://127.0.0.1:7001/', {
        query: {
          room: 'demo',
          userId: `client_${Math.random()}`,
        },
        transports: ['websocket'],
      });
      this.socket.on('connect', () => {
        console.log('------------');
        console.log('connect', this.socket.id);
        console.log('------------');
        this.socket.on(this.socket.id, (msg) => {
          console.log('------------');
          console.log('#receive,', msg);
          console.log('------------');
        });
      });
      this.socket.on('disconnect', (msg) => {
        console.log('------------');
        console.log('#disconnect', msg);
        console.log('------------');
      });
    },
  },
  mounted() {
    // this.getSysInfo();
    // this.handleIo();
  },
};
</script>
