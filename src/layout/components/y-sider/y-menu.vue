<template>
  <a-menu
    mode="inline"
    theme="light"
  >
    <a-menu-item key="1">
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
  </a-menu>
</template>

<script>
import mainRouter from '@/router/modules/main';

export default {
  data() {
    return {
      mainRouter,
    };
  },
  created() {
    console.log('------------');
    console.log(mainRouter);
    console.log('------------');
  },
};
</script>


<style lang="scss" scoped>
// .ant-menu {}
</style>
