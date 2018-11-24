import Vue from 'vue'
import Vuex from 'vuex'
import countModule from './modules/countModule';
Vue.use(Vuex)
const store = () => new Vuex.Store({
  modules:{
    countModule
  },
  actions:{
    nuxtServerInit({commit},{req}){
      console.log(req)
    }
  }
})
export default store

