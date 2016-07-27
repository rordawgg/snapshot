<style lang='scss' scoped>
  @import '../styles/_main';

  .main {
    overflow: hidden;
  }
  
  .content-section-list {
    @include make-container();
    width: 83%;

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
    <div v-for='section in sections'>
      
      <template v-if='section.type != "slider"'>
        <div class='content-section-list'>
          <content-section
            :type='section.type'
            :content='section.content'
            :color='color'
          ></content-section>
        </div>
      </template>

      <template v-if='section.type == "slider"'>
        <div class='no-container'>
          <content-section
            :type='section.type'
            :content='section.content'
            :color='color'
          ></content-section>
        </div>
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
