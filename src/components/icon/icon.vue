<template>
  <i class="mui-icon" :class="classes" />
</template>

<script>
export default {
  name: 'mui-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return `mui-icon-${this.name}`;
    },
  },
};
</script>

<style scoped lang="scss">
.mui-icon {
  height: 16px;
  width: 16px;
  &::before {
    height: 100%;
    width: 100%;
  }
}
</style>