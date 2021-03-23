<template>
  <div class="mui-progress-spinner" :class="classes">
    <svg preserveAspectRatio="xMidYMid meet" focusable="false" :viewBox="`0 0 ${diameter} ${diameter}`" :height="diameter" :width="diameter">
      <circle cx="50%" cy="50%" :r="radius" :style="styles" ref="circle"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'mui-progress-spinner',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    diameter: {
      type: Number,
      default: 60,
    },
    stroke: {
      type: Number,
      default: 6,
    },
    mode: {
      type: String,
      default: 'determinate',
    },
  },
  computed: {
    classes() {
      return [this.mode];
    },
    styles() {
      return {
        'stroke-dasharray': `${this.circumference}px`,
        'stroke-dashoffset': this.mode === 'determinate' ? `${(this.circumference * (100 - this.value)) / 100}px` : null,
        'stroke-width': `${this.stroke}px`,
      };
    },
    radius() {
      return (this.diameter - this.stroke) / 2;
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
  },
  watch: {
    circumference() {
      this.reset();
    },
  },
  methods: {
    reset() {
      const { circle } = this.$refs;
      circle.style.setProperty('--mui-progress-spinner-start', 0.95 * this.circumference);
      circle.style.setProperty('--mui-progress-spinner-end', 0.2 * this.circumference);
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style scoped lang="scss">
$ease-in-out-curve-function: cubic-bezier(0.35, 0, 0.25, 1) !default;

// $swift-ease-out-duration: 400ms !default;
// $swift-ease-out-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !default;
// $swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;

// $swift-ease-in-duration: 300ms !default;
// $swift-ease-in-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2) !default;
// $swift-ease-in: all $swift-ease-in-duration $swift-ease-in-timing-function !default;

$swift-ease-in-out-duration: 500ms !default;
$swift-ease-in-out-timing-function: $ease-in-out-curve-function !default;
$swift-ease-in-out: all $swift-ease-in-out-duration $swift-ease-in-out-timing-function !default;

// $swift-linear-duration: 80ms !default;
// $swift-linear-timing-function: linear !default;
// $swift-linear: all $swift-linear-duration $swift-linear-timing-function !default;

// extract the variables

@keyframes mui-progress-spinner-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes mui-progress-spinner-circle-rotate {
  0% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotate(0);
  }
  12.5% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotate(0);
  }
  12.5001% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotateX(180deg) rotate(72.5deg);
  }
  25% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotateX(180deg) rotate(72.5deg);
  }
  25.0001% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotate(270deg);
  }
  37.5% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotate(270deg);
  }
  37.5001% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotateX(180deg) rotate(161.5deg);
  }
  50% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotateX(180deg) rotate(161.5deg);
  }
  50.0001% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotate(180deg);
  }
  62.5% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotate(180deg);
  }
  62.5001% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotateX(180deg) rotate(251.5deg);
  }
  75% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotateX(180deg) rotate(251.5deg);
  }
  75.0001% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotate(90deg);
  }
  87.5% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotate(90deg);
  }
  87.5001% {
    stroke-dashoffset: var(--mui-progress-spinner-end);
    transform: rotateX(180deg) rotate(341.5deg);
  }
  100% {
    stroke-dashoffset: var(--mui-progress-spinner-start);
    transform: rotateX(180deg) rotate(341.5deg);
  }
}

.mui-progress-spinner {
  display: inline-flex;

  svg {
    overflow: visible;
    transform: rotate(-90deg);
    transform-origin: center;

    circle {
      fill: none;
      stroke: var(--mui-progress-spinner-foreground, gray);
      transform-origin: center;
      transition: stroke-dashoffset 225ms linear;
    }
  }

  &.indeterminate {
    animation: mui-progress-spinner-rotate $swift-ease-in-out-duration * 4 linear infinite;

    circle {
      animation: mui-progress-spinner-circle-rotate $swift-ease-in-out-duration * 8 $ease-in-out-curve-function 0s infinite;
    }
  }
}
</style>