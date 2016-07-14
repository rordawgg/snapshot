<style lang='scss' scoped>
  @import '../styles/_main';

  .content-section {
    @include make-row();
    overflow: hidden;

    .section-image-cont {
      @include make-col();
      box-sizing: border-box;
      // float: none;
      // display: inline-block;
      vertical-align: middle;
      margin: 30px auto;
      // text-align: center;
      padding: 0;

      .foo {
        @include make-col-offset(0);
      }

      &:first-child {
        @extend .foo;
      }

      &.sm {
        @include make-col-offset(1);
        @include make-col-span(3.6);
      }

      &.md {
        // &.left-gutter {
        //   @include make-col-offset(1);
        // }

        & + .sm {
          @extend .foo;
        }

        @include make-col-span(5.5);

        & + .sm {
          @extend .foo;
        }
      }

      &.lg {
        @include make-col-span(12);

        & + .sm {
          @extend .foo;
        }
      }

      img {
        width: 100%;
      }
    }


    &.grid, &.full {
      text-align: center;
    }
  }


</style>

<template>
  <div v-bind:class='type' class='content-section'>

    <template v-if='type == "grid"'>
      <template v-for='(i, image) in content'>

        <!-- <template v-if='(i + 1) % 2 === 0'>
          <div class='section-image-cont left-gutter' v-bind:class='image.span'>
            <img v-bind:src='image.path' v-bind:alt='image.alt' />
          </div>
        </template> -->

        <!-- <template> -->
          <span class='section-image-cont' v-bind:class='image.span'>
            <img v-bind:src='image.path' v-bind:alt='image.alt' />
          </span>
      <!-- </template> -->


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
