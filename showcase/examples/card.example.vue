<template>
  <div class="card-example">
    <h3>Card</h3>
    <mui-card title="Tacos">
      <template slot="subtitle">Mexican cuisine</template>
      <span>Content</span>
    </mui-card>
  </div>
</template>

<script>
export default {
  name: 'card-example',
};
</script>

<style lang="scss" scoped>
</style>