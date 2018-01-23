// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'

import MainApp from './MainApp'

Vue.config.productionTip = false
Vue.use(AsyncComputed);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { MainApp: MainApp},
  template: '<MainApp/>'
})
