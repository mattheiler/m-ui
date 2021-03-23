<template>
  <table class="mui-table" :class="{ expandable, selectable, sortable }">
    <thead>
      <tr>
        <mui-table-col name="expander" v-if="expandable" shrink>
          <template slot="cell" slot-scope="{ row }">
            <mui-button kind="icon" @click="row.expandedToggle">
              <mui-icon v-if="row.expanded$" name="chevron-up" />
              <mui-icon v-else name="chevron-down" />
            </mui-button>
          </template>
        </mui-table-col>
        <mui-table-col name="selector" v-if="selectable" shrink>
          <template slot="head">
            <mui-checkbox :checked="allSelected" @update:checked="allSelect" />
          </template>
          <template slot="cell" slot-scope="{ row }">
            <mui-checkbox v-model="row.selected" />
          </template>
        </mui-table-col>
        <slot name="cols" />
      </tr>
    </thead>
    <slot>
      <mui-table-row v-for="(data, index) in dataSource" :data="data" :key="getKey(data, index)" />
    </slot>
    <portal :to="id">
      <template slot-scope="{ index, row, data }">
        <slot name="info" :index="index" :row="row" :data="data">{{ data }}</slot>
      </template>
    </portal>
  </table>
</template>

<script>
import { some } from 'lodash';

import { uuid } from '../../utils';

import selector from '../../mixins/selector';
import sortable from '../../mixins/sortable';

export default {
  name: 'mui-table',
  mixins: [selector, sortable],
  props: {
    id: {
      type: String,
      default: () => uuid(),
    },
    dataKey: {
      type: String,
      default: null,
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    expandable: {
      type: Boolean,
      default: false,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    allSelected() {
      const count = this.selection.items.length;
      const total = this.rows.length;
      return count > 0 && count < total ? null : total > 0 && count === total;
    },
    sortable() {
      return some(this.cols, col => col.sortable);
    },
  },
  data() {
    return {
      cols: [],
      rows: [],
    };
  },
  provide() {
    return {
      table: this,
    };
  },
  methods: {
    getKey(data, index) {
      if (data == null) return null;
      return this.dataKey != null ? data[this.dataKey] : index;
    },
    allSelect(value) {
      switch (value) {
        case true:
          this.select(this.rows.slice());
          break;
        case false:
          this.select([]);
          break;
        default:
          break; // null
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mui-table {
  border-collapse: collapse;
  width: 100%;
}
</style>