<style lang='scss' scoped>
  @import '../styles/_main';

  .project-list {
    @include make-container();
    width: 100%;
    margin-top: 54px;
    box-sizing: border-box;
    background-color: red;

    .list {
      @include make-row();
    }

    @include media-breakpoint-up(md) {
			width: 94%;
		}
  }
</style>

<template>
  <div class='project-list'>
    <div class='list'>
      <project-item></project-item>
      <project-item></project-item>
      <project-item></project-item>
      <project-item></project-item>
      <project-item></project-item>
      <project-item></project-item>
    </div>
  </div>
</template>

<script>
  var ProjectItem = require('./ProjectItem.vue');

  module.exports = {
    name: 'ProjectList',

    components: {
      ProjectItem
    }
  }
</script>
