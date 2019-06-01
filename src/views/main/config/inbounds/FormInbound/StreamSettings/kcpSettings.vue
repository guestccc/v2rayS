<script>
export default {
  props: {
    streamSettings: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      types: [
        {
          label: 'none',
          value: 'none',
        },
        {
          label: 'srtp',
          value: 'srtp',
        },
        {
          label: 'utp',
          value: 'utp',
        },
        {
          label: 'wechat-video',
          value: 'wechat-video',
        },
        {
          label: 'dtls',
          value: 'dtls',
        },
        {
          label: 'wireguard',
          value: 'wireguard',
        },
      ],
      congestions: [
        {
          label: 'true',
          value: true,
        },
        {
          label: 'false',
          value: false,
        },
      ],
    };
  },
  computed: {
    kcpSettings() {
      return this.streamSettings.kcpSettings;
    },
  },
  render() {
    const {
      types,
      // congestions,
      kcpSettings,
    } = this;
    const typeOptions = types.map(({ label, value }) => (
      <a-select-option
        key={value}
        value={value}>{ label }</a-select-option>
    ));
    // const congestionOptions = congestions.map(({ label, value }) => (
    //   <a-select-option
    //     key={value}
    //     value={value}>{ label }</a-select-option>
    // ));
    return (
      <a-form>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="伪装类型">
              <a-select v-model={kcpSettings.header.type}>
                { typeOptions }
              </a-select>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="是否启用拥塞控制">
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="上行链路容量">
              <a-input v-model={kcpSettings.uplinkCapacity}/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="下行链路容量">
              <a-input v-model={kcpSettings.downlinkCapacity}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="单个连接的读取缓冲区大小">
              <a-input v-model={kcpSettings.readBufferSize}/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="单个连接的写入缓冲区大小">
              <a-input v-model={kcpSettings.writeBufferSize}/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    );
  },
};
</script>
