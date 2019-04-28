<template>
  <div class="not-find">
    <h1>404</h1>
    <p>{{ second }}</p>
    <a-button @click="eventRouterGo">返回上一页</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      second: 5,
      time: null,
    };
  },
  methods: {
    eventRouterGo() {
      this.$router.go(-1);
    },
    handleTime() {
      this.time = setInterval(() => {
        this.second -= 1;
        if (this.second) return;
        clearInterval(this.time);
        this.time = null;
        this.eventRouterGo();
      }, 1000);
    },
  },
  mounted() {
    this.handleTime();
  },
};
</script>

<style lang="scss" scoped>
.not-find {
  height: calc(100% - 14px);
}
</style>
