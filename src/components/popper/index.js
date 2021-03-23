import { MuiPopper as Popper } from './popper';
import { MuiPopperTrigger } from './popper-trigger';

// export default Vue => {
//     Vue.directive('popper-trigger', MuiPopperTrigger);
//     Vue.component('mui-popper', () => import(/* webpackChunkName: "popper" */ './popper.vue'));
// };

import MuiPopper from './popper.vue';

export default Vue => {
  Vue.directive('popper-trigger', MuiPopperTrigger);
  Vue.component('mui-popper', MuiPopper);
};

export { Popper as MuiPopper, MuiPopperTrigger };
