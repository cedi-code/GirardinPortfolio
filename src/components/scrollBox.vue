<template>
  <div class="box" :style="style">
    <slot>{{scrolled * speed}}</slot>
  </div>
</template>

<script>
  export default {
    name: "sqaureBoxScroll",
    props: {
      scrolled: {
        type: Number,
        default: 0
      },
      speed: {
        // type: Number,
        default: 1
      },
      delayTime: {
        default: 0.5
      },
      margin: {
        default: 10
      },
      padding: {
        default: "10px"
      }
    },
    computed: {
      style() {
        return { transform: 'translateY(' + (this.scrolled * this.speed) + 'px)',
          transition: 'transform ' + this.delayTime + 's ',
          padding: this.padding,
          margin: this.margin + "px" }
      }
    }

  }
</script>

<style scoped>
  .box {
    flex: none;

    right: 100px;
    will-change: transform;
    margin: 10px;
    padding: 10px;


  }
  h1 {

  }
  @media screen and (max-width: 700px) {
    .box {
      margin: 5px !important;
      padding: 5px !important;
    }
  }
</style>
