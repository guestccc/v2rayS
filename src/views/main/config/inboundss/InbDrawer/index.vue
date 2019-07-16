<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('configInbound', [
      'visibleDrawer',
    ]),
  },
  methods: {
    ...mapMutations('configInbound', [
      'setVisibleDrawerHide',
    ]),
  },
  render() {
    const {
      // data

      // computed
      visibleDrawer,

      // methods
      setVisibleDrawerHide,
    } = this;
    return (
      <a-drawer
        title="Basic Drawer"
        placement="right"
        wrapClassName="inb-drawer"
        onClose={setVisibleDrawerHide}
        visible={visibleDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
    );
  },
};
</script>

<style lang="scss" scoped>
/deep/ .inb-drawer {
  .ant-drawer-header {
    position: absolute;
    top: 0;
    left: 0;
    background: pink;
  }
}
p {
  line-height: 100px;
}
</style>
