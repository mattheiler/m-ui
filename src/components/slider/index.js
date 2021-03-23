// export default Vue => {
//     Vue.component('mui-slider', () => import(/* webpackChunkName: "slider" */ './slider.vue'));
// };

import MuiSlider from './slider.vue';

export default Vue => {
  Vue.component('mui-slider', MuiSlider);
};
