<template>
  <div class="mui-list-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mui-list-item',
};
</script>

<style lang="scss" scoped>
@import 'styles/utils';

.mui-list-item {
  line-height: 32px;
  min-height: 32px;

  @include mui-ellipsis();
}
</style>