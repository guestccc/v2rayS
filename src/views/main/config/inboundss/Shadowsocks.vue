<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      methodOptions: [
        {
          label: 'aes-256-cfb',
          value: 'aes-256-cfb',
        },
        {
          label: 'aes-128-cfb',
          value: 'aes-128-cfb',
        },
        {
          label: 'chacha20',
          value: 'chacha20',
        },
        {
          label: 'chacha20-ietf',
          value: 'chacha20-ietf',
        },
        {
          label: 'aes-256-gcm',
          value: 'aes-256-gcm',
        },
        {
          label: 'aes-128-gcm',
          value: 'aes-128-gcm',
        },
        {
          label: 'chacha20-poly1305(chacha20-ietf-poly1305)',
          value: 'chacha20-poly1305(chacha20-ietf-poly1305)',
        },
      ],
      networkOptions: [
        {
          label: 'tcp',
          value: 'tcp',
        },
        {
          label: 'udp',
          value: 'udp',
        },
        {
          label: 'tcp,udp',
          value: 'tcp,udp',
        },
      ],
      form: null,
      decorators: {
        listen: [
          'listen',
          {
            initialValue: '13',
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
        settings_password: [
          'settings.password',
          {
            rules: [{ required: true, message: 'settings.password is required!' }],
          },
        ],
        settings_email: [
          'settings.email',
          {
            rules: [{ required: true, message: 'settings.email is required!' }],
          },
        ],
        settings_method: [
          'settings.method',
          {
            rules: [{ required: true, message: 'settings.method is required!' }],
          },
        ],
        settings_network: [
          'settings.network',
          {
            rules: [{ required: true, message: 'settings.network is required!' }],
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
          listen: $form.createFormField({
            value: shadowsocksForm.listen,
          }),
          port: $form.createFormField({
            value: shadowsocksForm.port,
          }),
          tag: $form.createFormField({
            value: shadowsocksForm.tag,
          }),
          'settings.password': $form.createFormField({
            value: shadowsocksForm.settings.password,
          }),
          'settings.method': $form.createFormField({
            value: shadowsocksForm.settings.method,
          }),
          'settings.email': $form.createFormField({
            value: shadowsocksForm.settings.email,
          }),
          'settings.network': $form.createFormField({
            value: shadowsocksForm.settings.network,
          }),
        };
      },
      onValuesChange: (_, values) => this.updateShadowsocksFrom(values),
    });
  },
  render() {
    const {
      // data
      methodOptions,
      networkOptions,
      form,
      decorators,
      // methods
      handleSubmit,
    } = this;
    const methodSelectOption = methodOptions.map(item => (
      <a-select-option value={item.value}>{item.label}</a-select-option>
    ));
    const networkSelectOption = networkOptions.map(item => (
      <a-select-option value={item.value}>{item.label}</a-select-option>
    ));
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
        <a-row gutter={16}>
          <a-col>
            <a-form-item label="标签">
              <a-input
                v-decorator={decorators.tag}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col>
            <a-form-item label="密码">
              <a-input
                v-decorator={decorators.settings_password}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="加密方式">
              <a-select v-decorator={decorators.settings_method}>
                {methodSelectOption}
              </a-select>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="网络连接类型">
              <a-select v-decorator={decorators.settings_network}>
                {networkSelectOption}
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="邮箱">
              <a-input
                v-decorator={decorators.settings_email}/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="用户等级">
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
