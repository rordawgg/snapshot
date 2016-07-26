<style lang='scss' scoped>
  @import '../styles/_main';

  .content-section-list {
    @include make-container();
    width: 83%;

    @include media-breakpoint-up(xl) {
		  width: 970px;
		}
  }
</style>

<template>
  <div class='content-section-list'>

    <template v-for='section in sections'>
      <!-- <generic-content-section
        v-if='generic'
        :type='section.type'
        :content='section.content'
      ></generic-content-section> -->

      <content-section
        :type='section.type'
        :content='section.content'
      ></content-section>
    </template>
  </div>
</template>

<script>
  var ContentSection = require('./ContentSection.vue');
  // var GenericContentSection = require('./GenericContentSection.vue');

  module.exports = {
    name: 'ContentSectionList',

    components: {
      ContentSection
    },

    props: [
      'sections'
    ]
  }
</script>
