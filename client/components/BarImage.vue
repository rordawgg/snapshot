<style lang='scss' scoped>
  @import '../styles/_main';

  .bar-image {
    box-sizing: padding-box;
    background-color: rgba(0, 0, 0, .1);
    // padding-top: 25px;
    padding-top: 3vw;
    border-top: 3px solid rgba(0, 0, 0, .03);
    &.sm {
      padding-top: 1vw;
    }

    &.md {
      padding-top: 1.5vw;
    }

    &.lg {
      padding-top: 2.5vw;
    }

  }
</style>

<template>
  <div class='bar-image' v-bind:class='[side, span]'>
    <img :src='path' :alt='alt' />
  </div>
</template>

<script>
  module.exports = {
    name: 'BarImage',

    props: [
      'side',
      'path',
      'alt',
      'span'
    ]
  }
</script>
