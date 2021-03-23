<template>
  <div class="tooltip-example">
    <h3>Tooltip</h3>
    <mui-button>
      <span>I have a tooltip!</span>
      <mui-tooltip placement="top">I'm a tooltip!</mui-tooltip>
    </mui-button>
    <mui-button>
      <span>I have a tooltip!</span>
      <mui-tooltip placement="right">I'm a tooltip!</mui-tooltip>
    </mui-button>
    <mui-button>
      <span>I have a tooltip!</span>
      <mui-tooltip placement="bottom">I'm a tooltip!</mui-tooltip>
    </mui-button>
    <mui-button>
      <span>I have a tooltip!</span>
      <mui-tooltip placement="left">I'm a tooltip!</mui-tooltip>
    </mui-button>
  </div>
</template>

<script>
export default {
  name: 'tooltip-example',
};
</script>

<style lang="scss" scoped>
</style>