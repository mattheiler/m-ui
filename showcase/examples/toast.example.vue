<template>
  <div class="toast-example">
    <h3>Toast</h3>
    <mui-button @click="toast(1)">Toast 1!</mui-button>
    <mui-button @click="toast(2)">Toast 2!</mui-button>
    <mui-toaster name="example-1" position="top" />
    <mui-toaster name="example-2" position="bottom" />
  </div>
</template>

<script>
export default {
  name: 'toast-example',
  inject: ['toaster'],
  methods: {
    toast(number) {
      this.toaster.open(`example-${number}`, `Hello, world (${number})!`);
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-example {
  .toast-example-content {
    display: flex;
  }
}
</style>