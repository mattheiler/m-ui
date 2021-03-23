<template>
  <div class="mui-form-field" :class="classes">
    <div class="mui-form-field-superscript">
      <label class="mui-form-field-label" :for="id">
        <slot name="label">{{ label }}</slot>
      </label>
    </div>
    <div class="mui-form-field-control">
      <slot />
    </div>
    <div class="mui-form-field-subscript">
      <div class="mui-form-field-error" v-if="errored">{{ error }}</div>
      <div class="mui-form-field-hint" v-else-if="hinted">{{ hint }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mui-form-field',
  provide() {
    return {
      field: this.field,
    };
  },
  props: {
    hint: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      field: {
        disabled: false,
        errors: null,
        focused: false,
        id: null,
        name: null,
      },
    };
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled,
        focused: this.focused,
      };
    },
    disabled() {
      return this.field.disabled;
    },
    errored() {
      return this.field.errors != null && this.field.errors.has(this.field.name);
    },
    error() {
      return this.field.errors.first(this.field.name);
    },
    focused() {
      return this.field.focused;
    },
    hinted() {
      return this.hint != null;
    },
    id() {
      return this.field.id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';

.mui-form-field {
  display: block;

  .mui-form-field-superscript {
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    margin-bottom: 4px;

    .mui-form-field-label {
      color: var(--mui-form-field-foreground, gray);
    }
  }

  .mui-form-field-subscript {
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    margin-top: 4px;

    .mui-form-field-hint {
      color: var(--mui-form-field-hint-foreground, gray);
    }

    .mui-form-field-error {
      color: var(--mui-form-field-error-foreground, red);
    }
  }

  &.focused {
  }

  &.disabled {
    .mui-form-field-label {
      color: var(--mui-form-field-disabled-label, default);
    }
  }

  &.focused {
    .mui-form-field-label {
      color: var(--mui-form-field-focused-foreground, default);
    }
  }
}
</style>