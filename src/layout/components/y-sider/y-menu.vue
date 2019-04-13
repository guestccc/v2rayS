<template>
  <a-menu
    mode="inline"
    theme="light"
    :defaultSelectedKeys="defaultSelectedKeys"
  >
    <template
      v-for="item in menuList">
      <template v-if="!item.noMenu">
        <a-menu-item
          v-if="handleS(item)"
          :key="`${path}/${item.path}`"
          @click="eventMenu">
          <a-icon type="appstore" />
          {{ item.name || item.children[0].name }}
        </a-menu-item>
        <a-sub-menu
          v-else
          :key="`${path}/${item.path}`">
          <span slot="title">
            <a-icon type="appstore" />
            <span>{{ item.name }}</span>
          </span>
          <a-menu-item
            v-for="i in item.children"
            :key="`${path}/${item.path}/${i.path}`"
            @click="eventMenu">{{ i.name }}</a-menu-item>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script>
import mainRouter from '@/router/main/index';

export default {
  data() {
    return {
      menuList: [],
      path: '',
      defaultSelectedKeys: [],
    };
  },
  methods: {
    eventMenu(e) {
      this.$router.push(e.key);
    },
    handleS(e) {
      return e.children && !e.children[0].path;
    },
  },
  created() {
    this.menuList = mainRouter.children;
    this.path = mainRouter.path;
    this.defaultSelectedKeys = [this.$route.path];
  },
};
</script>


<style lang="scss" scoped>
// .ant-menu {}
</style>
