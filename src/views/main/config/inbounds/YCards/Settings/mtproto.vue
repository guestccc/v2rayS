<script>
export default {
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  render() {
    const { settings } = this;
    const clients = settings.users.map(item => (
      <a-row gutter={16}>
        <a-col span={24}>
          <a-form-item label="密钥">
            { item.secret }
          </a-form-item>
        </a-col>
        <a-col span={12}>
          <a-form-item label="邮箱">
            { item.email }
          </a-form-item>
        </a-col>
        <a-col span={12}>
          <a-form-item label="用户等级">
            { item.level }
          </a-form-item>
        </a-col>
      </a-row>
    ));
    return (
      <a-form>
        { clients }
      </a-form>
    );
  },
};
</script>
