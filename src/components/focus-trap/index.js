// export default Vue => {
//     Vue.component('mui-focus-trap', () => import(/* webpackChunkName: "focus-trap" */ './focus-trap.vue'));
// };

import MuiFocusTrap from './focus-trap.vue';

export default Vue => {
  Vue.component('mui-focus-trap', MuiFocusTrap);
};
