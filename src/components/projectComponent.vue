<template>
    <div v-bind:class="{ expandProject : expanded, [expandDirection]: (!isMobile && expanded), ['expandCenter2']: isMobile && expanded, projectBox: !expanded }"   >

      <div v-on:click="expandDiv(true)" v-bind:class="{ iconBox: !expanded, iconBoxExpanded: expanded, cover: imgCover } " v-bind:style="{ backgroundImage: 'url(' + imgURL + ')' }"></div>

      <div v-if="expanded"  v-bind:class="{contentProject: expanded, nonExpandProject: !expanded }">
        <slot name="content"></slot>

      </div>
      <div v-if="expanded" v-bind:class="{buttonsDownRight : expanded}">
        <slot name="buttons"></slot>
      </div>

      <svg  v-on:click="expandDiv(false)" class="cross" v-if="expanded" viewbox="0 0 100 100">
        <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
      <div v-bind:class="{mask: !expanded}"></div>

    </div>
</template>

<script>
    export default {
        name: "projectComponent",
      data () {
        return {
          expanded: false,
          isMobile: false

        }
        },
      props: {
        expandDirection: {
          type: String,
          default: 'expandLeftf'
        },
        imgURL: {
          type: String,
          default: require('../assets/logo.png')
        },
        imgCover: {
          type: Boolean,
          default: false
        }
      },

      methods: {
        expandDiv: function (on) {
          this.expanded = on,
            console.log("expanded")
        },
          addChecks: function() {
            // window.addEventListener('resize', this.isMobile),
            if(screen.width < 900) {
              this.isMobile = true
            }else {
              this.isMobile = false
            }
          }
        },
        created() {
          this.addChecks()
        },
    }
</script>

<style scoped>
.cross {
  float: right;
  width: 50px;
  height: 35px;
  position: absolute;
  top:10px;
  right: 10px;
  opacity: 0.4;
  display: block;
  transition: opacity .5s ease;

}
.cross:hover {
  opacity: 1;
}


.iconBox {

  width:100%;
  height:100%;
  background-color: #8bd081;
  border-radius: 50%;
  background: center center no-repeat;
  background-size: 70%;
  transition: width  .1s;

}
.cover {
  background-size: cover !important;
}
body {

}

.close-x {
  stroke: black;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5px;

}

.iconBoxExpanded {

  width: 30%;
  border-radius: 0%;
  display: table-cell;
  vertical-align: middle;

  background: center center no-repeat;
  background-size: 90%;
  height: 50vh;


}
.expandProject {
  transition: width  .5s , height .1s, border-radius .5s, transform .3s  ;

  width: 250% ;
  height:50vh ;
  background-color: #8bd081;
  display: table;
  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);


  /*grid-column-start: spliter;
  grid-column-end: 5;
  grid-row: 3;*/

}
.expandLeft {
  transform: translateX(-70%);
}
.expandCenter {
  transform: translateX(-30%);
}
.expandCenter2 {
  transform: translateX(-30%);
}
.expandRight {
  transform: translateX(10%);
}
.nonExpandProject {
  opacity: 0;
}
.projectBox {
  position: relative;
  overflow: hidden;
  transition:  border-radius .5s, height .5s;
  margin: auto;
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  background-color: #8bd081;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: transform 1.75s cubic-bezier(0.19, 1, 0.22, 1);
}
.projectBox:hover {
  transform: scale(1.1);
}
.projectBox:hover .mask {
  background-color: #fff;
  transform: translate3d(120%, -200px, 0) rotate3d(0, 0, 1, 90deg);
}
.projectBox .mask {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
  height: 100px;
  position: absolute;
  transform: translate3d(-120%, -200px, 0) rotate3d(0, 0, 1, 45deg);
  transition: all 1.75s cubic-bezier(0.19, 1, 0.22, 1);
  width: 450px;
}

.contentProject {
  transition: all 2s;
  opacity: 1;
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  max-width: 60%;
  padding-left: 15px;

}

.buttonsDownRight {
  display: table-cell;
  vertical-align: bottom;
  text-align: right;
  max-width: 20%;
  padding: 30px;


}
button {
  display: block;
  background-color: #e9ffe7;
  color: black;
  padding: 14px 10px;
  border: none;
  float: left;
  margin: 5px;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  text-align: center;
  text-transform: uppercase;
}

button:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

@media screen and (max-width: 900px) {
  .contentProject {
    font-size: 150%;
    display: table-row;
  }
  .buttonsDownRight {
    display: table-row;
  }
  .expandProject{

    padding: 20px;
  }
  .iconBoxExpanded {
    background-size: 50%;
    height: 25vh;
  }
  .close-x {
    stroke: white;
  }
  .cross {
    opacity: 1;
    transform: scale(2);
  }
  .projectBox {
    width: 20vh;
    height: 20vh;
  }
}

</style>
