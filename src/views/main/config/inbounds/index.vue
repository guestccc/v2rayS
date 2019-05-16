<template>
  <div class="config">
    <div class="btns">
      <add-inbound/>
    </div>
    <form-inbound/>
    <y-cards/>
  </div>
</template>

<script>
import AddInbound from './AddInbound/index.vue';
import FormInbound from './FormInbound/index.vue';
import YCards from './YCards/index.vue';

export default {
  name: 'inbounds',
  components: {
    AddInbound,
    FormInbound,
    YCards,
  },
};
</script>
