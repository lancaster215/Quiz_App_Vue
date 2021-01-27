<template>
	<v-flex xs12 sm8 offset-sm2>
        <v-card v-if="viewScore">
            <v-card-title class="center">Your Score</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <h1 class="center">{{ totalCorrectAns }}</h1><br/>
                <h2 class="center">{{ this.greet }}</h2>
            </v-card-text>
        </v-card>
		<v-card v-else>
			<v-card-title>Question #{{ questionNumber+1 }}:</v-card-title> 
            <v-card-title class="center">{{ questions.question }}</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
                <v-list>
                    <v-list-item-group v-model="selectedIndex" color="primary">
                        <v-list-item
                        v-for="(answer, i) in shuffledAnswers"
                        :key="i"
                        @click="selectedAnswer(i)"
                        >
                            <v-list-item-content class="center"> 
                                <v-list-item-title v-text="answer"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
            </v-list>
            </v-card-text>
			<v-card-actions class="center">
				<v-btn
					color="primary"
					elevation="2"
  				    raised
                    @click="submitAnswer"
                    :disabled="this.selectedIndex === null || this.isClickedSubmit"
				>
					Submit
				</v-btn>
				<v-btn
					color="success"
					@click="nextPage"
					elevation="2"
  				    raised
                    :disabled="!isClickedSubmit || questionNumber >= 9"
				>
					Next
				</v-btn>
			</v-card-actions>
            <v-card-text v-if="!isCorrect && isClickedSubmit">
                <p>Correct Answer is: {{ this.questions.correct_answer }}</p>
            </v-card-text>
		</v-card>
	</v-flex>
</template>

<script>
import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'QuestionBox',

    props: {
        questions: Object,
        questionNumber: Number,
        totalCorrectAns: Number,
    },
    
    data() {
        return {
            selectedIndex: null,
            shuffledAnswers: [],
            correctIndex: null,
            isCorrect: false,
            isClickedSubmit: false,
            viewScore: false,
            greet: ''
        }
    },
    
    computed: {
        answers() {
            let answers = [...this.questions.incorrect_answers]
            answers.push(this.questions.correct_answer)
            return answers
        },
        ...mapGetters([
            'greetings'
        ])
    },

    watch: {
        questions:{
            immediate: true,
            handler() {
                this.selectedIndex = null;
                this.isCorrect = false;
                this.isClickedSubmit = false;
                this.shuffleAnswers();
            },
        },
        totalCorrectAns: {
            immediate: true,
            handler(){
                if(this.totalCorrectAns === 10){
                    this.greet = this.greetings[0].greet
                } else if(this.totalCorrectAns === 9){
                    this.greet = this.greetings[1].greet
                } else if(this.totalCorrectAns === 8){
                    this.greet = this.greetings[2].greet
                } else if(this.totalCorrectAns === 7){
                    this.greet = this.greetings[3].greet
                } else if(this.totalCorrectAns <= 6){
                    this.greet = this.greetings[4].greet
                }
            }
        }
    },

    methods: {
        ...mapActions([
            'increment',
            'next'
        ]),
        selectedAnswer(index){
            this.selectedIndex = index
        },
        shuffleAnswers(){
            let answers = [...this.questions.incorrect_answers, this.questions.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.questions.correct_answer)
        },
        nextPage(){
            this.next();
        },
        submitAnswer() {
            this.isClickedSubmit = true;
            if(this.questionNumber === 9){
                this.viewScore = true;
                // switch(this.totalCorrectAns){
                //     case this.totalCorrectAns === 10:
                //         this.greet = this.greetings[0].greet
                //         break;
                //     case this.totalCorrectAns === 9:
                //         this.greet = this.greetings[1].greet
                //         break;
                //     case this.totalCorrectAns === 8:
                //         this.greet = this.greetings[2].greet
                //         break;
                //     case this.totalCorrectAns === 7:
                //         this.greet = this.greetings[3].greet
                //         break;
                //     case this.totalCorrectAns === 6:
                //         this.greet = this.greetings[4].greet
                //         break;
                //     default:
                //         break;
                // }
                // for(var i = 0; i <= this.greetings.length(); i++){
                
                // }
            }
            if(this.selectedIndex === this.correctIndex) {
                this.isCorrect = true;
            }
            this.increment(this.isCorrect);
        }
    }
    
}
</script>

<style scoped>
/* .list-item:hover {
    background-color: #eeeeee;
    cursor: pointer
} */
.selected {
    background-color: theme;
}

.correct {
    background-color: var(--v-secondary);
}

.incorrect {
    background-color: var(--v-error);
}
</style>