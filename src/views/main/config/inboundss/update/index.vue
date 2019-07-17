<script>
import Shadowsocks from '../Shadowsocks.vue';
import Vmess from '../Vmess.vue';

export default {
  data() {
    return {
      options: {
        shadowsocks: Shadowsocks,
        vmess: Vmess,
      },
    };
  },
  computed: {
    protocol() {
      const { $route, options } = this;
      const { protocol } = $route.params;
      return options[protocol] || Vmess;
    },
  },
  render() {
    const {
      protocol,
    } = this;
    return (
      <protocol/>
    );
  },
};
</script>
