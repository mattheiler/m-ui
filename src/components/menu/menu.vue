<template>
  <mui-popper class="mui-menu" :trigger="popper.trigger" :placement="popper.placement" v-if="popper.visible" v-on="listeners" v-clickaway="close">
    <slot />
  </mui-popper>
</template>

<script>
import { findIndex } from 'lodash';

import { MuiPopper } from '../popper';

export default {
  name: 'mui-menu',
  mixins: [MuiPopper],
  data() {
    return {
      menu: {
        items: [],
      },
      listeners: {
        'keydown.up.prevent': this.up,
        'keydown.down.prevent': this.down,
      },
    };
  },
  provide() {
    return {
      menu: this.menu,
    };
  },
  methods: {
    down() {
      const { items } = this.menu;
      const index = findIndex(items, item => item.active);
      if (index < items.length - 1) items[index + 1].focus();
    },
    up() {
      const { items } = this.menu;
      const index = findIndex(items, item => item.active);
      if (index > 0) items[index - 1].focus();
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/shadows';

.mui-menu {
  background-color: var(--mui-menu-background, rgba(black, 0.87));
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--mui-menu-foreground, white);
  line-height: 32px;
  position: fixed;
  z-index: 100;

  @include mui-shadow(3);
}
</style>