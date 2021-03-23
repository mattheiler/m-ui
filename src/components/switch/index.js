// export default Vue => {
//     Vue.component('mui-switch', () => import(/* webpackChunkName: "switch" */ './switch.vue'));
// };

import MuiSwitch from './switch.vue';

export default Vue => {
  Vue.component('mui-switch', MuiSwitch);
};
