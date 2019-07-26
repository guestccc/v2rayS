<script>
import { mapState } from 'vuex';
import { logDocUrl } from '@/plugins/configDocUrl';

import Update from './Update.vue';
import DrawerLog from './DrawerLog.vue';

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
          href={logDocUrl}
          target="_blank">{logDocUrl}</a>
        <div class="top-bar">
          <Update/>
          <DrawerLog/>
        </div>
        <a-form>
          <a-form-item label="日志级别">
            { log.loglevel }
          </a-form-item>
          <a-form-item label="访问日志的文件地址">
            { log.access || '无' }
          </a-form-item>
          <a-form-item label="错误日志的文件地址">
            { log.error || '无' }
          </a-form-item>
        </a-form>
      </div>
    );
  },
  components: {
    Update,
    DrawerLog,
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  padding-top: 10px;
  > * {
    margin-bottom: 5px;
  }
  /deep/ .ant-btn {
    margin-right: 10px;
  }
}
</style>
