import MuiMenuTrigger from './menu-trigger-for';

// export default Vue => {
//     Vue.component('mui-menu', () => import(/* webpackChunkName: "menu" */ './menu.vue'));
//     Vue.component('mui-menu-item', () => import(/* webpackChunkName: "menu" */ './menu-item.vue'));
//     Vue.directive('menu-trigger-for', MuiMenuTrigger);
// };

import MuiMenu from './menu.vue';
import MuiMenuItem from './menu-item.vue';

export default Vue => {
  Vue.component('mui-menu', MuiMenu);
  Vue.component('mui-menu-item', MuiMenuItem);
  Vue.directive('menu-trigger-for', MuiMenuTrigger);
};
