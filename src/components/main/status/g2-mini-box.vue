<template>
  <div class="g2-mini-box">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    activaName: {
      type: [String, Number, Object],
      default: '',
    },
  },
  watch: {
    activaName: {
      handler(v) {
        this.$nextTick(() => {
          this.$slots.default.forEach((item) => {
            item.componentInstance.$children[0].handleMsg(v);
          });
        });
      },
      immediate: true,
    },
  },
};
</script>
