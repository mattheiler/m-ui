<template>
  <mui-popper :placement="popper.placement" :trigger="popper.trigger" v-if="popper.visible">
    <!-- TODO refactor hand to be focusable -->
    <mui-focus-trap class="mui-time-picker" :paused="false" deactivate-on-outside-click deactivate-on-esc return-focus-on-deactivate @deactivate="close">
      <div class="mui-time-picker-head">{{ value$ | moment('h:mm A') }}</div>
      <div class="mui-time-picker-body">
        <mui-clock v-model="value$" />
      </div>
    </mui-focus-trap>
  </mui-popper>
</template>

<script>
import moment from 'moment';

import { MuiPopper } from '../popper';

import MuiClock from './clock.vue';

export default {
  name: 'mui-date-picker',
  components: { MuiClock },
  mixins: [MuiPopper],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: () => moment().toString(),
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      visible: false,
      value$: moment(this.value, 'HH:mm').local(),
    };
  },
  watch: {
    value(value) {
      this.value$ = moment(value, 'HH:mm').local();
    },
    value$(value) {
      this.$emit('change', value != null ? value.format('HH:mm') : null);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/shadows';

.mui-time-picker {
  background-color: var(--mui-time-picker-background, white);
  border-radius: 4px;
  color: var(--mui-time-picker-foreground, default);
  position: relative;
  z-index: 100;

  @include mui-flex(column);
  @include mui-flex-align(start, start);
  @include mui-shadow(3);

  .mui-time-picker-head {
    background-color: var(--mui-time-picker-head-background, gray);
    border-radius: 2px 2px 0 0;
    box-sizing: border-box;
    color: var(--mui-time-picker-head-foreground, white);
    padding: 8px;
    width: 100%;

    @include mui-flex-item(none);
  }

  .mui-time-picker-body {
    padding: 8px;

    @include mui-flex-item(auto);
  }
}
</style>
