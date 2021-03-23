<template>
  <div class="mui-popper" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script>
import Popper from 'popper.js';

export default {
  name: 'mui-popper',
  props: {
    trigger: {
      required: true,
    },
    placement: {
      type: String,
      default: 'bottom-start',
    },
  },
  data() {
    return {
      popper: null,
    };
  },
  mounted() {
    this.popper = new Popper(this.trigger, this.$el, {
      placement: this.placement,
      modifiers: {
        computeStyle: {
          gpuAcceleration: false,
        },
        preventOverflow: {
          boundariesElement: 'viewport',
        },
      },
    });
  },
  destroyed() {
    if (this.popper != null) {
      this.popper.destroy();
    }
  },
};
</script>

<style lang="scss" scoped>
</style>