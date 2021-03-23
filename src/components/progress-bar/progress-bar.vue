<template>
  <div class="mui-progress-bar" :class="classes">
    <div class="mui-progress-bar-buffering" :style="{ width: `${100 - buffer}%` }" v-if="buffering" />
    <div class="mui-progress-bar-buffer" :style="{ width: `${buffer}%` }" />
    <div class="mui-progress-bar-value" :style="{ width: `${fill}%` }" />
  </div>
</template>

<script>
import { includes } from 'lodash';

const modes = ['determinate', 'indeterminate', 'buffer', 'query'];
const indeterminates = ['indeterminate', 'query'];

export default {
  name: 'mui-progress-bar',
  props: {
    value: {
      type: Number,
      default: 0,
      validator: value => value >= 0 && value <= 100,
    },
    buffer: {
      type: Number,
      default: 100,
      validator: value => value >= 0 && value <= 100,
    },
    mode: {
      type: String,
      default: 'determinate',
      validator: mode => includes(modes, mode),
    },
  },
  data() {
    return {};
  },
  computed: {
    buffering() {
      return this.buffer < 100;
    },
    classes() {
      return [this.mode];
    },
    fill() {
      return includes(indeterminates, this.mode) ? 100 : this.value;
    },
  },
};
</script>

<style scoped lang="scss">
$mui-transition-stand-timing: cubic-bezier(0.25, 0.8, 0.25, 1);
$mui-transition-stand-duration: 0.4s;
$mui-transition-stand: $mui-transition-stand-duration $mui-transition-stand-timing;

// extract variables

@keyframes mui-progress-bar-indeterminate-buffer {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.7, 0.5);
    transform: translateX(0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.3, 0.38, 0.55, 0.96);
    transform: translateX(83.67%);
  }
  100% {
    transform: translateX(200.61%);
  }
}

@keyframes mui-progress-bar-indeterminate-value {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.52, 0.41);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31, 0.28, 0.8, 0.73);
    transform: translateX(37.65%);
  }
  50% {
    animation-timing-function: cubic-bezier(0.4, 0.63, 0.6, 0.9);
    transform: translateX(84.39%);
  }
  100% {
    transform: translateX(160.28%);
  }
}

@keyframes mui-progress-bar-buffer {
  to {
    transform: translate3D(-12px, 0, 0);
  }
}

.mui-progress-bar {
  height: 6px;
  overflow: hidden;
  position: relative;

  .mui-progress-bar-buffering,
  .mui-progress-bar-buffer,
  .mui-progress-bar-value {
    position: absolute;
    top: 0;
  }

  .mui-progress-bar-buffering {
    border-top: 6px dotted var(--mui-progress-bar-background, lightgray);
    right: 0;
  }

  .mui-progress-bar-buffer {
    background-color: var(--mui-progress-bar-background, lightgray);
  }

  .mui-progress-bar-buffer,
  .mui-progress-bar-value {
    height: 100%;
  }

  .mui-progress-bar-value {
    background-color: var(--mui-progress-bar-foreground, gray);
  }

  &.indeterminate,
  &.query {
    .mui-progress-bar-value {
      animation: mui-progress-bar-indeterminate-buffer 2s infinite linear;
      left: -100%;
    }
  }

  &.determinate,
  &.buffer {
    .mui-progress-bar-buffering,
    .mui-progress-bar-buffer,
    .mui-progress-bar-value {
      transition: 0.25s $mui-transition-stand-timing;
    }
  }

  &.buffer {
    .mui-progress-bar-buffering {
      animation: mui-progress-bar-buffer 0.25s infinite linear;
    }
  }

  &.query {
    transform: rotateZ(180deg);
  }
}
</style>