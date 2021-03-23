<template>
  <section class="mui-dialog-content">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'mui-dialog-content',
  inject: ['dialog'],
};
</script>

<style lang="scss" scoped>
.mui-dialog-content {
}
</style>