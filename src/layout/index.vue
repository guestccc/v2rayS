<template>
  <div class="main">
    <y-header/>
    <div class="content">
      <y-sider/>
      <div class="content">
        <y-nav/>
        <y-router-view class="layout-flex"/>
      </div>
    </div>
  </div>
</template>

<script>
import YHeader from './YHeader.vue';
import YSider from './y-sider/index.vue';
import YNav from './YNav.vue';
import YRouterView from './YRouterView.vue';

export default {
  components: {
    YHeader,
    YSider,
    YNav,
    YRouterView,
  },
};
</script>


<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ebf0f9;
  overflow: hidden;
  > .content {
    flex: 1;
    display: flex;
    > .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      > .layout-flex {
        flex: 1;
      }
    }
  }
}
</style>
