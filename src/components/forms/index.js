// export default Vue => {
//     Vue.component('mui-form', () => import(/* webpackChunkName: "forms" */ './form.vue'));
//     Vue.component('mui-form-field', () => import(/* webpackChunkName: "forms" */ './form-field.vue'));
//     Vue.component('mui-input', () => import(/* webpackChunkName: "forms" */ './input.vue'));
//     Vue.component('mui-option', () => import(/* webpackChunkName: "forms" */ './option.vue'));
//     Vue.component('mui-select', () => import(/* webpackChunkName: "forms" */ './select.vue'));
//     Vue.component('mui-textarea', () => import(/* webpackChunkName: "forms" */ './textarea.vue'));
// };

import MuiForm from './form.vue';
import MuiFormField from './form-field.vue';
import MuiInput from './input.vue';
import MuiOption from './option.vue';
import MuiSelect from './select.vue';
import MuiTextarea from './textarea.vue';

export default Vue => {
  Vue.component('mui-form', MuiForm);
  Vue.component('mui-form-field', MuiFormField);
  Vue.component('mui-input', MuiInput);
  Vue.component('mui-option', MuiOption);
  Vue.component('mui-select', MuiSelect);
  Vue.component('mui-textarea', MuiTextarea);
};
