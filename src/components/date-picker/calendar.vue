<template>
  <div class="mui-calendar">
    <div class="mui-calendar-head">{{ month | moment('MMMM') }}</div>
    <table class="mui-calendar-body">
      <thead>
        <tr>
          <th v-for="(day, index) of weekdays" :key="index">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in weeks" :key="index">
          <td v-for="(day, index) in week" :key="index">
            <div class="mui-calendar-day" v-if="day" @click="select(day)" :class="classes(day)">
              <slot name="day" :day="day.toDate()">{{ day | moment('D') }}</slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { chunk, head, map, times } from 'lodash';
import moment from 'moment';

import { CalendarStrategySymbol } from './calendar-strategy';

function weeks(date) {
  const month = moment(date).local().startOf('month');
  const calendar = map(times(month.daysInMonth()), n => moment(month).date(n + 1));
  const index = head(calendar).day();
  for (let i = 0; i < index; i++) {
    calendar.unshift(null);
  }
  return chunk(calendar, 7);
}

export default {
  name: 'mui-calendar',
  props: {
    month: {
      type: [Date, String, Number, moment],
      default: null,
    },
  },
  inject: {
    strategy: CalendarStrategySymbol,
  },
  data() {
    return {
      weekdays: map(moment.weekdays(), weekday => head(weekday)),
      weeks: weeks(this.month),
    };
  },
  methods: {
    classes(day) {
      const classes = [];
      if (this.strategy.today(day)) classes.push('today');
      if (this.strategy.selected(day)) classes.push('selected');
      if (this.strategy.between(day)) classes.push('between');
      if (this.strategy.disabled(day)) classes.push('disabled');
      return classes;
    },
    select(day) {
      this.strategy.select(day);
    },
  },
  watch: {
    month(value) {
      this.weeks = weeks(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/utils';

.mui-calendar {
  user-select: none;

  .mui-calendar-head {
    color: lightgray;
    line-height: 48px;
    text-align: center;
  }

  .mui-calendar-body {
    border-collapse: collapse;
    text-align: center;

    thead {
      tr {
        th {
          border-bottom: 1px solid lightgray;
          color: lightgray;
          font-weight: normal;
          height: 16px;
        }
      }
    }

    tbody {
      tr {
        td {
          height: 36px;
          width: 36px;
        }
      }
    }

    .mui-calendar-day {
      border-radius: 50%;
      cursor: pointer;
      height: 100%;

      @include mui-flex();
      @include mui-flex-align(center, center);

      &.today {
        background-color: var(--mui-calendar-today-background, lightgray);
        color: var(--mui-calendar-today-foreground, default);
      }

      &.between {
        background-color: var(--mui-calendar-between-background, lighten(gray, 20%));
        color: var(--mui-calendar-between-foreground, white);
      }

      &.selected {
        background-color: var(--mui-calendar-selected-background, gray);
        color: var(--mui-calendar-selected-foreground, white);
      }

      &.disabled {
        background-color: var(--mui-calendar-disabled-background, transparent);
        color: var(--mui-calendar-disabled-foreground, lightgray);

        @include mui-disable();
      }
    }
  }
}
</style>