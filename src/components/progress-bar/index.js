// export default Vue => {
//     Vue.component('mui-progress-bar', () => import(/* webpackChunkName: "progress-bar" */ './progress-bar.vue'));
// };

import MuiProgressBar from './progress-bar.vue';

export default Vue => {
  Vue.component('mui-progress-bar', MuiProgressBar);
};
