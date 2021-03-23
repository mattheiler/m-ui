<template>
  <mui-popper :placement="popper.placement" :trigger="popper.trigger" v-if="popper.visible">
    <mui-focus-trap class="mui-date-picker" :paused="false" deactivate-on-outside-click deactivate-on-esc return-focus-on-deactivate @deactivate="close">
      <mui-button kind="icon" @click="prev" class="mui-date-picker-prev">
        <mui-icon name="chevron-left" />
      </mui-button>
      <mui-calendar :month="month" class="calendar" />
      <mui-button kind="icon" @click="next" class="mui-date-picker-next">
        <mui-icon name="chevron-right" />
      </mui-button>
    </mui-focus-trap>
  </mui-popper>
</template>

<script>
import moment from 'moment';

import { MuiPopper } from '../popper';

import MuiCalendar from './calendar.vue';
import { CalendarStrategy, CalendarStrategySymbol } from './calendar-strategy';

class DatePickerCalendarStrategy extends CalendarStrategy {
  selected(day) {
    return day.isSame(this.picker.value$);
  }

  select(day) {
    this.picker.value$ = day;
  }
}

export default {
  name: 'mui-date-picker',
  components: { MuiCalendar },
  mixins: [MuiPopper],
  props: {
    value: {
      type: String,
      default: null,
    },
    min: {
      type: [Date, String, Number, moment],
      default: null,
    },
    max: {
      type: [Date, String, Number, moment],
      default: null,
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  provide() {
    return {
      [CalendarStrategySymbol]: new DatePickerCalendarStrategy(this),
    };
  },
  data() {
    return {
      visible: false,
      value$: moment(this.value).local().startOf('day'),
      today: moment().local().startOf('day'),
      month: moment().local().startOf('month'),
    };
  },
  methods: {
    prev() {
      this.month = moment(this.month).subtract(1, 'month');
    },
    next() {
      this.month = moment(this.month).add(1, 'month');
    },
  },
  watch: {
    value(value) {
      this.value$ = moment(value).local().startOf('day');
    },
    value$(value) {
      this.$emit('change', value != null ? moment(value).utc().format('YYYY-MM-DD') : null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/shadows';

.mui-date-picker {
  background-color: var(--mui-date-picker-background, white);
  border-radius: 4px;
  color: var(--mui-date-picker-foreground, default);
  position: relative;
  z-index: 100;

  @include mui-flex();
  @include mui-flex-align(start, start);
  @include mui-shadow(3);

  .calendar {
    margin: 8px;
  }

  .mui-date-picker-prev,
  .mui-date-picker-next {
    position: absolute;
    top: 8px;
  }

  .mui-date-picker-prev {
    left: 8px;
  }

  .mui-date-picker-next {
    right: 8px;
  }
}
</style>