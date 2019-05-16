<script>
import { mapState } from 'vuex';

import YTitle from './YTitle/index.vue';
import YSettings from './Settings/index.vue';

export default {
  computed: {
    ...mapState({
      inbounds: state => state.config.inbounds,
    }),
  },
  render() {
    const { inbounds } = this;
    const cards = inbounds.map((item) => {
      const { protocol, port, settings } = item;
      return (
        <a-card>
          <template slot="title">
            <y-title data={item}/>
          </template>
          <y-settings
            settings={settings}
            protocol={protocol}/>
          {port}
        </a-card>
      );
    });
    return (
      <div class="y-cards">
        { cards }
      </div>
    );
  },
  created() {
    this.$store.dispatch('config/getConfigInbound');
  },
  components: {
    YTitle,
    YSettings,
  },
};
</script>

<style lang="scss" scoped>
.y-cards {
  .ant-card {
    // display: inline-block;
    width: 600px;
  }
}
</style>
