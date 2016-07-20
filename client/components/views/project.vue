<style lang='scss' scoped>
	@import '../../styles/_main';

	#project {
		@include make-container();
		color: white;
	}
</style>

<template>
	<div v-bind:style='{backgroundColor: color}' id='project'>
		<project-header
			:name='name'
			:hero='hero'
			:color='color'
		></project-header>

		<content-section-list
			:sections='sections'
		></content-section-list>
	</div>
</template>

<script>
	var ProjectHeader = require('../ProjectHeader.vue');
	var ContentSectionList = require('../ContentSectionList.vue');

	module.exports = {
		name: 'Project',

		components: {
			ProjectHeader,
			ContentSectionList
		},

		props: [
			'name',
			'color',
			'hero',
			'sections'
		],

		ready() {
			console.log(this.hero);
			this.$dispatch("closeContactOpen");
		}
	}
</script>
