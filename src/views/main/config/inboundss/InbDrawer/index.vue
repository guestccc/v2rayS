<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      visible: false,
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
      // visible,

      // computed
      visibleDrawer,

      // methods
      setVisibleDrawerHide,
    } = this;
    return (
      <a-drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={setVisibleDrawerHide}
        visible={visibleDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
    );
  },
};
</script>
