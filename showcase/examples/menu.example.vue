<template>
  <div class="menu-example">
    <h3>Menu</h3>
    <!--
    <mui-form-field label="Placement">
      <mui-select v-model="placement">
        <mui-option v-for="placement in placements" :key="placement" :value="placement">{{ placement }}</mui-option>
      </mui-select>
    </mui-form-field>
    -->
    <mui-button kind="icon" v-menu-trigger-for="{ name: 'menu', placement: 'bottom-start' }">
      <mui-icon name="menu" />
    </mui-button>
    <mui-button kind="icon" v-menu-trigger-for="{ name: 'menu', placement: 'top-start' }">
      <mui-icon name="menu" />
    </mui-button>
    <mui-menu ref="menu">
      <mui-menu-item header="Item 1" />
      <mui-menu-item header="Item 2" />
      <mui-menu-item header="Item 3 (disabled)" disabled />
    </mui-menu>
  </div>
</template>

<script>
export default {
  name: 'menu-example',
  data() {
    return {
      // placements: [
      //     'auto',
      //     'auto-end',
      //     'auto-start',
      //     'top',
      //     'top-end',
      //     'top-start',
      //     'right',
      //     'right-end',
      //     'right-start',
      //     'bottom',
      //     'bottom-end',
      //     'bottom-start',
      //     'left',
      //     'left-end',
      //     'left-start',
      // ],
      // placement: 'bottom-start',
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>