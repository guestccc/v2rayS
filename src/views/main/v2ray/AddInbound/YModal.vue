<template>
  <a-modal
    title="请选择协议"
    :visible="visible"
    :footer="null"
    @cancel="setVisibleModal()"
    class="add-inbound__modal">
    <a-card>
      <a-card-grid
        v-for="item in protocols"
        :key="item.label"
        @click="eventClick(item)">
        {{ item.label }}
      </a-card-grid>
    </a-card>
  </a-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      protocols: state => state.v2ray.protocols,
      visible: state => state.v2ray.visibleModal,
    }),
  },
  methods: {
    ...mapMutations('v2ray', [
      'setVisibleModal',
      'setVisibleDrawers',
      'setProtocol',
    ]),
    eventClick(v) {
      this.setProtocol(v);
      this.setVisibleModal();
      this.setVisibleDrawers(1);
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
