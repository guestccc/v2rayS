<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      form: null,
      decorators: {
        listen: [
          'listen',
          {
            initialValue: '默认值',
            rules: [{ required: true, message: 'listen is required!' }],
          },
        ],
        port: [
          'port',
          {
            rules: [{ required: true, message: 'port is required!' }],
          },
        ],
        tag: [
          'tag',
          {
            rules: [{ required: true, message: 'tag is required!' }],
          },
        ],
        settings_email: [
          'settings.email',
          {
            rules: [{ required: true, message: 'email is required!' }],
          },
        ],
      },
    };
  },
  computed: {
    ...mapState('configInbound', [
      'shadowsocksForm',
    ]),
  },
  methods: {
    ...mapMutations('configInbound', [
      'updateShadowsocksFrom',
    ]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (err) return;
        console.log('Received values of form: ', values);
      });
    },
  },
  created() {
    this.form = this.$form.createForm(this, {
      mapPropsToFields: () => {
        const { $form, shadowsocksForm } = this;
        return {
          tag: $form.createFormField({
            value: shadowsocksForm.tag,
          }),
          'settings.email': $form.createFormField({
            value: shadowsocksForm.settings.email,
          }),
        };
      },
      onValuesChange: (_, values) => this.updateShadowsocksFrom(values),
    });
  },
  render() {
    const {
      // data
      form,
      decorators,
      // computed
      shadowsocksForm,
      // methods
      handleSubmit,
    } = this;

    console.log('------------');
    console.log(shadowsocksForm);
    console.log('------------');
    return (
      <a-form
        form={form}
        class="shadowsocks"
        onSubmit={handleSubmit}>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="监听 IP">
              <a-input v-decorator={decorators.listen}/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="端口">
              <a-input v-decorator={decorators.port}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <a-form-item label="标签">
              <a-input
                v-decorator={decorators.tag}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <a-form-item label="邮箱">
              <a-input
                v-decorator={decorators.settings_email}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    );
  },
};
</script>
