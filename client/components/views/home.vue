<style lang='scss' scoped>
	@import '../../styles/_main';

	.home {
		overflow: hidden;
	}
</style>

<template>
	<div class="home">
		<logo-header></logo-header>
		<project-list></project-list>
	</div>
</template>

<script>
	var ProjectList = require('../ProjectList.vue');
	var LogoHeader = require('../LogoHeader.vue');

	module.exports = {
		name: 'Home',

		components: {
			LogoHeader,
			ProjectList
		}
	}


</script>
