<template>
  <div class="page-login">
    <router-view class="login-box"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['mail'],
    };
  },
};
</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  background: #313a4b;
  .login-box {
    margin: 0 auto;
    width: 320px;
    height: 280px;
  }
}
</style>
