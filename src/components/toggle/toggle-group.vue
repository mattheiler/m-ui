<template>
  <div class="mui-toggle-group">
    <slot />
  </div>
</template>

<script>
import { head, map } from 'lodash';

import selector from '../../mixins/selector';

import { ToggleGroupInjectionSymbol } from './toggle-group';

export default {
  name: 'mui-toggle-group',
  mixins: [selector],
  props: {
    value: {
      default: null,
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      value$: this.value,
      selection: {
        mode: Array.isArray(this.value) ? 'multiple' : 'single',
      },
    };
  },
  provide() {
    return {
      [ToggleGroupInjectionSymbol]: {
        value: this.value,
      },
    };
  },
  watch: {
    'selection.items'(items) {
      const values = map(items, item => item.value);
      this.value$ = this.selection.mode === 'multiple' ? values : head(values);
    },
    value(value) {
      this.value$ = value;
    },
    value$(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.mui-toggle-group {
  display: inline-block;
}
</style>
