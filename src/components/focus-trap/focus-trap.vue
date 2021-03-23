<template>
  <div v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script>
// This Vue component wraps the `focus-trap` npm package:
// https://www.npmjs.com/package/focus-trap
// https://github.com/davidtheclark/focus-trap

import focusTrap from 'focus-trap';

export default {
  name: 'mui-focus-trap',
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    paused: {
      type: Boolean,
      default: false,
    },
    initialFocus: {
      type: Function,
      default: null,
    },
    fallbackFocus: {
      type: Function,
      default: null,
    },
    deactivateOnEsc: {
      type: Boolean,
      default: false,
    },
    deactivateOnOutsideClick: {
      type: Boolean,
      default: false,
    },
    returnFocusOnDeactivate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focusTrap: null,
    };
  },
  watch: {
    active(newValue, oldValue) {
      if (oldValue && !newValue) {
        this.focusTrap.deactivate();
      } else if (!oldValue && newValue) {
        const { activeElement } = document;
        this.focusTrap.activate();
        if (this.paused) {
          this.focusTrap.pause();
          if (activeElement) activeElement.focus();
        }
      }
    },
    paused(newValue, oldValue) {
      if (oldValue && !newValue) {
        this.focusTrap.unpause();
      } else if (!oldValue && newValue) {
        this.focusTrap.pause();
      }
    },
  },
  mounted() {
    this.focusTrap = focusTrap(this.$el, {
      onActivate: () => this.$emit('activate'),
      onDeactivate: () => this.$emit('deactivate'),
      initialFocus: this.initialFocus,
      fallbackFocus: this.fallbackFocus,
      escapeDeactivates: this.deactivateOnEsc,
      clickOutsideDeactivates: this.deactivateOnOutsideClick,
      returnFocusOnDeactivate: this.returnFocusOnDeactivate,
    });
    if (this.active) this.focusTrap.activate();
    if (this.paused) this.focusTrap.pause();
  },
  destroyed() {
    this.focusTrap.deactivate();
  },
};
</script>