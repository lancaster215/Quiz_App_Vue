<template>
	<v-flex xs12 sm8 offset-sm2>
		<v-card>
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
                    :disabled="this.selectedIndex === null"
				>
					Submit
				</v-btn>
				<v-btn
					color="success"
					@click="$emit('next', (isCorrect, isClickedSubmit))"
					elevation="2"
  				    raised
                    :disabled="!isClickedSubmit"
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

export default {
    name: 'QuestionBox',

    props: {
        questions: Object,
        next: Function,
        questionNumber: Number,
        increment: Function
    },
    
    data() {
        return {
            selectedIndex: null,
            shuffledAnswers: [],
            correctIndex: null,
            isCorrect: false,
            isClickedSubmit: false
        }
    },
    
    computed: {
        answers() {
            let answers = [...this.questions.incorrect_answers]
            answers.push(this.questions.correct_answer)
            return answers
        }
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
    },

    methods: {
        selectedAnswer(index){
            this.selectedIndex = index
        },
        shuffleAnswers(){
            let answers = [...this.questions.incorrect_answers, this.questions.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.questions.correct_answer)
        },
        submitAnswer() {
            this.isClickedSubmit = true;
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