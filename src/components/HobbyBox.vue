<template>
  <li class="hobbyContent" v-on:click.capture="openHobby()" v-bind:style="{ backgroundImage: 'url(' + backImage + ')'}" >
    <div v-bind:class="{closed : !expanded}" >
      <h2>
        <slot  name="title"></slot>
      </h2>
      <transition name="nav-fade" mode="out-in">
      <tr v-if="expanded">

        <td > <i v-on:click="nextHobby"  class="downArrow arrowLeft"></i></td>
        <td  class="hobbyText">
          <p><slot name="content"></slot></p>
        </td>

        <td >  <i v-on:click="backHobby"  class="downArrow arrowRight"></i></td>

      </tr>
      </transition>
      <div v-bind:class="{mask: !expanded}"></div>

    </div>
  </li>
</template>

<script>
    export default {
        name: "HobbyBox",
        data () {
          return {
            expanded: false,
            isMobile: false
            }
        },
        methods: {
          openHobby: function () {
            this.expanded = true,
            this.$emit('open')
          },
          closeHobby: function () {
            this.expanded = false;
          },
          nextHobby: function () {
            console.log("nice")
            this.closeHobby();
            this.$emit('next');
          },
          backHobby: function () {
            this.closeHobby();
            this.$emit('back');
          }
        },
      props: {
        backImage: {
          type: String,
          default: require('../assets/logo.png')
        },
      }
    }
</script>

<style scoped>
  li {
    background: center center no-repeat;
    background-size: cover;

  }
  .hobbyContent {
    padding: 10px;
    background-color: #8bd081;

    position: relative;
    overflow: hidden;
    transition: all 1.75s cubic-bezier(0.19, 1, 0.22, 1);
  }
  h2 {
    padding: 0;
    margin: 0;
    font-weight: 300;
    font-size: 400%;
    letter-spacing: 7px;
    transition: transform 1s ease;
    position: absolute;
    text-align: left;
    color: white;
    background-color: rgba(0,0,0,0.2);
  }
  .closed h2 {
    transform: rotate(90deg) translateY(80px) translateX(90px);
  }
  tr{
    height: 50vh;
    vertical-align: middle;

  }
  td {
    display: table-cell;
    position: relative;

  }
  .hobbyText {
    width: 100%;


  }
  .hobbyText p {
    background-color: #3a3a3a;
    padding: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  .downArrow {
    border: solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 10px;
    transition: all 0.25s ease;
    cursor: pointer;

  }
  .downArrow:hover {
    border-width: 0 3px 3px 0;
  }
  .arrowLeft {
    transform: rotate(135deg);
  }
  .arrowRight {
    transform: rotate(-45deg);
  }
  .hobbyContent:hover .mask {
    background-color: #fff;
    transform: translate3d(20%, 100px, 0) rotate3d(0, 0, 1, 90deg);
  }
  .hobbyContent .mask {
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    height: 300px;
    position: absolute;
    transform: translate3d(-120%, 200px, 0) rotate3d(0, 0, 1, 45deg);
    transition: all 1.75s cubic-bezier(0.19, 1, 0.22, 1);
    width: 80vh;
  }

  .nav-fade-enter-active, .nav-fade-leave-active {
    transition: opacity 1s ease;
  }
  .nav-fade-enter, .nav-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  @media screen and (max-width: 1100px) {
    .hobbyContent .mask {
      transform: translate3d(-120%, -200px, 0) rotate3d(0, 0, 1, 45deg);
      width: 100vh;
    }
    .hobbyContent:hover .mask {
      transform: translate3d(50%, 100px, 0) rotate3d(0, 0, 1, 90deg);
    }
    .closed h2 {
      transform: none;
    }
    h2 {
      transform: rotate(90deg) translateY(80px) translateX(90px);
    }


  }
  @media screen and (max-width: 700px) {
    .hobbyContent {
      padding: 0px;
    }
  }

</style>
