<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: undefined,
    },
    width: {
      type: Number,
      default: 200,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    const {
      $slots,
      visible,
      width,
      title,
      noPadding,
      footer,
      handleOk,
      handleClose,
    } = this;
    const footerVNode = footer ? (
      <div class="y-drawer-footer">
        <a-button onClick={handleClose}>
          Cancel
        </a-button>
        <a-button
          onClick={handleOk}
          type="primary">
          Submit
        </a-button>
      </div>
    ) : null;
    return (
      <a-drawer
        onClose={handleClose}
        visible={visible}
        width={width}
        placement="right"
        wrapClassName="y-drawer">
        <div class={['y-drawer-header', title ? 'is-title' : '']}>
          { title || $slots.title }
        </div>
        <div
          class={['y-drawer-body', noPadding ? 'no-padding' : '']}>
          { $slots.default }
        </div>
        { footerVNode }
      </a-drawer>
    );
  },
  methods: {
    handleOk() {
      this.$emit('ok');
    },
    handleClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
.y-drawer {
  .ant-drawer-wrapper-body {
    .ant-drawer-body {
      display: flex;
      flex-direction: column;
      padding: 0;
      height: 100%;
      .y-drawer-header {
        min-height: 56px;
        border-bottom: 1px solid #e8e8e8;
        &.is-title {
          padding-left: 15px;
          line-height: 56px;
          font-size: 16px;
          font-weight: 500;
        }
      }
      .y-drawer-body {
        flex: 1;
        padding: 15px;
        overflow: auto;
        &.no-padding {
          padding: 0;
        }
      }
      .y-drawer-footer {
        padding: 10px;
        min-height: 52px;
        border-top: 1px solid #e8e8e8;
        .ant-btn {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
