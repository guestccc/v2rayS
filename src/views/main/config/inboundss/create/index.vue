<script>
import Shadowsocks from '../Shadowsocks.vue';
import Vmess from '../Vmess.vue';

export default {
  data() {
    return {
      tabOptions: [
        {
          label: 'Shadowsocks',
          key: 'shadowsocks',
          component: Shadowsocks,
        },
        {
          label: 'VMess',
          key: 'vmess',
          component: Vmess,
        },
      ],
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
  },
  render() {
    const {
      // data
      tabOptions,
      defaultActiveKey,
    } = this;
    const tabPanes = tabOptions.map(item => (
      <a-tab-pane tab={item.label} key={item.key}>
        <item.component/>
      </a-tab-pane>
    ));
    return (
      <div class="inbounds-create">
        <a-tabs
          defaultActiveKey={defaultActiveKey}
          class="inbounds-create_tabs">
          {tabPanes}
        </a-tabs>
        <div class="inbounds-create_tabs">预览</div>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
.inbounds-create {
  display: flex;
  &_tabs {
    width: 600px;
  }
}
</style>
