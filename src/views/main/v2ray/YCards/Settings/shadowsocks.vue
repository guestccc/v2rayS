<template>
  <a-card>
    <template
      slot="title">
      <div class="left">
        {{ item.protocol }}
      </div>
      <div class="right">
        <a-icon type="qrcode"/>
        <a-icon type="link"/>
        <a-icon
          @click="eventEdit(item)"
          type="edit"/>
        <a-popconfirm
          @confirm="networkDelV2ray(item.port)"
          title="确定要删除吗？"
          okText="Yes"
          cancelText="No"
          placement="topRight">
          <a-icon type="delete"/>
        </a-popconfirm>
      </div>
    </template>
    {{ item.listen }}
    {{ item.port }}
  </a-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
