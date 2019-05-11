<template>
  <div class="add-inbound">
    <add-button @click="handleClick"/>
    <drawer-shadowsocks
      :visible.sync="visibleShadowsocks"
      @success="handleSuccess"/>
  </div>
</template>

<script>
import AddButton from './button.vue';
import DrawerShadowsocks from './Drawer/shadowsocks.vue';

export default {
  data() {
    return {
      visibleShadowsocks: false,
    };
  },
  methods: {
    handleClick(v) {
      switch (v) {
        case 'Shadowsocks':
          this.visibleShadowsocks = true;
          break;
        default:
          break;
      }
    },
    handleSuccess() {
      this.$emit('success');
    },
  },
  components: {
    AddButton,
    DrawerShadowsocks,
  },
};
</script>
