<template>
  <div>
    <h1>add</h1>
    <a-input v-model="value"/>
    <router-link to="/main/singles">singles</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'add',
    };
  },
};
</script>
