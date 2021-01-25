import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(fab);
library.add(fas);
library.add(far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
