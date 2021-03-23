<template>
  <tbody class="mui-table-row">
    <tr class="mui-table-row-header">
      <td class="mui-table-cell" v-for="col in table.cols" :key="col.id">
        <portal-target :name="col.id" :slot-props="{ index, row, data }" />
      </td>
    </tr>
    <tr class="mui-table-row-content" v-if="expanded$">
      <td class="mui-table-cell" :colspan="table.cols.length">
        <portal-target :name="table.id" :slot-props="{ index, row, data }" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import { uuid } from '../../utils';

import expandable from '../../mixins/expandable';
import selectable from '../../mixins/selectable';

export default {
  name: 'mui-table-row',
  mixins: [expandable, selectable],
  inject: ['table'],
  props: {
    id: {
      type: String,
      default: () => uuid(),
    },
    data: null,
  },
  computed: {
    index() {
      return this.table.rows.indexOf(this);
    },
    row() {
      return this;
    },
  },
  created() {
    this.table.rows.push(this);
  },
  destroyed() {
    const { rows } = this.table;
    const { index } = this;
    if (index >= 0) {
      rows.splice(index, 1);
    }
  },
};
</script>

<style lang="scss" scoped>
.mui-table-row {
  border-bottom: 1px solid var(--mui-table-row-border-color, lightgray);

  &:nth-child(even) {
    background: var(--mui-table-row-background, #eee);
  }

  .mui-table-cell {
    padding: 4px;
    line-height: 32px;
    min-height: 32px;
  }
}
</style>