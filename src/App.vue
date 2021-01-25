<template>
    <v-app>
		<Header 
        :totalCorrectAns='totalCorrectAns'
        :index='index'/>
		<v-container>
			<v-layout>
				<QuestionBox 
                v-if="questions.length"
                :questions="questions[index]"
                :questionNumber="index"
                />
			</v-layout>
		</v-container>
    </v-app>
</template>

<script>
import Header from './components/Header';
import QuestionBox from './components/QuestionBox';
import 'es6-promise/auto'
import { mapGetters } from 'vuex'


export default {
	name: 'App',
	components: {
		Header,
		QuestionBox
	},

	data() {
        return {
            questions: [],
        }
    },

    computed: {
        ...mapGetters([
            'totalCorrectAns',
            'index'
        ]),
    },

    methods: {
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