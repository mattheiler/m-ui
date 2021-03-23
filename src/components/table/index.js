// export default Vue => {
//     Vue.component('mui-table', () => import(/* webpackChunkName: "table" */ './table.vue'));
//     Vue.component('mui-table-col', () => import(/* webpackChunkName: "table" */ './table-col.vue'));
// };

import MuiTable from './table.vue';
import MuiTableCol from './table-col.vue';
import MuiTableRow from './table-row.vue';

export default Vue => {
  Vue.component('mui-table', MuiTable);
  Vue.component('mui-table-col', MuiTableCol);
  Vue.component('mui-table-row', MuiTableRow);
};
