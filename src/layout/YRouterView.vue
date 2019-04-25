<template>
  <div class="y-router-view">
    <transition
      name="slide-transform"
      mode="out-in">
      <keep-alive>
        <router-view
          :key="key"
          class="main-view"/>
      </keep-alive>
    </transition>
  </div>
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
  .main-view {
    padding: 10px;
    background: #fff;
    border-radius: 5px;
  }
}
</style>
