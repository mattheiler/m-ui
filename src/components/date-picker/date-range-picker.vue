<template>
  <mui-popper :placement="popper.placement" :trigger="popper.trigger" v-if="popper.visible">
    <mui-focus-trap class="mui-date-range-picker" :paused="false" deactivate-on-outside-click deactivate-on-esc return-focus-on-deactivate @deactivate="close">
      <mui-button kind="icon" @click="prev" class="mui-date-range-picker-prev">
        <mui-icon name="chevron-left" />
      </mui-button>
      <mui-calendar :month="lower" class="calendar lower" />
      <mui-calendar :month="upper" class="calendar upper" />
      <mui-button kind="icon" @click="next" class="mui-date-range-picker-next">
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

const START = 'start$';
const END = 'end$';

class DateRangePickerCalendarStrategy extends CalendarStrategy {
  key = START;

  between(day) {
    return day.isBetween(this.picker[START], this.picker[END], 'day');
  }

  selected(day) {
    return day.isSame(this.picker[START]) || day.isSame(this.picker[END]);
  }

  select(day) {
    const value = moment(day).local().startOf('day');
    const start = this.picker[START];
    const end = this.picker[END];

    switch (this.key) {
      case START:
        if (value.isAfter(end)) this.picker[END] = null;
        break;
      case END:
        if (value.isBefore(start)) this.key = START;
        break;
      default:
        throw new Error(`Out of range: '${this.key}'.`);
    }

    this.picker[this.key] = value;

    switch (this.key) {
      case START:
        this.key = END;
        break;
      case END:
        this.key = START;
        break;
      default:
        throw new Error(`Out of range: '${this.key}'.`);
    }
  }
}

export default {
  name: 'mui-date-range-picker',
  components: { MuiCalendar },
  mixins: [MuiPopper],
  props: {
    min: {
      type: [Date, String, Number, moment],
      default: null,
    },
    max: {
      type: [Date, String, Number, moment],
      default: null,
    },
    start: {
      type: [Date, String, Number, moment],
      default: null,
    },
    end: {
      type: [Date, String, Number, moment],
      default: null,
    },
  },
  provide() {
    return {
      [CalendarStrategySymbol]: new DateRangePickerCalendarStrategy(this),
    };
  },
  data() {
    return {
      today: moment().local().startOf('day'),
      [START]: moment(this.start).local().startOf('day'),
      [END]: moment(this.end).local().startOf('day'),
      lower: moment().local().startOf('month'),
      upper: moment().local().startOf('month').add(1, 'month'),
    };
  },
  methods: {
    prev() {
      this.lower = moment(this.lower).subtract(1, 'month');
      this.upper = moment(this.upper).subtract(1, 'month');
    },
    next() {
      this.lower = moment(this.lower).add(1, 'month');
      this.upper = moment(this.upper).add(1, 'month');
    },
  },
  watch: {
    start(value) {
      this[START] = moment(value).local().startOf('day');
    },
    [START](value) {
      this.$emit('update:start', value != null ? moment(value).utc().format('YYYY-MM-DD') : null);
    },
    end(value) {
      this[END] = moment(value).local().startOf('day');
    },
    [END](value) {
      this.$emit('update:end', value != null ? moment(value).utc().format('YYYY-MM-DD') : null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/shadows';

.mui-date-range-picker {
  background-color: var(--mui-date-picker-background, white);
  border-radius: 4px;
  color: var(--mui-date-picker-foreground, default);
  position: relative;
  z-index: 100;

  @include mui-flex();
  @include mui-flex-align(start, start);
  @include mui-shadow(3);

  .calendar {
    margin: 8px 0;

    &.lower {
      margin-left: 8px;
      margin-right: 4px;
    }

    &.upper {
      margin-left: 4px;
      margin-right: 8px;
    }
  }

  .mui-date-range-picker-prev,
  .mui-date-range-picker-next {
    position: absolute;
    top: 8px;
  }

  .mui-date-range-picker-prev {
    left: 8px;
  }

  .mui-date-range-picker-next {
    right: 8px;
  }
}
</style>