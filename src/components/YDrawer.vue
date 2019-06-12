<template>
  <a-drawer
    @close="handleClose"
    :visible="visible"
    :width="width"
    :title="title"
    placement="right"
    class="test">
    <slot/>
    <div
      v-if="footer"
      class="footer"
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'content',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button
        style="marginRight: 8px"
        @click="handleClose"
      >
        Cancel
      </a-button>
      <a-button @click="handleOk" type="primary">
        Submit
      </a-button>
    </div>
  </a-drawer>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'title',
    },
    width: {
      type: Number,
      default: 200,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleOk() {
      this.$emit('cancel');
    },
    handleClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .ant-drawer-header {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
