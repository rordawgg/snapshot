<style lang='scss' scoped>
  @import '../styles/_main';

  .project-list {
    @include make-container();
    width: 100%;
    margin-top: 54px;
    margin-bottom: 54px;
    box-sizing: border-box;

    .list {
      @include make-row();
    }

    @include media-breakpoint-up(md) {
			margin-top: 56px
		}

    @include media-breakpoint-up(lg) {
			width: 94%;
      margin-top: 79px;
		}

    @include media-breakpoint-up(xl) {
			margin-top: 124px;
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
            path: '/img/sunday_afternoons.png',
            color: 'rgb(162, 168, 170)'
          },
          {
            name: 'Rouge Valley Door',
            path: '/img/rouge_valley_door.png',
            color: 'rgb(171, 169, 162)'
          },
          {
            name: 'Kamp Grizzly',
            path: '/img/kamp.png',
            color: 'rgb(128, 128, 128)'
          },
          {
            name: 'Dolly Varden',
            path: '/img/camp.png',
            color: 'rgb(169, 171, 167)'
          },
          {
            name: 'Mitsubishi Electric',
            path: '/img/woman.png',
            color: 'rgb(188, 188, 188)'
          },
          {
            name: 'Addidas Top Ten',
            path: '/img/addidas.png',
            color: 'rgb(177, 183, 186)'
          }
        ]
      }
    }
  }
</script>
