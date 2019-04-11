<template>
  <a-layout>
    <a-layout-sider>
      <y-sider/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <y-header/>
      </a-layout-header>
      <a-layout-content>
        <y-content/>
      </a-layout-content>
      <a-layout-footer v-if="false">
        <y-footer/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import YSider from './components/y-sider/index.vue';
import YHeader from './components/y-header/index.vue';
import YContent from './components/y-content/index.vue';
import YFooter from './components/y-footer/index.vue';

export default {
  components: {
    YSider,
    YHeader,
    YContent,
    YFooter,
  },
};
</script>


<style lang="scss" scoped>
.ant-layout {
  width: 100%;
  height: 100%;
  .ant-layout-sider {
    background: #fff;
  }
  .ant-layout-header {
    padding: 0;
    height: 64px;
    line-height: normal;
    background: #538cd3;
  }
  .ant-layout-content {
    padding: 0;
    line-height: normal;
    background: #ebf0f9;
  }
}
</style>
