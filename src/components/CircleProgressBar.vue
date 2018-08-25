<template>
  <div class="skill" >
    <div class="flipper">
      <div class="front">
        <svg class="stat-circle" viewBox="1.6 1.6 16.8 16.8">
          <circle class="bg" cx="10" cy="10" r="8"></circle>
          <circle v-bind:style="{ strokeDashoffset: (-51 -((51 / 100) * this.percentage))}" class="progress" cx="10" cy="10" r="8" v-bind:data-percentage="percentage">

            <animate  attributeType="css" attributeName="stroke-dashoffset"
                      from="358" v-bind:to='getAnimTo()'  dur="0.5s" repeatCount="1"       calcMode="spline"       fill="freeze" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </circle>
          <text :x="[showPercange ? '62%' : '60%']"  :y="[showPercange ? '70%' : '66%']" v-bind:style="showPercange ? bigText : ''">{{ showPercange ? percentage + '%' : status  }}</text>
        </svg>
        <span class="blurr"><slot ></slot></span>
      </div>
      <div v-on:click="viewProject"  class="back" v-bind:style="{ backgroundImage: 'url(' + imgType + ')' }">
        <span ><span v-if="link !== 'none'" class="boxli">view Projects</span></span>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "CircleProgressBar",
        data() {
          return {
            bigText: {
              fontSize: '5px'
            }
          }
        },
        props: {
          percentage: Number,
          type: Object, // filter arten TODO nacharbeiten!
          imgType: {
            default: require('../assets/logo.png'),
            type: String
          },
          link: {
            default: 'projects',
            type: String
          },
          showPercange: {
            default: false,
            type: Boolean
          },
          status: {
            default: 'normal',
            type: String,
          }


        },
        methods: {
          getAnimTo() {
            return 358 - 5 * (this.percentage / 10)
          },
          viewProject() {
            if(this.link !== 'none') {
              this.$router.push({ path: this.link })
            }

            //this.$router.push({ name: 'user', params: { userId }})
          }
        },
      watcher: function () {
        var off = -51 -((51 / 100) * this.percentage);
        document.getElementsByClassName('progress')[0].style.strokeDashoffset = off;

        //$statCircle[i].style.strokeDashoffset = off;
      }

    }
</script>

<style scoped lang="scss">
  $card-height: 15vh;
  .stat-circle {
    width: 12vh;

    circle.bg {
      fill: none;
      stroke: #404040;
      stroke-width: 0.4px;
    }
    circle.progress {
      fill: none;
      stroke: #74b16b;
      stroke-width: 0.8px;
      stroke-dasharray: 51, 51;
      stroke-dashoffset: -51;
      stroke-linecap: round;
    }
    text {
      font-size: 3.5px;
      text-anchor: middle;
      fill: #9de593;
      transition: font-size 0.25s ;
    }
  }
  .skill {
    border-radius: 10px;
    color: white;
    margin: 15px;
    text-align: center;
    width: $card-height;
    height: $card-height;
    padding: 15px;
    font-size: 140%;
    background-color: #3a3a3a;
    perspective: 400px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: transform .25s ease;
  }
  .skill:hover {
      transform: scale(1.1);
      cursor: pointer;
  }
  .skill:hover .flipper, .skill.hover .flipper {
    transform: rotateY(180deg);
  }
  .flipper {
    transition: 0.35s ease;
    transform-style: preserve-3d;
    position: relative;
  }
  .front, .back {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: perspective(800px)  rotateY(0deg);
  }

  /* back, initially hidden pane */
  .back {
    transform: perspective(800px)  rotateY(180deg);
    display: table;
    height: $card-height;
    background: center center no-repeat;
    background-size: 80%;
  }
  .back span {
    display: table-cell;
    vertical-align: middle;
    width: $card-height

  }
  .back span .boxli {
    background-color: rgba(0,0,0,0.5);
  }

</style>
