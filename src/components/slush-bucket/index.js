// export default Vue => {
//     Vue.component('mui-slush-bucket', () => import(/* webpackChunkName: "slush-bucket" */ './slush-bucket.vue'));
// };

import MuiSlushBucket from './slush-bucket.vue';

export default Vue => {
  Vue.component('mui-slush-bucket', MuiSlushBucket);
};
