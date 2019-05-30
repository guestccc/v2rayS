<script>
import { mapMutations, mapActions } from 'vuex';

import Shadowsocks from './Shadowsocks.vue';
import Vmess from './Vmess.vue';
import Mtproto from './Mtproto.vue';

import { deleteConfigInbound } from '@/api/main/config/inbounds';

export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      rights: {
        shadowsocks: Shadowsocks,
        vmess: Vmess,
        mtproto: Mtproto,
      },
    };
  },
  provide() {
    return {
      root: this, // 方法一：提供祖先组件的实例
    };
  },
  render() {
    const {
      data, rights, clickUpdate, networkDeleteConfigInbound,
    } = this;
    const Other = rights[data.protocol];
    return (
      <div class="y-title">
        <div class="left">
          { data.protocol }
        </div>
        <div class="right">
          <Other class="other"/>
          <a-icon
            onClick={() => clickUpdate(data)}
            type="edit"/>
          <a-popconfirm
            onConfirm={networkDeleteConfigInbound}
            title="确定要删除吗？"
            okText="Yes"
            cancelText="No"
            placement="topRight">
            <a-icon type="delete"/>
          </a-popconfirm>
        </div>
      </div>
    );
  },
  methods: {
    ...mapMutations('config', [
      'clickUpdate',
    ]),
    ...mapActions('config', [
      'getConfigInbound',
    ]),
    async networkDeleteConfigInbound() {
      await deleteConfigInbound(this.data.port);
      this.$message.success('删除成功');
      this.getConfigInbound();
    },
  },
};
</script>


<style lang="scss" scoped>
.y-title {
  display: flex;
  justify-content: space-between;
  .right {
    .other {
      display: inline-block;
      /deep/ .anticon {
        margin-left: 10px;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          color: #1890ff;
        }
      }
    }
    .anticon {
      margin-left: 10px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>
