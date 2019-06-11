<script>
export default {
  data() {
    return {
      visible: false,
      form: {
        loglevel: 'warning',
        access: '',
        error: '',
      },
    };
  },
  render() {
    const {
      visible,
      form,
      eventOpen,
      eventClose,
    } = this;
    return (
      <div class="update">
        <a-button onClick={eventOpen}>编辑</a-button>
        <a-drawer
          title="编辑"
          placement="right"
          closable={false}
          onClose={eventClose}
          visible={visible}>
          <a-form>
            <a-form-item label="日志级别">
              <a-input v-model={form.loglevel}/>
            </a-form-item>
            <a-form-item label="访问日志的文件地址">
              <a-input v-model={form.access}/>
            </a-form-item>
            <a-form-item label="错误日志的文件地址">
              <a-input v-model={form.error}/>
            </a-form-item>
          </a-form>
        </a-drawer>
      </div>
    );
  },
  methods: {
    eventOpen() {
      this.visible = true;
    },
    eventClose() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.update {
  display: inline-block;
}
</style>
