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
				<h2 class="float-md-right">Counter: {{ $store.getters.totalCorrectAns }}/ {{ $store.getters.index+1 }}</h2>
			</v-col>
		</v-row>
	</v-container>
</template>