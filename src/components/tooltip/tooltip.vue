<template>
  <div class="mui-tooltip" v-if="visible">
    <slot />
  </div>
</template>

<script>
import Popper from 'popper.js';

function attach(tooltip, reference = null) {
  tooltip.$nextTick(() => {
    const popper = tooltip.$el;

    if (popper.nodeType === Node.COMMENT_NODE) return;

    tooltip.popper = new Popper(reference || popper.parentElement, popper, {
      placement: tooltip.placement,
      modifiers: {
        computeStyle: {
          gpuAcceleration: false,
        },
        offset: {
          offset: '0, 8',
        },
        preventOverflow: {
          boundariesElement: 'viewport',
          padding: 8,
        },
      },
    });
  });
}

function detach(tooltip) {
  if (tooltip.popper == null) return;

  tooltip.popper.destroy();
  tooltip.popper = null;
}

export default {
  name: 'mui-tooltip',
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
  },
  data() {
    return {
      popper: null,
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
  },
  watch: {
    visible(value) {
      if (value) {
        attach(this);
      } else {
        detach(this);
      }
    },
  },
  mounted() {
    const parent = this.$el.parentElement;
    if (parent == null) return;

    parent.addEventListener('mouseover', this.show);
    parent.addEventListener('mouseout', this.hide);

    attach(this);
  },
  beforeDestroy() {
    const parent = this.$el.parentElement;
    if (parent == null) return;

    parent.removeEventListener('mouseover', this.show);
    parent.removeEventListener('mouseout', this.hide);

    detach(this);
  },
};
</script>

<style scoped lang="scss">
@import 'styles/shadows';

.mui-tooltip {
  background-color: var(--mui-tooltip-background-color, rgba(black, 0.87));
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--mui-tooltip-color, white);
  line-height: 32px;
  padding: 0 8px;
  white-space: nowrap;
  z-index: 100;

  @include mui-shadow(3);
}
</style>