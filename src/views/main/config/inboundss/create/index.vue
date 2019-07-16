<script>
export default {
  computed: {
    type() {
      const { protocol } = this.$route.params;
      return protocol;
    },
  },
  render() {
    const {
      type,
    } = this;
    return (
      <div>{type}</div>
    );
  },
};
</script>
