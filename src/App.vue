<template>
    <v-app>
		<Header 
            :totalCorrectAns="totalCorrectAns"
            :index="index"
        />
		<v-container>
			<v-layout>
				<QuestionBox 
                v-if="questions.length"
                :questions="questions[index]"
                v-on:next="next"
                :questionNumber="index"
                :increment="increment"
                />
			</v-layout>
		</v-container>
    </v-app>
</template>

<script>
import Header from './components/Header';
import QuestionBox from './components/QuestionBox';

export default {
	name: 'App',

	components: {
		Header,
		QuestionBox
	},

	data() {
        return {
            questions: [],
            index: 0,
            totalCorrectAns: 0,
        }
    },

    methods: {
        next() {
            this.index++;
        },
        increment(isCorrect) {
            if(isCorrect){
                this.totalCorrectAns++;
            }
        }
    },
	
	mounted: function() {
		fetch('https://opentdb.com/api.php?amount=10&category=18', {
			method: 'get',
		})
		.then((res) => {
			return res.json()
		})
		.then((jsonData) => {
            this.questions = jsonData.results
		})
    }
};
</script>

<style>
.center {
    text-align: center;
    margin: 0 auto;
    justify-content: center;
}
</style>