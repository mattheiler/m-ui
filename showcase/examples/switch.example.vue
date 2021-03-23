<template>
  <div class="switch-example">
    <h3>Switch</h3>
    <mui-switch>Option 1</mui-switch>
    <mui-switch>Option 2</mui-switch>
    <mui-switch :disabled="true">Option 3 (disabled)</mui-switch>
    <mui-switch :disabled="true" :checked="true">Option 4 (disabled and selected)</mui-switch>
  </div>
</template>

<script>
export default {
  name: 'switch-example',
};
</script>

<style lang="scss" scoped>
</style>