<script>
import Shadowsocks from './Shadowsocks.vue';
import Vmess from './Vmess.vue';

import { delV2ray } from '@/api/v2ray';

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
      },
    };
  },
  render() {
    const {
      data, rights, eventEdit, networkDelV2ray,
    } = this;
    const Comp = rights[data.protocol];
    return (
      <div class="y-title">
        <div class="left">
          { data.protocol }
        </div>
        <div class="right">
          <Comp/>
          <a-icon
            onClick={eventEdit}
            type="edit"/>
          <a-popconfirm
            onConfirm={networkDelV2ray}
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
    eventEdit() {
      console.log('------------');
      console.log(this.data);
      console.log('------------');
    },
    async networkDelV2ray() {
      await delV2ray(this.data.port);
      this.$message.success('删除成功');
      this.$store.dispatch('v2ray/getV2rayInbound');
    },
  },
};
</script>


<style lang="scss" scoped>
.y-title {
  display: flex;
  justify-content: space-between;
  .right {
    .anticon {
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: #1890ff;
      }
      & + .anticon {
        margin-left: 10px;
      }
    }
  }
}
</style>
