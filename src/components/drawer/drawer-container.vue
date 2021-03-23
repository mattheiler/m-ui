<template>
  <div class="mui-drawer-container" :class="{ fullscreen }">
    <slot name="left" />
    <div class="mui-drawer-content">
      <slot />
    </div>
    <slot name="right" />
  </div>
</template>

<script>
export default {
  name: 'mui-drawer-container',
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/utils';

.mui-drawer-container {
  overflow: hidden;
  position: relative;

  @include mui-flex();

  &.fullscreen {
    @include mui-fullscreen();
  }

  .mui-drawer-content {
    overflow: auto;

    @include mui-flex-item(auto);
  }
}
</style>
