// export default Vue => {
//     Vue.component('mui-drawer', () => import(/* webpackChunkName: "drawer" */ './drawer.vue'));
//     Vue.component('mui-drawer-container', () => import(/* webpackChunkName: "drawer" */ './drawer-container.vue'));
// };

import MuiDrawer from './drawer.vue';
import MuiDrawerContainer from './drawer-container.vue';

export default Vue => {
  Vue.component('mui-drawer', MuiDrawer);
  Vue.component('mui-drawer-container', MuiDrawerContainer);
};
