// export default Vue => {
//     Vue.component('mui-tab', () => import(/* webpackChunkName: "tabs" */ './tab.vue'));
//     Vue.component('mui-tab-group', () => import(/* webpackChunkName: "tabs" */ './tab-group.vue'));
// };

import MuiTab from './tab.vue';
import MuiTabGroup from './tab-group.vue';

export default Vue => {
  Vue.component('mui-tab', MuiTab);
  Vue.component('mui-tab-group', MuiTabGroup);
};
