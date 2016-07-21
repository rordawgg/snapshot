<style lang='scss' scoped>
	@import '../../styles/_main';

	.home {
		overflow: hidden;
	}
</style>

<template>
	<div class="home">
		<logo-header
			:header='data.header'
			:sections='data.sections'
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

		// props: [
		// 	'title',
		// 	'header',
		// 	'sections',
		// 	'projects'
		// ],

		data() {
			return {
				data: {},
				projects: []
			}
		},

		ready() {
			this.getData();
			this.$dispatch('openContactOpen');
			this.$dispatch('resetBg');
		},

		components: {
			LogoHeader,
			ProjectList
		},

		methods: {
			getData() {
				this.$http.get('/api').then(function (res) {
					this.$set('data', res.data.pages.home);
					this.$set('projects', res.data.projects);
				}, function (err) {
					console.log(err);
				});
			}
		}
	}


</script>
