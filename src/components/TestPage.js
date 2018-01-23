import Vue from 'vue';

import template from './TestPage.html'

export default Vue.extend({
  template: template,
  created: function(){
    console.log('created')
  },

  asyncComputed: {
    project() {
      return Promise.resolve().then(()=>{
        return {
          id: 1,
          title: 'title'
        }
      })
    },
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
      return this.project && this.profile;
    },
    myProject() {
      return {
        title: this.project.title
      }
    }
  }
})
