<template>
  <div class="y-cards">
    <a-card
      v-for="item in inbounds"
      :key="item.port">
      <template
        slot="title">
        <div class="left">
          {{ item.protocol }}
        </div>
        <div class="right">
          <a-icon type="qrcode"/>
          <a-icon type="link"/>
          <a-icon
            @click="eventEdit(item)"
            type="edit"/>
          <a-popconfirm
            @confirm="networkDelV2ray(item.port)"
            title="确定要删除吗？"
            okText="Yes"
            cancelText="No"
            placement="topRight">
            <a-icon type="delete"/>
          </a-popconfirm>
        </div>
      </template>
      {{ item.listen }}
      {{ item.port }}
    </a-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { delV2ray } from '@/api/v2ray';

export default {
  computed: {
    ...mapState({
      inbounds: state => state.v2ray.inbounds,
    }),
  },
  methods: {
    eventEdit(v) {
      console.log('--------------------------');
      console.log(v);
      console.log('--------------------------');
    },
    async networkDelV2ray(port) {
      await delV2ray(port);
      this.$message.success('删除成功');
      this.$store.dispatch('v2ray/getV2rayInbound');
    },
  },
  created() {
    this.$store.dispatch('v2ray/getV2rayInbound');
  },
};
</script>

<style lang="scss" scoped>
.y-cards {
  .ant-card {
    display: inline-block;
    width: 500px;
    /deep/ .ant-card-head-title {
      display: flex;
      justify-content: space-between;
      .right {
        .anticon {
          font-size: 20px;
          cursor: pointer;
          &:hover {
            color: #1890ff;
          }
          & + .anticon {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
