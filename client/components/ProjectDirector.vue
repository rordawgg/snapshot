<template>
	<div>
    <project></project>
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
