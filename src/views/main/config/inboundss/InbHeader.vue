<script>
import { mapMutations } from 'vuex';

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
    ...mapMutations('configInbound', [
      'setVisibleDrawerShow',
    ]),
    eventClickModal() {
      this.visible = true;
    },
    eventClickCardGrid(row) {
      console.log('------------');
      console.log(row);
      console.log('------------');
      this.handleCancel();
      this.setVisibleDrawerShow();
    },
    handleCancel() {
      this.visible = false;
    },
  },
  render() {
    const {
      visible,
      protocolOptions,

      // methods
      eventClickCardGrid,
      eventClickModal,
      handleCancel,
    } = this;
    const cardGrids = protocolOptions.map(protocol => (
      <a-card-grid
        key={protocol.value}
        onClick={() => eventClickCardGrid(protocol)}>
        {protocol.label}
      </a-card-grid>
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
          <a-card>
            {cardGrids}
          </a-card>
        </a-modal>
      </div>
    );
  },
};
</script>

<style lang="scss">
// .add-inbound__modal {
//   .ant-modal-body {
//     padding: 0;
//   }
// }
.ant-card {
  .ant-card-grid {
    width: 100%;
    cursor: pointer;
  }
}
</style>
