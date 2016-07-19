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

	data() {
		return {
			name: 'Sunday Afternoons',
			path: '/img/sunday_afternoons.png',
			color: 'rgb(162, 168, 170)',
			hero: '/img/sunday-afternoons-hero.png',
			sections: [
				{
					"type": "paragraph",
					"content": [
						'Ut interdum sit amet eros ut vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, mauris sed maximus tempus, quam massa accumsan mauris.'
					]
				},

				{
					"type": "grid",
					"content": [
						{
							"path": "http://placehold.it/283x393/",
							"alt": "image",
							"effect": "none",
							"span": "md"
						},
						{
							"path": "http://placehold.it/283x393/",
							"alt": "image",
							"effect": "none",
							"span": "md"
						},
						{
							"path": "http://placehold.it/595x480/",
							"alt": "image",
							"effect": "none",
							"span": "lg"
						}
					]
				},

				{
					type: 'full',
					content: {
						path: 'http://placehold.it/344x510/',
						alt: 'hey man',
						span: 'md'
					}
				}
			]
		}
	}
}
</script>
