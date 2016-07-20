<style lang='scss' scoped>
	@import '../../styles/_main';

	.home {
		overflow: hidden;
	}
</style>

<template>
	<div class="home">
		<logo-header
			:header='header'
			:sections='sections'
		></logo-header>
		
		<project-list
			:projects='projects'
		></project-list>
	</div>
</template>

<script>
	var ProjectList = require('../ProjectList.vue');
	var LogoHeader = require('../LogoHeader.vue');

	module.exports = {
		name: 'Home',

		props: [
			'title',
			'header',
			'sections',
			'projects'
		],

		ready() {
			this.$dispatch('openContactOpen')
		},

		components: {
			LogoHeader,
			ProjectList
		}
	}


</script>
