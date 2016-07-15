<style lang='scss' scoped>
  @import '../styles/_main';

  .content-section {
    @include make-row();
    overflow: hidden;
    margin: 0 -8vw;

    &.paragraph {
      margin: 0;
    }

    .section-image-cont {
      @include make-col();
      box-sizing: border-box;
      // float: none;
      // display: inline-block;
      vertical-align: middle;
      margin: 30px auto;
      padding: 0 8vw;
      // text-align: center;


      &.sm {
        //@include make-col-offset(1);
        @include make-col-span(4);
      }

      &.md {
        // &.left-gutter {
        //   @include make-col-offset(1);
        // }
        @include make-col-span(6);
      }

      &.lg {
        @include make-col-span(12);
      }

      img {
        width: 100%;
      }
    }

    // .section-image-cont {
    //   @include make-col();
    //   box-sizing: border-box;
    //   // float: none;
    //   // display: inline-block;
    //   vertical-align: middle;
    //   margin: 30px auto;
    //   // text-align: center;
    //   padding: 0;
    //   @include make-col-offset(1);
    //
    //   .foo {
    //     @include make-col-offset(0);
    //   }
    //
    //   &:first-child {
    //     @extend .foo;
    //     @include make-col-offset(0);
    //   }
    //
    //   &.sm {
    //     //@include make-col-offset(1);
    //     @include make-col-span(3.33);
    //
    //     &:nth-of-type(3n + 1) {
    //       @include make-col-offset(0);
    //     }
    //   }
    //
    //   &.md {
    //     // &.left-gutter {
    //     //   @include make-col-offset(1);
    //     // }
    //     @include make-col-span(5.5);
    //
    //     &:nth-of-type(2n + 1) {
    //       @include make-col-offset(0);
    //     }
    //
    //     & + .sm {
    //       @include make-col-offset(0);
    //     }
    //   }
    //
    //   &.lg {
    //     @include make-col-span(12);
    //     @include make-col-offset(0);
    //
    //     & + .sm, & + .md {
    //       @include make-col-offset(0);
    //     }
    //   }
    //
    //   img {
    //     width: 100%;
    //   }
    // }


    &.grid, &.full {
      text-align: center;
    }
  }


</style>

<template>
  <div v-bind:class='type' class='content-section'>

    <template v-if='type == "grid"'>
      <template v-for='(i, image) in content'>

        <div class='section-image-cont' v-bind:class='image.span'>
          <img v-bind:src='image.path' v-bind:alt='image.alt' />
        </div>


      </template>
    </template>

    <template v-if='type == "full"'>
      <div class='section-image-cont' v-bind:class='content.span ? content.span : "lg"'>
        <img v-bind:src='content.path' v-bind:alt='content.alt' />
      </div>
    </template>

    <template v-if='type == "paragraph"'>
      <p v-for='paragraph in content'>{{ paragraph }}</p>
    </template>
  </div>
</template>

<script>
  module.exports = {
    name: 'ContentSection',

    props: [
      'type',
      'content'
    ]
  }
</script>
