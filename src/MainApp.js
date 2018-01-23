import Vue from 'vue';

import template from './MainApp.html'
import router from './router'
export default Vue.extend({
  template: template,
  router,
  name: 'MainApp',
  asyncComputed: {
    profile() {
      return Promise.resolve().then(()=>{
        return {
          authenticated: false
        }
      })
    }
  },
  computed: {
    ready() {
      return this.profile != null;
    }
  }
})
