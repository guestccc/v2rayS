<template>
  <div class="v2ray">
    <div class="btns">
      <add-inbound/>
    </div>
    <y-drawers/>
    <y-cards/>
  </div>
</template>

<script>
import AddInbound from './AddInbound/index.vue';
import YDrawers from './YDrawers/index.vue';
import YCards from './YCards/index.vue';

export default {
  components: {
    AddInbound,
    YDrawers,
    YCards,
  },
};
</script>
