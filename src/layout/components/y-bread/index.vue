<template>
  <a-breadcrumb
    :routes="$route.matched"
    separator=">">
    <template slot="itemRender" slot-scope="{route}">
      <span
        v-if="route.meta.name"
        @click="eventRouter(route.path, route.meta.disabled)"
        :class="{
          disabled: route.meta.disabled,
          current: route.path === $route.path
        }"
        class="bread-item">{{ route.meta.name }}</span>
    </template>
  </a-breadcrumb>
</template>

<script>
export default {
  methods: {
    eventRouter(path, disabled) {
      if (disabled) return;
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-breadcrumb {
  .ant-breadcrumb-link {
      .bread-item {
        cursor: pointer;
        &.current {
          font-weight: bold;
        }
        &.disabled {
          color: #999;
          cursor: default;
        }
        &:not(.disabled):hover {
          color: #1890ff;
        }
      }
  }
}
</style>
