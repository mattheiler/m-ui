<template>
  <div class="date-picker-example">
    <h3>Date picker</h3>
    <mui-form-field label="Date">
      <mui-input type="date" name="date" v-model="date" v-date-picker-trigger-for="'date'" />
    </mui-form-field>
    <mui-date-picker v-model="date" ref="date" />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'date-picker-example',
  data() {
    return {
      date: moment().startOf('day').format('YYYY-MM-DD'),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>