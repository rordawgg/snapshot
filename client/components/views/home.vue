<style lang='scss' scoped>
	@import '../../styles/_main.scss';
</style>

<template>
	<logo-header></logo-header>
	<project-list></project-list>
</template>

<script>
	var ProjectList = require('../ProjectList.vue');
	var LogoHeader = require('../LogoHeader.vue');

	module.exports = {
		name: 'Home',

		components: {
			ProjectList,
			LogoHeader
		}
	}


</script>