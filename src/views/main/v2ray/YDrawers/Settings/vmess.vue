<template>
  <a-form>
    <div
      v-for="item in settings.clients"
      :key="item.id">
      <a-form-item :colon="false">
        <span slot="label">
          用户 ID :
          <a
            @click="eventRandomUuid(item)"
            class="attach">随机生成</a>
        </span>
        <a-input v-model="item.id"/>
      </a-form-item>
      <a-form-item :colon="false">
        <span slot="label">
          额外 ID :
          <a-tooltip
            placement="topLeft"
            class="attach">
            <template slot="title">
              <span>官方推荐值 "4" (我也不知道为什么)</span>
            </template>
            <a-icon type="question-circle"/>
          </a-tooltip>
        </span>
        <a-input-number
          v-model="item.alterId"
          :min="0"
          :max="65535"/>
      </a-form-item>
    </div>
  </a-form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      settings: state => state.v2ray.settings,
    }),
  },
  methods: {
    eventRandomUuid(obj) {
      // eslint-disable-next-line no-param-reassign
      obj.id = this.UUIDGeneratorBrowser();
    },
    UUIDGeneratorBrowser() {
      // eslint-disable-next-line no-bitwise
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
    },
  },
  created() {
    this.settings.clients.push(Object.assign(this.client, {
      id: this.UUIDGeneratorBrowser(),
    }));
  },
};
</script>

<style lang="scss" scoped>
.attach {
  margin-left: 10px;
}
</style>
