<template>
  <div class="wysiwyg-example">
    <h3>Wysiwyg</h3>
    <mui-wysiwyg v-model="value" />
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'wysiwyg-example',
  data() {
    return {
      value: 'Hello, world!',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>