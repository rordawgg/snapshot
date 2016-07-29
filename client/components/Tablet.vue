<style lang='scss' scoped>
  @import '../styles/_main';

  .pca-hold {
  width: 100%;
}

.pca-hold .pca-main {
  display: block;
  position: relative;
  background-color: transparent;
  padding: 7.3% 5.2% 10.6% 5.2%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1.5vw;
}

.pca-hold .pca-main:after {
  content: '';
  position: absolute;
  top: 94%;
  left: 50%;
  -webkit-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  -o-transform: translate(-50%,0);
  transform: translate(-50%,0);
  width: 6.5%;
  height: 4.5%;
  background-color: rgba(0, 0, 0, 0.1);
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
  background-color: transparent;
}

.pca-hold .pca-inner {
  display: block;
}

.pca-hold .pca-sub {
  display: block;
  text-align: center;
  position: relative;
  height: 100%;
}

.pca-hold .pca-sub .pca-bot {
  border-radius: 100%;
  width: 59.279px;
  height: 59.279px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  z-index: 2;
  -webkit-transform: translate(0,-82.3174px);
  -ms-transform: translate(0,-82.3174px);
  -o-transform: translate(0,-82.3174px);
  transform: translate(0,-82.3174px);
}

img {
  position: relative;
  width: 100%;
}

</style>

<template>
  <div class='pca-hold'><div class='pca-main'><img v-bind:src='path' v-bind:alt='alt' /></div>
</div>
</template>

<script>

  module.exports = {
    name: 'Tablet',

    props: [
      'path',
      'alt'
    ],

  }
</script>
