<style lang='scss'>
  @import '../styles/_main';

  .content-section {
    @include make-row();
    overflow: hidden;
    margin: 0px -9vw calc(115px - 6vw) -9vw;

    &:last-of-type {
      margin-bottom: 0;
    }

    &.slider {
      // @include make-container();
      width: 100vw;
    }

    &.paragraph {
      margin: 115px 0;

      p {
        margin: 0;
      }
    }

    &.full {
      .section-image-cont {
        margin: auto;
      }
    }

    &.grid-centered {


      .section-image-cont {
        display: inline-block;
        margin: 0 3.7vw;
      }
    }

    &.full, &.grid-centered {
      .section-image-cont {
        float: none;
        text-align: center;
      }
    }

    &:first-of-type {
      margin-top: 54px;

      &.paragraph {
        margin-bottom: calc(54px - 6vw);
      }
    }

    .section-image-cont {
      @include make-col();
      box-sizing: border-box;
      vertical-align: middle;
      padding: 6vw 3vw 0 3vw;

      &.sm {
        @include make-col-span(4);
      }

      &.md {
        @include make-col-span(6);
      }

      &.lg {
        @include make-col-span(12);
      }

      img {
        width: 100%;
      }
    }

    .slider-cont {

      margin-bottom: 115px;

      .slider {
        width: 100%;
        left: 0;
        right: 0;
        overflow-x: scroll;
        white-space:nowrap;
        .slide{
          display: inline-block;
          margin: 5px 86px;
        }

      }
    }

    &:not(.paragraph) {
      text-align: center;
    }

    @include media-breakpoint-up(md) {
      margin: 0px -3vw calc(200px - 6vw) -3vw;

      &:first-of-type {
        &.paragraph {
          margin-bottom: calc(100px - 6vw);
        }
      }

      .section-image-cont {
        // margin: -2vw auto;
        padding: 6vw 3vw 0 3vw;
      }

      &.paragraph {
        padding: 0 -3vw;
      }
		}

    @include media-breakpoint-up(lg) {

      &.paragraph {
        p {
          width: 596px;
        }
      }
		}


    @include media-breakpoint-up(xl) {

      &.paragraph {
        p {
          width: 730px;
        }
      }
		}
  }


</style>

<template>
  <div v-bind:class='type' class='content-section'>

    <template v-if='(type == "grid") || (type == "grid-centered")'>
      <template v-for='(i, image) in content'>

        <div class='section-image-cont' v-bind:class='image.span'>
          <image-effect-controller
            :effect='image.effect'
            :path='image.path'
            :alt='image.alt'
            :span='image.span'>
            </image-effect-controller>
        </div>


      </template>
    </template>

    <template v-if='type == "full"'>
      <div class='section-image-cont full' v-bind:class='content.span ? content.span : "lg"'>

        <image-effect-controller
          :effect='content.effect'
          :path='content.path'
          :alt='content.alt'
          :span='content.span'>
          </image-effect-controller>

      </div>
    </template>

    <template v-if='type == "paragraph"'>
      <p v-for='paragraph in content'>{{ paragraph }}</p>
    </template>

    <template v-if='type == "slider"'>
    <div class="slider-cont">
      <div class='slider'>
        <div class='slide' v-for='slide in content'>
          <img v-bind:src='slide.path'>
        </div>
      </div>
    </div>
    </template>

  </div>
</template>

<script>
  var ImageEffectController = require('./ImageEffectController.vue');
  var Phone = require('./Phone.vue');
  var Tablet = require('./Tablet.vue');

  module.exports = {
    name: 'ContentSection',
    components:{
      ImageEffectController
    },

    props: [
      'type',
      'content',
      'color'
    ]
  }
</script>
