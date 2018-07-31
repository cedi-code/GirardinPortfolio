<template>
  <div>
    <lottie :options="defaultOptions"    v-on:animCreated="handleAnimation"/>
  </div>
</template>



<script>
  import Lottie from '../../node_modules/vue-lottie/src/lottie';
  import * as animationData from '../assets/datei.json';
    export default {
      name: "Intro",
      components: {
        'lottie': Lottie
      },
      data() {
        return {
          defaultOptions: {animationData: animationData},
          animationSpeed: 1
        }
      },

      methods: {
        delay: function () {
          console.log("delayed")
          setTimeout(function () {
            this.$router.push('cv')
          }.bind(this), 6000)
        },
        startRoute: function () {
          console.log("delayed2")
          // this.$router.push('cv')
        },
        handleAnimation: function (anim) {
          this.anim = anim;
        },

        stop: function () {
          this.anim.stop();
        },

        play: function () {
          this.anim.play();
        },

        pause: function () {
          this.anim.pause();
        },

        onSpeedChange: function () {
          this.anim.setSpeed(this.animationSpeed);
        }
      },
      mounted() {
        this.delay()
      }
    }
</script>

<style scoped>
  #lottie{
    background-color:#fff;
    width:100%;
    height:100%;
    display:block;
    overflow: hidden;
    transform: translate3d(0,0,0);
    text-align: center;
    opacity: 1;
  }
</style>
