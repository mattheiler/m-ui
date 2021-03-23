// export default Vue => {
//     Vue.component('mui-file-dropper', () => import(/* webpackChunkName: "file-dropper" */ './file-dropper.vue'));
// };

import MuiFileDropper from './file-dropper.vue';

export default Vue => {
  Vue.component('mui-file-dropper', MuiFileDropper);
};
