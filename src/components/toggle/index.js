// export default Vue => {
//     Vue.component('mui-toggle', () => import(/* webpackChunkName: "toggle" */ './toggle.vue'));
//     Vue.component('mui-toggle-group', () => import(/* webpackChunkName: "toggle" */ './toggle-group.vue'));
// };

import MuiToggle from './toggle.vue';
import MuiToggleGroup from './toggle-group.vue';

export default Vue => {
  Vue.component('mui-toggle', MuiToggle);
  Vue.component('mui-toggle-group', MuiToggleGroup);
};
