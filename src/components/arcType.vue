<template>
    <div>
      <svg v-if="!isMobile"  width="100%" height="100%" >
        <line v-if="rotaion === '0' || rotaion === '270'" x1="50%" y1="50%" x2="50%" y2="0%" stroke-linecap="round"
              :style="style"
        >
          <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                   from="0" v-bind:to=' "-" + strokeDash*2 +"px" ' dur="1s" repeatCount="indefinite" />

        </line>
        <line v-if="rotaion === '0'" x1="100%" y1="50%" x2="50%" y2="50%" stroke-linecap="round"
              :style="style"
        >
          <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                   from="0" v-bind:to=' "-" + strokeDash*2 +"px" ' dur="1s" repeatCount="indefinite" />

        </line>
        <line v-if="rotaion === '90' || rotaion === '180'" x1="50%" y1="100%" x2="50%" y2="50%" stroke-linecap="round"
              :style="style"
        >
          <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                   from="0" v-bind:to=' "-" + strokeDash*2 +"px" ' dur="1s" repeatCount="indefinite" />

        </line>
        <line v-if="rotaion === '180'" x1="50%" y1="50%" x2="100%" y2="50%" stroke-linecap="round"
              :style="style"
        >
          <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                   from="0" v-bind:to=' "-" + strokeDash*2 +"px" ' dur="1s" repeatCount="indefinite" />

        </line>
        <line v-if="rotaion === '90'" x1="50%" y1="50%" x2="0%" y2="50%" stroke-linecap="round"
              :style="style"
        >
          <animate v-if="animate" attributeType="css" attributeName="stroke-dashoffset"
                   from="0" v-bind:to=' "-" + strokeDash *2 +"px" ' dur="1s" repeatCount="indefinite" />

        </line>
        <line v-if="rotaion === '270'" x1="0%" y1="50%" x2="50%" y2="50%" stroke-linecap="round"
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
        name: "arcType",
        data () {
          return {
            isMobile: false
          }
        },

      computed: {
        style() {
          return 'stroke:rgb(0,0,0); stroke-width:' + this.thicc + 'px; stroke-dasharray: ' + this.strokeDash  + 'px, ' + this.strokeDash + 'px; '
        }
      },
      methods: {
        addChecks: function() {
          // window.addEventListener('resize', this.isMobile),
          if(screen.width < 900) {
            this.isMobile = true
          }
        }
      },
      created() {
        this.addChecks()
      },

      props: ['rotaion',  'thicc', 'animate', 'strokeDash']
    }
</script>

<style scoped>

</style>
