export default {
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      expanded$: this.expanded,
    };
  },
  methods: {
    expandedToggle() {
      this.expanded$ = !this.expanded$;
    },
  },
  watch: {
    expanded(value) {
      this.expanded$ = value;
    },
    expanded$(value) {
      this.$emit('update:expanded', value);
    },
  },
};
