<template>
  <div class="sider">
    <div class="logo-box">
      CMS
    </div>
    <a-menu mode="inline">
      <template v-for="item in menuList">
        <template v-if="item.meta && !item.meta.noMenu">
          <a-menu-item
            v-if="!item.children || !item.children[0].path"
            :key="`${path}/${item.path}`"
            @click="eventMenu">
            <a-icon type="appstore" />
            <span>{{ item.meta.name }}</span>
          </a-menu-item>
          <sub-menu
            v-else
            :key="`${path}/${item.path}`"
            :menu-list="item"/>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from './SubMenu.vue';

import mainRouter from '@/router/main/index';

export default {
  data() {
    return {
      path: '',
      menuList: [],
    };
  },
  methods: {
    eventMenu(e) {
      this.$router.push(e.key);
    },
    handleS(e) {
      return !e.children || !e.children[0].path;
    },
  },
  created() {
    this.menuList = mainRouter.children;
    this.path = mainRouter.path;
  },
  components: {
    SubMenu,
  },
};
</script>


<style lang="scss" scoped>
.sider {
  height: 100%;
  .logo-box {
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    background: #538cd3;
  }
  .ant-menu {
    height: calc(100% - 64px);
  }
}
</style>
