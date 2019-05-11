<template>
  <div class="add-inbound">
    <a-button
      @click="visible = true">添加账号</a-button>
    <a-modal
      title="请选择协议"
      :visible="visible"
      :footer="null"
      @cancel="visible = false"
      class="add-inbound__modal">
      <a-card>
        <a-card-grid
          v-for="item in inboundList"
          :key="item"
          @click="eventInbound(item)">
          {{item}}
        </a-card-grid>
      </a-card>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false,
      inboundList: [
        'Shadowsocks',
        'VMess',
      ],
    };
  },
  methods: {
    eventInbound(v) {
      this.visible = false;
      this.$emit('click', v);
    },
  },
};
</script>

<style lang="scss">
.add-inbound__modal {
  .ant-modal-body {
    padding: 0;
  }
}
.ant-card {
  .ant-card-grid {
    width: 100%;
    cursor: pointer;
  }
}
</style>
