// export default Vue => {
//     Vue.component('mui-radio', () => import(/* webpackChunkName: "radio" */ './radio.vue'));
//     Vue.component('mui-radio-group', () => import(/* webpackChunkName: "radio" */ './radio-group.vue'));
// };

import MuiRadio from './radio.vue';
import MuiRadioGroup from './radio-group.vue';

export default Vue => {
  Vue.component('mui-radio', MuiRadio);
  Vue.component('mui-radio-group', MuiRadioGroup);
};
