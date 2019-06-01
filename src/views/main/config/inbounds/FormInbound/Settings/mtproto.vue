<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      settings: state => state.config.settings,
    }),
    users() {
      const { settings, eventRandomSecret } = this;
      return settings.users.map((item, index) => (
        <a-row
          key={index}
          gutter={16}>
          <a-col span={24}>
            <a-form-item colon={false}>
              <span slot="label">
                密钥 :
                <a-button
                  onClick={() => eventRandomSecret(item)}
                  class="attach"
                  type="primary"
                  size="small"
                  ghost>随机生成</a-button>
              </span>
              <a-input
                v-model={item.secret}
                read-only/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="邮箱">
              <a-input v-model={item.email}/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="用户等级">
              <a-input v-model={item.level}/>
            </a-form-item>
          </a-col>
        </a-row>
      ));
    },
  },
  render() {
    const { users } = this;
    return (
      <a-form>
        { users }
      </a-form>
    );
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
