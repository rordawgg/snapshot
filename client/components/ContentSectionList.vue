<style lang='scss' scoped>
  @import '../styles/_main';

  // .main {
  //   overflow: hidden;
  // }

  .content-section-list {
    @include make-container();
    width: 83%;
    margin-bottom: 115px;

    @include media-breakpoint-up(md) {
      margin-bottom: 200px;
    }

    @include media-breakpoint-up(xl) {
      width: 970px;
    }
  }

  .no-container {
    /*@include make-container();*/
    width: 100%;
  }
</style>

<template>
  <div class="main">
    <div class='content-section-list'>
      <template v-for='section in sections'>

        <template v-if='section.type != "slider"'>
            <content-section
              :type='section.type'
              :content='section.content'
              :color='color'
            ></content-section>
        </template>

        <template v-else>
          <!-- <div class='no-container'> -->
            <content-section
              :type='section.type'
              :content='section.content'
              :color='color'
            ></content-section>
          <!-- </div> -->
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  var ContentSection = require('./ContentSection.vue');

  module.exports = {
    name: 'ContentSectionList',

    components: {
      ContentSection
    },

    props: [
      'sections',
      'color'
    ]
  }
</script>
