<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    eventClickModal() {
      this.$router.push('inbounds/create');
    },
  },
  render() {
    const {
      // data
      // methods
      eventClickModal,
    } = this;
    return (
      <div class="header">
        <a-button onClick={eventClickModal}>添加账号</a-button>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
</style>
