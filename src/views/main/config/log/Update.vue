<script>
import { mapState, mapMutations } from 'vuex';

import YDrawer from '@/components/YDrawer.vue';

import { putLog } from '@/api/main/config/log';

export default {
  data() {
    return {
      visible: false,
      loglevelOptions: [
        {
          label: 'debug',
          value: 'debug',
        },
        {
          label: 'info',
          value: 'info',
        },
        {
          label: 'warning',
          value: 'warning',
        },
        {
          label: 'error',
          value: 'error',
        },
        {
          label: 'none',
          value: 'none',
        },
      ],
      // form: {
      //   loglevel: '',
      //   access: '',
      //   error: '',
      // },
      form: null,
      rules: {
        loglevel: [{ required: true, message: 'Please input your note!' }],
        access: [{ required: true, message: 'Please input your note!' }],
        error: [{ required: true, message: 'Please input your note!' }],
      },
    };
  },
  computed: {
    ...mapState('config', [
      'log',
    ]),
  },
  render() {
    const {
      visible,
      loglevelOptions,
      form,
      rules,
      log,
      eventOpen,
      eventCancel,
      eventClose,
    } = this;
    const loglevel = loglevelOptions.map(item => (
      <a-select-option value={item.value}>{ item.label }</a-select-option>
    ));
    return (
      <div class="update">
        <a-button onClick={eventOpen}>编辑</a-button>
        <y-drawer
          title="编辑"
          placement="right"
          onCancel={eventCancel}
          onClose={eventClose}
          visible={visible}
          width={500}
          footer>
          <a-form form={form}>
            <a-form-item label="日志级别">
              <a-select v-decorator={[
                'loglevel',
                { rules: rules.loglevel },
              ]}>
                { loglevel }
              </a-select>
            </a-form-item>
            <a-form-item label="访问日志的文件地址">
              <a-input
                v-decorator={[
                  'access',
                  { rules: rules.access },
                ]}
                default-value={log.access}/>
            </a-form-item>
            <a-form-item label="错误日志的文件地址">
              <a-input v-decorator={[
                'error',
                { rules: rules.error },
              ]}/>
            </a-form-item>
          </a-form>
        </y-drawer>
      </div>
    );
  },
  methods: {
    ...mapMutations('config', [
      'setConfigLog',
    ]),
    eventOpen() {
      // Object.assign(this.form, this.log);
      this.visible = true;
    },
    eventCancel() {
      this.form.validateFields((err, values) => {
        if (err) return;
        this.networkPutLog(values);
      });
    },
    eventClose() {
      this.visible = false;
    },
    async networkPutLog(body) {
      const { data } = await putLog(body);
      this.$message.success('修改成功');
      this.setConfigLog(data);
      this.eventClose();
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {
      mapPropsToFields(props) {
        console.log('------------');
        console.log(props);
        console.log('------------');
      },
    });
  },
  components: {
    YDrawer,
  },
};
</script>

<style lang="scss" scoped>
.update {
  display: inline-block;
}
</style>
