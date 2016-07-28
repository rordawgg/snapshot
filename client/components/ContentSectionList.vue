<style lang='scss' scoped>
  @import '../styles/_main';

   .main {
     overflow: hidden;
   }

  .content-section-list {
    @include make-container();
    width: 83%;
    margin-bottom: 115px;

    @include media-breakpoint-up(md) {
      margin-bottom: 200px;
    }

    &:not(.slider) {
      @include make-container();
      width: 100%;
    }
    
    @include media-breakpoint-up(xl) {
      width: 970px;
    }
  }

  
</style>

<template>
  <div class="main">
    <div class='content-section-list' >
      <template v-for='section in sections'>
        <div  v-bind:class='section.type'>  
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
