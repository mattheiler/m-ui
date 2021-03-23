<template>
  <div class="home">
    <h1 class="title">Marvolo UI</h1>
    <div class="example" v-for="example in examples" :key="example">
      <component :is="example" />
    </div>
  </div>
</template>

<script>
import examples from '../examples';

export default {
  name: 'home',
  data() {
    return {
      examples: Object.keys(examples),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  .title {
    margin: 16px;
  }
  .example {
    background: #f9f9f9;
    box-sizing: border-box;
    margin: 8px;
    padding: 8px;
  }
}
</style>