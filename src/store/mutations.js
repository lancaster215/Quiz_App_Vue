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
  },

  final(state){
    state.viewScore = true;
  },

  selected(state, name) {
    if(name === 'Computer Science'){
      fetch('https://opentdb.com/api.php?amount=10&category=18', {
        method: 'get',
      })
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        state.questions = jsonData.results
      })
    } else if(name === 'Sports'){
      fetch('https://opentdb.com/api.php?amount=10&category=21', {
        method: 'get',
      })
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        state.questions = jsonData.results
      })
    } else if(name === 'Geography'){
      fetch('https://opentdb.com/api.php?amount=10&category=22', {
        method: 'get',
      })
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        state.questions = jsonData.results
      })
    } else if(name === 'Animals'){
      fetch('https://opentdb.com/api.php?amount=10&category=27', {
        method: 'get',
      })
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        state.questions = jsonData.results
      })
    } else if(name === 'Science and Nature'){
      fetch('https://opentdb.com/api.php?amount=10&category=17', {
        method: 'get',
      })
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        state.questions = jsonData.results
      })
    }
  }
}