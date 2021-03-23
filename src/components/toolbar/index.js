// export default Vue => {
//     Vue.component('mui-toolbar', () => import(/* webpackChunkName: "toolbar" */ './toolbar.vue'));
// };

import MuiToolbar from './toolbar.vue';

export default Vue => {
  Vue.component('mui-toolbar', MuiToolbar);
};
