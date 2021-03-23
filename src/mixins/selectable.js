import { includes, isEqual } from 'lodash';

export default {
  inject: ['selection'],
  computed: {
    selected: {
      get() {
        const { items } = this.selection;
        return includes(items, this);
      },
      set(value) {
        if (isEqual(this.selected, value)) {
          return;
        }
        const { items, mode } = this.selection;
        if (value) {
          if (mode === 'multiple') {
            items.push(this);
          } else {
            items.splice(0, 1, this);
          }
        } else {
          const index = items.indexOf(this);
          if (index >= 0) {
            items.splice(index, 1);
          }
        }
      },
    },
  },
  destroyed() {
    const { items } = this.selection;
    const index = items.indexOf(this);
    if (index >= 0) {
      items.splice(index, 1);
    }
  },
};
