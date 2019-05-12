<template>
  <a-modal
    title="请选择协议"
    :visible="visible"
    :footer="null"
    @cancel="setVisible()"
    class="add-inbound__modal">
    <a-card>
      <a-card-grid
        v-for="item in inboundList"
        :key="item"
        @click="eventClick(item)">
        {{ item }}
      </a-card-grid>
    </a-card>
  </a-modal>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inboundList: [
        'Shadowsocks',
        'VMess',
      ],
    };
  },
  methods: {
    eventClick(v) {
      this.$emit('change', v);
      this.setVisible();
    },
    setVisible(v = false) {
      this.$emit('update:visible', v);
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
