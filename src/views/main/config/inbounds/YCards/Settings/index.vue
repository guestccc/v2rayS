<script>
import Vmess from './vmess.vue';
import Shadowsocks from './shadowsocks.vue';
import Mtproto from './mtproto.vue';

export default {
  props: {
    protocol: {
      type: String,
      default: '',
    },
    settings: {
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
    comp() {
      const { settings } = this;
      const Comp = this.rights[this.protocol];
      return <Comp settings={settings}/>;
    },
  },
  render() {
    const { comp } = this;
    return (
      <div class="settings">{ comp }</div>
    );
  },
};
</script>
