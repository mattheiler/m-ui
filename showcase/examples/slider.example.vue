<template>
  <div class="slider-example">
    <h3>Slider</h3>
    <mui-form class="settings">
      <mui-form-field label="Value">
        <mui-input type="number" v-model="value" />
      </mui-form-field>
      <mui-form-field label="Min">
        <mui-input type="number" :min="0" v-model.number="min" />
      </mui-form-field>
      <mui-form-field label="Max">
        <mui-input type="number" :min="min" v-model.number="max" />
      </mui-form-field>
      <mui-form-field label="Step">
        <mui-input type="number" min="1" v-model.number="step" />
      </mui-form-field>
      <mui-form-field label="Digits">
        <mui-input type="number" min="0" v-model.number="digits" />
      </mui-form-field>
      <mui-checkbox v-model="discrete">Discrete</mui-checkbox>
      <mui-checkbox v-model="disabled">Disabled</mui-checkbox>
    </mui-form>
    <mui-slider v-model="value" :mode="mode" :min="min" :max="max" :step="step" :digits="digits" :disabled="disabled" />
  </div>
</template>

<script>
export default {
  name: 'slider-example',
  data() {
    return {
      value: 20,
      digits: 0,
      step: 1,
      min: 0,
      max: 100,
      discrete: false,
      disabled: false,
    };
  },
  computed: {
    mode() {
      return this.discrete ? 'discrete' : 'continuous';
    },
  },
};
</script>

<style lang="scss" scoped>
.settings {
  max-width: 200px;
}
</style>