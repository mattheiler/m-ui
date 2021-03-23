<template>
  <div class="mui-list">
    <slot>
      <mui-list-item v-for="(data, index) in dataSource" :key="dataKey != null ? data[dataKey] : index">
        <slot name="item" :data="data" :index="index">{{ data }}</slot>
      </mui-list-item>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'mui-list',
  props: {
    dataKey: {
      type: String,
      default: null,
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.mui-list {
}
</style>