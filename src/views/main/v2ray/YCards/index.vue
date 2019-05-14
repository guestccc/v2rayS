<script>
// <template>
//   <div class="y-cards">
//     <a-card
//       v-for="item in inbounds"
//       :key="item.port">
//       <template
//         slot="title">
//         <y-title :data="item"/>
//       </template>
//       {{ item.listen }}
//       {{ item.port }}
//       <y-settings
//         :settings="item.settings"
//         :protocol="item.protocol"/>
//     </a-card>
//   </div>
// </template>
import { mapState } from 'vuex';

import YTitle from './YTitle/index.vue';
import YSettings from './Settings/index.vue';

export default {
  computed: {
    ...mapState({
      inbounds: state => state.v2ray.inbounds,
    }),
  },
  render() {
    const { inbounds } = this;
    const cards = inbounds.map((item) => {
      const { protocol, settings } = item;
      return (
        <a-card>
          <template slot="title">
            <y-title data={item}/>
          </template>
          <y-settings
            settings={settings}
            protocol={protocol}/>
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
    this.$store.dispatch('v2ray/getV2rayInbound');
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
    display: inline-block;
    width: 400px;
  }
}
</style>
