import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// if(window.sessionStorage)
export default new Vuex.Store({
  state: {
    fontsize:24,
    statement:'pc',
    a:0,
    contentGo:'/content'
  },
  mutations: {
    increment(state){
      if(state.a<7){
        state.a++;
        state.fontsize++;
      } 
    },
    decrement(state){
     if(state.a>-7){
      state.a--;
      state.fontsize--;
     }
    },
    mobileSize(state,payload){
      if(payload.type=="mobile"){
        state.statement ="mobile";
        state.fontsize=18+state.a;
      }
      else{
        state.fontsize=24+state.a;
        state.statement="pc"
      }
    },
    contentChange(state,payload){
      state.contentGo = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
