<template>
  <textarea class="mui-textarea" :class="classes" v-model="value$" v-bind="attributes" v-on="listeners" v-validate></textarea>
</template>

<script>
import control from './form-field-control';

export default {
  name: 'mui-textarea',
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

.mui-textarea {
  @include mui-form-field-control {
    resize: vertical;
    overflow: auto;
    min-height: 20px;
  }
}
</style>