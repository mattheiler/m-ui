<template>
  <button class="mui-toggle" :class="classes" @click="toggle" :tabindex="tabindex">
    <slot />
  </button>
</template>

<script>
import { includes, isEqual } from 'lodash';

import selectable from '../../mixins/selectable';

import { ToggleGroupInjectionSymbol } from './toggle-group';

export default {
  name: 'mui-toggle',
  mixins: [selectable],
  props: {
    value: {
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  inject: {
    group: ToggleGroupInjectionSymbol,
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled,
        selected: this.selected,
      };
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
  },
  methods: {
    toggle() {
      this.selected = !this.selected;
    },
  },
  created() {
    this.selected = isEqual(this.group.value, this.value) || includes(this.group.value, this.value);
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/utils';

.mui-toggle {
  background-color: var(--mui-toggle-background, buttonface);
  border: none;
  box-sizing: border-box;
  color: var(--mui-toggle-foreground, buttontext);
  cursor: pointer;
  font-weight: 500;
  height: 32px;
  line-height: 32px;
  min-width: 32px;
  outline: none;
  padding: 0 6px; // 6 for icons... maybe an icon attribute to set the style?
  text-decoration: none;
  user-select: none;
  vertical-align: middle;

  @include mui-flex(row, inline);
  @include mui-flex-align(center, center);

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  // enabled
  &:not(.disabled) {
    &:focus,
    &:hover {
      background: var(--mui-toggle-focus-background, lightgray);
    }

    &.selected {
      background-color: var(--mui-toggle-selected-background, lightgray);
      color: var(--mui-toggle-selected-foreground, grey);

      &:focus,
      &:hover {
        background: var(--mui-toggle-selected-focus-background, grey);
      }
    }
  }

  &.disabled {
    background-color: var(--mui-toggle-disabled-background, lightgrey);
    color: var(--mui-toggle-disabled-foreground, grey);

    @include mui-disable();

    &.selected {
      background-color: var(--mui-toggle-disabled-selected-background, lightgray);
      color: var(--mui-toggle-disabled-selected-foreground, grey);
    }
  }
}
</style>
