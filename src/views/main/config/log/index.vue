<script>
import { mapState } from 'vuex';

import Update from './Update.vue';

export default {
  computed: {
    ...mapState('config', [
      'log',
    ]),
  },
  render() {
    const { log } = this;
    return (
      <div class="log">
        <a
          href="https://www.v2ray.com/chapter_02/01_overview.html#logobject"
          target="_blank">https://www.v2ray.com/chapter_02/01_overview.html#logobject</a>
        <a-form>
          <a-form-item label="日志级别">
            { log.loglevel || 'warning' }
          </a-form-item>
          <a-form-item label="访问日志的文件地址">
            { log.access || '无' }
          </a-form-item>
          <a-form-item label="错误日志的文件地址">
            { log.error || '无' }
          </a-form-item>
        </a-form>
        <Update/>
      </div>
    );
  },
  components: {
    Update,
  },
};
</script>
