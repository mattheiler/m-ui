// export default Vue => {
//     Vue.component('mui-list', () => import(/* webpackChunkName: "list" */ './list.vue'));
//     Vue.component('mui-list-item', () => import(/* webpackChunkName: "list" */ './list-item.vue'));
// };

import MuiList from './list.vue';
import MuiListItem from './list-item.vue';

export default Vue => {
  Vue.component('mui-list', MuiList);
  Vue.component('mui-list-item', MuiListItem);
};
