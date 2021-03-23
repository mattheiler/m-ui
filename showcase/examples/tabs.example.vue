<template>
  <div class="tabs-example">
    <h3>Tabs</h3>
    <div>Active: {{ activeTabIndex }}</div>
    <mui-tab-group :active-tab-index.sync="activeTabIndex">
      <mui-tab>
        <template slot="header">Tab 1</template>
        <span>Content 1</span>
      </mui-tab>
      <mui-tab header="Tab 2">
        <span>Content 2</span>
      </mui-tab>
    </mui-tab-group>
  </div>
</template>

<script>
export default {
  name: 'tabs-example',
  data() {
    return {
      activeTabIndex: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>