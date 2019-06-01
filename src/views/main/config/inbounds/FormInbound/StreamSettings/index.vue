<script>
import { mapState } from 'vuex';

import KcpSettings from './kcpSettings.vue';

export default {
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
          label: 'WebSocket',
          value: 'ws',
          key: null,
        },
        {
          label: 'HTTP/2',
          value: 'http',
          key: null,
        },
        {
          label: 'Domain socket',
          value: 'domainsocket',
          key: null,
        },
        {
          label: 'QUIC',
          value: 'quic',
          key: null,
        },
      ],
      securitys: [
        {
          label: 'none',
          value: 'none',
        },
        {
          label: 'tls',
          value: 'tls',
        },
      ],
    };
  },
  computed: {
    ...mapState('config', [
      'inbound',
    ]),
    streamSettings() {
      return this.inbound.streamSettings;
    },
    networkSettings() {
      const { networks, streamSettings } = this;
      const { key } = networks.find(({ value }) => value === streamSettings.network);
      return <key streamSettings={streamSettings}/>;
    },
  },
  render() {
    const {
      networks, securitys, streamSettings, networkSettings,
    } = this;
    const networkOptions = networks.map(({ label, value }) => (
      <a-select-option
        key={value}
        value={value}>{ label }</a-select-option>
    ));
    const securityOptions = securitys.map(({ label, value }) => (
      <a-select-option
        key={value}
        value={value}>{ label }</a-select-option>
    ));
    return (
      <a-form>
        <a-row gutter={16}>
          <a-col span={8}>
            <a-form-item label="网络连接类型">
              <a-select v-model={streamSettings.network}>
                { networkOptions }
              </a-select>
            </a-form-item>
          </a-col>
          <a-col span={8}>
            <a-form-item label="是否启入传输层加密">
              <a-select v-model={streamSettings.security}>
                { securityOptions }
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        { networkSettings }
        <a-row gutter={16}>
          <a-col span={8}>
            <a-form-item label="str">
              { JSON.stringify(streamSettings) }
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    );
  },
};
</script>
