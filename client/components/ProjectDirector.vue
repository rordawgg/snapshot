<template>
	<div>
    <project
    	v-if='projects[this.$route.params.name]'
    	:name='projects[this.$route.params.name].name'
    	:color='projects[this.$route.params.name].color'
    	:hero='projects[this.$route.params.name].hero'
    	:sections='projects[this.$route.params.name].sections'
    ></project>
	</div>
</template>

<script>
  var Project = require('./views/project.vue');

	module.exports = {
		name: 'ProjectDirector',

		props: [
			'projects'
		],

    components: {
      Project
    },

    data() {
      return {
        project: {}
      }
    },

		ready() {
			if (!this.projects[this.$route.params.name]) {
        this.$router.go({path: '/home'});
      }
		}
}
</script>
