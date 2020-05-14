import Vue from 'vue'
import Vuex from 'vuex'
import bill from './bill.js'
import routing from './routing.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    bill,
    routing
  }
});