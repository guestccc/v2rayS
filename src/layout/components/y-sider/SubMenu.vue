<template functional>
  <a-sub-menu
    :key="props.menuList.path"
  >
    <span slot="title">
      <a-icon type="appstore"/>
      <span>{{ props.menuList.meta.name }}</span>
    </span>
    <template v-for="item in props.menuList.children">
      <template v-if="item.meta && !item.meta.noMenu">
        <a-menu-item
          v-if="!item.children || !item.children[0].path"
          :key="`${parent.path}/${props.menuList.path}/${item.path}`"
          @click="parent.eventMenu">
          <span>{{ item.meta.name }}</span>
        </a-menu-item>
        <sub-menu
          v-else
          :key="item.path"
          :menu-list="item"
        />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
