<template>
  <div class="radio-example">
    <h3>Radio</h3>
    <h4>Foo</h4>
    <mui-radio-group v-model="foo" name="foo">
      <mui-radio :value="1">Option 1</mui-radio>
      <mui-radio :value="2">Option 2</mui-radio>
      <mui-radio :value="3">Option 3</mui-radio>
    </mui-radio-group>
    <h4>Bar</h4>
    <mui-radio-group v-model="bar" name="bar">
      <mui-radio :value="1" :disabled="true">Option 1 (disabled)</mui-radio>
      <mui-radio :value="2" :disabled="true">Option 2 (disabled and selected)</mui-radio>
    </mui-radio-group>
  </div>
</template>

<script>
export default {
  name: 'radio-example',
  data() {
    return {
      foo: 1,
      bar: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>