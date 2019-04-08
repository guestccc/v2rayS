<template>
  <div class="router-view">
    <router-link
      to="/login">退出登陆</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    console.log('------------');
    console.log(process.env.VUE_APP_BASE_API);
    console.log('------------');
  },
};
</script>
