import Vue from 'vue';

import Mui from '../src';

import App from './app.vue';
import router from './router';
import store from './store';
import examples from './examples';
import { Toaster } from '../src/components/toast';

Vue.use(Mui);

Object.keys(examples).forEach(key => Vue.component(key, examples[key]));

new Vue({
  router,
  store,
  render: h => h(App),
  provide: {
    toaster: new Toaster(),
  },
}).$mount('#app');
