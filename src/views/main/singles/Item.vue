<template>
  <div class="item">
    <slot name="label"/>
    <slot name="content"/>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: '',
    },
  },
  created() {
    const clone = this.$slots.label;
    console.log('------------');
    console.log(clone, this);
    console.log('------------');
    delete this.$slots.label;
  },
};
</script>
