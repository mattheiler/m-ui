import { Toaster } from './toaster';

// export default Vue => {
//     Vue.component('mui-toast', () => import(/* webpackChunkName: "toast" */ './toast.vue'));
//     Vue.component('mui-toaster', () => import(/* webpackChunkName: "toast" */ './toaster.vue'));
// };

import MuiToast from './toast.vue';
import MuiToaster from './toaster.vue';

export default Vue => {
  Vue.component('mui-toast', MuiToast);
  Vue.component('mui-toaster', MuiToaster);
};

export { Toaster };
