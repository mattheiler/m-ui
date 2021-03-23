<template>
  <footer class="mui-dialog-footer">
    <slot />
  </footer>
</template>

<script>
export default {
  name: 'mui-dialog-header',
  inject: {
    dialog: 'dialog',
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';

.mui-dialog-footer {
  @include mui-flex();
  @include mui-flex-align(end);
}
</style>