<template>
  <router-link :to="to" class="mui-nav-item">
    <mui-icon class="mui-nav-item-icon" :name="icon" v-if="icon" />
    <span class="mui-nav-item-label">
      <slot>{{ label }}</slot>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'mui-nav-item',
  props: {
    label: {
      type: String,
      default: null,
    },
    to: {
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/utils';

.mui-nav-item {
  height: 32px;
  line-height: 32px;
  padding: 8px 16px;
  text-decoration: none;
  user-select: none;

  @include mui-ellipsis();
  @include mui-flex();
  @include mui-flex-align(flex-start, center);

  &,
  &:hover {
    color: var(--mui-nav-item-hover-foreground, buttontext);
    fill: var(--mui-nav-item-hover-foreground, buttontext);
  }

  &:hover {
    background-color: var(--mui-nav-item-hover-foreground, #eee);
  }

  .mui-nav-item-icon {
    margin-right: 16px;
    width: 32px;

    @include mui-flex-item(none);
  }

  .mui-nav-item-label {
    @include mui-flex-item(auto);
  }
}
</style>