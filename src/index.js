import VeeValidate from 'vee-validate';
import { VueHammer } from 'vue2-hammer';
import { install as VuePortal } from 'portal-vue';
import { directive as VueClickaway } from 'vue-clickaway';

import moment from 'moment';

import components from './components';
import directives from './directives';

export default Vue => {
  // setup hammjerjs
  Vue.use(VueHammer);
  // setup portal
  Vue.use(VuePortal);
  // setup validation
  Vue.use(VeeValidate, { events: 'blur', inject: false });
  // setup clickaway
  Vue.directive('clickaway', VueClickaway);
  // setup moment
  Vue.filter('moment', (value, format) => (value ? moment(value).format(format) : ''));
  // setup components
  Vue.use(components);
  // setup directives
  Vue.use(directives);
};
