<template>
  <Item>
    <div slot="label">
      cpu-label
    </div>
    <div slot="content">
      cpu-content
    </div>
  </Item>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
};
</script>
