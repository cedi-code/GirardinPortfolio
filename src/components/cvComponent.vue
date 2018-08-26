<template>
  <div class="cvGrid" >
    <div class="boxli" id="personalien"  v-on:mouseover="someHover(0)" @mouseleave="reset">
      <transition>


        <div class="overlay" v-bind:class="{Off:  oO.oPers}">

        <span v-if="mobile">Personalien</span>
      </div>
      </transition>
      <h2>Personalien</h2>
      <ul>
        <li v-for="txt in cv.personalien">{{txt}}</li>
      </ul>


    </div>
    <div class="boxli" id="sprachen" v-on:mouseover="someHover(1)"  @mouseleave="reset">
      <h2>Sprachen</h2>
      <ul>
        <li v-for="sprachen in cv.sprachen">{{sprachen}}</li>
        <li><router-link to="/skills" ><h3>Programmiersprachen</h3></router-link></li>
      </ul>
      <div class="overlay oLeft" v-bind:class="{Off:  oO.oSpra}">        <span v-if="mobile">Sprachen</span></div>
    </div>
    <div class="boxli" id="hobbys" v-on:mouseover="someHover(2)" @mouseleave="reset">
      <h2>Hobbys</h2>
      <ul >
        <li v-for="hobby in cv.hobbys">{{ hobby }}</li>
      </ul>
      <transition>
        <div class="overlay oUp" v-bind:class="{Off:  oO.oHobb}">        <span v-if="mobile">Hobbys</span></div>
      </transition>
    </div>
    <div class="boxli" id="schulen" v-on:mouseover="someHover(3)"  @mouseleave="reset">
      <h2>Bildung</h2>
      <ul v-for="schulen in cv.schulen">
        <line-comp thicc="2" color="true"></line-comp>
        <li>{{schulen.jahr}}</li>
        <li>{{schulen.name}}</li>
      </ul>
      <div class="overlay oRight" v-bind:class="{Off:  oO.oSchu}">        <span v-if="mobile">Schulen</span></div>
    </div>
    <div class="boxli" id="referenzen" v-on:mouseover="someHover(4)" @mouseleave="reset">
      <h2>Referenzen</h2>
      <div class="overlay oDown" v-bind:class="{Off:  oO.oRefe}">        <span v-if="mobile">Referenzen</span></div>

    </div>
    <div class="boxli" id="nebenjobs" v-on:mouseover="someHover(5)" @mouseleave="reset">
      <h2>Nebenjobs</h2>
      <ul>
        <li v-for="job in cv.nebenjobs">
          <div class="nebenjobBox">
            <img v-bind:src="job.img" v-bind:alt="job.title">
            <p>Tätigkeit: <span>{{job.tätigkeit}}</span>
            <br> <a v-bind:href="job.link" target="_blank">mehr infos</a>
            </p>

          </div>

        </li>
      </ul>
      <div class="overlay oLeft" v-bind:class="{Off:  oO.oNebe}">        <span v-if="mobile">Neben Jobs</span></div>
    </div>
    <div id="bottomButton" @click="showModal = true">view pdf</div>
    <modal v-if="showModal" @close="showModal = false">
      <template slot="request">lebenslauf</template>
    </modal>

  </div>
</template>

<script>
  import Line from './lineType'
  import Arc from './arcType'
  import daten from './popup'
    export default {
        name: "cvComponent",
      methods: {
        spracheHover: function (id) {

            this.oO.oPers = true
        },
        schuleHover: function () {


        },
        someHover:function(id) {
          this.oO.oPers = true,
            this.oO.oHobb = true,
            this.oO.oSpra = true,
            this.oO.oSchu = true,
            this.oO.oRefe = true,
            this.oO.oNebe = true;
            switch(id) {
              case 0:
                this.oO.oPers = false;
                break;
              case 1:
                this.oO.oSpra = false;
                break;
              case 2:
                this.oO.oHobb = false;
                break;
              case 3:
                this.oO.oSchu = false;
                break;
              case 4:
                this.oO.oRefe = false;
                break;
              case 5:
                this.oO.oNebe = false;
                break;
            }

        },

        reset: function () {
          this.oO.oPers = false,
            this.oO.oHobb = false,
            this.oO.oSpra = false,
            this.oO.oSchu = false,
            this.oO.oRefe = false,
            this.oO.oNebe = false

        },
        addChecks: function() {
          // window.addEventListener('resize', this.isMobile),
            console.log("added")
          if(screen.width < 900) {
            this.mobile = true
            this.someHover(0)
          }
        }
      },
      created() {
        this.addChecks()
      },
      data () {
        return {
          mobile: false,
          showModal: false,
          oO: {
            oPers: false,
            oHobb: false,
            oSpra: false,
            oSchu: false,
            oRefe: false,
            oNebe: false,
          },

          cv: {
            personalien: {
              titleName: 'Name:',
              name: 'Girardin',
              titleVorname: 'Vorname:',
              vorname: 'Cédric Henri Rudi',
              titleGeburt: 'Geburt:',
              geburt: '16.02.2000',
              titleStrasse: 'Strasse:',
              strasse: 'Oberdorf 28',
              titleOrt: 'Ort:',
              ort: '3257 Ammerzwil',
              titleHeimat: 'Heimasort:',
              heimat: 'Le Bémont JU',
              titleNation: 'Nationalität:',
              nation: 'Schweiz / Belgien',
              titleEltern: 'Eltern:',
              eltern: 'Jean Girardin,<br/> Els Vanlangenaeker',
              titleGeschwister: 'Geschwister:',
              geschwister: 'Philippe , Laura , Victor '

            },
            sprachen: {
              title2: 'Muttersprache',
              niederländisch: 'Niederländisch',
              title1: 'Vatersprache ',
              franz: 'Französisch',
              titleMutter: 'Umgangsprache:',

                deutsch: 'Deutsch',


              title3: ' ',
                titleLeer: ' ',
              titleSchule: 'Schulkentnisse:',
                englisch: 'Englisch B1'
            },
            schulen: {
              ims: {
                jahr: '2016-2020',
                name: 'IMS, bwd Bern'
              },
              gibb: {
                jahr: '2016-2019',
                name: 'gibb'
              },
              bvs: {
                jahr: '2015-2016',
                name: '10.Schuljahr, BVS Biel'
              },
              sekunda: {
                jahr: '2012-2015',
                name: 'Sekundarschule, Rapperswil BE'
              },
              prima: {
                jahr: '2006-2012',
                name: 'Primarschule, Gde. Grossafoltern'
              }

            },
            hobbys: {
              reisen: 'Reisen',
              programmieren: 'Programmieren',
              fitness: 'Fitness',
              gamen: 'Gamen',
              serien: 'Serien schauen',
              trompete: 'Trompete Spielen'
            },
            nebenjobs: {
              südkurve: {
                title: 'Südkurve Lyss',
                img: require("../assets/cv/sudkurve.jpg"),
                tätigkeit: 'Umgebungsarbeiten',
                link: 'https://suedkurve-lyss.ch/angebote/suedkurve-job-gmbh/'

              },
              brunnerEichhof: {
                title: 'Brunner Eichhof',
                img: require("../assets/cv/brunner.jpeg"),
                tätigkeit: 'Lohnjäterei',
                link: 'http://www.lohnjäterei.ch/'
              }
            }

          }
        }
      },
      components: {
        'line-comp' : Line,
        'arc-comp' : Arc,
        'modal' : daten
      }
    }
</script>

<style scoped>

  .Off {
    transform: translateX(0%) !important;
  }

  ul {
    list-style: none;
    text-align: left;
    color: white;
  }
  li{
    padding: 5px;
    font-size: 120%;
  }
  a {
    color: white;
    font-style:italic;
  }
  #bottomButton {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 40px;
    display: block;
    z-index: 1;
    color: white;
    font-size: 120%;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    background-color: #14171a;
  }
  .cvGrid {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    font-family: 'Renner*';

    padding: 7%;
  }
  .boxli {
    margin: 10px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: transform .5s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  }
  .boxli h2 {
    display: flex;
    color: white;
    align-items: center;
    margin: 0;
    font-weight: 400;
    font-style: italic;
  }
  .boxli h2::before,
  .boxli h2::after {
    content: "";
    background: white;
    height: .1em;
    margin: 0 1em;
    flex: 1;

  }

  .boxli:hover {
    transform: scale(0.95);

  }
  .nebenjobBox img {
    max-width: 250px;
    max-height: 250px;
    padding: 10px;
    display: table-cell;
  }
  .nebenjobBox {
    display: table;

  }
  .nebenjobBox p {
    display: table-cell;
    vertical-align: middle;
    padding: 10px;
  }
  .nebenjobBox span {
    font-size: 120%;
    font-weight: 300;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-size: cover !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    /* ändern */


  }
  .overlay span {
    position: absolute;
    top: 0;
    font-weight: 300;
    font-style: italic;
    left: 10%;
    right: 10%;
    color: white;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
    padding: 10px;
    margin: 20px;
  }
  .oLeft {
    transform: translateX(-100%);
    transition: transform .5s ease;
  }
  .oUp {
    transform: translateY(-100%);
    transition: transform .8s ease;
  }
  .oRight {
    transform: translateX(100%);
    transition: transform 1s ease;
  }
  .oDown {
    transform: translateY(100%);
    transition: transform 1.2s ease;
  }
  #personalien {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;


    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <circle opacity="0.4" cx="5" cy="5" r="4"  fill="white" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #8bd081;

  }
  #personalien .overlay {
    transform: translateX(100%);
    background: url('../assets/cv/personalien/cediUberfordert.jpg') center center no-repeat;
    transition: transform .5s ease;

  }



  #personalien ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }


  #sprachen {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <path opacity="0.2" stroke-width="3" stroke-linecap="round" stroke="white" d="M 10,10 L 30,30 M 30,10 L 10,30" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #77d0a7;
  }

  #sprachen .overlay {
    transform: translateX(-100%);
    background: url('../assets/cv/sprachen/code1.jpg') center center no-repeat;
    transition: transform .5s ease;
  }



  #sprachen ul {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }

  #schulen {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;

    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <rect x="10" y="10" width="15" height="15" stroke="white" opacity="0.2" fill="transparent" stroke-width="5"/> \
  </svg>');
    background-size: 50px 50px;
    background-color: #75b76c;
  }

  #schulen .overlay {
    transform: translateX(100%);
    background: url('../assets/cv/schulen/Gebäude_Linde.jpg') center center no-repeat;
    transition: transform 1s ease;
  }


  #schulen ul {
    margin: 0;
    display: grid;
    grid-template-columns:1% 29% 80% ;
  }

  #hobbys {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <path d="M5,50 L35,5 L67,50 z" fill="none" stroke="white" stroke-width="2" opacity="0.2" stroke-linejoin="round" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #42b883;
  }
  #hobbys .overlay {
    transform: translateX(-100%);
    background: url("../assets/cv/hobby/travel.jpg") center center no-repeat;
    transition: transform .8s ease;
  }
  #hobbys:hover {

  }
  #referenzen{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 20vh;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <circle cx="50" cy="50" r="19" fill="#fff" opacity="0.2" />\
    <circle cx="50" cy="50" r="15" fill="#47cf95"/> \
  </svg>');
    background-size: 50px 50px;
    background-color: #47cf95;
  }
  #referenzen .overlay {
    transform: translateY(-100%);
    background: url('../assets/cv/personalien/leBemont.jpg') center center no-repeat;
    transition: transform 1s ease;
  }


  #nebenjobs{
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <rect x="10" transform="rotate(45deg)" y="10" width="15" height="15"  opacity="0.5" fill="white" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #afd04f;
  }
  #nebenjobs .overlay {
    transform: translateY(100%);
    background: url('../assets/cv/neben.jpg') center center no-repeat;
    transition: transform .5s ease;
  }


   #nebenjobs ul li {
     float: left;
   }


  @media screen and (max-width: 1300px) {
    .cvGrid {
      padding: 2%;
    }
    .boxli {
      margin: 10px;
      padding: 10px;

    }
    ul {
      margin: 0;
      padding: 0;
    }

    #personalien {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    #sprachen {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    #schulen {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 6;
    }
    #hobbys {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    #referenzen {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 6;
    }
    #nebenjobs {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 11;
      grid-row-end: 13;
    }
  }


  @media screen and (max-width: 900px) {
    .cvGrid {
      margin: 0;
    }
    .boxli {
      margin: 5px;
      padding: 10px;

    }
    ul {
      margin: 0;
      padding: 0;
    }

    #personalien {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    #sprachen {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    #schulen {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 8;
    }
    #hobbys {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 8;
      grid-row-end: 9;
    }
    #referenzen {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 9;
      grid-row-end: 11;
    }
    #nebenjobs {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 11;
      grid-row-end: 13;
    }
    #nebenjobs img {
      float: left;
    }
    #nebenjobs p {
      float: left;
    }
  }




</style>
