<template>
  <div class="router-view">
    <h1>index</h1>
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
