<template>
  <div>
    <template v-if='effect && (effect != "none")'>

      <template v-if='effect == "phone"'>
        <phone :path='path' :alt='alt'></phone>
      </template>

      <template v-if='effect == "tablet"'>
        <tablet :path='path' :alt='alt'></tablet>
      </template>

      <template v-if='effect == "top-bar"'>
        <bar-image
          side='top'
          :path='path'
          :alt='alt'
          :span='span'
        ></bar-image>
      </template>
    </template>

    <template v-else>
      <div>
        <img v-bind:src='path' v-bind:alt='alt' />
      </div>
    </template>
  </div>
</template>

<script>
  var Phone = require('./Phone.vue');
  var Tablet = require('./Tablet.vue');
  var BarImage = require('./BarImage.vue');

  module.exports = {
    name: 'ImageEffectController',

    components: {
      Phone,
      Tablet,
      BarImage
    },

    props: [
      'effect',
      'path',
      'alt',
      'span'
    ]
  }
</script>
