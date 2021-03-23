// export default Vue => {
//     Vue.component('mui-tooltip', () => import(/* webpackChunkName: "tooltip" */ './tooltip.vue'));
// };

import MuiTooltip from './tooltip.vue';

export default Vue => {
  Vue.component('mui-tooltip', MuiTooltip);
};
