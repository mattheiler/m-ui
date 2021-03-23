<template>
  <option class="mui-option" :value="value$">
    <slot>{{ label }}</slot>
  </option>
</template>

<script>
export default {
  name: 'mui-option',
  props: {
    value: null,
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      value$: this.value,
    };
  },
};
</script>

<style lang="scss" scoped>
.mui-option {
}
</style>