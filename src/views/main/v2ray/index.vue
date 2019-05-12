<template>
  <div class="account">
    <add-inbound @success="networkGetV2ray"/>
    <!-- <a-tabs>
      <a-tab-pane tab="全部" key="1">
        <a-card title="Vmess">
          <div slot="extra">
            extra
          </div>
          <div class="card-content">
            content
          </div>
        </a-card>
        <a-card title="Vmess">
          <div slot="extra">
            extra
          </div>
          <div class="card-content">
            content
          </div>
        </a-card>
        <a-card title="Vmess">
          <div slot="extra">
            extra
          </div>
          <div class="card-content">
            content
          </div>
        </a-card>
      </a-tab-pane>
      <a-tab-pane tab="Vmess" key="2">Content of tab 2</a-tab-pane>
      <a-tab-pane tab="Shadowsocks" key="3">Content of tab 3</a-tab-pane>
    </a-tabs> -->
    <a-collapse
      v-if="inbounds.length"
      accordion>
      <a-collapse-panel
        v-for="item in inbounds"
        :key="item.port">
        <template slot="header">
          <div class="content">
            <div class="left">
              {{ item.protocol }}
              {{ item.listen }}
              {{ item.port }}
            </div>
            <div class="right">
              <a-popconfirm
                @confirm="networkDelV2ray(item.port)"
                title="Are you sure？"
                placement="bottomRight"
                okText="Yes"
                cancelText="No">
                <a @click.stop="">Delete</a>
              </a-popconfirm>
            </div>
          </div>
        </template>
        <p>{{item.settings.method}}</p>
        <p>{{item.settings.network}}</p>
        <p>{{item.settings.password}}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import AddInbound from './AddInbound/index.vue';
import { getV2ray, delV2ray } from '@/api/v2ray';

export default {
  data() {
    return {
      config: {},
      inbounds: [],
      columns: [
        {
          title: '监听 IP',
          dataIndex: 'listen',
          key: 'listen',
        },
        {
          title: '端口',
          dataIndex: 'port',
          key: 'port',
        },
        {
          title: '协议',
          dataIndex: 'protocol',
          key: 'protocol',
        },
      ],
    };
  },
  methods: {
    eventDel() {},
    async networkGetV2ray() {
      const { data } = await getV2ray();
      this.config = data;
      this.inbounds = data.inbounds;
    },
    async networkDelV2ray(port) {
      await delV2ray(port);
      this.networkGetV2ray();
      this.$message.success('删除成功');
    },
  },
  created() {
    this.networkGetV2ray();
  },
  components: {
    AddInbound,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  // line-height: 32px;
  padding: 0 30px 0 0;
}
</style>
