<template>
  <div class="y-settings">
    {{ protocol }}
    {{ settings }}
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
    protocol: {
      type: String,
      default: '',
    },
  },
};
</script>
