<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      qrcodeSize: 520,
    };
  },
  computed: {
    ...mapState('config', [
      'visibleQrcode',
      'qrcodeValue',
    ]),
  },
  render() {
    const {
      qrcodeSize, visibleQrcode, qrcodeValue, setVisibleQrcode,
    } = this;
    return (
      <a-modal
        visible={visibleQrcode}
        title={null}
        footer={null}
        closable={false}
        onCancel={() => setVisibleQrcode()}
        class="add-inbound__modal">
        <qriously value={qrcodeValue} size={qrcodeSize}/>
      </a-modal>
    );
  },
  methods: {
    ...mapMutations('config', [
      'setVisibleQrcode',
    ]),
  },
};
</script>
