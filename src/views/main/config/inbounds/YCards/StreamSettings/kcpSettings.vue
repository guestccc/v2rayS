<script>
export default {
  props: {
    streamSettings: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    kcpSettings() {
      return this.streamSettings.kcpSettings;
    },
  },
  render() {
    const {
      kcpSettings,
    } = this;
    return (
      <a-form>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="伪装类型">
              { kcpSettings.header.type }
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="是否启用拥塞控制">
              { `${kcpSettings.congestion}` }
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="上行链路容量">
              { kcpSettings.uplinkCapacity }
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="下行链路容量">
              { kcpSettings.downlinkCapacity }
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="单个连接的读取缓冲区大小">
              { kcpSettings.readBufferSize }
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="单个连接的写入缓冲区大小">
              { kcpSettings.writeBufferSize }
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="最大传输单元">
              { kcpSettings.mtu }
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="传输时间间隔(ms)">
              { kcpSettings.tti }
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    );
  },
};
</script>
