<template>
  <div class="mui-radio-group" :class="{ 'mui-radio-group-column': direction === 'column' }">
    <slot>
      <mui-radio v-for="item in items" :key="item[itemsLabelKey]" :value="item[itemsValueKey]">{{ item[itemsLabelKey] }}</mui-radio>
    </slot>
  </div>
</template>

<script>
import { includes } from 'lodash';

const directions = ['row', 'column'];

export default {
  name: 'mui-radio-group',
  props: {
    name: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'column',
      validator: value => includes(directions, value),
    },
    value: {
      type: [String, Number, Boolean, Object],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
    },
    itemsLabelKey: {
      type: String,
      default: 'label',
    },
    itemsValueKey: {
      type: String,
      default: 'value',
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      value$: this.value,
    };
  },
  watch: {
    value(value) {
      this.value$ = value;
    },
    value$(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style scoped lang="scss">
.mui-radio-group {
  display: flex;
  &.mui-radio-group-column {
    flex-direction: column;
  }
}
</style>