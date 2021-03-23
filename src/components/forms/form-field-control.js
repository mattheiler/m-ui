import { uuid } from '../../utils';

export default {
  inject: {
    field: { default: {} },
    $validator: {},
  },
  model: {
    prop: 'value',
    event: 'update:value',
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: () => uuid(),
    },
    name: {
      type: String,
      default: () => uuid(),
    },
    placeholder: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    value: null,
  },
  data() {
    return {
      value$: this.value,
      focused: this.focused,
    };
  },
  computed: {
    attributes() {
      return {
        ...this.$attrs,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        placeholder: this.placeholder,
        readonly: this.readonly,
      };
    },
    classes() {
      return {
        disabled: this.disabled,
        focused: this.focused,
        readonly: this.readonly,
      };
    },
  },
  watch: {
    value(value) {
      this.value$ = value;
    },
    value$(value) {
      this.$emit('update:value', value);
    },
    disabled(value) {
      this.field.disabled = value;
    },
    focused(value) {
      this.field.focused = value;
    },
    id(value) {
      this.field.id = value;
    },
    errors(value) {
      this.field.errors = value;
    },
    name(value) {
      this.field.name = value;
    },
  },
  methods: {
    blur() {
      this.focused = false;
    },
    focus() {
      this.focused = true;
    },
  },
  created() {
    this.field.disabled = this.disabled;
    this.field.focused = this.focused;
    this.field.id = this.id;
    this.field.errors = this.errors;
    this.field.name = this.name;
  },
};
