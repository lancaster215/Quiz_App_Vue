export default {
  next(state){
    if(state.index <= 10){
      state.index++;
    }
  },
    
  increment(state, isCorrect) {
    if(isCorrect){
      state.totalCorrectAns++;
    }
  }
}