<script>
import KcpSettings from './kcpSettings.vue';

export default {
  props: {
    streamSettings: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      networks: [
        {
          label: 'TCP',
          value: 'tcp',
          key: null,
        },
        {
          label: 'mKCP',
          value: 'kcp',
          key: KcpSettings,
        },
        {
          label: 'WebSocket（以下暂不支持）',
          value: 'ws',
          key: null,
          disabled: true,
        },
        {
          label: 'HTTP/2',
          value: 'http',
          key: null,
          disabled: true,
        },
        {
          label: 'Domain socket',
          value: 'domainsocket',
          key: null,
          disabled: true,
        },
        {
          label: 'QUIC',
          value: 'quic',
          key: null,
          disabled: true,
        },
      ],
    };
  },
  computed: {
    networkSettings() {
      const { networks, streamSettings } = this;
      const { key } = networks.find(({ value }) => value === streamSettings.network) || {};
      return <key streamSettings={streamSettings}/>;
    },
  },
  render() {
    const {
      streamSettings,
      networkSettings,
    } = this;

    return (
      <a-form class="stream-settings">
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="网络连接类型">
              { streamSettings.network }
            </a-form-item>
          </a-col>
        </a-row>
        { networkSettings }
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="是否启入传输层加密">
              { streamSettings.security }
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    );
  },
};
</script>
