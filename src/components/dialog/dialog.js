export default {
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      opened$: this.opened,
    };
  },
  methods: {
    open() {
      this.opened$ = true;
      this.$emit('opened');
    },
    close() {
      this.opened$ = false;
      this.$emit('closed');
    },
  },
  watch: {
    opened(value) {
      this.opened$ = value;
    },
    opened$(value) {
      this.$emit('update:opened', value);
    },
  },
};
