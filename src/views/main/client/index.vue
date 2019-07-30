<template>
  <div class="client">
    <div class="box">
      <a-divider orientation="left">Android</a-divider>
      list
    </div>
    <div class="box">
      <a-divider orientation="left">Ios</a-divider>
      list
    </div>
    <div class="box">
      <a-divider orientation="left">Window</a-divider>
      list
    </div>
    <div class="box">
      <a-divider orientation="left">Mac</a-divider>
      list
    </div>
    <div class="box">
      <a-divider orientation="left">Linux</a-divider>
      list
    </div>
    <div class="client-row">
      <div class="client-row-box"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.client {
  &-row {
    height: 800px;
    background: pink;
    &-box {
      height: 600px;
      background: red;
    }
  }
}
</style>
