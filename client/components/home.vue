<template>
	<h1 v-on:click="handleClick()">{{ message }}! This is not home!!!!</h1>
	<test></test>
</template>

<script>
	var Test = require("./test.vue");

	module.exports = {
		components: {
			Test
		},

		data() {
			return {
				"message": "Hey"
			}
		},

		methods: {
			handleClick() {
				console.log("You clicked me!!!!");
			}
		}
	}
</script>