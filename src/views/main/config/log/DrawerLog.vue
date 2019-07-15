<script>
import io from 'socket.io-client';
import { mapState } from 'vuex';

import YDrawer from '@/components/YDrawer.vue';

export default {
  data() {
    return {
      visible: false,
      socket: null,
      activeFilePath: '',
      content: '',
    };
  },
  computed: {
    ...mapState('config', [
      'log',
    ]),
    filePath() {
      return this.activeFilePath || this.log.access;
    },
  },
  render() {
    const {
      visible,
      content,
      log,
      filePath,
      eventOpen,
      eventClose,
      eventTab,
    } = this;
    return (
      <div class="update">
        <a-button onClick={eventOpen}>查看</a-button>
        <y-drawer
          placement="right"
          onClose={eventClose}
          visible={visible}
          width={750}
          no-padding>
          <template slot="title">
            <a-tabs defaultActiveKey={filePath} onChange={eventTab}>
              <a-tab-pane tab="访问日志" key={log.access}/>
              <a-tab-pane tab="错误日志" key={log.error}/>
            </a-tabs>
          </template>
          <pre class="content">{ content }</pre>
        </y-drawer>
      </div>
    );
  },
  methods: {
    eventOpen() {
      this.visible = true;
      this.eventTab();
    },
    eventClose() {
      this.visible = false;
      this.socket.emit('stop', '停止监听');
    },
    eventTab(v = '') {
      this.content = '';
      this.activeFilePath = v;
      if (!this.filePath) return;
      this.socket.emit('start', this.filePath);
    },
    hanldeConnectWs() {
      this.socket = io(`${process.env.VUE_APP_BASE_API_PRO}/log`, {
        query: {
          room: 'demo',
          userId: `client_${Math.random()}`,
        },
        transports: ['websocket'],
      });
      this.socket.on('connect', () => {
        console.log('------------');
        console.log('成功连接', this.socket.id);
        console.log('------------');
      });
      this.socket.on('res', (data) => {
        this.content = data;
      });
      this.socket.on('disconnect', (msg) => {
        console.log('------------');
        console.log('断开连接', msg);
        console.log('------------');
      });
    },
  },
  created() {
    this.hanldeConnectWs();
  },
  beforeDestroy() {
    const { socket } = this;
    if (socket) socket.close();
  },
  components: {
    YDrawer,
  },
};
</script>

<style lang="scss" scoped>
.ant-tabs {
  padding-left: 15px;
  /deep/ .ant-tabs-bar {
    .ant-tabs-nav {
      height: 56px;
      line-height: 32px;
    }
    margin: 0;
  }
}
.content {
  margin: 0;
  padding-left: 2px;
  height: 100%;
  color: #eee;
  background: #000;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.update {
  display: inline-block;
}
</style>
