// export default Vue => {
//     Vue.component('mui-button', () => import(/* webpackChunkName: "button" */ './button.vue'));
// };

import MuiButton from './button.vue';

export default Vue => {
  Vue.component('mui-button', MuiButton);
};
