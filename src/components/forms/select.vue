<template>
  <select class="mui-select" :class="classes" v-model="value$" v-bind="attributes" v-on="listeners" v-validate>
    <slot />
  </select>
</template>

<script>
import control from './form-field-control';

export default {
  name: 'mui-select',
  mixins: [control],
  data() {
    return {
      listeners: {
        blur: this.blur,
        focus: this.focus,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import './form-field-control';

.mui-select {
  @include mui-form-field-control();
}
</style>