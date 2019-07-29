<script>
import Shadowsocks from './Shadowsocks.vue';
import Vmess from './Vmess.vue';

import { randomInteger } from '@/utils/index';
import { createConfigInbound } from '@/api/main/config/inbounds';

export default {
  props: {
    protocol: {
      type: String,
      default: 'shadowsocks',
    },
  },
  data() {
    return {
      form: null,
      decorators: {
        protocol: [
          'protocol',
          {
            rules: [{ required: true, message: 'port is required!' }],
          },
        ],
        listen: [
          'listen',
        ],
        port: [
          'port',
          {
            rules: [{ required: true, message: 'port is required!' }],
          },
        ],
        tag: [
          'tag',
        ],
      },
      settingsComp: {
        shadowsocks: Shadowsocks,
        vmess: Vmess,
      },
    };
  },
  computed: {
    settings() {
      return this.settingsComp[this.protocol];
    },
  },
  methods: {
    eventClickPortRandom() {
      this.form.setFieldsValue({
        port: randomInteger(1001, 65535),
      });
    },
    async networkCreateConfigInbound(body) {
      const res = await createConfigInbound(body);
      console.log('------------');
      console.log(res);
      console.log('------------');
    },
    async handleSubmit() {
      const [form, settingsForm] = await this.handleValidateFieldsAll();
      if (form.err || settingsForm.err) return;
      this.networkCreateConfigInbound({
        ...form.values,
        settings: settingsForm.values,
      });
    },
    handleReset() {
      this.form.resetFields();
      this.$refs.settingsForm.form.resetFields();
    },
    handleValidateFieldsAll() {
      return Promise.all([
        this.handleValidateFields(),
        this.handleValidateFieldsSettingsForm(),
      ]);
    },
    handleValidateFields() {
      return new Promise((a) => {
        this.form.validateFields((err, values) => {
          a({
            err,
            values,
          });
        });
      });
    },
    handleValidateFieldsSettingsForm() {
      return new Promise((a) => {
        this.$refs.settingsForm.form.validateFields((err, values) => {
          a({
            err,
            values,
          });
        });
      });
    },
  },
  created() {
    this.decorators.protocol[1].initialValue = this.protocol;
    this.form = this.$form.createForm(this, {
      // onValuesChange: (_) => {
      //   console.log('------------');
      //   console.log(_.getFieldsValue());
      //   console.log('------------');
      // },
    });
  },
  render() {
    const {
      // port
      settings,

      // data
      form,
      decorators,

      // methods
      eventClickPortRandom,
      handleSubmit,
      handleReset,
    } = this;
    return (
      <a-form
        form={form}
        class="inbound">
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="协议">
              <a-input
                v-decorator={decorators.protocol}
                readOnly/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item label="标签">
              <a-input v-decorator={decorators.tag}/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter={16}>
          <a-col span={12}>
            <a-form-item label="监听 IP">
              <a-input
                v-decorator={decorators.listen}
                placeholder="0.0.0.0"/>
            </a-form-item>
          </a-col>
          <a-col span={12}>
            <a-form-item>
              <span slot="label">
                端口
                <a
                  class="attach"
                  onClick={eventClickPortRandom}>随机生成</a>
              </span>
              <a-input-number v-decorator={decorators.port}/>
            </a-form-item>
          </a-col>
        </a-row>
        <settings ref="settingsForm"/>
        <a-form-item>
          <a-button
            type="primary"
            onClick={handleSubmit}>
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
