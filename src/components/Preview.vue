<template>
  <div class="content">

    <div class="block firstBlock" >
      <box-scroll v-if="!mobile" v-bind:scrolled="scrollAmount"  v-bind:delay-time="animationSpeed" speed="0.5" v-bind:amount="abstand" class="meIntro" >
        <img src="../assets/logo.png">
      </box-scroll>
      <div class="wrapper top-align left-float iAm">
        <box-scroll v-bind:scrolled="scrollAmount"  speed="-1.5" v-bind:delay-time="animationSpeed"  v-bind:amount="abstand" >
          <h1>I</h1>
        </box-scroll>
        <box-scroll v-bind:scrolled="scrollAmount"  speed="-1" v-bind:delay-time="animationSpeed" v-bind:amount="abstand">
          <h1>AM</h1>
        </box-scroll>

      </div>

      <lottie :options="defaultOptions" id="lottie"   v-on:animCreated="handleAnimation"/>

    </div>


    <div v-if="!mobile" class="tinyBlock">
    </div>

    <div class="block">
      <div class="wrapper">
        <!-- TODO  fancy Border like in CSS secrets!!!! -->
        <box-scroll class="firstBox boxShadow" v-bind:scrolled="scrollAmount" v-bind:delay-time="animationSpeed" padding="0" margin="20" speed="-1.5" v-bind:amount="abstand" >
          <div class="inBox">
            <h2>Willkommen zu meiner Webseite</h2>
            <p>Ich liebe Herausforderungen und möchte immer meine <router-link to="/skills" >Fähigkeiten</router-link> erweitern,</p>
            <p>Für dieses Portfolio, habe ich mir  das Javascript Framework Vue.js erlernt</p>
            <br>
            <p>Für jede Seite stellte ich mir eine Herausforderung und implementierte immer etwas Neues.</p>

            <section><router-link to="/cv" >Lebenslauf</router-link> / <router-link to="/skills" >Fähigkeiten</router-link> / <router-link to="/projects" >Projekte</router-link> / <router-link to="/hobbys" >Freizeit</router-link></section>
            <br>
            <br>
            <span>(Alle Effekte auser dem Intro, brauchen keine Plugins)</span>
          </div>

        </box-scroll>
      </div>
      <div class="imgBox boxShadow introBild"></div>
    </div>

    <div class="block">

      <div class="wrapper center-align center-float" >
        <box-scroll class="frontEnd  boxShadow" v-bind:scrolled="scrollAmount" v-bind:delay-time="animationSpeed"  v-bind:speed="[mobile ? -0.9 : -1.2]" v-bind:amount="abstand" >
          <h2>Ich ❤ Front-End</h2>
          <div class="inBox">
          <p>Privat, erstelle ich gerne Webseiten und versuche immer etwas Neues zu Implementieren.</p>
          <p>Javascript und CSS bereiten mir viel Spass, aber es kann manchmal auch etwas unübersichtlich werden..</p>

          <p>Dieses Problem habe ich jetzt behoben in dem ich ein Javascript Framework gelerent habe<br/>
            und Erfahrungen mit dem "Laravel templating engine" Blade gesammelt habe. </p>

            <span><router-link to="/projects" >Siehe Projekte</router-link></span>
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
        </box-scroll>

      </div>
      <div class="imgBox boxShadow frontEndBild"></div>


      <div class="wrapper bottom-align  left-float"  style=" height: 100%">
        <box-scroll class="frontEnd  boxShadow" v-bind:scrolled="scrollAmount" v-bind:delay-time="animationSpeed"  v-bind:speed="[mobile ? -0.6 : -1.1]" v-bind:amount="abstand" >
          <h2>Design</h2>
          <div class="inBox">
            <p><span>Design ist mehr als nur eine Nebensache,</span>
              <br><br/>Der Benutzer soll sich bei einer Applikation immer zurechtfinden.</p>
            <p> Mir ist es wichtig, dass meine Projekte ein sauberes Layout haben, dass den Benutzern anpsrechen soll</p>
            <p>Ich benutze auch gerne After Effects und Illustrator, von Adobe, gerne in der Freizeit</p>
            <br/>
            <span><router-link to="/projects" >Einige Webdesigns</router-link></span>
          </div>
        </box-scroll>
      </div>
      <box-scroll v-if="!mobile" v-bind:scrolled="scrollAmount" v-bind:delay-time="animationSpeed"  speed="-1.7" v-bind:amount="abstand" class="projectBox cover">
        <div class="glass">
        </div>
      </box-scroll>
    </div>
    <div class="block" >
      <div class="wrapper bottom-align  right-float"  style="z-index: 10; height: 100%">
        <box-scroll class="frontEnd  boxShadow" v-bind:scrolled="scrollAmount" v-bind:delay-time="animationSpeed"  v-bind:speed="[mobile ? -0.8 : -1.4]" v-bind:amount="abstand" >
          <h2>Mobile Apps</h2>
          <div class="inBox">
            <p><span>Mobile ist die Zukunft.</span>
            <p>Im Oktober 2017 schrieb ich mich für ein Bootcamp, organisiert von der Berner & Rapperswiller Hochschule namens AppQuest, ein. </p>
            <p>Alle 3 Wochen, musste ich eine vorgegebene App entwickeln. Am Schluss wurden alle fünf Apps in einem Treasure Hunt getestet</p>
          </div>
        </box-scroll>
      </div>
      <div class="imgBox boxShadow appquestBild"></div>
    </div>
    <div class="block" v-if="!mobile">
      <div class="wrapper bottom-align  center-float"  style="height: 100%">
        <box-scroll class="frontEnd  boxShadow" v-bind:scrolled="scrollAmount" v-bind:delay-time="animationSpeed"  v-bind:speed="[mobile ? -1 : -1.05]" v-bind:amount="abstand" >
          <h2>Regional Championships</h2>
          <div class="inBox">
            <p>In der Kategorie "Application Development" wurde ich 43ste von 95 Teilnehmern mit 44%. </p>
            <p>Nächstes Jahr möchte ich mindestens unter den Top 20 kommen. Welche Kategorie, spielt mir momentan noch keine Rolle.</p>
            <br>
            <span><a>Rangliste</a></span>
          </div>
        </box-scroll>
      </div>
      <div class="imgBox boxShadow designBild"></div>
    </div>
    <div class="block">
      <div class="imgBox boxShadow backEndBild"></div>
    </div>


    <div class="nav expand" style="position: absolute" >
        <ul class="ulnav">
          <nav-comp v-bind:preview-on="showPreviewButton" v-on:close="navHover = !mobile"></nav-comp>
        </ul>
    </div>


  </div>
</template>

<script>
  import sqaureBox from './scrollBox';
  import Lottie from '../../node_modules/vue-lottie/src/lottie';
  import * as animationData from '../assets/datei.json';
  import navigation from './navigationItems';

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showPreviewButton: false,
        scrolled: 0,
        windowY: 0,
        abstand: 150,
        number: 0,
        displayNumber: 0,
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
        animRunning: true,
        mobile: false,
        scrollSpeed:4.5,
      }
    },
    components: {
      'boxScroll' : sqaureBox,
      'lottie': Lottie,
      'nav-comp' : navigation
    },
    computed: {
      scroll() {
        return this.scrolled
      },
      scrollAmount() {
        return this.scrolled * this.abstand;
      }



    },
    methods: {
      delay: function () {
          setTimeout(function () {
            if(this.scrolled < 3) {
              this.onSpeedChange(0.05);

            }


          }.bind(this), 2500);
      },
      handleScroll () {
        this.amountScrolled();
        if(this.scrolled >= 1) {
          this.onSpeedChange(2);
          this.animRunning = false;
        }
        if(this.scrolled <= 0 && !this.animRunning) {
          this.animRunning = true;
          this.stop();
          this.onSpeedChange(1);
          this.play();
          this.delay();
        }

      },
      getDocHeight() {
        var D = document;
        return Math.max(
          D.body.scrollHeight, D.documentElement.scrollHeight,
          D.body.offsetHeight, D.documentElement.offsetHeight,
          D.body.clientHeight, D.documentElement.clientHeight
        )
      },
      amountScrolled() {
        var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
        var docheight = this.getDocHeight()
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop/trackLength * 100)
        this.scrolled = Math.round(pctScrolled / this.scrollSpeed);
        console.log(this.scrolled)

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

      onSpeedChange: function (animSpeed) {
        this.anim.setSpeed(animSpeed);
      },
      changeSpeed: function() {
        this.abstand = window.innerWidth / 14
      }
    },
    mounted() {
      this.delay()
      if(screen.width < 900) {
        this.mobile = true;
        this.abstand = 120;
        this.scrollSpeed = 4;
      }
    },
    created () {
      if(!this.mobile) {

        this.abstand = window.innerWidth / 14;

        window.addEventListener('resize', this.changeSpeed);
      }
      // TODO auf dem Ipad sieht es noch schrecklich aus!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      window.addEventListener('scroll', this.handleScroll);

    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {

    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
    cursor: pointer;
    text-decoration: underline;
  }

  #lottie{
    width:100%;
    height:100vh !important;
    overflow: hidden;
    transform: translate3d(0,0,0);
    text-align: center;
    opacity: 1;
  }
  .iAm {
    padding: 5%;
    font-size: 70px;
    text-align: center;


  }
  .iAm h1 {
    font-weight: 400 !important;
  }
  .meIntro {
    position: fixed;
    right: 5%;
    z-index: 10;

  }
  .firstBox {
    background-color: #2c2c2c;
    width: 90%;
    text-align: left;
    color: white;

  }
  .frontEnd {
    background-color: #2c2c2c;
    width: 40%;
    color: white;
    text-align: left;

  }
  .frontEnd h2 {
    display: flex;
    color: white;
    font-size: 200%;
    align-items: center;
    margin: 0;
    font-weight: 200;
    font-style: italic;
  }
  .frontEnd h2::before,
  .frontEnd h2::after {
    content: "";
    background: white;
    height: .1em;
    margin: 0 1em;
    flex: 1;

  }

  .inBox {
    padding: 5%;

  }
  .inBox h2 {
    font-size: 250%;
    font-weight: 200;

  }
  .inBox p {
    font-size: 150%;
    font-weight: 300;
  }
  .inBox span {
    font-style: italic;
    font-weight: 200;
  }
  .content {

    font-family: 'Renner*';
  }
  .block {
    height: 50vh;
  }
  .tinyBlock {
    height: 25vh;
  }
  .tinyBlock img {
    margin: 5% 10%;
    float: right;
    max-width: 100%;
    max-height: 100%;
  }
  .wrapper {
    display: flex;


    width: 100%;

    position: fixed;
    color: black;
  }
  .imgBox {
    width: 90%;
    height: 100%;
    margin: 5%;
    background-color: #42b983;



  }
  .frontEndBild {
    background: url("../assets/cv/personalien/leBemont.jpg") center center no-repeat;
    background-size: cover;
  }
  .backEndBild {
    width: 70%;
    margin-top: 10%;
    background: url("../assets/cv/ict.jpg") center center no-repeat;
    background-size: cover;
  }
  .appquestBild {
    width: 30%;
    margin: 5% 30%;
    background: url("../assets/cv/cringe.jpg") center center no-repeat;
    background-size: cover;
  }
  .designBild {
    float: right;
    width: 30%;

    background: url("../assets/cv/personalien/CedShadow.png") center center no-repeat;
    background-size: cover;
  }
  .introBild {
    width: 50%;
    float: right;
    margin: 0%;
    background: url("../assets/cv/sprachen/code1.jpg") center center no-repeat;
    background-size: cover;


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
  .top-align {
    align-items: flex-start;
  }
  .bottom-align {
    align-items: flex-end;
  }
  .center-align {
    align-items: center;
  }


  .projectBox {
    overflow: hidden;
    margin: auto;
    width: 20vh;
    height: 20vh;
    border-radius: 50%;
    background: center center no-repeat ;
    background-color: #8bd081;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    position: fixed;
    left: 5%;
    z-index: 10;
  }

  .cover {
    background-image: url("../assets/icons/weblabs.png");
    background-size: cover !important;
  }
  .boxShadow {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  @media screen and (max-width: 1100px) {
    .iAm {
      padding: 2%;
      font-size: 50px;
      text-align: center;
    }
    .designBild {
      float: right;
      width: 60%;
    }
    .appquestBild {
      width: 50%;

    }
  }
  @media screen and (max-width: 700px) {
    #lottie{
      width:100%;
      height:50vh !important;
    }
    .block {
      height: 80vh;
    }
    .firstBlock {
      height: 40vh;
    }
    .iAm {
      padding: 1%;
      font-size: 30px;
      text-align: center;
    }
    .frontEnd {
      background-color: #2c2c2c;
      width: 90%;
      color: white;
      text-align: left;

    }
    .backEndBild {
      width: 100%;
      margin: 0;
      background-position: 70%;
    }
    .designBild {
      float: right;
      width: 90%;
    }
    .appquestBild {
      width: 50%;

    }
    .introBild {
      width: 70%;
      float: right;


    }
  }




</style>
