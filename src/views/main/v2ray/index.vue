<template>
  <div class="account">
    <div class="btns">
      <add-inbound @change="handleChange"/>
    </div>
    <y-drawers
      :classify="classify"
      :visible.sync="visibleDrawers"
      @success="networkGetV2ray"/>
    <y-cards
      :inbounds="inbounds"
      @edit="handleEdit"
      @update="networkGetV2ray"/>
  </div>
</template>

<script>
import AddInbound from './AddInbound/index.vue';
import YDrawers from './YDrawers/index.vue';
import YCards from './YCards/index.vue';

import { getV2ray } from '@/api/v2ray';

export default {
  data() {
    return {
      visibleDrawers: false,
      classify: '',
      config: {},
      inbounds: [],
    };
  },
  methods: {
    eventEdit(v) {
      this.visibleDrawers = true;
      console.log('--------------------------');
      console.log(v);
      console.log('--------------------------');
    },
    eventDel() {},
    async networkGetV2ray() {
      const { data } = await getV2ray();
      this.config = data;
      this.inbounds = data.inbounds;
    },
    handleChange(v) {
      this.classify = v;
      this.visibleDrawers = true;
    },
    handleEdit(v) {
      this.classify = v.protocol;
      this.visibleDrawers = true;
      console.log('--------------------------');
      console.log(v);
      console.log('--------------------------');
    },
  },
  created() {
    this.networkGetV2ray();
  },
  components: {
    AddInbound,
    YDrawers,
    YCards,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  // line-height: 32px;
  padding: 0 30px 0 0;
}
</style>
