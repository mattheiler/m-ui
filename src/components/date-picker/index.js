import MuiDatePickerTriggerFor from './date-picker-trigger-for';

// export default Vue => {
//     Vue.component('mui-date-picker', () => import(/* webpackChunkName: "date-picker" */ './date-picker.vue'));
//     Vue.component('mui-date-range-picker', () => import(/* webpackChunkName: "date-picker" */ './date-range-picker.vue'));
//     Vue.directive('date-picker-trigger-for', MuiDatePickerTriggerFor);
// };

import MuiDatePicker from './date-picker.vue';
import MuiDateRangePicker from './date-range-picker.vue';

export default Vue => {
  Vue.component('mui-date-picker', MuiDatePicker);
  Vue.component('mui-date-range-picker', MuiDateRangePicker);
  Vue.directive('date-picker-trigger-for', MuiDatePickerTriggerFor);
};
