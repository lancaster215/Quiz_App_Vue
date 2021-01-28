<template>
    <v-app>
		<Header 
        :totalCorrectAns='totalCorrectAns'
        :index='index'
        :categories='categories'
        :viewScore='viewScore'
        />
		<v-container>
			<v-layout>
				<QuestionBox 
                v-if="questions.length"
                :questions="questions[index]"
                :questionNumber="index"
                :totalCorrectAns='totalCorrectAns'
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

    computed: {
        ...mapGetters([
            'totalCorrectAns',
            'index',
            'categories',
            'questions',
            'viewScore'
        ]),
    },
};
</script>

<style>
.center {
    text-align: center;
    margin: 0 auto;
    justify-content: center;
}
</style>