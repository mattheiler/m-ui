/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

// this is abstract, so ignore eslint

export const CalendarStrategySymbol = Symbol('calendar-strategy');

export class CalendarStrategy {
  constructor(picker) {
    this.picker = picker;
  }

  today(day) {
    return day.isSame(this.picker.today);
  }

  between(day) {
    return false;
  }

  select(day) {
    throw new Error('Not implmented');
  }

  selected(day) {
    return false;
  }

  disabled(day) {
    return day.isBefore(this.picker.min) || day.isAfter(this.picker.max);
  }
}
