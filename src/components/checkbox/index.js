// export default Vue => {
//     Vue.component('mui-checkbox', () => import(/* webpackChunkName: "checkbox" */ './checkbox.vue'));
// };

import MuiCheckbox from './checkbox.vue';

export default Vue => {
  Vue.component('mui-checkbox', MuiCheckbox);
};
