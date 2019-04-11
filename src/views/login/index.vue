<template>
  <div class="login">
    <div class="title">系统登录</div>
    <a-input v-model.trim="body.acc">
      <a-icon slot="prefix" type="user" />
    </a-input>
    <a-input v-model.trim="body.pwd">
      <a-icon slot="prefix" type="lock" />
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
  .ant-input-affix-wrapper {
    margin-bottom: 10px;
    height: 50px;
    /deep/ .ant-input-prefix {
      font-size: 18px;
      color: #fff;
    }
    /deep/ .ant-input {
      color: #fff;
      background: #2a3444;
      border-color: #3b4457;
    }
  }
  .ant-btn {
    width: 100%;
    height: 50px;
  }
}
</style>
