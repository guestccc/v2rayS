<template>
  <a-menu
    :defaultSelectedKeys="defaultSelectedKeys"
    ref="menu"
    mode="inline"
    class="y-sider">
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
</template>

<script>
import SubMenu from './SubMenu.vue';

import mainRouter from '@/router/main/index';

export default {
  data() {
    return {
      path: '',
      menuList: [],
      defaultSelectedKeys: ['/main/singles'],
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
    const { children, path } = mainRouter;
    this.menuList = children;
    this.path = path;
  },
  mounted() {
    console.log('------------');
    console.log(this.$refs.menu);
    console.log('------------');
  },
  components: {
    SubMenu,
  },
};
</script>


<style lang="scss" scoped>
.y-sider {
  width: 200px;
  height: 100%;
}
</style>
