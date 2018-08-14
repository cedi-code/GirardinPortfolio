<template>
  <div class="box" :style="style">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "scrollBox",
        props: {
          scrolled: {
            type: Number,
            default: 0
          },
          speed: {
            // type: Number,
            default: 1
          },
          offset: {
            default: 0
          }
        },
        computed: {
          style() {
            return { transform: 'translateY(' + (this.speed * parseInt(this.scrolled) + parseInt(this.offset)) + 'px)'}
          }
        }
    }
</script>

<style scoped>
  .box {
    flex: none;
    /*width: 100px;
    height: 100px;
    line-height: 100px;
    */
    padding: 10px;

    text-align: center;
    font-size: 25px;
    right: 100px;
    will-change: transform;
  }
  h1,h2,h3 {
    margin: 0;
    padding: 0;
  }

</style>
