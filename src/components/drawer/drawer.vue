<template>
  <transition name="slide">
    <div class="mui-drawer" :class="classes" :style="styles" v-if="visible">
      <slot />
    </div>
  </transition>
</template>

<script>
import { head, includes } from 'lodash';

import expandable from '../../mixins/expandable';

const modes = ['side', 'over'];

export default {
  name: 'mui-drawer',
  mixins: [expandable],
  props: {
    mode: {
      type: String,
      default: () => head(modes),
      validator: mode => includes(modes, mode),
    },
    width: {
      type: [Number, String],
      default: 300,
    },
  },
  computed: {
    classes() {
      return {
        [this.mode]: true,
        [this.side]: true,
      };
    },
    visible() {
      switch (this.mode) {
        case 'side':
          return true;
        case 'over':
          return this.expanded$;
        default:
          return false;
      }
    },
    side() {
      return this.$vnode.data.slot;
    },
    styles() {
      return {
        width: `${this.width}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/shadows';
@import 'styles/utils';

.mui-drawer {
  height: 100%;
  overflow: hidden;
  z-index: 3;

  @include mui-flex-item(none);

  &.over {
    background: var(--mui-drawer-background, white);
    color: var(--mui-drawer-foreground, black);
    position: absolute;

    @include mui-shadow(3);

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    &.slide-enter-active,
    &.slide-leave-active {
      transition: 300ms linear transform;
    }

    &.slide-enter,
    &.slide-leave-to {
      &.left {
        transform: translateX(-100%);
      }
      &.right {
        transform: translateX(100%);
      }
    }
  }
}
</style>
