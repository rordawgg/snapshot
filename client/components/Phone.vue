<style lang='scss' scoped>
  @import '../styles/_main';

  .pca-hold {
  width: 100%;
}

.pca-hold .pca-main {
  display: block;
  position: relative;
  background-color: transparent;
  border-radius: 18.7px;
  border: 16.83px solid #1d2d2d;
  border-top: 105.3558px solid #1d2d2d;
  border-bottom: 105.3558px solid #1d2d2d;
  border-radius: 37.4px;
}

.pca-hold .pca-main:after {
  content: '';
  position: absolute;
  top: -67.32px;
  left: 50%;
  -webkit-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  -o-transform: translate(-50%,0);
  transform: translate(-50%,0);
  width: 13.838px;
  height: 13.838px;
  background-color: #959595;
  border-radius: 100%;
}

.pca-hold .pca-main:before {
  content: "";
  position: absolute;
  left: 50%;
  top: -33.66px;
  opacity: 1;
  width: 67.32px;
  height: 8.602px;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  -o-transform: translate(-50%);
  transform: translate(-50%);
  border-radius: 3.74px;
  background-color: #959595;
}

.pca-hold .pca-inner {
  display: block;
}

.pca-hold .pca-sub {
  display: block;
  text-align: center;
  position: relative;
  height: 100%;
  bottom: 115px;
}

.pca-hold .pca-sub .pca-bot {
  border-radius: 100%;
  width: 59.279px;
  height: 59.279px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 0 2px rgba(195,195,195,0.5);
  z-index: 2;
  -webkit-transform: translate(0,-82.3174px);
  -ms-transform: translate(0,-82.3174px);
  -o-transform: translate(0,-82.3174px);
  transform: translate(0,-82.3174px);
}

</style>

<template>
  <div class='pca-hold'>
    <div class='pca-main'>
      <div class='pca-inner'><img v-bind:src='path' v-bind:alt='alt' />
      </div><!-- 'pca-inner' -->
    </div><!-- 'pca-main' -->
    <div class='pca-sub'>
      <div class='pca-top'></div>
      <div class='pca-mid'>
        <div class='pca-part'></div>
      </div><!-- 'pca-mid' -->
      <div class='pca-bot'></div>
    </div><!-- 'pca-bot' -->
</div><!-- 'pca-hold' -->
</template>

<script>

  module.exports = {
    name: 'Phone',

    props: [
      'path',
      'alt'
    ],

  }
</script>
