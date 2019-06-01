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
    return (
      <a-form>
        <a-row>
          <a-col>
            <a-form-item label="密码">
              { settings.password }
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col span={12}>
            <a-form-item label="加密方式">
              { settings.method }
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="网络连接类型">
              { settings.network }
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col span={12}>
            <a-form-item label="邮箱">
              { settings.email }
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="用户等级">
              { settings.level }
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    );
  },
};
</script>
