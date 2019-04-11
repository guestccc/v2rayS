<template>
  <div class="login">
    <div class="title">系统登录</div>
    <a-input v-model.trim="body.acc">
      <a-icon
        slot="prefix"
        type="user" />
    </a-input>
    <a-input v-model.trim="body.pwd">
      <a-icon
        slot="prefix"
        type="lock" />
      <!-- <a-icon slot="suffix" type="eye" /> -->
    </a-input>
    <router-link to="/">
      <a-button type="primary">登录</a-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: {
        acc: '',
        pwd: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  .title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  /deep/ .ant-input-affix-wrapper {
    margin-bottom: 10px;
    height: 50px;
    .ant-input-prefix {
      font-size: 18px;
      color: #ddd;
    }
    .ant-input {
      color: #ddd;
      background: #2a3444;
      border-color: #3b4457;
      &:not(:first-child) {
        padding-left: 40px;
      }
    }
  }
  .ant-btn {
    width: 100%;
    height: 50px;
    font-size: 18px;
  }
}
</style>
