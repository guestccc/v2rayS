<template>
  <div class="config">
    <div class="btns">
      <add-inbound/>
    </div>
    <y-cards/>
    <form-inbound/>
    <qrcode/>
  </div>
</template>

<script>
import AddInbound from './AddInbound/index.vue';
import YCards from './YCards/index.vue';
import FormInbound from './FormInbound/index.vue';
import Qrcode from './Qrcode.vue';

export default {
  name: 'inbounds',
  components: {
    AddInbound,
    YCards,
    FormInbound,
    Qrcode,
  },
};
</script>
