<template>
  <a-menu
    mode="inline"
    theme="light"
    :defaultSelectedKeys="defaultSelectedKeys"
  >
    <template
      v-for="item in menuList">
      <a-sub-menu
        v-if="item.children"
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
      <a-menu-item
        v-else-if="!item.noMenu"
        :key="`${path}/${item.path}`"
        @click="eventMenu">
        <a-icon type="appstore" />
        {{ item.name }}
      </a-menu-item>
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
