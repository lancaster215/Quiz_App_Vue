export default {
    totalCorrectAns: 0,
    isCorrect: false,
    index: 0,
    greetings: [
        {id: 1, greet: 'Wow! You got a perfect score! That is genius.'},
        {id: 2, greet: 'Still wow! You only got 1 mistake.'},
        {id: 3, greet: 'Not bad. Next time you will get a perfect score.'},
        {id: 4, greet: 'Try again next time.'},
        {id: 5, greet: 'Sorry, you got a failed score'}
    ],
    categories: [
        {id: 1, name: 'Computer Science'}, 
        {id: 2, name: 'Sports'}, 
        {id: 3, name: 'Geography'},
        {id: 4, name: 'Animals'},
        {id: 5, name: 'Science and Nature'}
    ],
    questions: [],
    viewScore: false,
}