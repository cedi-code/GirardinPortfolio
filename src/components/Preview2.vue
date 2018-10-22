<template>
  <div class="content">
    <div class="meIntro" v-if="!mobile"  v-on:click="$refs.fullpage.api.moveTo(1, 0);">
      <img src="../assets/logo.png"/>

    </div>
    <full-page ref="fullpage" :options="options" id="fullpage" >
      <div class="section" >

        <div class="wrapper top-align left-float iAm">
            <h1>I</h1>
            <h1>AM</h1>
        </div>
        <div class="wrapper2 wrapper  bottom-align center-float">
          <div class="meIntro" v-if="mobile"  v-on:click="$refs.fullpage.api.moveTo(1, 0);">
            <img src="../assets/logo.png"/>

          </div>
          <div class="down">
            <h2>⯆      &#11138;  ⯅ <br/>
              <transition name="nav-fade2" mode="out-in" >
              <span v-if="toLong">Scroll down or go up</span>
              </transition>
            </h2>


          </div>
        </div>
        <lottie :options="defaultOptions" id="lottie"  v-on:animCreated="handleAnimation" />
      </div>
      <div class="section" id="welcome">
        <div class="wrapper top-align left-float" >

          <div class="firstBox boxShadow">
            <div class="inBox">
              <h2>Willkommen auf meiner Webseite</h2>
              <p>Ich liebe Herausforderungen und möchte immer meine <router-link to="/skills" >Fähigkeiten</router-link> erweitern.</p>
              <p>Für dieses Portfolio habe ich mir  das Javascript Framework Vue.js erlernt</p>
              <br>
              <p>Für jede Seite stellte ich mir eine Herausforderung und implementierte immer etwas Neues.</p>

              <section><router-link to="/cv" >Lebenslauf</router-link> / <router-link to="/skills" >Fähigkeiten</router-link> / <router-link to="/projects" >Projekte</router-link> / <router-link to="/hobbys" >Freizeit</router-link></section>
              <br>
              <br>
              <span>(Alle Seiten, auser dieser,  brauchen keine Plugins)</span>
            </div>
          </div>
        </div>

      </div>
      <div class="section" id="frontend">
        <div class="wrapper center-align center-float" >
          <div class="frontEnd  boxShadow" id="frontBox" >
            <h2>Ich ❤ Front-End</h2>
            <div class="inBox">
              <p>Privat erstelle ich gerne Webseiten und versuche immer etwas Neues zu Implementieren.</p>
              <p>Javascript und CSS bereiten mir viel Spass, aber es kann manchmal auch etwas unübersichtlich werden...</p>

              <p>Dieses Problem habe ich jetzt behoben, in dem ich ein Javascript Framework gelerent habe<br/>
                und Erfahrungen mit dem Laravel templating engine Blade gesammelt habe. </p>

              <span><router-link to="/projects" >Siehe Projekte</router-link></span>
            </div>
            <br>

          </div>
          <a href="http://cedilabs.de" target="_blank">
            <div  class="projectBox cover" v-if="!mobile">
              <div class="glass">
              </div>
            </div>
          </a>

        </div>
      </div>
      <div class="section" id="design">
            <th class="end">

              <div v-if="!mobile" class="imgBackground boxShadow" id="appquest"></div>
              <div v-if="!mobile" id="cedShadow" class="imgBackground boxShadow"></div>

              <div class="frontEnd  boxShadow"  id="designBox" >
                <h2>Design</h2>
                <div class="inBox">
                  <p><span>Design ist mehr als nur eine Nebensache.</span>
                    <br><br/>Der Benutzer soll sich bei einer Applikation immer zurechtfinden.</p>
                  <p> Mir ist es wichtig, dass meine Projekte ein sauberes Layout haben, welches den Benutzern anpsrechen soll.</p>
                  <p>Ich benutze auch gerne After Effects und Illustrator (von Adobe) in der Freizeit</p>
                  <br/>
                  <span><router-link to="/projects" >Einige Webdesigns</router-link></span>
                </div>
              </div>

            </th>


            <th class="start">
              <div class="frontEnd  boxShadow" id="mobileBox">
                <h2>Mobile Apps</h2>
                <div class="inBox">
                  <p><span>Mobile ist die Zukunft.</span>
                  <p>Im Oktober 2017 schrieb ich mich für ein Bootcamp, organisiert von der Berner & Rapperswiller Hochschule namens AppQuest, ein. </p>
                  <p>Alle drei Wochen musste ich eine vorgegebene App entwickeln. Am Schluss wurden alle fünf Apps in einem Treasure Hunt getestet.</p>
                </div>
              </div>

            </th>


        <router-link v-if="!mobile" to="/oldpreview" >old preview</router-link>
      </div>
    </full-page>

  </div>

</template>

<script>
  import Lottie from '../../node_modules/vue-lottie/src/lottie';
  import * as animationData from '../assets/datei.json';

  import FullPage from '../../node_modules/vue-fullpage.js/src/FullPage'

    export default {
        name: "Preview2",
      components: {
        'lottie': Lottie,
        'full-page': FullPage
      },
      data () {
        return {
          defaultOptions: {
            renderer: 'svg',
            loop: true, /* TODO es geit mues aber no zit achestelle! */
            autoplay: true,
            animationData: animationData
          },
          animationSpeed: 1,
          mobile: false,
          toLong: false,
          options: {
            licenseKey: '7C534C12-BB0D4C47-9D7FCF19-E856F7A8',
            sectionsColor: ['#FFFFF', '#FFFFF', '#FFFFF'],
            slidesNavigation: true,
            // fixedElements: '.meIntro',
            afterLoad: this.afterLoad

          },
        }
      },
      mounted() {

        if(screen.width < 900) {
          this.mobile = true;
          console.log(this.mobile);
        }
        setTimeout(function () {
          this.toLong = true;


        }.bind(this), 6000);
      },
      methods: {
        afterLoad(origin, destination, direction) {

          switch (destination.index) {
            case 0:
              this.onLoadIntro()
              break;
            case 1:
              this.onLoadWelcome();
              break;
            case 2:
              this.onLoadFrontend();
              break;
            case 3:
              this.onLoadDesgin();
              break;
          }
        },
        handleAnimation: function (anim) {

          this.anim = anim;
        },
        onLoadIntro: function () {
          this.anim.stop();
          this.anim.play();
        },
        onLoadWelcome: function () {
          document.getElementsByClassName('firstBox')[0].style.transform = "translateX(0)";
        },
        onLoadFrontend() {
          document.getElementById('frontBox').style.transform = "scale(1)";
          if(!this.mobile) {
            document.getElementsByClassName('projectBox')[0].style.transform = "scale(1)";
          }

        },
        onLoadDesgin: function () {
          if(!this.mobile) {
            document.getElementById('appquest').style.transform = "translateY(0)";
            document.getElementById('cedShadow').style.transform = "translateY(0)";
          }

          document.getElementById('designBox').style.transform = "translateY(0)";
          document.getElementById('mobileBox').style.transform = "translateY(0)";
        }

      }
    }
</script>

<style scoped>

  h1, h2 {

    margin: 0;
    padding: 0;
  }
  a {
    color: #42b983;
    cursor: pointer;
    text-decoration: underline;
  }
  .content {

    font-family: 'Renner*';
  }
  .meIntro {
    position: absolute;
    right: 5%;
    z-index: 10;
    bottom: 5%;
    transition: 0.5s ease;
    cursor: pointer;
  }
  .meIntro:hover {
    transform: rotate(-180deg);
  }
  .iAm {
    padding: 5%;
    font-size: 70px;
    text-align: left;


  }
  #welcome {
    transform: translateY(-12vh);
    background: url("../assets/cv/personalien/leBemont.jpg") no-repeat center;
    background-size: cover;
    z-index: 10;
  }
  #frontend {
    transform: translateY(-12vh);
    background: url("../assets/icons/cedilabsBlur.png") no-repeat center;
    background-size: cover;
  }
  #design {
    transform: translateY(-12vh);
    background: url("../assets/backgroundGirardin.jpg") no-repeat center;
    background-size: cover;
    padding: 5vh;


  }
  #frontBox {
    transform: scale(0);
  }

  .frontEnd {
    transition: transform 0.5s ease;
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
  .iAm h1 {
    font-weight: 400 !important;
    float: left;
    padding: 20px;
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
    transition: transform 0.75s ease;
    transform: scale(0);
  }
  .projectBox:hover {
    transform: scale(1.1) !important;
  }
  .start {
    display: flex;
    justify-content: space-between;
    margin: 1vh;
  }
  .end {
    display: flex;
    justify-content: space-between;
    margin: 1vh;
  }
  .imgBackground {
    width: 30%;
    margin: 2%;
  }
  #cedShadow {
    background: url("../assets/cv/personalien/CedShadow.png") center no-repeat;
    background-size: cover;
    transition: transform 1s ease;
    transform: translateY(+300%);
  }
  #cedShadow:hover {
    transform: scale(1.1) !important;
  }
  #appquest {
    background: url("../assets/cv/cringe.jpg") center no-repeat;
    background-size: cover;
    transition: transform 0.5s ease;
    transform: translateY(+300%);
  }
  #appquest:hover {
    transform: scale(1.1) !important;
  }

  #designBox {
    transition: transform 1.75s ease;
    transform: translateY(+300%);
  }
  #mobileBox {
    transition: transform 1.75s ease;
    transform: translateY(+200%);
  }
  .cover {
    background-image: url("../assets/icons/weblabs.png");
    background-size: cover !important;
  }
  .wrapper .down {
     background-image: url("../assets/cv/personalien/leBemont.jpg");
    background-size: 100%;
    background-position: center;
    width: 100%;
    padding-bottom: 20vh;

  }
  .wrapper .down h2 {
    color: white;
    font-weight: 200;
    width: 30%;
    margin: 0 auto;
    transition: all 1s ease;
    background-color: #222222;
    cursor: pointer;

  }
  .wrapper2 .down h2:hover span {
    display: block !important;
  }
  .wrapper {
    display: flex;
    height: 90vh;
    width: 100%;

    position: fixed;
    color: black;
  }
  .wrapper2 {
    height: 100vh;

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
  .firstBox {
    background-color: #2c2c2c;
    width: 70%;
    text-align: left;
    color: white;
    margin: 5vh;
    transition: transform 0.5s ease;
    transform: translateX(-120%);

  }
  .boxShadow {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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

  .nav-fade2-enter-active, .nav-fade2-leave-active {
    transition: opacity 1.3s ease;
  }
  .nav-fade2-enter, .nav-fade2-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  @media screen and (max-width: 1100px) {
    .iAm {
      padding: 2%;
      font-size: 50px;
      text-align: center;
    }
    .wrapper .down h2 {
      width: 40%;
    }


  }
  @media screen and (max-width: 700px) {
    #lottie{
      width:100%;
      height:50vh !important;
    }
    .iAm {
      padding: 1%;
      font-size: 30px;
      text-align: center;
    }
    .wrapper .down h2 {
      width: 70%;

    }
    .wrapper {
      height: 100vh;
    }
    .inBox h2 {
      font-size: 200%;
    }
    .inBox  {
      font-size: 90%;
    }
    .frontEnd {
      background-color: #2c2c2c;
      width: 100%;
      font-size: 100%;
      color: white;
      text-align: left;
      max-height: 100vh;

    }
    .firstBox {
      width: 90%;
      font-size: 100%;
      margin: 1vh;
    }
    #design {
      padding: 1vh;
      font-size: 70%;
    }
    .meIntro {
      bottom: 30%;
    }

  }

</style>
