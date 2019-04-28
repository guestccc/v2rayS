<template>
  <div class="account">
    <a-tabs>
      <a-tab-pane tab="全部" key="1">
        <a-card title="Vmess">
          <div slot="extra">
            extra
          </div>
          <div class="card-content">
            content
          </div>
        </a-card>
        <a-card title="Vmess">
          <div slot="extra">
            extra
          </div>
          <div class="card-content">
            content
          </div>
        </a-card>
        <a-card title="Vmess">
          <div slot="extra">
            extra
          </div>
          <div class="card-content">
            content
          </div>
        </a-card>
      </a-tab-pane>
      <a-tab-pane tab="Vmess" key="2">Content of tab 2</a-tab-pane>
      <a-tab-pane tab="Shadowsocks" key="3">Content of tab 3</a-tab-pane>
      <!-- <a-button slot="tabBarExtraContent">Extra Action</a-button> -->
    </a-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
