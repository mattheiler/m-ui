<template>
  <div class="mui-expander" :class="classes">
    <div class="mui-expander-header" @click.prevent="expandedToggle" @keydown.space.prevent="expandedToggle" :tabindex="tabindex">
      <mui-icon class="mui-expander-indicator" name="chevron-down" />
      <div class="mui-expander-title">{{ title }}</div>
      <div class="mui-expander-description" v-if="description">{{ description }}</div>
    </div>
    <div class="mui-expander-content">
      <slot />
    </div>
  </div>
</template>

<script>
import expandable from '../../mixins/expandable';

export default {
  name: 'mui-expander',
  mixins: [expandable],
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
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

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/utils';

.mui-expander {
  .mui-expander-header {
    background-color: var(--mui-expander-header-background, buttonface);
    box-sizing: border-box;
    color: var(--mui-expander-header-foreground, buttontext);
    cursor: pointer;
    height: 48px;
    line-height: 32px;
    outline: none;
    padding: 8px 16px;
    user-select: none;

    @include mui-flex(row);
    @include mui-flex-align(start, center);

    &:focus {
      background-color: var(--mui-expander-header-focus-background, buttonface);
      color: var(--mui-expander-header-focus-foreground, buttontext);
    }

    &:hover {
      background-color: var(--mui-expander-header-hover-background, buttonface);
      color: var(--mui-expander-header-hover-foreground, buttontext);
    }

    .mui-expander-indicator {
      transition: 300ms linear all;

      @include mui-flex-item();
    }

    .mui-expander-title {
      padding: 0 16px;

      @include mui-flex-item(auto);
      @include mui-ellipsis();
    }

    .mui-expander-description {
      @include mui-flex-item();
    }
  }

  .mui-expander-content {
    height: 0;
    margin-top: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s, margin-top 0.5s, opacity 0.5s;
  }

  &.expanded {
    .mui-expander-header {
      .mui-expander-indicator {
        transform: rotate(180deg);
      }
    }

    .mui-expander-content {
      height: auto;
      margin-top: 16px;
      opacity: 1;
    }
  }

  &.disabled {
    @include mui-disable();

    .mui-expander-header {
      background-color: var(--mui-expander-disabled-header-background, buttonface);
      color: var(--mui-expander-disabled-header-foreground, buttontext);
    }
  }
}
</style>