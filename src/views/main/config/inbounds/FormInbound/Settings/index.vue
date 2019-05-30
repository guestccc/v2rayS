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
  render() {
    const { rights, protocol } = this;
    const Comp = rights[protocol.value];
    return (
      <Comp/>
    );
  },
  components: {
    Vmess,
    Shadowsocks,
    Mtproto,
  },
};
</script>
