<style lang='scss' scoped>
	@import '../../styles/_main';

	#project {
		@include make-container();
		color: white;
	}
</style>

<template>
	<div id='project'>
		<project-header
			:name='name'
			:hero='hero'
		></project-header>
	</div>
</template>

<script>
	var ProjectHeader = require('../ProjectHeader.vue');

	module.exports = {
		name: 'Project',

		components: {
			ProjectHeader
		},

	data() {
		return {
			name: 'Sunday Afternoons',
			path: '/img/sunday_afternoons.png',
			color: 'rgb(162, 168, 170)',
			hero: '/img/sunday-afternoons-hero.png'
		}
	},

	ready() {
		this.$dispatch('color', '#fff');
	}
}
</script>
