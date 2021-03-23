// export default Vue => {
//     Vue.component('mui-dialog', () => import(/* webpackChunkName: "dialog" */ './dialog.vue'));
//     Vue.component('mui-dialog-header', () => import(/* webpackChunkName: "dialog" */ './dialog-header.vue'));
//     Vue.component('mui-dialog-content', () => import(/* webpackChunkName: "dialog" */ './dialog-content.vue'));
//     Vue.component('mui-dialog-footer', () => import(/* webpackChunkName: "dialog" */ './dialog-footer.vue'));
// };

import MuiDialog from './dialog.vue';
import MuiDialogHeader from './dialog-header.vue';
import MuiDialogContent from './dialog-content.vue';
import MuiDialogFooter from './dialog-footer.vue';

export default Vue => {
  Vue.component('mui-dialog', MuiDialog);
  Vue.component('mui-dialog-header', MuiDialogHeader);
  Vue.component('mui-dialog-content', MuiDialogContent);
  Vue.component('mui-dialog-footer', MuiDialogFooter);
};
