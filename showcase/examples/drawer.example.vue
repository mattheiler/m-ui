

<template>
  <div class="drawer-example">
    <h3>Drawer</h3>
    <h4>Side</h4>
    <mui-drawer-container class="drawer-example-container">
      <mui-drawer :expanded.sync="push1" slot="left">I'm always open in this state!</mui-drawer>
      <mui-drawer :expanded.sync="push2" slot="right">I'm always open in this state!</mui-drawer>
      <div>I'm content!</div>
    </mui-drawer-container>
    <h4>Over</h4>
    <mui-drawer-container class="drawer-example-container">
      <mui-drawer mode="over" :expanded.sync="over1" slot="left">
        <mui-button @click="over1 = false">Collapse</mui-button>
      </mui-drawer>
      <mui-drawer mode="over" :expanded.sync="over2" slot="right">
        <mui-button @click="over2 = false">Collapse</mui-button>
      </mui-drawer>
      <mui-button @click="over1 = true">Expand Left</mui-button>
      <mui-button @click="over2 = true">Expand Right</mui-button>
      <div>I'm content!</div>
    </mui-drawer-container>
  </div>
</template>

<script>
export default {
  name: 'drawer-example',
  data() {
    return {
      over1: false,
      over2: false,
      push1: false,
      push2: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.drawer-example-container {
  border: 1px solid lightgrey;
  height: 64px;
}
</style>