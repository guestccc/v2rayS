<script>
import { mapState } from 'vuex';

import YTitle from './YTitle/index.vue';
import YSettings from './Settings/index.vue';
import StreamSettings from './StreamSettings/index.vue';

export default {
  computed: {
    ...mapState('config', [
      'inbounds',
    ]),
  },
  render() {
    const { inbounds } = this;
    const cards = inbounds.map((item) => {
      const {
        protocol,
        settings,
        streamSettings,
      } = item;
      return (
        <a-card>
          <template slot="title">
            <y-title data={item}/>
          </template>
          <y-settings
            settings={settings}
            protocol={protocol}/>
          <StreamSettings streamSettings={streamSettings}/>
        </a-card>
      );
    });
    return (
      <div class="y-cards">
        { cards }
      </div>
    );
  },
  components: {
    YTitle,
    YSettings,
    StreamSettings,
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
