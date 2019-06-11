<template>
  <router-view/>
</template>

<script>
export default {
  methods: {
    networkGetConfig() {
      this.$store.dispatch('config/getConfig');
    },
  },
  created() {
    this.networkGetConfig();
  },
};
</script>
