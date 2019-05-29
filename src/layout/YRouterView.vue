<template>
  <transition
    name="slide-transform"
    mode="out-in">
    <!-- <keep-alive> -->
      <router-view
        :key="key"
        class="y-router-view"/>
    <!-- </keep-alive> -->
  </transition>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss" scoped>
.y-router-view {
  margin: 7px 5px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  overflow: auto;
}
</style>
