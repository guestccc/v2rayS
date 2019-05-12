<template>
  <div class="add-inbound">
    <a-button
      @click="visibleModal = true">添加账号</a-button>
    <y-modal
      :visible.sync="visibleModal"
      @change="handleChange"/>
  </div>
</template>

<script>
import YModal from './YModal.vue';

export default {
  data() {
    return {
      visibleModal: false,
    };
  },
  methods: {
    handleChange(v) {
      this.$emit('change', v);
    },
  },
  components: {
    YModal,
  },
};
</script>
