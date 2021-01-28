<template>
	<v-container>
		<v-row no-gutters>
			<v-col
				cols="2"
				sm="2"
			>
				<h2>Quiz ME App</h2>
			</v-col>
			<v-col
				cols="2"
				sm="2"
			>
				<v-btn
					color="primary"
					elevation="2"
					raised
					@click="tryagain"
					:on="on"
					:bind="attrs"
					v-if="this.viewScore"
				>
					Try Again
				</v-btn>
			</v-col>
			<v-col
				cols="2"
				sm="2"
			>
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
						color="primary"
						dark
						v-bind="attrs"
						v-on="on"
						>
						Category
						</v-btn>
					</template>
					<v-list>
						<v-list-item
						v-for="(item, index) in categories"
						:key="index"
						class="item"
						>
							<v-list-item-title @click='selectedCat(item.name)'>{{ item.name }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-col>
			<v-col
				cols="6"
				sm="6"
			>
				<h2 class="float-md-right">Counter: {{ this.totalCorrectAns }}/ {{ this.index+1 }}</h2>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	props: {
		totalCorrectAns: Number,
		index: Number,
		categories: Array,
		viewScore: Boolean
	},
	methods: {
		...mapActions([
			'selected'
		]),
		selectedCat(e){
			this.selected(e)
		},
		tryagain(){
			window.location.reload()
		}
	}
}
</script>

<style scoped>
.item{
	cursor: pointer;
}
.item:hover{
	background-color: skyblue;
}
</style>