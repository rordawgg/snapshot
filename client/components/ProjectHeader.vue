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

    .contact-button {
  		position: absolute;
  		top: 13px;
  		right: 15px;
  		font-size: 1.125rem;
  		z-index: 1003;
      color: #fff
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
    @include media-breakpoint-up(xs){
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
      .project-header{
        width: 94.758%;
        height: 474px;
        float: none;
        margin: 0 auto;
        margin-top: 36px;
      }
    }
    @include media-breakpoint-up(xl) {
      .project-header{
        width:1270;
        height: 480;
        margin-top: 40px;
      }
    }
  }
</style>

<template>
  <header>
    <div class='back-button'>
      <a v-link="'/home'">
        <img src='/img/back-arrow.png' alt='back' />
      </a>
    </div>

    <div class="contact-open">
      <a class='contact-button' href="/" v-on:click.stop.prevent='$dispatch("showContact")'>Contact</a>
    </div>

    <div v-bind:style='styles' class='project-header'>
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
      'hero'
    ],

    data() {
      return {
        styles: {}
      }
    },

    ready() {
      this.$set('styles', {
        backgroundImage: 'url(' + this.hero + ')'
      });
    }
  }
</script>
