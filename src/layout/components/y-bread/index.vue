<template>
  <a-breadcrumb>
    <template
      v-for="item in $route.matched">
      <a-breadcrumb-item
        v-if="item.name"
        :key="item.path">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
  },
  // watch: {
  //   $route() {
  //     console.log('------------');
  //     console.log(this.$route);
  //     console.log('------------');
  //   },
  // },
};
</script>
