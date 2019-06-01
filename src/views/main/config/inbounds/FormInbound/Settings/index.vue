<script>
import Vmess from './vmess.vue';
import Shadowsocks from './shadowsocks.vue';
import Mtproto from './mtproto.vue';

export default {
  props: {
    protocol: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      rights: {
        shadowsocks: Shadowsocks,
        vmess: Vmess,
        mtproto: Mtproto,
      },
    };
  },
  computed: {
    settings() {
      const Comp = this.rights[this.protocol.value];
      return <Comp/>;
    },
  },
  render() {
    const { settings } = this;
    return (
      <div class="settings">{ settings }</div>
    );
  },
};
</script>

<style lang="scss" scoped>
.settings {
  padding: 20px;
  border: 1px solid red;
}
</style>
