<template>
  <input class="mui-input" :class="classes" :type="type" v-model="value$" v-bind="attributes" v-on="listeners" v-validate />
</template>

<script>
import control from './form-field-control';

export default {
  name: 'mui-input',
  mixins: [control],
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
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

.mui-input {
  @include mui-form-field-control();
}
</style>