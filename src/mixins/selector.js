export default {
  data() {
    return {
      selection: {
        items: [],
        mode: 'multiple',
      },
    };
  },
  provide() {
    return {
      selection: this.selection,
    };
  },
  methods: {
    select(items) {
      this.selection.items = items;
    },
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    'selection.items'(value) {
      this.$emit('selected', value);
    },
  },
};
