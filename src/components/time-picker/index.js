import MuiTimePickerTriggerFor from './time-picker-trigger-for';

// export default Vue => {
//     Vue.component('mui-time-picker', () => import(/* webpackChunkName: "time-picker" */ './time-picker.vue'));
//     Vue.directive('time-picker-trigger-for', MuiTimePickerTriggerFor);
// };

import MuiTimePicker from './time-picker.vue';

export default Vue => {
  Vue.component('mui-time-picker', MuiTimePicker);
  Vue.directive('time-picker-trigger-for', MuiTimePickerTriggerFor);
};
