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
    const clients = settings.clients.map(item => (
      <a-row gutter={16}>
        <a-col span={12}>
          <a-form-item label="用户 ID">
            { item.id }
          </a-form-item>
        </a-col>
        <a-col span={12}>
          <a-form-item label="额外 ID">
            { item.alterId }
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
