import { includes } from 'lodash';

const directions = ['asc', 'desc'];

export default {
  props: {
    sortBy: {
      type: String,
      default: null,
    },
    sortDirection: {
      type: String,
      default: null,
      validator: direction => includes(directions, direction),
    },
  },
  methods: {
    sort(by, direction) {
      if (this.sortBy !== by) {
        this.$emit('sort', { by, direction });
      } else {
        switch (this.sortDirection) {
          case 'asc':
            this.$emit('sort', { by, direction: 'desc' });
            break;
          case 'desc':
            this.$emit('sort', { by });
            break;
          default:
            this.$emit('sort', { by, direction: 'asc' });
            break;
        }
      }
    },
  },
};
