<template>
  <label class="mui-radio" :for="id" :class="classes" @click.prevent="select" @keydown.space.prevent="select" @keypress.prevent tabindex="-1">
    <span class="mui-radio-label">
      <slot>{{ label }}</slot>
    </span>
    <input class="mui-radio-input" type="radio" :id="id" :name="$parent.name" :value="value" :disabled="disabled" v-model="$parent.value$" />
    <div class="mui-radio-form" :tabindex="tabindex">
      <div class="mui-radio-ring" />
      <div class="mui-radio-mark">
        <div class="mui-radio-mark-notch" v-if="checked" />
      </div>
    </div>
  </label>
</template>

<script>
import { uuid } from '../../utils';

export default {
  name: 'mui-radio',
  props: {
    id: {
      type: String,
      default: () => uuid(),
    },
    label: {
      type: String,
    },
    value: {
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked() {
      return this.value === this.$parent.value$;
    },
    classes() {
      return {
        marked: this.checked,
        disabled: this.disabled,
      };
    },
    tabindex() {
      return this.disabled ? -1 : 0;
    },
  },
  methods: {
    select() {
      if (this.disabled) return;
      this.$parent.value$ = this.value;
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/utils';

.mui-radio {
  cursor: pointer;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  outline: none;
  padding-left: 32px;
  position: relative;
  user-select: none;

  .mui-radio-input {
    display: none;
    position: absolute;
  }

  .mui-radio-form {
    .mui-radio-ring {
      background-color: var(--mui-checkbox-marked-background, buttonface);
      border-radius: 50%;
      height: 40px;
      left: -4px;
      opacity: 0;
      position: absolute;
      top: -4px;
      width: 40px;
    }

    .mui-radio-mark {
      border-color: var(--mui-radio-background, black);
      border-style: solid;
      border-width: 2px;
      border-radius: 50%;
      box-sizing: border-box;
      height: 18px;
      left: 7px;
      position: absolute;
      top: 7px;
      width: 18px;

      @include mui-flex();
      @include mui-flex-align(center, center);

      .mui-radio-mark-notch {
        border-radius: 50%;
        height: 8px;
        width: 8px;
      }
    }
  }

  // enabled
  &:not(.disabled) {
    .mui-radio-form {
      &:focus-within,
      &:hover {
        .mui-radio-ring {
          opacity: 0.12;
        }
      }
    }

    &.marked {
      .mui-radio-form {
        .mui-radio-mark {
          border-color: var(--mui-radio-marked-background, black);

          .mui-radio-mark-notch {
            background-color: var(--mui-radio-marked-background, black);
          }
        }
      }
    }
  }

  &.disabled {
    color: var(--mui-radio-disabled-background, lightgray);

    @include mui-disable();

    .mui-radio-form {
      .mui-radio-mark {
        border-color: var(--mui-radio-disabled-background, lightgray);

        .mui-radio-mark-notch {
          background-color: var(--mui-radio-disabled-background, lightgray);
        }
      }
    }

    &.marked {
      .mui-radio-form {
        .mui-radio-mark {
          border-color: var(--mui-radio-disabled-marked-background, grey);

          .mui-radio-mark-notch {
            background-color: var(--mui-radio-disabled-marked-background, grey);
          }
        }
      }
    }
  }
}
</style>