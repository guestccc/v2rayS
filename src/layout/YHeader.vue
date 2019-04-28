<template>
  <div class="y-header">
    <div class="logo">
      v2rayS
    </div>
    <div class="right">
      <router-link
        to="/main/userinfo"
        class="item"
        tag="div">个人中心</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.y-header {
  display: flex;
  height: 64px;
  line-height: 64px;
  font-size: 24px;
  color: #fff;
  background: #1890ff;
  .logo {
    width: 200px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
  .right {
    margin-left: auto;
    .item {
      min-width: 120px;
      font-size: 18px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: rgba($color: #000000, $alpha: .07);
      }
      &.router-link-active {
        background: rgba($color: #000000, $alpha: .1);
      }
    }
  }
}
</style>
