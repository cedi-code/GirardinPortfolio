<template>
  <div class="clear">


    <svg  width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg" >

      <line v-if="lineType === 'time'" x1="90%" y1="100%" x2="90%" y2="0%" stroke-linecap="round"
            :style="style"
      >
        <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                 from="0" v-bind:to=' "-" + strokeDash *2 +"px" ' dur="1s" repeatCount="indefinite" />

      </line>
      <line v-else-if="lineType === 'horizontalReverse'" x1="0%" y1="50%" x2="100%" y2="50%" stroke-linecap="round"
            :style="style"
      >
        <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                 from="0" v-bind:to=' "-" + strokeDash *2 +"px" ' dur="1s" repeatCount="indefinite" />

      </line>
      <line v-else-if="lineType === 'horizontal'" x1="100%" y1="50%" x2="0%" y2="50%" stroke-linecap="round"
            :style="style"
      >
        <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                 from="0" v-bind:to=' "-" + strokeDash *2 +"px" ' dur="1s" repeatCount="indefinite" />

      </line>
      <line v-else x1="50%" y1="100%" x2="50%" y2="0%"  stroke-linecap="round"
            :style="style"
      >
        <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                 from="0" v-bind:to=' "-" + strokeDash *2 +"px" ' dur="1s" repeatCount="indefinite" />

      </line>
    </svg>

  </div>
</template>

<script>
    export default {
        name: "lineType",
        isLine: true,
        probs: {
          strokeDash: {
            default: 20,
            type: Number
          },
          strokeSpacing: {
            default: this.strokeDash / 4,
            type: Number
          },
        },
      computed: {
        style() {
          if(this.color) {
            return 'stroke:white; stroke-width:' + this.thicc + 'px; stroke-dasharray: ' + this.strokeDash + 'px, ' + this.strokeDash  + 'px; animation: marching-ants 1s infinite'
          }else {
            return 'stroke:rgb(0,0,0); stroke-width:' + this.thicc + 'px; stroke-dasharray: ' + this.strokeDash + 'px, ' + this.strokeDash  + 'px; animation: marching-ants 1s infinite'
          }

        }
      },

      props: ['rotaion',  'thicc', 'animate', 'strokeDash', 'lineType', 'color']
    }
</script>

<style scoped>
  .clear {
    margin: 0;

    padding: 0;
  }
  @keyframes marching-ants {to {stroke-dashoffset: -15px;} }
  p {
    position: absolute;

  }
</style>

