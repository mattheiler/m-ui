<template>
  <label class="mui-checkbox" :for="id" :class="classes" @click.prevent="toggle" @keydown.space.prevent="toggle" @keypress.prevent tabindex="-1">
    <span class="mui-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
    <input class="mui-checkbox-input" type="checkbox" :id="id" :name="name" :disabled="disabled" v-model="checked$" />
    <div class="mui-checkbox-form" :tabindex="tabindex">
      <div class="mui-checkbox-ring" />
      <div class="mui-checkbox-mark">
        <mui-icon name="check" v-if="checked$" />
        <mui-icon name="minus" v-else-if="indeterminate" />
      </div>
    </div>
  </label>
</template>

<script>
import { uuid } from '../../utils';

export default {
  name: 'mui-checkbox',
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
        marked: this.checked$ || this.indeterminate,
        disabled: this.disabled,
        indeterminate: this.indeterminate,
      };
    },
    indeterminate() {
      return this.checked$ == null;
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

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/shadows';
@import 'styles/utils';

.mui-checkbox {
  color: var(--mui-checkbox-foreground, default);
  cursor: pointer;
  display: block;
  height: 32px;
  line-height: 32px;
  outline: none;
  padding-left: 32px;
  position: relative;
  user-select: none;

  .mui-checkbox-input {
    display: none;
    position: absolute;
  }

  .mui-checkbox-form {
    .mui-checkbox-ring {
      background-color: var(--mui-checkbox-marked-background, buttonface);
      border-radius: 50%;
      height: 40px;
      left: -4px;
      opacity: 0;
      position: absolute;
      top: -4px;
      width: 40px;
    }

    .mui-checkbox-mark {
      border-color: var(--mui-checkbox-background, buttonface);
      border-style: solid;
      border-width: 2px;
      border-radius: 4px;
      box-sizing: border-box;
      height: 18px;
      left: 7px;
      position: absolute;
      top: 7px;
      width: 18px;

      @include mui-flex(row, inline);
      @include mui-flex-align(center, center);
    }
  }

  // enabled
  &:not(.disabled) {
    .mui-checkbox-form {
      &:focus-within,
      &:hover {
        .mui-checkbox-ring {
          opacity: 0.12;
        }
      }
    }

    &.marked {
      .mui-checkbox-form {
        .mui-checkbox-mark {
          background-color: var(--mui-checkbox-marked-background, buttonface);
          border-color: var(--mui-checkbox-marked-background, buttonface);
          color: var(--mui-checkbox-marked-foreground, buttontext);
          fill: var(--mui-checkbox-marked-foreground, buttontext);
        }
      }
    }
  }

  &.disabled {
    color: var(--mui-checkbox-disabled-foreground, grey);

    @include mui-disable();

    .mui-checkbox-form {
      .mui-checkbox-mark {
        border-color: var(--mui-checkbox-disabled-background, lightgrey);
        color: var(--mui-checkbox-disabled-foreground, grey);
        fill: var(--mui-checkbox-disabled-foreground, grey);
      }
    }

    &.marked {
      .mui-checkbox-form {
        .mui-checkbox-mark {
          background-color: var(--mui-checkbox-disabled-marked-background, buttonface);
          border-color: var(--mui-checkbox-disabled-marked-background, buttonface);
          color: var(--mui-checkbox-disabled-marked-foreground, buttontext);
          fill: var(--mui-checkbox-disabled-marked-foreground, buttontext);
        }
      }
    }
  }
}
</style>