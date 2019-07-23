<script>
import { mapState, mapMutations } from 'vuex';
import { randomInteger, randomString } from '@/utils/index';

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
      otaOptions: [
        {
          label: 'true',
          value: 'true',
        },
        {
          label: 'false',
          value: 'false',
        },
      ],
      form: null,
      decorators: {
        listen: [
          'listen',
          {
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
        settings_email: [
          'settings.email',
          {
            rules: [{ required: true, message: 'settings.email is required!' }],
          },
        ],
        settings_level: [
          'settings.level',
          {
            initialValue: 0,
            rules: [{ required: true, message: 'settings.level is required!' }],
          },
        ],
        settings_ota: [
          'settings.ota',
          {
            rules: [{ required: true, message: 'settings.ota is required!' }],
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
    eventClickPortRandom() {
      this.form.setFieldsValue({
        port: randomInteger(1001, 9999),
      });
    },
    eventClickPwdRandom() {
      this.form.setFieldsValue({
        'settings.password': randomString(16),
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (err) return;
        console.log('Received values of form: ', values);
      });
    },
    handleReset() {
      this.form.resetFields();
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
          'settings.network': $form.createFormField({
            value: shadowsocksForm.settings.network,
          }),
          'settings.email': $form.createFormField({
            value: shadowsocksForm.settings.email,
          }),
          'settings.level': $form.createFormField({
            value: shadowsocksForm.settings.level,
          }),
          'settings.ota': $form.createFormField({
            value: shadowsocksForm.settings.ota,
          }),
        };
      },
      onValuesChange: (_, values) => {
        console.log('------------');
        console.log(values);
        console.log('------------');
      },
    });
  },
  render() {
    const {
      // data
      methodOptions,
      networkOptions,
      otaOptions,
      form,
      decorators,
      // methods
      eventClickPortRandom,
      eventClickPwdRandom,
      handleSubmit,
      handleReset,
    } = this;
    const methodSelectOption = methodOptions.map(item => (
      <a-select-option value={item.value}>{item.label}</a-select-option>
    ));
    const networkSelectOption = networkOptions.map(item => (
      <a-select-option value={item.value}>{item.label}</a-select-option>
    ));
    const otaSelectOption = otaOptions.map(item => (
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
            <a-form-item>
              <span slot="label">
                端口
                <a
                  onClick={eventClickPortRandom}
                  class="attach">随机生成</a>
              </span>
              <a-input-number v-decorator={decorators.port}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col>
            <a-form-item label="标签">
              <a-input v-decorator={decorators.tag}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col>
            <a-form-item>
              <span slot="label">
                密码
                <a
                  onClick={eventClickPwdRandom}
                  class="attach">随机生成</a>
              </span>
              <a-input v-decorator={decorators.settings_password}/>
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
              <a-input v-decorator={decorators.settings_email}/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="用户等级">
              <a-input-number v-decorator={decorators.settings_level}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="OTA">
              <a-select v-decorator={decorators.settings_ota}>
                {otaSelectOption}
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit">
            Submit
          </a-button>
          <a-button onClick={handleReset}>
            Clear
          </a-button>
        </a-form-item>
      </a-form>
    );
  },
};
</script>
