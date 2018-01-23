import Vue from 'vue';

import template from './MainApp.html'
import router from './router'
export default Vue.extend({
  template: template,
  router,
  name: 'MainApp',
  asyncComputed: {
    profile() {
      return new Promise(function(resolve){
        setTimeout(()=>{
          console.log('resolve profile');
          resolve( {
            authenticated: false
          })
        }, 500)

      });
    }
  },
  computed: {
    ready() {
      return this.profile != null;
    }
  }
})
