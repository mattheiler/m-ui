<template>
  <div class="progress-spinner-example">
    <h3>Progress spinner</h3>
    <mui-progress-spinner :value="amount" />
    <mui-progress-spinner mode="indeterminate" />
    <br />
    <input type="range" v-model.number="amount" /> {{ amount }}%
  </div>
</template>

<script>
export default {
  name: 'progress-spinner-example',
  data() {
    return {
      amount: 20,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>