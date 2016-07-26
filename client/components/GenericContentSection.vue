<style lang='scss' scoped>
  @import '../styles/_main';

  .content-section {
    @include make-row();
    //argin: 0px -9vw 115px -9vw;

    &.paragraph {
      // margin: 115px 0;
      margin: 0;

    }

    &:first-of-type {
      margin-top: 54px;

      &.paragraph {
        margin: 24px auto;
      }
    }

    .section-image-cont {
      @include make-col();
      box-sizing: border-box;
      vertical-align: middle;

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
		}

    @include media-breakpoint-up(lg) {

		}


    @include media-breakpoint-up(xl) {

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
    name: 'GenericContentSection',

    props: [
      'type',
      'content'
    ]
  }
</script>
