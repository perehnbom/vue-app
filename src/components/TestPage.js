import Vue from 'vue';

import template from './TestPage.html'

export default Vue.extend({
  template: template,

  asyncComputed: {
    project() {
      return Promise.resolve().then(()=>{
        return {
          id: 1,
          title: 'title'
        }
      })
    }
  }
})
