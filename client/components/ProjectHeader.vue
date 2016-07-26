<style lang='scss' scoped>
  @import '../styles/_main';

  header {

    @include make-row();

    .back-button {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 1003;
    }

    a.contact-button {
  		position: absolute;
  		top: 13px;
  		right: 15px;
  		font-size: 1.125rem;
  		z-index: 1003;
      color: #fff;
  	}

    .corner {
      position: absolute;
      left: 0;
      height: 0;
      border-right: 97px solid transparent;
    }


    .project-header {
      @include make-col();
      @include make-col-span(12);
      box-sizing: border-box;
      height: 382px;
      background: #000 no-repeat center center;
      background-size: cover;

      &:before {
        content: '';
        display: block;
        position: absolute;
        background-color: #000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .2;
      }
      .project-name {
        position: absolute;
        bottom: 51px;
        left: 36px;
        width: 75%;
      }
    }

    @include media-breakpoint-up(xs) {
      .project-name{
        font-size: 2.1875rem
      }
    }

    @include media-breakpoint-up(md) {
      .project-header{
        height: 388px;
      }
      .project-name{
        font-size: 3.75rem;
      }
    }

    @include media-breakpoint-up(lg) {
      padding-top: 36px;
      .project-header{
        width: 94.758%;
        height: 474px;
        float: none;
        margin: 0 auto;
      }
    }

    @include media-breakpoint-up(xl) {
      padding-top: 40px;
      .project-header{
        width: 1270px;
        height: 480px;
      }
    }
  }
</style>

<template>
  <header>
    <div v-bind:style='styles' class='project-header'>
      <div v-bind:style='corner' class="corner"></div>
      <div class='back-button'>
        <a v-link="'/home'">
          <img src='/img/back-arrow.png' alt='back' />
        </a>
      </div>
      <div class="contact-open">
        <a class='contact-button' href="/" v-on:click.stop.prevent='$dispatch("showContact")'>Contact</a>
      </div>
      <div class='project-name'>
        <span>{{ name }}</span>
      </div>
    </div>
  </header>
</template>

<script>
  module.exports = {
    name: 'ProjectHeader',

    props: [
      'name',
      'hero',
      'color'
    ],

    data() {
      return {
        styles: {},
        corner: {}
      }
    },

    ready() {
      this.$set('styles', {
        backgroundImage: 'url(' + this.hero + ')'
      });

      this.$set('corner', {
        borderTop: '97px solid ' + this.color
      });
    }
  }
</script>
