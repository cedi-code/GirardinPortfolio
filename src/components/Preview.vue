<template>
    <div class="content">
      <div class="block">
        <div class="wrapper top left-float">
          <box-scroll v-bind:scrolled="scroll" v-bind:speed="-2.5" offset="160" >
            <h1>I </h1>
          </box-scroll>
          <box-scroll v-bind:scrolled="scroll" v-bind:speed="-1.3" offset="155">
            <h1>AM</h1>
          </box-scroll>
        </div>
        <lottie :options="defaultOptions" class="height100"   v-on:animCreated="handleAnimation"/>
      </div>
      <div class="block">
        <div class="wrapper bottom center-float">
          <box-scroll v-bind:scrolled="scroll" v-bind:speed="-3" offset="1335" style="background-color: #d07a89">
            <h2>Speed 3</h2>
          </box-scroll>
          <box-scroll v-bind:scrolled="scroll" v-bind:speed="-1" style="background-color: #8bd081">
            <h2>Speed 1</h2>
          </box-scroll>
          <box-scroll v-bind:scrolled="scroll" v-bind:speed="-2" offset="667" style="background-color: #3cd0a3">
            <h2>Speed 2</h2>
          </box-scroll>
        </div>
      </div>
    </div>
</template>

<script>
  import scrollBox from './scrollBox';
  import Lottie from '../../node_modules/vue-lottie/src/lottie';
  import * as animationData from '../assets/datei.json';
    export default {
      name: 'Preview',
      data () {
        return {
          scrolled: 0,
          defaultOptions: {animationData: animationData},
          animationSpeed: 1
        }
      },
      components: {
        'boxScroll' : scrollBox,
        'lottie': Lottie
      },
      computed: {
        scroll() {
          return this.scrolled
        }
      },
      methods: {
        handleScroll () {
          console.log(this.scrolled)
          this.scrolled = Math.round(window.scrollY);
          if(this.scrolled > 2) {
            this.changeSpeed(2);

          }
          else if(this.scrolled < 1) {
            this.changeSpeed(1);
            this.stop();
            this.play();
            this.delay();
          }

        },
        delay: function () {
          /*console.log("delayed")
          setTimeout(function () {
            this.$router.push('cv')
          }.bind(this), 6000)*/
          setTimeout(function () {
            this.changeSpeed(0.05)
          }.bind(this), 2500)
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
        },
        changeSpeed: function (speed) {
          this.anim.setSpeed(speed);
        }
      },
      mounted() {
        this.delay()
      },

      created () {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
</script>

<style scoped>
  .content {
    height: 2500px;
  }
  .block {
    height: 50vh;
  }
  .wrapper {
    display: flex;
    width: 100%;
    height: 50vh;
    padding: 5vh;
    position: fixed;
    color: black;
  }
  .bottom {
    align-items: flex-end;
  }
  .height100 {
    height: 100vh !important;
  }
  .center-align {
    align-items: center;
  }
  .top {
    align-items: flex-start;
  }
  .center-float {
    justify-content: center;
  }
  .left-float {
    justify-content: flex-start;
  }
  .right-float {
    justify-content: flex-end;
  }
  h1 {
    font-size: 500%;
    padding: 5% !important;
  }

</style>
