<template>
  <div class="date-range-picker-example">
    <h3>Date range picker</h3>
    <mui-form-field label="Start">
      <mui-input type="date" name="start" v-model="start" v-date-picker-trigger-for="'range'" />
    </mui-form-field>
    <mui-form-field label="End">
      <mui-input type="date" name="end" v-model="end" v-date-picker-trigger-for="'range'" />
    </mui-form-field>
    <mui-date-range-picker :min="min" :max="max" :start.sync="start" :end.sync="end" ref="range" />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'date-range-picker-example',
  data() {
    return {
      min: moment().startOf('day').subtract(7, 'days'),
      max: moment().startOf('day').add(7, 'days'),
      start: null,
      end: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>