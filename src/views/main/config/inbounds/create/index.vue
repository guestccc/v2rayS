<script>
import InbForm from '../InbForm/index.vue';

export default {
  data() {
    return {
      tabOptions: [
        {
          label: 'Shadowsocks',
          key: 'shadowsocks',
        },
        {
          label: 'VMess',
          key: 'vmess',
        },
      ],
      protocol: 'shadowsocks',
    };
  },
  computed: {
    defaultActiveKey() {
      const { $route, tabOptions } = this;
      const { protocol } = $route.params;
      const tab = tabOptions.find(item => item.key === protocol);
      return tab ? tab.key : 'shadowsocks';
    },
  },
  methods: {
    eventChangeTab(v) {
      this.protocol = v;
    },
  },
  render() {
    const {
      // data
      tabOptions,
      protocol,

      // computed
      defaultActiveKey,

      // methods
      eventChangeTab,
    } = this;
    const tabPanes = tabOptions.map(item => (
      <a-tab-pane tab={item.label} key={item.key}>
        <inb-form protocol={protocol}/>
      </a-tab-pane>
    ));
    return (
      <div class="inbound-create">
        <div class="inbound-create_tabs">
          <a-tabs
            defaultActiveKey={defaultActiveKey}
            onChange={eventChangeTab}>
            {tabPanes}
          </a-tabs>
        </div>
        <div class="inbound-create_tabs">预览</div>
      </div>
    );
  },
  components: {
    InbForm,
  },
};
</script>

<style lang="scss" scoped>
.inbound-create {
  display: flex;
  & > &_tabs {
    width: 600px;
  }
}
</style>
