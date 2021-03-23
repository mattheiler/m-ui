<template>
  <div class="mui-toast">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mui-toast',
};
</script>

<style scoped lang="scss">
@import 'styles/shadows';

.mui-toast {
  background-color: var(--mui-toast-background-color, rgba(black, 0.87));
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--mui-toast-color, white);
  margin: 4px 0;
  padding: 8px;
  z-index: 100;

  @include mui-shadow(3);
}
</style>