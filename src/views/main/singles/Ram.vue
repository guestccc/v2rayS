<template>
  <Item>
    <div slot="label">
      ram-label
    </div>
    <div slot="content">
      ram-content
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
