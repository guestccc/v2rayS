<template>
  <transition
    name="fade-transform"
    mode="out-in">
    <router-view
      id="app"
      class="app"/>
  </transition>
</template>

<style lang="scss" scoped>
.app {
  min-width: 1280px;
}
</style>
