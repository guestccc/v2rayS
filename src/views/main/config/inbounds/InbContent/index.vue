<script>
import { mapState } from 'vuex';

import Shadowsocks from './Shadowsocks.vue';
import Vmess from './Vmess.vue';

export default {
  data() {
    return {
      options: {
        vmess: Vmess,
        shadowsocks: Shadowsocks,
      },
    };
  },
  computed: {
    ...mapState('config', [
      'inbounds',
    ]),
  },
  methods: {
    handleComp(protocol) {
      console.log('------------');
      console.log(protocol);
      console.log('------------');
      switch (protocol) {
        case 'shadowsocks':
          return <Shadowsocks test/>;
        case 'vmess':
          return <Vmess/>;
        default:
          return null;
      }
    },
  },
  render() {
    const {
      options,
      inbounds,
    } = this;
    console.log('------------');
    console.log(options);
    console.log('------------');
    const option = inbounds.map(item => (
      <div>
        <p>title</p>
        <components is={options[item.protocol]}/>
      </div>
    ));
    return (
      <div class="inbounds-content">
        {option}
      </div>
    );
  },
};
</script>
