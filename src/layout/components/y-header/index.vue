<template>
  <div class="header">
    <div class="left">Left</div>
    <div class="right">
      <router-link
        to="/main/userinfo"
        class="item"
        tag="div">userinfo</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  line-height: 64px;
  font-size: 24px;
  color: #fff;
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
