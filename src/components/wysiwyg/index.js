// export default Vue => {
//     Vue.component('mui-wysiwyg', () => import(/* webpackChunkName: "wysiwyg" */ './wysiwyg.vue'));
// };

import MuiWysiwyg from './wysiwyg.vue';

export default Vue => {
  Vue.component('mui-wysiwyg', MuiWysiwyg);
};
