export default {
  next(state){
    state.index++;
  },
    
  increment(state, isCorrect) {
    if(isCorrect){
      state.totalCorrectAns++;
    }
  }
}