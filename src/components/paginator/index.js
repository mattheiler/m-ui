// export default Vue => {
//     Vue.component('mui-paginator', () => import(/* webpackChunkName: "paginator" */ './paginator.vue'));
// };

import MuiPaginator from './paginator.vue';

export default Vue => {
  Vue.component('mui-paginator', MuiPaginator);
};
