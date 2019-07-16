<script>
export default {
  data() {
    return {
      visible: false,
      protocolOptions: [
        {
          label: 'Vmess',
          value: 'vmess',
        },
        {
          label: 'Shadowsocks',
          value: 'shadowsocks',
        },
      ],
    };
  },
  methods: {
    eventClickModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
  },
  render() {
    const {
      // data
      visible,
      protocolOptions,

      // methods
      eventClickModal,
      handleCancel,
    } = this;
    const cardGrids = protocolOptions.map(protocol => (
      <router-link to={`inbounds/create/${protocol.value}`}>
        <a-card-grid
          key={protocol.value}>
          {protocol.label}
        </a-card-grid>
      </router-link>
    ));
    return (
      <div class="header">
        <a-button onClick={eventClickModal}>添加账号</a-button>
        <a-modal
          title="请选择协议"
          footer={null}
          v-model={visible}
          onCancel={handleCancel}
        >
          <a-card class="protocol-card">
            {cardGrids}
          </a-card>
        </a-modal>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
// /deep/ .ant-card {
//   .ant-card-grid {
//     width: 100%;
//     cursor: pointer;
//   }
// }
/deep/ .protocol-card {
  .ant-card-body {
    padding: 0;
  }
}
</style>
