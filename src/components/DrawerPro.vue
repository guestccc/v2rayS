<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  render() {
    const {
      // props
      visible,
    } = this;
    return (
      <a-drawer
        visible={visible}
        placement="right">
        content
      </a-drawer>
    );
  },
};
</script>
