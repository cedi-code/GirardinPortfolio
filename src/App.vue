<template>
  <div id="app" >
    <div class="nav"  v-on:mouseover="expandOn(!mobile)" v-bind:class="{expand: navHover,shrink: !navHover }" >
      <icon-comp v-bind:class="{icons: true}"></icon-comp>
      <transition name="nav-fade" mode="out-in" >
      <ul v-if="navHover" class="ulnav">
        <nav-comp v-on:close="navHover = !mobile"></nav-comp>

      </ul>
      <ul v-else key="active" class="ulnav">
        <li class="navTitle" >{{this.$router.currentRoute.name}}</li>
      </ul>

      </transition>
      <div v-if="mobile" v-bind:class="{expandButton : !navHover, shrinkButton: navHover }" v-on:click="expandOn(!navHover)">
        <i  class="downArrow"></i>
      </div>

    </div>

    <div v-on:mouseover="expandOn(false)" >
      <transition name="router-anim" mode="out-in" >
        <router-view/>
      </transition>
    </div>


  </div>
</template>

<script>
  import navigation from './components/navigationItems';
  import icons from './components/iconsTop';

export default {



  name: 'App',
  data () {
    return {
      navHover: false,
      mobile: false,
    }
  },
  methods: {
    expandOn: function (on) {
      console.log(on),
      this.navHover = on
    },
    isMobile: function () {
      if(window.innerWidth < 900) {
        //this.mobile = true
        //console.log('isMobile2')

      }else {
        this.mobile = false

      }
      if(screen.width < 900) {
        this.mobile = true
        console.log('isMobile2')
        console.log('isMobile')
      }


    },
    addChecks: function() {
      window.addEventListener('resize', this.isMobile),
        console.log("added")
      if(screen.width < 900) {
        console.log('isMobile')
        this.mobile = true
      }
    }
  },
  created() {
    this.addChecks()
  },
  components: {
    'nav-comp' : navigation,
    'icon-comp' : icons
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><circle opacity="0.7" cx="5" cy="5" r="4"  fill="#8bd081" /> </svg>');
  background-size: 50px 50px;



}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
.expandButton {
  float: left;
  position: absolute;
  top: 4%;
  left: 5%;
  transition: all .75s ease;
}
.shrinkButton {
  float: left;
  position: absolute;
  top: 47%;
  left: 5%;

  text-align: right;
  transition: all 1s ease;
  transform: rotate(180deg);
}

.icons {
  top:0px;
  right:0px;
  position: fixed;
}
.nav {
  background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <circle opacity="0.4" cx="5" cy="5" r="4"  fill="white" /> \
  </svg>');
  /* <path opacity="0.5" stroke-width="3" stroke-linecap="round" stroke="white" d="M 10,10 L 30,30 M 30,10 L 10,30" />\ */
  background-size: 50px 50px;
  background-color: #42b883;

  width: 100%;
  padding: 10px;
  height: 10vh;
  transition: height 1s ease;
}

.downArrow {
  border: solid white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.expand {

  height: 50vh;
}

.ulnav {
  margin: 0;
  list-style: none;
  padding-top: 5px;

}
.navTitle {
  padding: 2.5vh 0;
  transition: letter-spacing .25s ease, width .75s ease;
  color: white;
  font-size: 200%;
  width: 70%;
  align-items: center;
  display: flex;
  letter-spacing: 7px;
  margin: auto;
}
.navTitle::before,
.navTitle::after {
  content: "";
  background: white;
  height: .1em;
  margin: 0 1em;
}
/* TODO diese art von verschiebung noch ändern!!! */
.navTitle::before {
  flex: .3;
}
.navTitle::after {
  flex: .7;
}

.nav-fade-enter-active, .nav-fade-leave-active {
  transition: opacity .3s ease;
}
.nav-fade-enter, .nav-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.router-anim-enter-active, .router-anim-leave-active {
  transition: transform .5s ease;
}
.router-anim-enter, .router-anim-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50%);
}
@media screen and (max-width: 1100px) {
  .ulnav {
    padding: 0;

  }
  .navTitle {
    letter-spacing: 2px;
    margin: 0;
    padding-left: 10%;
  }

  li {
    letter-spacing: 0px;
  }
}
@media screen and (max-width: 700px) {
  .expand {
    height: 60vh;
  }

  .shrinkButton {
    top: 55%;
  }

}


</style>
