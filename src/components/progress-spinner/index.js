// export default Vue => {
//     Vue.component('mui-progress-spinner', () => import(/* webpackChunkName: "progress-spinner" */ './progress-spinner.vue'));
// };

import MuiProgressSpinner from './progress-spinner.vue';

export default Vue => {
  Vue.component('mui-progress-spinner', MuiProgressSpinner);
};
