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
							"path": "http://placehold.it/768x678/",
							"alt": "image",
							"effect": "none",
							"span": "md"
						},

						{
							"path": "http://placehold.it/768x678/",
							"alt": "image",
							"effect": "none",
							"span": "md"
						}
					]
				},

				{
					"type": "grid",
					"content": [
						{
							"path": "http://placehold.it/768x678/",
							"alt": "image",
							"effect": "none",
							"span": "sm"
						},

						{
							"path": "http://placehold.it/768x678/",
							"alt": "image",
							"effect": "none",
							"span": "sm"
						},
						{
							"path": "http://placehold.it/768x678/",
							"alt": "image",
							"effect": "none",
							"span": "sm"
						}
					]
				},

				{
					type: 'full',
					content: {
						path: 'http://placehold.it/768x678/',
						alt: 'hey man',
					}
				}
			]
		}
	}
}
</script>
