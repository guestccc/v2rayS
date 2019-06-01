<template>
  <a-form>
    <a-form-item :colon="false">
      <span slot="label">
        密码 :
        <a
          @click="eventRandomPwd"
          class="attach">随机生成</a>
      </span>
      <a-input v-model="settings.password"/>
    </a-form-item>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="加密方式">
          <a-select v-model="settings.method">
            <a-select-option
              v-for="{label, value} in methods"
              :key="value"
              :value="value">{{ label }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="网络连接类型">
          <a-select v-model="settings.network">
            <a-select-option
              v-for="{label, value} in networks"
              :key="value"
              :value="value">{{ label }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="邮箱">
          <a-input v-model="settings.email"/>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="用户等级">
          <a-input-number v-model="settings.level"/>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      methods: [
        {
          label: 'chacha20-ietf-poly1305',
          value: 'chacha20-ietf-poly1305',
        },
        {
          label: 'chacha20-ietf',
          value: 'chacha20-ietf',
        },
        {
          label: 'chacha20',
          value: 'chacha20',
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
          label: 'aes-256-cfb',
          value: 'aes-256-cfb',
        },
        {
          label: 'aes-128-cfb',
          value: 'aes-128-cfb',
        },
      ],
      networks: [
        {
          label: 'tcp',
          value: 'tcp',
        },
        {
          label: 'upd',
          value: 'upd',
        },
        {
          label: 'tcp,udp',
          value: 'tcp,udp',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      settings: state => state.config.settings,
    }),
  },
  methods: {
    eventRandomPwd() {
      this.settings.password = this.GeneratePassword(16).join('');
    },
    GeneratePassword(lengthOfPassword) {
      const theLetters = 'abcdefghijklmnopqrstuvwxyz';
      const StrongPasswordArray = [];
      let capitalise;
      for (let i = 0; i < lengthOfPassword; i += 1) {
        capitalise = Math.round(Math.random() * 1);
        if (capitalise === 0) {
          StrongPasswordArray[i] = theLetters.charAt(Math.floor(Math.random() * 26)).toUpperCase();
        } else {
          StrongPasswordArray[i] = theLetters.charAt(Math.floor(Math.random() * 26));
        }
      }
      const numberOfDigits = Math.round(Math.random() * (lengthOfPassword - 1)) + 1;
      let positionForNumeric; let
        theNumber;
      for (let i = 0; i < numberOfDigits; i += 1) {
        positionForNumeric = Math.round(Math.random() * (lengthOfPassword - 1));
        theNumber = Math.round(Math.random() * 9);
        StrongPasswordArray[positionForNumeric] = theNumber;
      }
      return StrongPasswordArray;
    },
  },
};
</script>

<style lang="scss" scoped>
.attach {
  margin-left: 10px;
}
</style>
