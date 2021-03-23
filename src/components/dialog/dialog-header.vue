<template>
  <header class="mui-dialog-header">
    <div class="mui-dialog-title">
      <slot>{{ title }}</slot>
    </div>
    <mui-button kind="icon" class="mui-dialog-close" @click="dialog.close" @keydown.space.enter="dialog.close">
      <mui-icon name="close" />
    </mui-button>
  </header>
</template>

<script>
export default {
  name: 'mui-dialog-header',
  inject: ['dialog'],
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';

.mui-dialog-header {
  @include mui-flex();
  @include mui-flex-align(space-between, center);

  .mui-dialog-title {
    @include mui-flex-item(auto);
  }

  .mui-dialog-close {
    padding: 0 8px;

    @include mui-flex-item(none);
  }
}
</style>