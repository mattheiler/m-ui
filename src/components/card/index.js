// export default Vue => {
//     Vue.component('mui-card', () => import(/* webpackChunkName: "card" */ './card.vue'));
// };

import MuiCard from './card.vue';

export default Vue => {
  Vue.component('mui-card', MuiCard);
};
