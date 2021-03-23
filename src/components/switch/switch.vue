<template>
  <label class="mui-switch" :for="id" :class="classes" @click.prevent="toggle" @keydown.space.prevent="toggle" @keypress.prevent tabindex="-1">
    <input class="mui-switch-input" type="checkbox" :id="id" :name="name" :disabled="disabled" :checked="checked" />
    <div class="mui-switch-track">
      <div class="mui-switch-handle">
        <div class="mui-switch-ring" />
        <div class="mui-switch-thumb" :tabindex="tabindex" />
      </div>
    </div>
    <span class="mui-switch-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import { uuid } from '../../utils';

export default {
  name: 'mui-switch',
  props: {
    id: {
      type: String,
      default: () => uuid(),
    },
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked$: this.checked,
    };
  },
  model: {
    prop: 'checked',
    event: 'update:checked',
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled,
        checked: this.checked$,
      };
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
  },
  methods: {
    toggle() {
      if (this.disabled) return;
      this.checked$ = !this.checked$;
    },
  },
  watch: {
    checked(value) {
      this.checked$ = value;
    },
    checked$(value) {
      this.$emit('update:checked', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';
@import 'styles/shadows';
@import 'styles/utils';

.mui-switch {
  color: var(--mui-switch-foreground, grey);
  cursor: pointer;
  height: 24px;
  outline: none;
  padding: 4px 8px 4px 12px;
  user-select: none;
  width: auto;

  @include mui-flex(row);
  @include mui-flex-align(start, center);

  .mui-switch-input {
    display: none;
    position: absolute;
  }

  .mui-switch-track {
    background-color: var(--mui-switch-track-background, lightgrey);
    border-radius: 6px;
    margin-right: 8px;
    position: relative;
    height: 12px;
    width: 32px;

    .mui-switch-handle {
      height: 20px;
      position: relative;
      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      width: 20px;

      .mui-switch-ring {
        background-color: var(--mui-switch-thumb-background, gray);
        border-radius: 50%;
        height: 40px;
        left: -14px;
        opacity: 0;
        position: absolute;
        top: -14px;
        width: 40px;
      }

      .mui-switch-thumb {
        background-color: var(--mui-switch-thumb-background, white);
        border-radius: 12px;
        cursor: grab;
        height: 100%;
        left: -4px;
        outline: none;
        position: absolute;
        top: -4px;
        width: 100%;

        @include mui-shadow(1);
      }

      &:focus-within,
      &:hover {
        .mui-switch-ring {
          opacity: 0.12;
        }
      }
    }
  }

  // enabled
  &:not(.disabled) {
    &.checked {
      .mui-switch-track {
        background-color: var(--mui-switch-checked-track-background, lightgray);

        .mui-switch-handle {
          transform: translateX(100%);

          .mui-switch-ring {
            background-color: var(--mui-switch-checked-thumb-background, buttonface);
          }

          .mui-switch-thumb {
            background-color: var(--mui-switch-checked-thumb-background, buttonface);
          }
        }
      }
    }
  }

  &.disabled {
    color: var(--mui-switch-disabled-foreground, grey);

    @include mui-disable();

    .mui-switch-track {
      background-color: var(--mui-switch-disabled-track-background, darkgrey);

      .mui-switch-thumb {
        background-color: var(--mui-switch-disabled-thumb-background, grey);
      }
    }

    &.checked {
      .mui-switch-track {
        background-color: var(--mui-switch-disabled-checked-track-background, lightgray);

        .mui-switch-handle {
          transform: translateX(100%);

          .mui-switch-thumb {
            background-color: var(--mui-switch-disabled-checked-thumb-background, buttonface);
          }
        }
      }
    }
  }
}
</style>
