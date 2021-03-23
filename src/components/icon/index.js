// export default Vue => {
//     Vue.component('mui-icon', () => import(/* webpackChunkName: "icon" */ './icon.vue'));
// };

import MuiIcon from './icon.vue';

export default Vue => {
  Vue.component('mui-icon', MuiIcon);
};
