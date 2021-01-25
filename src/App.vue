<template>
    <v-app>
		<Header/>
		<v-container>
			<v-layout>
				<QuestionBox 
                v-if="questions.length"
                :questions="questions[$store.getters.index]"
                v-on:next="next"
                :questionNumber="$store.getters.index"
                
                />
                <!-- :increment="increment" -->
			</v-layout>
		</v-container>
    </v-app>
</template>

<script>
import Header from './components/Header';
import QuestionBox from './components/QuestionBox';
import 'es6-promise/auto'

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

    methods: {
        next() {
            this.$store.commit('next')
        },
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