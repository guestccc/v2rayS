<template>
  <div>
    <h1>set</h1>
    <p>{{ $route.path }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log('------------');
    console.log('created');
    console.log('------------');
  },
};
</script>
