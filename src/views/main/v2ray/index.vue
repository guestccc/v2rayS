<template>
  <div class="account">
    <div class="btns">
      <add-inbound @change="handleChange"/>
    </div>
    <y-drawers
      :classify="classify"
      :visible.sync="visibleDrawers"
      @success="networkGetV2ray"/>
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
            <div
              @click.stop=""
              class="right">
              <a-icon
                @click="eventEdit(item)"
                type="edit"/>
              <a-popconfirm
                @confirm="networkDelV2ray(item.port)"
                title="Are you sure？"
                placement="bottomRight"
                okText="Yes"
                cancelText="No">
                <a-icon type="delete"/>
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
import YDrawers from './YDrawers/index.vue';
import { getV2ray, delV2ray } from '@/api/v2ray';

export default {
  data() {
    return {
      visibleDrawers: false,
      classify: '',
      config: {},
      inbounds: [],
    };
  },
  methods: {
    eventEdit(v) {
      this.visibleDrawers = true;
      console.log('--------------------------');
      console.log(v);
      console.log('--------------------------');
    },
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
    handleChange(v) {
      this.visibleDrawers = true;
      this.classify = v;
    },
  },
  created() {
    this.networkGetV2ray();
  },
  components: {
    AddInbound,
    YDrawers,
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
