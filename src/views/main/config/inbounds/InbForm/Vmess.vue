<script>
import { mapState, mapMutations } from 'vuex';
import { randomString } from '@/utils/index';

export default {
  data() {
    return {
      form: null,
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
      decorators: {
        password: [
          'password',
          {
            rules: [{ required: true, message: 'password is required!' }],
          },
        ],
        method: [
          'method',
          {
            rules: [{ required: true, message: 'method is required!' }],
          },
        ],
        network: [
          'network',
          {
            rules: [{ required: true, message: 'network is required!' }],
          },
        ],
        email: [
          'email',
          {
            rules: [{ required: true, message: 'email is required!' }],
          },
        ],
        level: [
          'level',
          {
            initialValue: 0,
            rules: [{ required: true, message: 'level is required!' }],
          },
        ],
        ota: [
          'ota',
          {
            rules: [{ required: true, message: 'ota is required!' }],
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
    eventClickPwdRandom() {
      this.form.setFieldsValue({
        password: randomString(16),
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
      eventClickPwdRandom,
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
        class="inbound-settings inbound-settings__vmess">
        <a-row gutter={16}>
          <a-col>
            <a-form-item>
              <span slot="label">
                密码
                <a
                  onClick={eventClickPwdRandom}
                  class="attach">随机生成</a>
              </span>
              <a-input v-decorator={decorators.password}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="加密方式">
              <a-select v-decorator={decorators.method}>
                {methodSelectOption}
              </a-select>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="网络连接类型">
              <a-select v-decorator={decorators.network}>
                {networkSelectOption}
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="邮箱">
              <a-input v-decorator={decorators.email}/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="用户等级">
              <a-input-number v-decorator={decorators.level}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="OTA">
              <a-select v-decorator={decorators.ota}>
                {otaSelectOption}
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    );
  },
};
</script>
