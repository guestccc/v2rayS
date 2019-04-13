<template>
  <div>
    <h1>single</h1>
    <a-input v-model="value"/>
    <router-link to="404">404</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'single',
    };
  },
};
</script>
