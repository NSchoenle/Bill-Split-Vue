import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store.js'

// register a global currency filter
Vue.filter('currency', function(value){
  return value.toFixed(2);
});


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
