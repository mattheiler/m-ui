// export default Vue => {
//     Vue.component('mui-back-to-top', () => import(/* webpackChunkName: "back-to-top" */ './back-to-top.vue'));
// };

import MuiBackToTop from './back-to-top.vue';

export default Vue => {
  Vue.component('mui-back-to-top',MuiBackToTop);
};
