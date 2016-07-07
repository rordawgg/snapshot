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

    @include media-breakpoint-up(lg) {
			width: 94%;
		}
  }
</style>

<template>
  <div class='project-list'>
    <div class='list'>
      <template v-for='project in projects'>
        <project-item
          :name='project.name'
          :path='project.path'
          :color='project.color'
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

    data() {
      return {
        projects: [
          {
            name: 'Sunday Afternoons',
            path: '/img/sunday_afternoons.jpg',
            color: 'red'
          },
          {
            name: 'Rouge Valley Door',
            path: '/img/rouge_valley_door.jpg',
            color: 'brown'
          },
          {
            name: 'Kamp',
            path: '/img/i_love_kamping.jpg',
            color: 'green'
          },
          {
            name: 'Camp too',
            path: '/img/i_hate_camping.jpg',
            color: 'orange'
          },
          {
            name: 'Woman Reading With a Gameboy',
            path: '/img/gameboy.jpg',
            color: 'black'
          },
          {
            name: 'Addidas',
            path: '/img/addidas.jpg',
            color: 'blue'
          }
        ]
      }
    }
  }
</script>
