<template>
  <a-form>
    <div
      v-for="item in settings.users"
      :key="item.id">
      <a-form-item :colon="false">
        <span slot="label">
          密钥 :
          <a
            @click="eventRandomSecret(item)"
            class="attach">随机生成</a>
        </span>
        <a-input
          v-model="item.secret"
          read-only/>
      </a-form-item>
    </div>
  </a-form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      settings: state => state.config.settings,
    }),
  },
  methods: {
    eventRandomSecret(obj) {
      // eslint-disable-next-line no-param-reassign
      obj.secret = this.handleRandomSecret();
    },
    handleRandomSecret() {
      return Array(32).fill().map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    },
  },
};
</script>

<style lang="scss" scoped>
.attach {
  margin-left: 10px;
}
</style>
