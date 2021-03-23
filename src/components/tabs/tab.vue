<template>
  <div class="mui-tab" @click="activate" :class="{ activated }">
    <slot name="header">{{ header }}</slot>
    <portal :to="id">
      <slot />
    </portal>
  </div>
</template>

<script>
import { uuid } from '../../utils';

export default {
  name: 'mui-tab',
  inject: ['group'],
  props: {
    header: {
      default: null,
    },
    id: {
      type: String,
      default: () => uuid(),
    },
  },
  computed: {
    activated() {
      return this.group.activated(this);
    },
  },
  methods: {
    activate() {
      this.group.activate(this);
    },
  },
  // hooks
  created() {
    this.group.tabs.push(this);
  },
  destroyed() {
    const { tabs } = this.group;
    const index = tabs.indexOf(this);
    if (index >= 0) {
      tabs.splice(index, 1);
    }
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/utils';

.mui-tab {
  background-color: var(--mui-tab-background, none);
  border: none;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
  color: var(--mui-tab-foreground, buttontext);
  cursor: pointer;
  height: 48px;
  line-height: 48px;
  min-width: 160px;
  padding: 0 24px;
  user-select: none;

  @include mui-flex();
  @include mui-flex-align(center, center);

  &.activated {
    background-color: var(--mui-tab-active-background, buttonface);
    color: var(--mui-tab-active-foreground, buttontext);
  }

  &.disabled {
    background-color: var(--mui-tab-disabled-background, lightgrey);
    color: var(--mui-tab-disabled-foreground, grey);

    @include mui-disable();
  }
}
</style>