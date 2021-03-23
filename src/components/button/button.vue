<template>
  <router-link v-if="to" :to="to" :tag="tag" class="mui-button" :class="classes" v-bind="attributes" role="button">
    <slot />
  </router-link>
  <button v-else class="mui-button" :class="classes" v-bind="attributes" @click="click" role="button">
    <slot />
  </button>
</template>

<script>
import { first, includes } from 'lodash';

const kinds = ['text', 'icon', 'solid'];

export default {
  name: 'mui-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
    },
    kind: {
      type: String,
      default: () => first(kinds),
      validator: kind => includes(kinds, kind),
    },
  },
  computed: {
    attributes() {
      return {
        ...this.$attrs,
        disabled: this.disabled,
        tabindex: this.tabindex,
      };
    },
    classes() {
      return {
        disabled: this.disabled,
        [this.kind]: true,
      };
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
    tag() {
      return this.to != null ? 'a' : 'button';
    },
  },
  methods: {
    click() {
      this.$emit('click', this);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/utils';

.mui-button {
  background-color: var(--mui-button-background, none);
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--mui-button-foreground, buttontext);
  cursor: pointer;
  font-weight: 500;
  height: 32px;
  line-height: 32px;
  min-width: 32px;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;

  @include mui-flex(row, inline);
  @include mui-flex-align(center, center);

  &:focus {
    background-color: var(--mui-button-focus-background, grey);
    color: var(--mui-button-hover-foreground, grey);
  }

  &:hover {
    background-color: var(--mui-button-hover-background, grey);
    color: var(--mui-button-hover-foreground, grey);
  }

  &.disabled {
    background-color: var(--mui-button-disabled-background, grey);
    color: var(--mui-button-disabled-foreground, grey);

    @include mui-disable();
  }

  &.icon {
    border-radius: 50%;
    width: 32px;
    padding: 0;

    &:focus {
      background-color: var(--mui-button-icon-focus-background, grey);
      color: var(--mui-button-icon-focus-foreground, grey);
    }

    &:hover {
      background-color: var(--mui-button-icon-hover-background, grey);
      color: var(--mui-button-icon-hover-foreground, grey);
    }

    &.disabled {
      background-color: var(--mui-button-icon-disabled-background, none);
      color: var(--mui-button-icon-disabled-foreground, gray);
    }
  }

  &.solid {
    background-color: var(--mui-button-solid-background, buttonface);
    color: var(--mui-button-solid-foreground, buttontext);

    &:focus {
      background-color: var(--mui-button-solid-focus-background, grey);
      color: var(--mui-button-solid-focus-foreground, grey);
    }

    &:hover {
      background-color: var(--mui-button-solid-hover-background, grey);
      color: var(--mui-button-solid-hover-foreground, grey);
    }

    &.disabled {
      background-color: var(--mui-button-solid-disabled-background, lightgray);
      color: var(--mui-button-solid-disabled-foreground, gray);
    }
  }
}
</style>