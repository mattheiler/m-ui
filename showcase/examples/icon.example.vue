<template>
  <div class="icon-example">
    <h3>Icon</h3>
    <h5>To see more available icons, view the icons project.</h5>
    <div class="icon-demo-grid">
      <span class="icon-demo" v-for="name of icons" :key="name">
        <div class="icon-demo-icon">
          <mui-icon :name="name" />
        </div>
        <div class="icon-demo-label">{{ name }}</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'icon-example',
  data() {
    return {
      icons: ['calendar', 'check', 'close', 'delete', 'edit', 'filter', 'lock', 'menu', 'print'],
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-gap: 10px;
  .icon-demo {
    align-items: center;
    border: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    padding: 8px;
    width: 100px;
    height: 100px;
    > .icon-demo-icon {
      align-content: center;
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      justify-content: center;
    }
    > .icon-demo-label {
      flex: 0 1 auto;
      text-align: center;
    }
  }
}
</style>