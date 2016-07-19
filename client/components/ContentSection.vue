<style lang='scss' scoped>
  @import '../styles/_main';

  .content-section {
    @include make-row();
    overflow: hidden;
    margin: 0px -9vw 115px -9vw;

    &.paragraph {
      margin: 115px 0;
    }

    &:first-of-type {
      margin-top: 54px;

      &.paragraph {
        margin-bottom: 24px;
      }
    }

    .section-image-cont {
      @include make-col();
      box-sizing: border-box;
      vertical-align: middle;
      margin: 3vw auto;
      padding: 0 3vw;

      &.full {
        float: none;
        text-align: center;
      }

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

    &.grid, &.full {
      text-align: center;
    }

    @include media-breakpoint-up(md) {
		  margin: 0px -3vw 201px -3vw;

      &:first-of-type {
        &.paragraph {
          margin-bottom: 82px;
        }
      }

      .section-image-cont {
        margin: 2vw auto;
        padding: 0 2vw;
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

    <template v-if='type == "grid"'>
      <template v-for='(i, image) in content'>

        <div class='section-image-cont' v-bind:class='image.span'>
          <img v-bind:src='image.path' v-bind:alt='image.alt' />
        </div>


      </template>
    </template>

    <template v-if='type == "full"'>
      <div class='section-image-cont full' v-bind:class='content.span ? content.span : "lg"'>
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
