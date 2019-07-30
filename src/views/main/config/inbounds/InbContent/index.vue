<script>
import { mapState } from 'vuex';

import Shadowsocks from './Shadowsocks.vue';
import Vmess from './Vmess.vue';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('config', [
      'inbounds',
    ]),
  },
  methods: {
    handleComponent(protocol, row) {
      const data = {
        props: {
          row,
        },
      };
      switch (protocol) {
        case 'shadowsocks':
          return <Shadowsocks { ...data }/>;
        case 'vmess':
          return <Vmess { ...data }/>;
        default:
          return null;
      }
    },
  },
  render() {
    const {
      // data

      // computed
      inbounds,

      // methods
      handleComponent,
    } = this;
    const option = inbounds.map(item => (
      <a-card class="inbounds-list-card">
        <div
          slot="title"
          class="inbounds-list-card-title">
          <a-tag color="#f50">{item.protocol}</a-tag>
          <a-tag color="#108ee9">{item.listen || '0.0.0.0'}</a-tag>
          <a-tag color="#87d068">{item.port}</a-tag>
        </div>
        <div slot="extra">
          <a-icon type="delete"/>
          <a-icon type="edit"/>
          <a-icon type="delete"/>
        </div>
        <a-form layout="inline">
          { handleComponent(item.protocol, item.settings) }
        </a-form>
      </a-card>
    ));
    return (
      <div class="inbounds-list">
        {option}
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
.inbounds-list {
  &-card {
    &-title {
      span {
        // margin-right: 20px;
        display: inline-block;
        width: 100px;
      }
    }
  }
}
</style>
