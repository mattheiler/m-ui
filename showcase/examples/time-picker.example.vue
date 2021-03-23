<template>
  <div class="time-picker-example">
    <h3>Time picker</h3>
    <mui-form-field label="Date">
      <mui-input type="time" name="time" v-model="time" v-time-picker-trigger-for="'time'" />
    </mui-form-field>
    <mui-time-picker v-model="time" ref="time" />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'time-picker-example',
  data() {
    return {
      time: moment().format('HH:mm'),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>