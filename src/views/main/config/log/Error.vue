<script>
import io from 'socket.io-client';

import YDrawer from '@/components/YDrawer.vue';

export default {
  data() {
    return {
      visible: false,
      socketVps: null,
    };
  },
  render() {
    const {
      visible,
      eventOpen,
      eventClose,
    } = this;
    return (
      <div class="update">
        <a-button onClick={eventOpen}>查看</a-button>
        <y-drawer
          title="错误日志"
          placement="right"
          onClose={eventClose}
          visible={visible}
          width={750}>
          xxxxx
        </y-drawer>
      </div>
    );
  },
  methods: {
    eventOpen() {
      this.visible = true;
      this.handleSocketInit();
    },
    eventClose() {
      this.visible = false;
      this.socketVps.close();
    },
    hanldeConnectWs() {
      this.socketVps = io(`${process.env.VUE_APP_BASE_API}/log`, {
        query: {
          type: 'error',
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
      this.socketVps.on('res', (data) => {
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
  components: {
    YDrawer,
  },
};
</script>

<style lang="scss" scoped>
.update {
  display: inline-block;
}
</style>
