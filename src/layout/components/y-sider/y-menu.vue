<template>
  <a-menu
    mode="inline"
    theme="light"
  >
    <a-menu-item key="1">
      <a-icon type="mail" />
      Navigation One
    </a-menu-item>
    <a-menu-item key="11">
      <a-icon type="mail" />
      Navigation One
    </a-menu-item>
    <a-menu-item key="12">
      <a-icon type="mail" />
      Navigation One
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title">
        <a-icon type="appstore" />
        <span>Navigation Three</span>
      </span>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
    </a-sub-menu>
    <a-menu-item key="13">
      <a-icon type="mail" />
      Navigation One
    </a-menu-item>
    <a-sub-menu key="sub12">
      <span slot="title">
        <a-icon type="appstore" />
        <span>Navigation Three</span>
      </span>
      <a-menu-item key="33">Option 3</a-menu-item>
      <a-menu-item key="44">Option 4</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style lang="scss" scoped>
// .ant-menu {}
</style>
