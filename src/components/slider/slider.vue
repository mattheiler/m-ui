<template>
  <div class="mui-slider" :class="classes" role="slider" @mousedown="mousedown" @mouseup="snap" v-hammer:pan="pan" v-hammer:panend="snap">
    <div class="mui-slider-track" />
    <div class="mui-slider-value" :style="{ width: `${progress}%` }">
      <div class="mui-slider-handle" :tabindex="tabindex" @keydown.left.prevent="decrease" @keydown.right.prevent="increase">
        <div class="mui-slider-ring" />
        <svg class="mui-slider-thumb" width="16" height="16">
          <circle cx="8" cy="8" r="8"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { clamp } from 'lodash';

export default {
  name: 'mui-slider',
  props: {
    digits: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      value$: this.value,
    };
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled,
      };
    },
    progress() {
      return ((this.value$ - this.min) / (this.max - this.min)) * 100;
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
  },
  methods: {
    adjust(value) {
      return Number(clamp(Math.round((value - this.min) / this.step) * this.step, this.min, this.max).toFixed(this.digits));
    },
    decrease() {
      this.value$ = this.adjust(this.value$ - this.step);
    },
    increase() {
      this.value$ = this.adjust(this.value$ + this.step);
    },
    mousedown(e) {
      this.move(e.clientX);
    },
    move(x) {
      if (!this.disabled) this.value$ = clamp(((x - this.$el.getBoundingClientRect().x) / this.$el.clientWidth) * 100, this.min, this.max);
    },
    pan(e) {
      this.move(e.center.x);
    },
    snap() {
      this.$emit('change', (this.value$ = this.adjust(this.value$)));
    },
  },
  watch: {
    mode() {
      this.snap();
    },
    step() {
      this.snap();
    },
    digits() {
      this.snap();
    },
    value(value) {
      this.value$ = value;
      this.snap();
    },
  },
};
</script>

<style lang="scss" scoped>
.mui-slider {
  height: 16px;
  margin: 0 8px;
  outline: none;
  position: relative;

  .mui-slider-track {
    background-color: var(--mui-slider-track-background, lightgrey);
    height: 2px;
    top: 7px;
    margin: 7px 0;
    position: relative;
  }

  .mui-slider-value {
    background-color: var(--mui-slider-value-background, gray);
    height: 2px;
    position: absolute;
    top: 7px;

    .mui-slider-handle {
      cursor: pointer;
      height: auto;
      outline: none;
      position: absolute;
      top: -7px;
      right: -8px;

      .mui-slider-ring {
        background-color: var(--mui-slider-thumb-background, gray);
        border-radius: 50%;
        height: 32px;
        left: -8px;
        opacity: 0;
        position: absolute;
        top: -8px;
        width: 32px;
      }

      .mui-slider-thumb {
        color: var(--mui-slider-thumb-foreground, white);
        fill: var(--mui-slider-thumb-background, gray);
      }

      &:focus,
      &:hover {
        .mui-slider-ring {
          opacity: 0.12;
        }
      }
    }
  }
}
</style>
