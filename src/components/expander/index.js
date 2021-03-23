// export default Vue => {
//     Vue.component('mui-expander', () => import(/* webpackChunkName: "expander" */ './expander.vue'));
// };

import MuiExpander from './expander.vue';

export default Vue => {
  Vue.component('mui-expander', MuiExpander);
};
