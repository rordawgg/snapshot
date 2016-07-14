<style lang='scss' scoped>
  @import '../styles/_main';

  .content-section-list {
    @include make-container();
    width: 78%;
  }
</style>

<template>
  <div class='content-section-list'>
    <template v-for='section in sections'>
      <content-section
        :type='section.type'
        :content='section.content'
      ></content-section>
    </template>
  </div>
</template>

<script>
  var ContentSection = require('./ContentSection.vue');

  module.exports = {
    name: 'SectionList',

    components: {
      ContentSection
    },

    props: [
      'sections'
    ]
  }
</script>
