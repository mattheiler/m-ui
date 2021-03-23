<template>
  <div class="button-example">
    <h3>Button</h3>
    <div class="button-example-list">
      <div class="button-example-list-item">
        <mui-button kind="text" type="button">Button</mui-button>
      </div>
      <div class="button-example-list-item">
        <mui-button kind="text" type="button" disabled>Button (disabled)</mui-button>
      </div>
      <div class="button-example-list-item">
        <mui-button kind="solid" solid type="button">Solid Button</mui-button>
      </div>
      <div class="button-example-list-item">
        <mui-button kind="solid" solid type="button" disabled>Solid Button (disabled)</mui-button>
      </div>
      <div class="button-example-list-item">
        <mui-button kind="icon">
          <mui-icon name="help" />
        </mui-button>
      </div>
      <div class="button-example-list-item">
        <mui-button kind="icon" disabled>
          <mui-icon name="help" />
        </mui-button>
        <span>(disabled)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button-example',
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    click() {
      this.disabled = !this.disabled;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';

.button-example-list {
  @include mui-flex(column);
  @include mui-flex-align(start, start);

  .button-example-list-item {
    & + .button-example-list-item {
      margin-top: 16px;
    }
  }
}
</style>