<template>
  <div class="demo">
    <div class="nav">nav</div>
    <slot ref="item"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      VNodes: [],
    };
  },
  methods: {
    getVNode(VNode) {
      this.VNodes.push(VNode);
    },
  },
  mounted() {
    this.$slots.default.forEach((item) => {
      console.log('------------');
      console.log(item);
      console.log('------------');
    });
  },
};
</script>
