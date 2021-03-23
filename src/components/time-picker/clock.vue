<template>
  <div class="mui-clock" :class="classes" @mousedown="mousedown" @mouseup="mouseup" @mousemove.prevent="mousemove">
    <div class="tick" v-for="tick in ticks" :key="tick" :class="ticker(tick)" @click="select(tick)">
      <div class="hand" />
      <div class="number" v-if="numbered(tick)">
        <span class="text">{{ tick }}</span>
      </div>
      <div class="dot" v-else />
    </div>
    <span class="pin" />
  </div>
</template>

<script>
import moment from 'moment';

import { range } from 'lodash';

const HOURS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const MINUTES = range(60);

export default {
  name: 'mui-clock',
  data() {
    return {
      ticks: HOURS,
      time$: this.time,
      mode: 'hour',
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    time: {
      type: moment,
      default: () => moment(),
    },
  },
  model: {
    prop: 'time',
    event: 'change',
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled,
        [this.mode]: true,
      };
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
  },
  methods: {
    mousemove(e) {
      if (!this.dragging && e.type !== 'click') return;
      const tick = e.target.closest('.tick');
      if (tick != null) tick.click();
    },
    mousedown() {
      this.dragging = true;
    },
    mouseup() {
      this.dragging = false;
    },
    ticker(tick) {
      return {
        numbered: this.numbered(tick),
        selected: this.selected(tick),
      };
    },
    numbered(tick) {
      switch (this.mode) {
        case 'hour':
          return true;
        case 'minute':
          return tick % 5 === 0;
        default:
          throw new Error('Not supported.');
      }
    },
    select(tick) {
      switch (this.mode) {
        case 'hour': {
          this.time$ = moment(this.time$.set('hour', tick % 12));
          this.mode = 'minute';
          break;
        }
        case 'minute': {
          this.time$ = moment(this.time$.set('minute', tick));
          break;
        }
        default:
          throw new Error('Not supported.');
      }
    },
    selected(tick) {
      switch (this.mode) {
        case 'hour':
          return this.time$.hour() % 12 === tick % 12;
        case 'minute':
          return this.time$.minute() === tick;
        default:
          throw new Error('Not supported.');
      }
    },
  },
  watch: {
    time(value) {
      this.time$ = value;
    },
    time$(value) {
      this.$emit('change', value);
    },
    mode(value) {
      switch (value) {
        case 'hour':
          this.ticks = HOURS;
          break;
        case 'minute':
          this.ticks = MINUTES;
          break;
        default:
          throw new Error('Not supported.');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.mui-clock {
  background: var(--mui-clock-background, #ddd);
  color: var(--mui-clock-foreground, grey);
  border-radius: 50%;
  display: inline-block;
  font-size: 16px;
  height: 240px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 240px;

  .pin {
    background-color: var(--mui-clock-hand-background, grey);
    border-radius: 50%;
    box-sizing: border-box;
    height: 8px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    z-index: 1;
  }

  .tick {
    cursor: pointer;
    height: 50%;
    left: 50%;
    position: absolute;
    transform-origin: bottom;
    user-select: none;
    width: 0;

    .hand {
      height: calc(100% - 20px);
      bottom: 0;
      position: absolute;
      transform: translate(-50%, 0);
      width: 2px;
      background-color: transparent;
      //visibility: hidden; // merp
    }

    .number {
      border-radius: 50%;
      height: 32px;
      margin-top: 4px;
      transform: translate(-50%, 0);
      width: 32px;

      .text {
        display: block;
        line-height: 32px;
      }
    }

    .dot {
      background-color: transparent;
      border-radius: 50%;
      height: 8px;
      margin-top: 16px;
      transform: translate(-50%, 0);
      width: 8px;
      //visibility: hidden; // merp
    }

    &.selected {
      .dot,
      .hand,
      .number {
        background-color: var(--mui-clock-hand-background, grey);
        color: var(--mui-clock-hand-foreground, white);
        visibility: visible; // merp
      }
    }
  }

  &.hour {
    .tick {
      @for $i from 2 through 12 {
        &:nth-of-type(#{$i}) {
          transform: rotatez(#{30deg * ($i - 1)});
          .text {
            transform: rotatez(#{-30deg * ($i - 1)});
          }
        }
      }
    }
  }

  &.minute {
    .tick {
      @for $i from 2 through 60 {
        &:nth-of-type(#{$i}) {
          transform: rotatez(#{6deg * ($i - 1)});
          .text {
            transform: rotatez(#{-6deg * ($i - 1)});
          }
        }
      }
    }
  }

  &:not(.disabled) {
  }

  &.disabled {
  }
}
</style>
