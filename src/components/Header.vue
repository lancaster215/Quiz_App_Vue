<template>
	<v-container>
		<v-row no-gutters>
			<v-col
				cols="6"
				sm="6"
			>
				<h2>Quiz ME App</h2>
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
export default {
	props: {
		totalCorrectAns: Number,
		index: Number,
	}
}
</script>