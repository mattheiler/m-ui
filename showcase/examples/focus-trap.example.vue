<template>
  <div class="focus-trap-example">
    <h3>Focus trap</h3>
    <mui-focus-trap :active="trapped">
      <mui-button @click="trapped = !trapped">
        <span v-if="trapped">Untrap</span>
        <span v-else>Trap</span>
      </mui-button>
      <input name="trap-1" />
      <input name="trap-2" />
      <input name="trap-3" />
    </mui-focus-trap>
  </div>
</template>

<script>
export default {
  name: 'focus-trap-example',
  data() {
    return {
      active: false,
      trapped: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>