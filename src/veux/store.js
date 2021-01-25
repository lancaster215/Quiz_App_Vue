import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    totalCorrectAns: 0,
    isCorrect: false,
    index: 0
  },
  mutations: {
    next(state){
      state.index++;
    },
    
    increment(state, isCorrect) {
      if(isCorrect){
          state.totalCorrectAns++;
      }
    }
  },
  getters: {
    totalCorrectAns: state => state.totalCorrectAns,
    index: state => state.index
  }
})