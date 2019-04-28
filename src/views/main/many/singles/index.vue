<template>
  <div>
    <h1>singles</h1>
    <a-input v-model="value"/>
    <router-link to="singles/add">add</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'singles',
    };
  },
};
</script>
