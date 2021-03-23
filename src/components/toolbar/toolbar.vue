<template>
  <div class="mui-toolbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mui-toolbar',
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';

.mui-toolbar {
  @include mui-flex(row);
  @include mui-flex-align(flex-start, center);
  box-sizing: border-box;
  height: 64px;
  min-height: 64px;
  padding: 0 16px;
  white-space: nowrap;
}
</style>