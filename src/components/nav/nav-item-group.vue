<template>
  <div class="mui-nav-item-group" :class="classes">
    <div class="mui-nav-item-group-header" @click.prevent="expandedToggle" @keydown.space.prevent="expandedToggle" :tabindex="tabindex">
      <div class="mui-nav-item-group-title">{{ title }}</div>
      <mui-icon class="mui-nav-item-group-indicator" name="chevron-down" />
    </div>
    <div class="mui-nav-item-group-content">
      <slot />
    </div>
  </div>
</template>

<script>
import expandable from '../../mixins/expandable';

export default {
  name: 'mui-nav-item-group',
  mixins: [expandable],
  props: {
    title: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled,
        expanded: this.expanded$,
      };
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/utils';

.mui-nav-item-group {
  background-color: var(--mui-nav-item-group-background, white);

  &:last-child {
    .mui-nav-item-group-header {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }
  }

  .mui-nav-item-group-header {
    border-color: var(--mui-nav-item-group-border, lightgray);
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: var(--mui-nav-item-group-foreground, buttontext);
    cursor: pointer;
    height: 48px;
    line-height: 32px;
    outline: none;
    padding: 8px 16px;
    user-select: none;

    &:hover {
      background-color: var(--mui-nav-item-group-hover-background, #eee);
    }

    @include mui-flex(row);
    @include mui-flex-align(start, center);

    .mui-nav-item-group-title {
      @include mui-flex-item(auto);
      @include mui-ellipsis();
    }

    .mui-nav-item-group-indicator {
      transition: 300ms linear all;

      @include mui-flex-item(none);
    }
  }

  .mui-nav-item-group-content {
    box-sizing: border-box;
    height: 0;
    margin-top: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s, margin-top 0.5s, opacity 0.5s;
  }

  &.expanded {
    .mui-nav-item-group-header {
      .mui-nav-item-group-indicator {
        transform: rotate(180deg);
      }
    }

    .mui-nav-item-group-content {
      height: auto;
      opacity: 1;
      padding: 16px;
    }
  }

  &.disabled {
    @include mui-disable();
  }
}
</style>