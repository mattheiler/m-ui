<template>
  <div class="toggle-example">
    <h3>Toggle</h3>
    <mui-toggle-group v-model="value">
      <mui-toggle :value="1">Option 1</mui-toggle>
      <mui-toggle :value="2">Option 2</mui-toggle>
      <mui-toggle :value="3">Option 3</mui-toggle>
      <mui-toggle :value="4" disabled>Option 4</mui-toggle>
      <mui-toggle :value="5" disabled>Option 5</mui-toggle>
    </mui-toggle-group>
    <span> Value: {{ value }}</span>
    <br />
    <br />
    <mui-toggle-group v-model="values" multiple>
      <mui-toggle :value="1">Option 1</mui-toggle>
      <mui-toggle :value="2">Option 2</mui-toggle>
      <mui-toggle :value="3">Option 3</mui-toggle>
      <mui-toggle :value="4" disabled>Option 4</mui-toggle>
      <mui-toggle :value="5" disabled>Option 5</mui-toggle>
    </mui-toggle-group>
    <span> Value: {{ values }}</span>
  </div>
</template>

<script>
export default {
  name: 'toggle-example',
  data() {
    return {
      value: 5,
      values: [5],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>