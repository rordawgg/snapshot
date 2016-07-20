<style lang='scss' scoped>
  @import '../styles/_main';

  .project-list {
    @include make-container();
    width: 100%;
    height: 438px;
    margin-top: 54px;
    margin-bottom: 54px;
    box-sizing: border-box;

    .list {
      @include make-row();
    }

    @include media-breakpoint-up(md) {
			margin-top: 56px;
		}

    @include media-breakpoint-up(lg) {
			width: 94%;
      margin-top: 79px;
		}

    @include media-breakpoint-up(xl) {
			margin-top: 124px;
      width: 970px;
		}
  }
</style>

<template>
  <div class='project-list'>
    <div class='list'>
      <template v-for='project in projects'>
        <project-item
          :name='project.name'
          :cover='project.cover'
          :color='project.color'
          :slug='$key'
        ></project-item>
      </template>
    </div>
  </div>
</template>

<script>
  var ProjectItem = require('./ProjectItem.vue');

  module.exports = {
    name: 'ProjectList',

    components: {
      ProjectItem
    },

    props: [
      'projects'
    ]
  }
</script>
