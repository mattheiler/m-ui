// export default Vue => {
//     Vue.component('mui-nav', () => import(/* webpackChunkName: "nav" */ './nav.vue'));
//     Vue.component('mui-nav-item', () => import(/* webpackChunkName: "nav" */ './nav-item.vue'));
//     Vue.component('mui-nav-item-group', () => import(/* webpackChunkName: "nav" */ './nav-item-group.vue'));
// };

import MuiNav from './nav.vue';
import MuiNavItem from './nav-item.vue';
import MuiNavItemGroup from './nav-item-group.vue';

export default Vue => {
  Vue.component('mui-nav', MuiNav);
  Vue.component('mui-nav-item', MuiNavItem);
  Vue.component('mui-nav-item-group', MuiNavItemGroup);
};
