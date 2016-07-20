<style lang='scss' scoped>
	@import '../../styles/_main';

	#project {
		@include make-container();
		color: white;
	}
</style>

<template>
	<div v-bind:style='bgColor' id='project'>
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

		ready(){
			this.$dispatch("closeContactOpen");
			this.$set('bgColor', {
				backgroundColor: this.color
			});
		},

		props: [
			'projects'
		],

		ready() {
			this.$dispatch("closeContactOpen");
		}
}
</script>
