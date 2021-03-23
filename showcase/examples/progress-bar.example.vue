<template>
  <div class="progress-bar-example">
    <h3>Progress bar</h3>
    <mui-progress-bar :value="amount" />
    <br />
    <mui-progress-bar mode="indeterminate" />
    <br />
    <mui-progress-bar mode="buffer" :value="amount" :buffer="buffer" />
    <br />
    <mui-progress-bar mode="query" />
    <br />
    <input type="range" v-model.number="amount" /> {{ amount }}% <input type="range" v-model.number="buffer" /> {{ buffer }}%
  </div>
</template>

<script>
export default {
  name: 'progress-bar-example',
  data() {
    return {
      amount: 20,
      buffer: 40,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>