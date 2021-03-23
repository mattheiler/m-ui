<template>
  <th class="mui-table-col" :class="{ disabled, shrink, sortable }" @click="sort(name)">
    <div class="mui-table-col-content">
      <div class="mui-table-col-text">
        <slot name="head" />
      </div>
      <div class="mui-table-col-sort" v-if="active">
        <mui-icon v-if="asc" name="chevron-up" />
        <mui-icon v-else-if="desc" name="chevron-down" />
      </div>
    </div>
    <portal :to="id">
      <template slot-scope="{ index, row, data }">
        <slot name="cell" :index="index" :row="row" :data="data">{{ data }}</slot>
      </template>
    </portal>
  </th>
</template>

<script>
import { uuid } from '../../utils';

export default {
  name: 'mui-table-col',
  inject: ['table'],
  props: {
    id: {
      type: String,
      default: () => uuid(),
    },
    name: {
      type: String,
      required: true,
    },
    shrink: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: null,
    },
  },
  computed: {
    asc() {
      return this.table.sortDirection === 'asc';
    },
    desc() {
      return this.table.sortDirection === 'desc';
    },
    active() {
      return this.sortable && this.table.sortBy === this.name;
    },
  },
  methods: {
    sort() {
      if (this.sortable && !this.disabled) {
        this.table.sort(this.name);
      }
    },
  },
  // hooks
  created() {
    const { cols } = this.table;
    cols.push(this);
  },
  destroyed() {
    const { cols } = this.table;
    const index = cols.indexOf(this);
    if (index >= 0) {
      cols.splice(index, 1);
    }
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';

.mui-table-col {
  border-bottom: 2px solid lightgray;
  box-sizing: border-box;
  padding: 4px;
  user-select: none;

  &.shrink {
    width: 1%;
  }

  &.sortable {
    cursor: pointer;
  }

  .mui-table-col-content {
    position: relative;

    @include mui-flex();
    @include mui-flex-align(space-between, center);

    // .mui-table-col-text {
    // }
    .mui-table-col-sort {
      position: absolute;
      right: 0;
    }
  }
}
</style>