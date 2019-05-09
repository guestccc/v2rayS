<template>
  <div
    :class="{ 'activa': activa }"
    class="g2-mini">
    <div class="g2-mini_left">
      <slot name="left"/>
    </div>
    <div class="g2-mini_right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activa: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss" scoped>
.g2-mini {
  display: flex;
  padding: 5px;
  width: 220px;
  height: 72px;
  border: 1px solid transparent;
  transition: background .5s, border-color 2s;
  cursor: pointer;
  &.activa {
    background: #cde8ff;
  }
  &:hover:not(.activa) {
    background: #e5f3fb;
    border-color: #70c0e7;
  }
  .g2-mini_left {
    width: 90px;
  }
  .g2-mini_right {
    flex: 1;
    padding-left: 10px;
    line-height: 30px;
  }
}
</style>
