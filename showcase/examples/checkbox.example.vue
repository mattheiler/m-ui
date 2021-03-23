<template>
  <div class="checkbox-example">
    <h3>Checkbox</h3>
    <h4>Foo</h4>
    <mui-checkbox v-model="checked">All</mui-checkbox>
    <mui-checkbox v-model="checked1">Option 1</mui-checkbox>
    <mui-checkbox v-model="checked2">Option 2</mui-checkbox>
    <mui-checkbox v-model="checked3">Option 3</mui-checkbox>
    <h4>Bar</h4>
    <mui-checkbox :disabled="true" :checked="false">Option 1 (disabled)</mui-checkbox>
    <mui-checkbox :disabled="true" :checked="true">Option 2 (disabled and selected)</mui-checkbox>
  </div>
</template>

<script>
export default {
  name: 'checkbox-example',
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
    };
  },
  computed: {
    checked: {
      get() {
        let count = 0;
        if (this.checked1) count++;
        if (this.checked2) count++;
        if (this.checked3) count++;
        const total = 3;
        return count > 0 && count < total ? null : count === total;
      },
      set(value) {
        if (value != null) {
          this.checked1 = value;
          this.checked2 = value;
          this.checked3 = value;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>