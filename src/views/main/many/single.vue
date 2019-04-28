<template>
  <div>
    <h1>single</h1>
    <a-input v-model="value"/>
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
