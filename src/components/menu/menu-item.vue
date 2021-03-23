<template>
  <router-link v-if="to" :to="to" :tag="tag" class="mui-menu-item" :class="classes" v-bind="attrs" role="menuitem">
    <slot name="header">{{ header }}</slot>
  </router-link>
  <button v-else class="mui-menu-item" :class="classes" v-bind="attrs" role="menuitem" @click="click">
    <slot name="header">{{ header }}</slot>
  </button>
</template>

<script>
export default {
  name: 'mui-menu-item',
  props: {
    header: {
      type: String,
      default: null,
    },
    to: {
      type: [String, Object],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['menu'],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        disabled: this.disabled,
        tabindex: this.tabindex,
      };
    },
    classes() {
      return {
        disabled: this.disabled,
      };
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
    tag() {
      return this.link != null ? 'a' : 'button';
    },
  },
  created() {
    const { items } = this.menu;
    items.push(this);
  },
  destroyed() {
    const { items } = this.menu;
    const index = items.indexOf(this);
    if (index >= 0) items.splice(index, 1);
  },
  methods: {
    click() {
      this.$emit('click', this);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/utils';

.mui-menu-item {
  background-color: var(--mui-menu-item-background, white);
  border: none;
  box-sizing: border-box;
  color: var(--mui-menu-item-foreground, black);
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  min-width: 32px;
  outline: none;
  padding: 0 8px;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  width: 100%;

  @include mui-flex();
  @include mui-flex-align(start, center);

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background-color: var(--mui-menu-item-hover-background, #eee);
    color: var(--mui-menu-item-hover-foreground, #eee);
  }

  &:focus {
    background-color: var(--mui-menu-item-focus-background, #eee);
    color: var(--mui-menu-item-focus-foreground, #eee);
  }

  &.disabled {
    background-color: var(--mui-menu-item-disabled-background, grey);
    color: var(--mui-menu-item-disabled-foreground, grey);

    @include mui-disable();

    &:hover {
      background-color: transparent;
      cursor: auto;
    }
  }
}
</style>
