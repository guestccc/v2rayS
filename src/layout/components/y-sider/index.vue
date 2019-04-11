<template>
  <div class="sider">
    <div class="logo-box">
      CMS
    </div>
    <y-menu/>
  </div>
</template>

<script>
import YMenu from './y-menu.vue';

export default {
  components: {
    YMenu,
  },
};
</script>


<style lang="scss" scoped>
.sider {
  .logo-box {
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    background: #538cd3;
  }
}
</style>
